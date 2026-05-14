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
  node.innerHTML = `<span>${role === "user" ? "You" : "Mouk"}</span><p>${text}</p>`;
  chatWindow.appendChild(node);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function answerLikeMouk(question) {
  const lower = question.toLowerCase();
  if (lower.includes("high performer") || lower.includes("trust")) {
    return "Separate cognitive trust from emotional trust. They may be reliable and still unsafe to work around. Acknowledge the output, then name the operating cost. High performance with low trust is still operational risk.";
  }
  if (lower.includes("incident") || lower.includes("outage")) {
    return "Start with IC ownership, blast radius, confirmed facts, assumptions, customer impact, and next decision. Keep shame out of the room. The system is telling you something, so make the signal visible.";
  }
  if (lower.includes("escalation")) {
    return "Escalation is communication, not failure. The question is whether risk is visible early enough, accountability is clear enough, and the person asking for help has enough context to move without drama.";
  }
  if (lower.includes("tone") || lower.includes("conflict") || lower.includes("communication")) {
    return "Tone determines escalation trajectory. My move would be to listen first, identify the emotional driver, then use questions to lower resistance. Help me understand is often stronger than let me explain.";
  }
  if (lower.includes("team") || lower.includes("manager")) {
    return "Look for the repeated behavior, then ask what the system is rewarding. Keep me honest, but most team issues have missing context, unclear ownership, or trust debt underneath them.";
  }
  if (lower.includes("burnout") || lower.includes("support")) {
    return "My read is that burnout is usually a boundary and ownership signal. Support is the nervous system of the organization, so if it is constantly in pain, the fix is not more appreciation. It is clearer intake, escalation, runbooks, and what support should not own.";
  }
  if (lower.includes("documentation") || lower.includes("docs")) {
    return "Documentation is not bureaucracy. It is memory at scale, onboarding acceleration, operational continuity, and risk reduction. The system should survive your absence.";
  }
  if (lower.includes("career") || lower.includes("failure") || lower.includes("imposter")) {
    return "Confidence is built through surviving uncertainty. The tension between imposter syndrome and operational confidence can be useful if it keeps you humble, curious, and moving instead of frozen.";
  }
  return "My first pass: what is the actual ask, what context is missing, who owns the next decision, and where is the system creating the behavior we are reacting to?";
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

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = brainInput.value.trim();
  if (!question) return;
  addMessage("user", question);
  addMessage("bot", answerLikeMouk(question));
  brainInput.value = "";
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
