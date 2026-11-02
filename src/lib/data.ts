// ---------------------------------------------------------------------------
// All site content lives here. Edit copy and links in one place.
//
// Everything below comes from the CV or from repositories that exist. No
// invented metrics, clients or outcomes — an interviewer will ask about any
// claim on this page, so every line has to survive the follow-up question.
// ---------------------------------------------------------------------------

export const site = {
  name: "Pratik Sharma",
  role: "Software Engineer",
  url: "https://heypratikk.com",
  email: "mailpratiksh11@gmail.com",
  phone: "+91 74883 62132",
  location: "Bengaluru, India",
  github: "https://github.com/mailpratiksh11-ux",
  linkedin: "https://linkedin.com/in/pratik-sharma-bb6462202",
  leetcode: "https://leetcode.com/u/pratik1129/",
  currentRole: "Associate Software Engineer",
  currentCompany: "Simplify3x",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * The three lines directly under the hero.
 *
 * Deliberately terse — one clause each. `highlights` below covers the same
 * ground in paragraphs, so if these grow into descriptions the page says the
 * same thing twice before a reader has scrolled once.
 */
export const focus = [
  {
    n: "01",
    title: "Full-stack engineering",
    desc: "Building complete applications and product experiences.",
  },
  {
    n: "02",
    title: "Backend systems",
    desc: "Designing APIs, integrations and reliable application workflows.",
  },
  {
    n: "03",
    title: "AI-powered applications",
    desc: "Integrating modern AI capabilities into practical products.",
  },
];

/** Four areas of engineering experience, each backed by shipped work. */
export const highlights = [
  {
    n: "01",
    title: "Enterprise SaaS",
    desc: "Features and workflows inside a QA platform used by test teams — role-based access, impact tracing, and module-level permissions enforced on every request.",
  },
  {
    n: "02",
    title: "Backend engineering",
    desc: "Layered REST APIs, background jobs, queue-driven pipelines and asynchronous workflows that keep long-running work off the request path.",
  },
  {
    n: "03",
    title: "Integrations",
    desc: "Two-way Jira synchronisation, Azure connectivity, Gmail API sending and OAuth 2.0 flows — the unglamorous work of making two systems agree.",
  },
  {
    n: "04",
    title: "AI and LLMs",
    desc: "Writing assistants built on hosted LLMs, with the prompt design, fallbacks and rate limits that decide whether a feature is usable or just a demo.",
  },
];

/**
 * Screenshots.
 *
 * `file` is a path under /public. Drop a real capture at that path and it
 * replaces the placeholder with no code change. Until then the component
 * renders a labelled frame naming the screen it is waiting for, which is
 * honest about being unfinished rather than filling the space with a stock
 * mockup pretending to be the product.
 */
export type Shot = { file: string; label: string };

export const projects = [
  {
    slug: "beacon-ai",
    name: "Beacon AI",
    category: "AI-powered email automation platform",
    year: "2026",
    status: "Live",
    featured: true,
    tagline:
      "A multi-tenant email automation platform that helps people run personalised cold email campaigns from their own Gmail account.",
    overview:
      "Beacon AI pairs campaign automation with AI-assisted writing. People connect their own Gmail, import a list, and send personalised sequences that go out from their address rather than a shared relay — so replies land in their inbox and their own domain carries the sending reputation.",
    // One real screenshot of the live product. The dashboard, composer and
    // assistant all sit behind sign-in, so they cannot be captured without an
    // account — add them here when you have them and they render automatically.
    shots: [{ file: "/work/beacon-landing.png", label: "beacon.heypratikk.com" }] satisfies Shot[],
    story: [
      {
        n: "01",
        title: "Multi-tenant authentication",
        points: [
          "Google OAuth 2.0 sign-in",
          "Sends through each user's own Gmail account via the Gmail API",
          "User-scoped data, so one tenant's campaigns are never reachable from another",
          "JWT authentication on every protected endpoint",
        ],
      },
      {
        n: "02",
        title: "Background email processing",
        points: [
          "Asynchronous send pipeline on BullMQ and Redis",
          "Resumable workers, so a restart mid-campaign continues rather than starting over",
          "Long-running campaigns kept off the request path entirely",
        ],
      },
      {
        n: "03",
        title: "Real-time campaign monitoring",
        points: [
          "Live progress streamed over Socket.IO",
          "Progress survives navigation and refresh, because the server owns the state",
        ],
      },
      {
        n: "04",
        title: "AI writing assistant",
        points: [
          "Groq and Qwen3-32B integration",
          "Generates a complete email from a one-line brief",
          "Suggests subject lines",
          "Rewrites an existing draft",
        ],
      },
      {
        n: "05",
        title: "Backend architecture",
        points: [
          "Layered Express API: routes, controllers, services, models",
          "MongoDB with Mongoose",
          "Centralised error handling and one consistent response envelope",
        ],
      },
    ],
    stackLayers: [
      { tier: "Frontend", detail: "Angular + TypeScript" },
      { tier: "Backend API", detail: "Node.js + Express + JWT" },
      { tier: "Database", detail: "MongoDB + Mongoose" },
    ],
    flows: [
      {
        title: "Background email processing",
        nodes: ["Express API", "BullMQ", "Redis", "Worker", "Gmail API"],
      },
      { title: "Real-time updates", nodes: ["Worker", "Socket.IO", "Angular"] },
      { title: "AI integration", nodes: ["Angular", "Express API", "Groq / Qwen3-32B"] },
    ],
    tech: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Gmail API",
      "Google OAuth 2.0",
      "Groq / Qwen3-32B",
    ],
    github: "https://github.com/mailpratiksh11-ux/Beacon-AI",
    live: "https://beacon.heypratikk.com",
  },
  {
    slug: "skills-up",
    name: "Skills Up",
    category: "Full-stack e-learning platform",
    year: "2024",
    status: "Source available",
    featured: false,
    tagline:
      "A full-stack e-learning platform built to support course creation and video-based learning.",
    overview:
      "Instructors create courses and upload lesson video; students browse the catalogue and watch lessons back in the browser. Video is the awkward part of a platform like this — files are large, and a document database is not built to hold them whole — so storage goes through GridFS rather than the filesystem.",
    // Not deployed anywhere, so there is nothing live to capture. The data
    // path below stands in — it is what the project actually was, and it beats
    // two empty frames waiting for screenshots that may never exist.
    shots: [] satisfies Shot[],
    stackLayers: [
      { tier: "Frontend", detail: "Angular" },
      { tier: "Backend API", detail: "Node.js + Express" },
      { tier: "Storage", detail: "MongoDB + GridFS" },
    ],
    flows: [{ title: "Video delivery", nodes: ["Upload", "GridFS chunks", "Stream", "Player"] }],
    story: [
      {
        n: "01",
        title: "Course management",
        points: ["Full-stack e-learning application", "Course creation workflows"],
      },
      {
        n: "02",
        title: "Video storage",
        points: ["MongoDB GridFS for storing and retrieving video content"],
      },
      {
        n: "03",
        title: "Video delivery",
        points: ["Video streaming to support in-browser playback"],
      },
    ],
    tech: ["MongoDB", "Express.js", "Angular", "Node.js", "GridFS"],
    github: "https://github.com/mailpratiksh11-ux",
    live: "",
  },
];

