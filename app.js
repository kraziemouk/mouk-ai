const entries = [
  {
    category: "Leadership",
    type: "Decision lens",
    title: "People impact inside systems thinking",
    body: "You evaluate decisions through business impact, human impact, operational sustainability, scalability, and blast radius. Clarity over control, context over micromanagement.",
    tags: ["decisions", "people", "systems"],
  },
  {
    category: "Leadership",
    type: "Coaching",
    title: "Scale through ownership",
    body: "You coach through context, questioning, exposure, and ownership. Success looks like reduced dependency, cleaner handoffs, fewer escalations, and a healthier operational rhythm.",
    tags: ["coaching", "autonomy", "ownership"],
  },
  {
    category: "Mouk Company",
    type: "Operating thesis",
    title: "Build people, trust, and pressure-proof systems",
    body: "The Mouk Company thesis: build people, build trust, and build systems that survive pressure. Everything else scales from there.",
    tags: ["doctrine", "trust", "systems"],
  },
  {
    category: "Mouk Company",
    type: "Leadership doctrine",
    title: "Scale humans, not dependency",
    body: "Great leadership reduces fear and increases clarity. Strong leaders transfer context, build decision-making capability, and create environments where people can safely tell the truth.",
    tags: ["leadership", "clarity", "scale"],
  },
  {
    category: "Development Archive",
    type: "Core identity",
    title: "Built through instability",
    body: "Refugee camp beginnings, Laos, cultural translation, factory work, Air Force discipline, technical operations, and Netflix leadership shaped a leader built through instability and grounded through people.",
    tags: ["origin", "identity", "resilience"],
  },
  {
    category: "Development Archive",
    type: "Military influence",
    title: "Your team needs to know you will show up",
    body: "Air Force structure reinforced operational discipline, escalation clarity, ownership, accountability, and calm under pressure. Ambiguity kills execution.",
    tags: ["air-force", "discipline", "pressure"],
  },
  {
    category: "Development Archive",
    type: "Communication psychology",
    title: "Tone determines escalation trajectory",
    body: "Verbal Judo shaped the belief that communication is emotional regulation, trust management, conflict de escalation, and influence. Questions reduce resistance.",
    tags: ["verbal-judo", "tone", "empathy"],
  },
  {
    category: "Incident Management",
    type: "Operating model",
    title: "Command the signal",
    body: "Your incident model favors clear IC ownership, role clarity, rapid triage, structured communication, escalation discipline, and follow the sun coordination.",
    tags: ["incidents", "triage", "ownership"],
  },
  {
    category: "Incident Management",
    type: "Postmortem",
    title: "Recurring incidents are signal",
    body: "You look for handoff failure, missing context, unclear ownership, weak safeguards, and humans compensating for broken systems. Blame is usually less useful than drift.",
    tags: ["postmortem", "drift", "learning"],
  },
  {
    category: "Incident Management",
    type: "Support doctrine",
    title: "Support is the nervous system",
    body: "Support sees friction, customer pain, operational drift, and scaling issues first. Good support organizations become signal engines and early warning systems.",
    tags: ["support", "signal", "customer-pain"],
  },
  {
    category: "Team Dynamics",
    type: "Trust",
    title: "Cognitive trust is not emotional trust",
    body: "You separate whether someone is competent from whether people feel safe working with them. Many leaders build one kind of trust and confuse it for both.",
    tags: ["trust", "teams", "eq"],
  },
  {
    category: "Team Dynamics",
    type: "Burnout",
    title: "The safety net problem",
    body: "Burnout often means the system has turned one person into its safety net. If the system only works because one person sacrifices themselves, the system is broken.",
    tags: ["burnout", "support", "boundaries"],
  },
  {
    category: "Team Dynamics",
    type: "Human dynamics",
    title: "Reliable people get overloaded first",
    body: "High performers absorb ambiguity, compensate for weak systems, protect teams silently, and take on emotional labor. Good leaders redistribute weight before collapse happens.",
    tags: ["burnout", "high-performers", "load"],
  },
  {
    category: "Communication",
    type: "Voice",
    title: "Direct, human, operationally grounded",
    body: "Your voice favors short practical language, emotional realism, and clarity over corporate fluff. Common moves include 'keep me honest,' 'my read is,' and 'what is the actual ask?'",
    tags: ["voice", "candor", "clarity"],
  },
  {
    category: "Communication",
    type: "Operating phrase",
    title: "You can feel tension without creating tension",
    body: "Operational leadership requires emotional control, calm communication, measured escalation, and clarity under pressure.",
    tags: ["communication", "tension", "calm"],
  },
  {
    category: "Operational Scars",
    type: "Hard lesson",
    title: "Support becomes the dumping ground",
    body: "Without boundaries, support absorbs unclear ownership, tribal knowledge, vendor ambiguity, and leadership misalignment until reaction mode becomes the operating model.",
    tags: ["support", "ownership", "scaling"],
  },
  {
    category: "Operational Scars",
    type: "Integration scar",
    title: "Integrations fail culturally first",
    body: "M&A, identity complexity, domain migrations, vendor ambiguity, and reorg uncertainty fail technically later. The cultural and ownership gaps usually start the clock.",
    tags: ["m&a", "integration", "culture"],
  },
  {
    category: "Operational Scars",
    type: "Scale scar",
    title: "Fast growth creates invisible cracks",
    body: "As organizations scale, ownership blurs, process drifts, communication fragments, and dependency chains grow. Without intentional structure, complexity compounds.",
    tags: ["scale", "growth", "operational-debt"],
  },
  {
    category: "Personal Context",
    type: "Origin",
    title: "Operator shaped by ambiguity",
    body: "Refugee camp beginnings, factory work, Air Force discipline, technical operations, and Netflix leadership shaped resilience, humility, pragmatism, and empathy for frontline work.",
    tags: ["background", "resilience", "operator"],
  },
  {
    category: "Personal Context",
    type: "Family",
    title: "Grounded through people",
    body: "Marriage deepened emotional openness, empathy, patience, vulnerability, and trust. Parenthood sharpened long-term thinking, purpose, patience, and legacy.",
    tags: ["family", "legacy", "empathy"],
  },
  {
    category: "Moukisms",
    type: "Quote",
    title: "People over process",
    body: "People over process, but process matters when people scale. Good process protects people.",
    tags: ["process", "scale", "people"],
  },
  {
    category: "Moukisms",
    type: "Quote",
    title: "The gift of shit",
    body: "Hard situations eventually become normalized experience. What once felt overwhelming becomes operational wisdom later.",
    tags: ["wisdom", "failure", "growth"],
  },
];

