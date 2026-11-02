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

export const projects = [
  {
    slug: "beacon-ai",
    name: "Beacon AI",
    kind: "Email automation platform",
    year: "2026",
    status: "Live",
    intro:
      "A multi-tenant SaaS for cold outreach. People sign in with Google and send personalised campaigns from their own mailbox, so replies land where they expect and their own domain carries the reputation.",
    problem:
      "Outreach tools send through a shared relay. Your mail inherits someone else's sender reputation, and replies come back to an address you don't own.",
    contribution:
      "Built end to end — the Angular front end, the Express API, the queue-backed send pipeline, and the deployment that runs it.",
    built: [
      "Google OAuth 2.0 sign-in, with every record scoped to its own tenant",
      "Sends through the user's own mailbox via the Gmail API",
      "Layered Express API — route, controller, service, model — on MongoDB with JWT auth and one response envelope",
      "BullMQ and Redis send pipeline with a resumable worker, so a restart mid-campaign picks up where it stopped",
      "Live progress over Socket.IO that survives navigation and refresh",
      "An LLM writing assistant on Groq and Qwen3-32B: drafts from a one-line brief, subject lines, and rewrites",
    ],
    tech: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.IO", "Gmail API", "Groq"],
    github: "https://github.com/mailpratiksh11-ux/Beacon-AI",
    live: "https://beacon.heypratikk.com",
  },
  {
    slug: "skills-up",
    name: "Skills Up",
    kind: "E-learning platform",
    year: "2024",
    status: "Source available",
    intro:
      "A full-stack learning platform where instructors publish courses and students watch them back without the video stalling.",
    problem:
      "Video is the hard part of a course platform. Storing whole files in a document database doesn't scale, and serving them without range support makes seeking unusable.",
    contribution: "Built end to end, with GridFS chunked storage behind the streaming endpoints.",
    built: [
      "Course creation and management",
      "GridFS chunked video storage and retrieval",
      "Range-request streaming, so seeking works mid-video",
      "Authentication and user profiles",
    ],
    tech: ["Angular", "Node.js", "Express", "MongoDB", "GridFS"],
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