export const experience = [
  {
    company: "Simplify3x",
    product: "SimplifyQA",
    role: "Associate Software Engineer",
    period: "Sep 2025 — Present",
    current: true,
    location: "Bengaluru",
    overview:
      "Permissions, traceability, and the integration layer that keeps the QA platform in step with the tools teams already use.",
    points: [
      "Architected dual-path Word export for manual test cases on a BullMQ and Redis queue with RabbitMQ email delivery, so large suites export without the request timing out",
      "Implemented project-level role-based access control across User Stories, Test Cases, Suites and Test Data, enforcing create, view, update and delete privileges on every API request",
      "Designed the Impact Analysis module, tracing Epics, Features, Stories and Test Cases through dynamic filtering",
      "Implemented Jira subproject mapping, letting one SQA project synchronise across several Jira projects",
      "Extended Jira synchronisation to attachments, comments, linked issues and project configuration",
      "Added auto-provisioning of custom field options during Jira-to-SQA sync, creating missing values for state, priority, severity and custom list fields so mismatched configuration stops breaking the sync",
      "Worked on Azure integration for connectivity with Azure-based project workflows",
    ],
    tech: ["Angular", "Node.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "RabbitMQ", "Jira API", "Azure"],
  },
  {
    company: "Simplify3x",
    product: "SimplifyQA",
    role: "Software Engineer Intern",
    period: "Feb 2025 — Aug 2025",
    current: false,
    location: "Bengaluru",
    overview: "Joined on the integration layer and the parts of the UI costing users time.",
    points: [
      "Implemented Jira error handling and field-level validation, so users could see and resolve synchronisation errors in the product rather than in a log",
      "Fixed UI defects across requirement management, execution plans and dashboards",
    ],
    tech: ["Angular", "TypeScript", "Jira API"],
  },
];

export const education = {
  school: "Acharya Institute of Technology",
  degree: "B.E. Computer Science",
  period: "Nov 2020 — 2024",
  location: "Bengaluru",
};

/**
 * Problem / why it was hard / approach. Outcomes appear only where they are
 * verifiable — no invented percentages.
 */
export const problems = [
  {
    title: "Exports that timed out on large test suites",
    context: "SimplifyQA",
    problem:
      "Generating a Word export of a large manual test suite ran inside the HTTP request. Past a certain size the request timed out and the user got an error instead of a document.",
    hard: "Making it faster would only move the limit. The work genuinely takes a while, so it had to stop being something a request waits for.",
    approach:
      "Moved generation onto a BullMQ and Redis queue with a dual-path design: small exports still return inline, large ones go to the queue and arrive by email through RabbitMQ. The user gets an immediate answer either way.",
    outcome: "Large suites export without the request timing out.",
  },
  {
    title: "Jira syncs failing on configuration nobody controlled",
    context: "SimplifyQA",
    problem:
      "Synchronising from Jira failed whenever a Jira project used a value that didn't exist on the SQA side — a priority, a severity, an option in a custom list field.",
    hard: "The mismatch isn't a bug in either system. Two tools owned by different teams drift apart, and the sync sits in the middle of that drift.",
    approach:
      "Auto-provision the missing options during sync. When a value arrives that SQA doesn't recognise, create it rather than reject the record — for state, priority, severity, and custom list, radio and checkbox fields.",
    outcome: "Mismatched field configuration stopped being a cause of sync failure.",
  },
  {
    title: "Campaign progress that disappeared on refresh",
    context: "Beacon AI",
    problem:
      "A send runs for minutes. If progress lives in the browser, refreshing loses it, and the user can't tell whether the campaign is still running or died.",
    hard: "Progress has to be owned by the server and re-derivable at any moment, not accumulated client-side.",
    approach:
      "Put the send on a BullMQ worker that keeps its cursor in Redis, and stream progress over Socket.IO. The client subscribes to state rather than counting it, so a refresh reconnects and catches up.",
    outcome: "Progress survives navigation and refresh, and a restart mid-campaign resumes rather than starting over.",
  },
  {
    title: "One permission check, every endpoint",
    context: "SimplifyQA",
    problem:
      "Role-based access had to apply across User Stories, Test Cases, Suites and Test Data, with separate create, view, update and delete privileges per project.",
    hard: "Permission logic scattered through controllers is how authorisation bugs happen — the endpoint someone forgets is the one that leaks.",
    approach:
      "Enforced the check on every API request rather than per feature, so a new endpoint is covered by default instead of by memory.",
    outcome: "Per-action privileges apply consistently across all four modules.",
  },
];

export const stack = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Java"] },
  { group: "Frontend", items: ["Angular", "React", "HTML", "CSS", "Bootstrap"] },
  { group: "Backend and APIs", items: ["Node.js", "Express", "REST", "Webhooks", "Socket.IO"] },
  { group: "Queues and messaging", items: ["BullMQ", "Redis", "RabbitMQ"] },
  { group: "Databases", items: ["MongoDB", "Redis", "GridFS"] },
  { group: "Integrations", items: ["Jira", "Azure", "Gmail API", "Google OAuth 2.0"] },
  { group: "AI and LLM", items: ["LLM integration", "Prompt design", "Groq"] },
  { group: "Tools", items: ["Git", "GitLab", "Jira", "Postman", "Docker"] },
];