const views = {
  vault: {
    label: "Knowledge Vault",
    title: "The Mouk Company operating system for pressure, people, and scale.",
    summary:
      "Leadership doctrine, incident command, support intelligence, trust patterns, operational scars, personal context, development archive, and Moukisms shaped by systems thinking and people impact.",
    quote: "Build people. Build trust. Build systems that survive pressure.",
    caption: "the Mouk Company thesis",
  },
  brain: {
    label: "AI Mouk Brain",
    title: "Ask the useful version of the question, not just the polite one.",
    summary:
      "A conversational workspace for leadership advice, incident philosophy, team dynamics, and practical wisdom in the Mouk voice.",
    quote: "Context scales better than control.",
    caption: "practical intelligence edition",
  },
  rewrite: {
    label: "Rewrite Studio",
    title: "Turn fuzzy intent into clean signal.",
    summary:
      "Paste a message and convert it into something candid, calm, useful, and much less likely to create avoidable emotional shrapnel.",
    quote: "Say the true thing in a way the room can actually use.",
    caption: "communication edition",
  },
  chaos: {
    label: "Chaos Philosophy",
    title: "Useful lessons from useless experiences.",
    summary:
      "Humor, existential operational chaos, leadership memes, and uncomfortable truths for people who have seen one too many dashboards at midnight.",
    quote: "The gift of shit is when pain becomes pattern recognition.",
    caption: "meme wisdom edition",
  },
};

const chaosCards = [
  ["Corporate Survival Guide", "Do not make it a thing unless it becomes a thing. Some fires are just sparks with good branding."],
  ["Why Teams Break", "Unclear ownership kills velocity faster than most technical problems."],
  ["Support PTSD", "Support is the nervous system of the organization, which is a fancy way of saying it feels pain first."],
  ["Things Nobody Tells Managers", "Reduced dependency on you is not loss of control. It is proof the system is maturing."],
  ["Random Midnight Thoughts", "Every recurring incident is a system trying to tell you something."],
  ["The Gift of Shit", "Pain creates pattern recognition. Annoying feature, excellent long-term architecture."],
];

