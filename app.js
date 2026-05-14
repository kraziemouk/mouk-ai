const entries = [
  {
    category: "Leadership",
    type: "Field note",
    title: "Trust is operational infrastructure",
    body: "A team can borrow process for a while, but it cannot borrow trust. Low-trust systems turn every normal decision into a governance event.",
    tags: ["trust", "teams", "systems"],
  },
  {
    category: "Leadership",
    type: "Moukism",
    title: "Clarity lowers the temperature",
    body: "Most rooms do not need more confidence. They need the problem named so precisely that everyone stops shadowboxing.",
    tags: ["clarity", "conflict", "leadership"],
  },
  {
    category: "Technology",
    type: "System scar",
    title: "Architecture is memory with consequences",
    body: "Every system remembers the incentives that built it. The weirdest parts are usually fossils from a perfectly reasonable emergency.",
    tags: ["architecture", "operations", "incentives"],
  },
  {
    category: "Technology",
    type: "Ops truth",
    title: "Dashboards are not observability",
    body: "A dashboard tells you what someone once thought would matter. Observability tells you what actually matters now.",
    tags: ["observability", "incidents", "signal"],
  },
  {
    category: "Human Behavior",
    type: "Pattern",
    title: "People protect identity before logic",
    body: "If a solution makes someone feel stupid, threatened, or erased, they will debate the facts long after the facts are settled.",
    tags: ["behavior", "change", "psychology"],
  },
  {
    category: "Human Behavior",
    type: "Meeting note",
    title: "Energy is a data source",
    body: "Watch when the room gets quiet, defensive, or weirdly funny. The emotional weather usually points straight at the real system constraint.",
    tags: ["meetings", "signal", "constraints"],
  },
  {
    category: "The Gift of Shit",
    type: "Doctrine",
    title: "Bad inputs can become useful signal",
    body: "The gift is not the chaos itself. The gift is what the chaos reveals about assumptions, handoffs, incentives, and blind spots.",
    tags: ["chaos", "learning", "handoffs"],
  },
  {
    category: "The Gift of Shit",
    type: "Incident",
    title: "Pain is an expensive profiler",
    body: "The outage tells you where the system is coupled. The argument tells you where the team is coupled.",
    tags: ["incident", "coupling", "team"],
  },
  {
    category: "Random Useless Knowledge",
    type: "Oddly useful",
    title: "Experts know which details are decoys",
    body: "Useless facts become useful when they teach your brain what normal looks like in a domain you do not fully understand yet.",
    tags: ["learning", "expertise", "pattern"],
  },
  {
    category: "Random Useless Knowledge",
    type: "Trivia with teeth",
    title: "Most weird rules have a body count",
    body: "Policies, warnings, and strange checklists often exist because someone learned the lesson loudly enough for everyone else.",
    tags: ["policy", "history", "risk"],
  },
  {
    category: "Moukisms",
    type: "Quote",
    title: "Scary problems shrink under inspection",
    body: "The moment you fully understand the problem, it usually stops being scary.",
    tags: ["problem-solving", "fear", "clarity"],
  },
  {
    category: "Moukisms",
    type: "Quote",
    title: "Candor has an arrival cost",
    body: "Every team says they want candor until candor arrives.",
    tags: ["candor", "truth", "teams"],
  },
];

const views = {
  vault: {
    label: "Knowledge Vault",
    title: "A living archive for lessons that aged into leverage.",
    summary:
      "Leadership thoughts, operational scars, human behavior patterns, and random knowledge that became useful after the damage was already educational.",
    quote: "The moment you fully understand the problem, it usually stops being scary.",
    caption: "incident room edition",
  },
  brain: {
    label: "AI Mouk Brain",
    title: "Ask the useful version of the question, not just the polite one.",
    summary:
      "A conversational workspace for leadership advice, incident philosophy, team dynamics, and practical wisdom in the Mouk voice.",
    quote: "The move is not to sound smart. The move is to reduce the blast radius.",
    caption: "practical intelligence edition",
  },
  rewrite: {
    label: "Rewrite Studio",
    title: "Turn fuzzy intent into clean signal.",
    summary:
      "Paste a message and convert it into something candid, calm, useful, and much less likely to create avoidable emotional shrapnel.",
    quote: "A hard truth needs a soft landing.",
    caption: "communication edition",
  },
  chaos: {
    label: "Chaos Philosophy",
    title: "Useful lessons from useless experiences.",
    summary:
      "Humor, existential operational chaos, leadership memes, and uncomfortable truths for people who have seen one too many dashboards at midnight.",
    quote: "Every team says they want candor until candor arrives.",
    caption: "meme wisdom edition",
  },
};

const chaosCards = [
  ["Corporate Survival Guide", "Never confuse alignment with silence. Silence is just backlog with better manners."],
  ["Why Teams Break", "Teams rarely break from one big truth. They break from tiny avoided truths collecting interest."],
  ["Support PTSD", "There is no alert quite like the alert that sounds exactly like last quarter."],
  ["Things Nobody Tells Managers", "You inherit every decision people were too tired, scared, or polite to make."],
  ["Random Midnight Thoughts", "The system is always talking. Unfortunately, it often chooses interpretive dance."],
  ["The Gift of Shit", "Some problems are just badly wrapped insight with a deadline and an audience."],
];

const wisdom = [
  "Every process is a theory. Incidents are peer review.",
  "A calm room is not always a healthy room. Sometimes it is just a very experienced room.",
  "The fastest way to lower drama is to raise precision.",
  "If nobody owns the awkward middle, the awkward middle owns the roadmap.",
  "A leader's job is often translating vibes into constraints.",
  "The best postmortem question is not who missed it. It is what made missing it normal.",
];

const advisorPrompts = {
  incident: "What changed, who noticed first, what did we assume, and where did the system make the wrong thing easy?",
  trust: "Is this person creating results the team can build on, or results the team has to recover from?",
  team: "What behavior keeps repeating, and what reward or fear makes that behavior rational?",
  manager: "What truth needs to be said, and how can you say it without making identity the thing under attack?",
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
    return "Separate performance from trust. Thank them for the output, then name the cost of how the output is created. High impact with low emotional trust is still operational risk.";
  }
  if (lower.includes("incident") || lower.includes("outage")) {
    return "Start with facts, timeline, blast radius, and decision points. Keep shame out of the room. Shame makes people optimize for looking clean instead of making the system smarter.";
  }
  if (lower.includes("team") || lower.includes("manager")) {
    return "Look for the repeated behavior, then ask what the system is rewarding. Teams do not drift into dysfunction randomly. Something is making the current behavior rational.";
  }
  return "My first pass: make the invisible constraint visible. Then decide whether this is a people problem, a process problem, or a fear problem wearing a process hat.";
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
    direct: "The important part is naming the constraint before we start debating symptoms.",
    coach: "I want us focused on the pattern, not on blame, because the pattern is what we can actually improve.",
    exec: "The decision point is whether this is isolated friction or a repeatable risk in the operating model.",
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