export const exploring = [
  {
    title: "LLM applications beyond the chat box",
    note: "Where a model is genuinely the right tool and where a function call would have done. Most of the work turns out to be prompt design, fallbacks and cost.",
  },
  {
    title: "Multi-tenant architecture",
    note: "Scoping every query to a tenant by construction rather than by remembering. The shape of the data model decides whether isolation actually holds.",
  },
  {
    title: "Queue-driven systems",
    note: "Resumability, idempotency, and what a worker should do when it wakes up halfway through a job it doesn't remember starting.",
  },
  {
    title: "Deployment and infrastructure",
    note: "Running my own things on a VPS — Docker, a reverse proxy, certificates, and the parts that only teach you anything when they break.",
  },
];

export const about = [
  "I'm a software engineer in Bengaluru, currently at Simplify3x working on a QA platform. Most of what I do sits behind the interface: APIs, background jobs, permissions, and the integration layer that keeps our product in step with Jira and Azure.",
  "I ended up in backend work because that's where the interesting failures are. A button either works or it doesn't. A sync between two systems owned by different teams fails in ways nobody designed, and fixing it properly means understanding both sides.",
  "Outside work I build things end to end. Beacon AI started as a question — could cold outreach run from your own mailbox instead of a shared relay — and turned into a multi-tenant product with a queue-backed send pipeline and an LLM writing assistant. Building the whole thing, deployment included, is how I learn the parts a feature ticket never exposes.",
];