const wisdom = [
  "Build people. Build trust. Build systems that survive pressure.",
  "Built through instability. Strengthened through failure. Scaled through curiosity. Grounded through people.",
  "If the system only works because one person sacrifices themselves, the system is broken.",
  "Every recurring incident is a system trying to tell you something.",
  "Support is the nervous system of the organization.",
  "Do not improvise your whole career. Build structure around yourself.",
  "Slow is smooth. Smooth becomes fast.",
  "Escalation is communication, not failure.",
  "Silence is operational data.",
  "Tone determines escalation trajectory.",
  "Confidence is built through surviving uncertainty.",
];

const advisorPrompts = {
  incident: "Who is the IC, what is the blast radius, what is confirmed versus assumed, who owns the next decision, and when is the next structured update?",
  trust: "Are we dealing with cognitive trust, emotional trust, or both? What small interaction is teaching the team whether candor is safe?",
  team: "What behavior keeps repeating, what boundary is unclear, and what reward or fear makes this behavior rational?",
  manager: "What context is missing, what is the actual ask, and how do we create ownership without becoming the hero?",
};

const brainDomains = [
  {
    name: "trust and team dynamics",
    keywords: ["trust", "high performer", "low trust", "eq", "team", "conflict", "candor", "defensive", "politics", "safe", "psychological"],
    read: "This sounds like a trust and operating-cost problem, not just a performance problem.",
    firstMove: "Separate cognitive trust from emotional trust, then name the behavior pattern without turning it into a character trial.",
    questions: ["What small interactions are teaching the team whether candor is safe?", "Is this person creating leverage, or are people recovering from their impact?", "What expectation is currently hidden?"],
    moukism: "Trust is built in the small interactions.",
    say: "Quick heads up, my read is that the output is strong, but the way it is landing is creating trust debt. I want us to work the pattern, not make this personal.",
  },
  {
    name: "incident command",
    keywords: ["incident", "outage", "sev", "production", "down", "broken", "triage", "war room", "postmortem", "root cause", "rca", "customer impact"],
    read: "This is an incident-command moment. The job is to turn heat into signal.",
    firstMove: "Assign ownership, clarify blast radius, separate confirmed facts from assumptions, and set the next update rhythm.",
    questions: ["Who is the IC?", "What is confirmed versus assumed?", "What is the customer impact?", "What decision is needed in the next 15 minutes?"],
    moukism: "The system is telling you something.",
    say: "Let us slow this down. What do we know, what are we assuming, who owns the next decision, and when is the next structured update?",
  },
  {
    name: "support operations",
    keywords: ["support", "ticket", "queue", "csat", "frontline", "intake", "handoff", "runbook", "escalation", "customer", "vendor", "timezone"],
    read: "This sounds like support absorbing organizational ambiguity.",
    firstMove: "Make the invisible work visible, then clarify intake, ownership, escalation rules, and what support should not own.",
    questions: ["Where is ownership ambiguous?", "Which tickets are becoming invisible?", "What knowledge is still tribal?", "What boundary exists on paper but not in practice?"],
    moukism: "Support is the nervous system of the organization.",
    say: "My read is that support is carrying more than support work. We need to clarify ownership and escalation before the team becomes the safety net for every unclear boundary.",
  },
  {
    name: "burnout and sustainability",
    keywords: ["burnout", "tired", "overloaded", "overwhelmed", "exhausted", "capacity", "single point", "hero", "heroics", "delegate", "boundaries"],
    read: "This is a sustainability signal. Reliable people often get overloaded first.",
    firstMove: "Identify what one person is carrying, then redistribute ownership before the system normalizes sacrifice.",
    questions: ["Who is silently compensating for weak process?", "What work disappears if this person steps away?", "What boundary needs to become explicit?", "What can be documented or delegated this week?"],
    moukism: "If one person is carrying the system, the system is already failing.",
    say: "I appreciate the commitment, but I do not want to celebrate burnout as ownership. Let us redesign the handoff instead of depending on sacrifice.",
  },
  {
    name: "communication and conflict",
    keywords: ["message", "say", "respond", "reply", "email", "slack", "communication", "tone", "conflict", "conversation", "feedback", "difficult conversation"],
    read: "This is a tone and clarity problem. The goal is to say the true thing in a way the room can use.",
    firstMove: "Lower defensiveness first, then name the actual ask, missing context, and next decision.",
    questions: ["What is the actual ask?", "What context is missing?", "What tension needs to be named without creating more tension?", "What should happen next?"],
    moukism: "Tone determines escalation trajectory.",
    say: "Keep me honest, but my read is that there is missing context here. Can you walk me through the actual ask and what decision you need from me?",
  },
  {
    name: "leadership and coaching",
    keywords: ["lead", "leader", "manager", "coach", "coaching", "ownership", "autonomy", "decision", "mentor", "growth", "accountability"],
    read: "This is a leadership leverage problem. The move is to create context, not dependency.",
    firstMove: "Transfer enough context for the other person to make a better decision without you becoming the system.",
    questions: ["What decision framework are they missing?", "Where are you solving instead of coaching?", "What would reduce future dependency on you?", "What does ownership look like here?"],
    moukism: "A strong leader creates more leaders.",
    say: "I can help, but I want you to build the muscle too. Walk me through your read, the tradeoffs, and what decision you think we should make.",
  },
  {
    name: "career growth and failure",
    keywords: ["career", "job", "interview", "failure", "failed", "imposter", "confidence", "uncertain", "growth", "title", "opportunity"],
    read: "This is a growth-under-uncertainty moment.",
    firstMove: "Separate fear from signal. Use discomfort as data, but do not let it become the decision-maker.",
    questions: ["What are you learning that you could not learn from comfort?", "Is this fear protecting you or limiting you?", "What environment will make you grow?", "What would future you thank you for attempting?"],
    moukism: "Confidence is built through surviving uncertainty.",
    say: "You are supposed to feel some of this. It means you are stretching. The question is whether the discomfort is growth pain or a real values mismatch.",
  },
  {
    name: "systems and scale",
    keywords: ["scale", "process", "documentation", "docs", "system", "migration", "integration", "m&a", "technical debt", "operational debt", "workflow"],
    read: "This is a systems-and-scale problem. The current pain is probably exposing missing memory, ownership, or repeatability.",
    firstMove: "Document the workflow, name the handoffs, identify hidden dependencies, and make the system survive someone being absent.",
    questions: ["Where is the hidden dependency?", "What process exists only in someone's head?", "Which handoff is the failure point?", "What needs to become repeatable?"],
    moukism: "Documentation is memory at scale.",
    say: "This is not bureaucracy. This is operational continuity. If the system cannot survive someone being out, the system is not mature yet.",
  },
];

