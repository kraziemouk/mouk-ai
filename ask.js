import fs from "node:fs/promises";
import path from "node:path";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const KNOWLEDGE_DIR = path.join(process.cwd(), "knowledge");
const MAX_CONTEXT_CHARS = 14000;

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9]+/g) || []).filter((token) => token.length > 2);
}

function chunkMarkdown(fileName, content) {
  const sections = content
    .split(/\n(?=##? )/g)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.map((section) => ({
    fileName,
    text: section,
  }));
}

function scoreChunk(chunk, questionTokens, question) {
  const text = chunk.text.toLowerCase();
  const phraseBonus = question
    .toLowerCase()
    .split(/[?.!,]/)
    .map((part) => part.trim())
    .filter((part) => part.length > 8)
    .some((phrase) => text.includes(phrase))
    ? 12
    : 0;

  const tokenScore = questionTokens.reduce((score, token) => score + (text.includes(token) ? 1 : 0), 0);
  const titleBonus = text.startsWith("#") ? 2 : 0;
  return tokenScore + phraseBonus + titleBonus;
}

async function loadKnowledge(question) {
  const files = await fs.readdir(KNOWLEDGE_DIR);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const questionTokens = tokenize(question);
  const chunks = [];

  for (const fileName of markdownFiles) {
    const content = await fs.readFile(path.join(KNOWLEDGE_DIR, fileName), "utf8");
    chunks.push(...chunkMarkdown(fileName, content));
  }

  const ranked = chunks
    .map((chunk) => ({
      ...chunk,
      score: scoreChunk(chunk, questionTokens, question),
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  const selected = ranked.length ? ranked : chunks.slice(0, 8);
  let context = "";

  for (const chunk of selected) {
    const next = `\n\n--- Source: ${chunk.fileName} ---\n${chunk.text}`;
    if ((context + next).length > MAX_CONTEXT_CHARS) break;
    context += next;
  }

  return context.trim();
}

function buildSystemPrompt(context) {
  return `
You are Ask Mouk, an AI voice based on Mouk's leadership doctrine, operating philosophy, communication style, and lived experience.

Use ONLY the provided Mouk knowledge context plus the user's question. If the knowledge context does not contain enough information, say what is missing and give a practical next step instead of inventing facts.

Voice:
- direct, human, conversational, concise
- operationally grounded
- candid without being performatively harsh
- practical and reflective
- uses systems thinking and people impact together

Answer style:
- Start with "My read:"
- Give the first move
- Include 2-4 sharp questions Mouk would ask
- Include one relevant Moukism when useful
- If the user asks what to say, include a short script in Mouk's style
- Avoid generic corporate language
- Do not mention that you are using files or context unless asked

Mouk knowledge context:
${context}
`.trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OPENAI_API_KEY is not configured in Vercel environment variables.",
    });
  }

  try {
    const { question } = req.body || {};

    if (!question || typeof question !== "string" || question.trim().length < 2) {
      return res.status(400).json({ error: "Question is required." });
    }

    const cleanQuestion = question.trim().slice(0, 3000);
    const context = await loadKnowledge(cleanQuestion);

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: [
        {
          role: "system",
          content: buildSystemPrompt(context),
        },
        {
          role: "user",
          content: cleanQuestion,
        },
      ],
      max_output_tokens: 900,
    });

    return res.status(200).json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Ask Mouk failed to answer. Check the Vercel function logs.",
    });
  }
}