let activeCategory = "All";
let activeTone = "direct";
let wisdomIndex = 0;

const categoryFilters = document.querySelector("#category-filters");
const entriesNode = document.querySelector("#entries");
const searchInput = document.querySelector("#search-input");
const activeCategoryNode = document.querySelector("#active-category");
const visibleCount = document.querySelector("#visible-count");
const entryTotal = document.querySelector("#entry-total");
const railButtons = document.querySelectorAll(".rail-button");
const panels = document.querySelectorAll(".view");
const noteForm = document.querySelector("#note-form");
const savedNotes = document.querySelector("#saved-notes");
const chatForm = document.querySelector("#chat-form");
const brainInput = document.querySelector("#brain-input");
const chatWindow = document.querySelector("#chat-window");
const askShortcut = document.querySelector("#ask-mouk-shortcut");
const askSubmit = document.querySelector("#ask-submit");
const rewriteInput = document.querySelector("#rewrite-input");
const rewriteSubmit = document.querySelector("#rewrite-submit");
const rewriteOutput = document.querySelector("#rewrite-output");
const toneButtons = document.querySelectorAll(".tone-button");
const chaosGrid = document.querySelector("#chaos-grid");

function categories() {
  return ["All", ...new Set(entries.map((entry) => entry.category))];
}

function setView(viewName) {
  const view = views[viewName];
  railButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === viewName));
  document.querySelector("#view-label").textContent = view.label;
  document.querySelector("#hero-title").textContent = view.title;
  document.querySelector("#hero-summary").textContent = view.summary;
  document.querySelector("#hero-quote").textContent = `“${view.quote}”`;
  document.querySelector("#hero-caption").textContent = view.caption;
}

function renderFilters() {
  categoryFilters.innerHTML = categories()
    .map(
      (category) =>
        `<button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`,
    )
    .join("");
}

function entryMatchesSearch(entry, search) {
  if (!search) return true;
  const haystack = [entry.category, entry.type, entry.title, entry.body, ...entry.tags].join(" ").toLowerCase();
  return haystack.includes(search.toLowerCase());
}

function renderEntries() {
  const search = searchInput.value.trim();
  const filtered = entries.filter((entry) => {
    const categoryMatch = activeCategory === "All" || entry.category === activeCategory;
    return categoryMatch && entryMatchesSearch(entry, search);
  });

  activeCategoryNode.textContent = activeCategory === "All" ? "All entries" : activeCategory;
  visibleCount.textContent = `${filtered.length} shown`;
  entryTotal.textContent = entries.length;
  entriesNode.innerHTML = filtered
    .map(
      (entry, index) => `
        <article class="entry-card">
          <div class="entry-meta">
            <span>${entry.type}</span>
            <span>${entry.category} / ${String(index + 1).padStart(3, "0")}</span>
          </div>
          <h4>${entry.title}</h4>
          <p>${entry.body}</p>
          <div class="entry-tags">${entry.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `,
    )
    .join("");
}

function addMessage(role, text) {
  const node = document.createElement("article");
  node.className = `message ${role}`;
  node.innerHTML = `<span>${role === "user" ? "You" : "Mouk"}</span><p>${formatMessage(text)}</p>`;
  chatWindow.appendChild(node);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return node;
}

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}

function formatMessage(text) {
  return escapeHTML(text).replace(/\n/g, "<br>");
}

function scoreDomain(domain, lowerQuestion, tokens) {
  return domain.keywords.reduce((score, keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    if (lowerQuestion.includes(lowerKeyword)) return score + (lowerKeyword.includes(" ") ? 5 : 3);
    if (tokens.includes(lowerKeyword)) return score + 2;
    return score;
  }, 0);
}

function relatedVaultEntries(lowerQuestion, tokens) {
  return entries
    .map((entry) => {
      const haystack = [entry.category, entry.type, entry.title, entry.body, ...entry.tags].join(" ").toLowerCase();
      const score = tokens.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((item) => item.entry);
}

function seededPick(items, seedText, offset = 0) {
  const seed = [...seedText].reduce((total, char) => total + char.charCodeAt(0), 0);
  return items[(seed + offset) % items.length];
}

function answerLikeMouk(question) {
  const lower = question.toLowerCase();
  const tokens = lower.match(/[a-z0-9]+/g)?.filter((token) => token.length > 2) || [];
  const ranked = brainDomains
    .map((domain) => ({ domain, score: scoreDomain(domain, lower, tokens) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const primary = ranked[0]?.domain || brainDomains.find((domain) => domain.name === "leadership and coaching");
  const secondary = ranked[1]?.domain;
  const related = relatedVaultEntries(lower, tokens);
  const wantsScript = /\b(say|respond|reply|message|email|slack|word|phrase)\b/.test(lower);
  const wantsSteps = /\b(how|handle|do|fix|manage|approach|deal)\b/.test(lower);
  const wantsDecision = /\b(should|decide|choose|option|recommend)\b/.test(lower);

  const opener = seededPick(
    [
      "My read:",
      "Keep me honest, but my read is:",
      "I would separate the noise from the signal this way:",
      "The useful version of the problem is:",
    ],
    question,
  );

  const parts = [
    `${opener} ${primary.read}`,
    `First move: ${primary.firstMove}`,
  ];

  if (secondary) {
    parts.push(`Second lens: this also touches ${secondary.name}. ${secondary.firstMove}`);
  }

  if (wantsSteps) {
    parts.push(`Work it in this order: 1. Name the real constraint. 2. Clarify ownership. 3. Separate facts from assumptions. 4. Decide the next useful action.`);
  }

  if (wantsDecision) {
    parts.push("Decision filter: business impact, human impact, operational sustainability, long-term scale, and blast radius.");
  }

  parts.push(`Questions I would ask: ${primary.questions.slice(0, 3).join(" ")} `);

  if (wantsScript) {
    parts.push(`A way to say it: "${primary.say}"`);
  }

  if (related.length) {
    parts.push(`Vault signal: ${related.map((entry) => entry.title).join(" / ")}.`);
  }

  parts.push(`Moukism: ${primary.moukism}`);

  return parts.join("\n\n");
}

async function askMouk(question) {
  const pending = addMessage("bot", "Thinking through the Mouk lens...");

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Ask Mouk API failed.");
    }

    pending.querySelector("p").innerHTML = formatMessage(data.answer || answerLikeMouk(question));
  } catch (error) {
    const fallback = `${answerLikeMouk(question)}\n\nLocal fallback note: the real AI endpoint is not available yet. On Vercel, add OPENAI_API_KEY and redeploy.\n\nError detail: ${error.message}`;
    pending.querySelector("p").innerHTML = formatMessage(fallback);
  }
}

function rewriteMessage(text) {
  const raw = text.trim();
  if (!raw) {
    return "Paste the messy version first. The useful rewrite needs something real to push against.";
  }

  const openers = {
    direct: "Here is the clean version:",
    coach: "Here is the version that keeps the relationship intact while still naming the issue:",
    exec: "Here is the executive version:",
  };

  const closers = {
    direct: "The important part is naming the actual ask and the ownership boundary before we start debating symptoms.",
    coach: "I want us focused on the pattern, not blame. Trust is built in the small interactions, and this is one of them.",
    exec: "The decision point is whether this is isolated friction or a repeatable risk to operational sustainability and scale.",
  };

  return `${openers[activeTone]} ${raw} ${closers[activeTone]}`;
}

function renderChaos() {
  chaosGrid.innerHTML = chaosCards
    .map(([title, body]) => `<article class="chaos-card"><span>${title}</span><p>${body}</p></article>`)
    .join("");
}

railButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

askShortcut.addEventListener("click", () => {
  setView("brain");
  window.requestAnimationFrame(() => {
    brainInput.focus();
    brainInput.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderEntries();
});

searchInput.addEventListener("input", renderEntries);

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#note-title").value.trim();
  const body = document.querySelector("#note-body").value.trim();
  if (!title || !body) return;

  const node = document.createElement("article");
  node.className = "saved-note";
  node.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
  savedNotes.prepend(node);
  noteForm.reset();
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = brainInput.value.trim();
  if (!question) {
    brainInput.focus();
    return;
  }

  askSubmit.disabled = true;
  askSubmit.textContent = "Asking...";
  addMessage("user", question);
  brainInput.value = "";

  try {
    await askMouk(question);
  } finally {
    askSubmit.disabled = false;
    askSubmit.textContent = "Ask";
  }
});

document.querySelectorAll("[data-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#advisor-output").textContent = advisorPrompts[button.dataset.prompt];
  });
});

toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTone = button.dataset.tone;
    toneButtons.forEach((tone) => tone.classList.toggle("active", tone === button));
  });
});

rewriteSubmit.addEventListener("click", () => {
  rewriteOutput.textContent = rewriteMessage(rewriteInput.value);
});

document.querySelector("#wisdom-button").addEventListener("click", () => {
  wisdomIndex = (wisdomIndex + 1) % wisdom.length;
  document.querySelector("#wisdom-output").textContent = wisdom[wisdomIndex];
});

document.querySelector("#theme-button").addEventListener("click", () => {
  document.body.classList.toggle("focus-mode");
});

renderFilters();
renderEntries();
renderChaos();

const canvas = document.querySelector("#memory-canvas");
const ctx = canvas.getContext("2d");
const points = [];
let width = 0;
let height = 0;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  points.length = 0;

  const count = Math.max(50, Math.floor((width * height) / 25000));
  for (let i = 0; i < count; i += 1) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.7 + 0.8,
    });
  }
}

function drawMemory() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(140, 255, 181, 0.44)";
  ctx.strokeStyle = "rgba(244, 189, 98, 0.1)";
  ctx.lineWidth = 1;

  points.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;

    if (point.x < 0 || point.x > width) point.vx *= -1;
    if (point.y < 0 || point.y > height) point.vy *= -1;

    ctx.beginPath();
    ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
    ctx.fill();

    for (let j = index + 1; j < points.length; j += 1) {
      const other = points[j];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 135) {
        ctx.globalAlpha = 1 - distance / 135;
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  });

  requestAnimationFrame(drawMemory);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawMemory();
