// ---------------------------------------------------------------------------
// All site content lives here. Edit copy and links in one place.
// ---------------------------------------------------------------------------

export const site = {
  name: "Pratik Sharma",
  role: "Full Stack Developer",
  url: "https://portfolio-g7gl.onrender.com", // update when you add a custom domain
  email: "mailpratiksh11@gmail.com",
  phone: "+91 74883 62132",
  location: "Bengaluru, India. Working with clients worldwide, remote",
  github: "https://github.com/pratiksh11",
  linkedin: "https://linkedin.com/in/pratik-sharma-bb6462202",
};

export const howICanHelp = [
  {
    title: "Need bugs fixed?",
    desc: "I drop into your codebase, reproduce the issue, and fix the root cause.",
  },
  {
    title: "Need a new feature?",
    desc: "Spec to production: API, UI, edge cases, and a clean pull request.",
  },
  {
    title: "Need an API integration?",
    desc: "Google, Jira, payments, LLMs. Wired in with retries and rate limits.",
  },
  {
    title: "Need to modernize your application?",
    desc: "Incremental refactoring, without betting on a risky rewrite.",
  },
  {
    title: "Need long-term maintenance?",
    desc: "Dependencies current, small issues fixed before they become incidents.",
  },
  {
    title: "Need help shipping your MVP?",
    desc: "Half-finished to launched, scoped so version one actually ships.",
  },
];

export const services = [
  { title: "Full Stack Web Development", desc: "Frontend, backend, and database owned by one accountable developer." },
  { title: "SaaS Application Development", desc: "Multi-tenant products: auth, roles, and tenant isolation done right." },
  { title: "Dashboard & Admin Panels", desc: "Fast tables, sensible filters, and numbers that drive decisions." },
  { title: "REST API Development", desc: "Predictable, documented APIs with proper validation and error handling." },
  { title: "Bug Fixing & Debugging", desc: "Reproduce first, fix the root cause, keep it fixed." },
  { title: "Performance Optimization", desc: "Slow queries and heavy payloads, measured before and after." },
  { title: "Feature Development", desc: "Features shipped end-to-end inside your existing codebase." },
  { title: "API Integration", desc: "Webhooks handled, tokens refreshed, failures surfaced instead of hidden." },
  { title: "Authentication & Authorization", desc: "OAuth 2.0, JWT, and role-based access control on every request." },
  { title: "Database Design", desc: "Schemas built for real queries, with indexes and migration paths." },
  { title: "AI & LLM Integration", desc: "Prompt design, fallbacks, rate limits, and cost kept under control." },
  { title: "Email Automation", desc: "Queued sending with retries, deliverability, and visible progress." },
  { title: "Code Refactoring", desc: "Legacy code made changeable again, safely and incrementally." },
  { title: "Existing Project Maintenance", desc: "Monitoring, updates, and fixes shipped before users notice." },
  { title: "Long-term Development Support", desc: "Ongoing capacity from a developer who knows your codebase." },
  { title: "Technical Consultation", desc: "A second opinion on architecture, stack choices, or a codebase audit." },
];

export const experience = [
  {
    company: "Simplify3x (SimplifyQA)",
    role: "Associate Software Engineer",
    period: "Sep 2025 - Present",
    location: "Bengaluru",
    tech: ["Angular", "Node.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "RabbitMQ"],
    points: [
      "Rebuilt Word export on BullMQ + Redis queues. No more request timeouts.",
      "Project-level RBAC across 4 modules, enforced on every API request.",
      "Built the Impact Analysis module: trace Epics, Features, Stories, Test Cases.",
      "Improved Jira sync: subproject mapping, custom-field auto-provisioning.",
    ],
  },
  {
    company: "Simplify3x (SimplifyQA)",
    role: "Software Engineer Intern",
    period: "Feb 2025 - Aug 2025",
    location: "Bengaluru",
    tech: ["Angular", "TypeScript", "Jira API"],
    points: [
      "Jira error handling and field-level validation, surfaced in the product UI.",
      "UI fixes across requirements, execution plans, and dashboards.",
    ],
  },
  {
    company: "Acharya Institute of Technology",
    role: "B.E. in Computer Science",
    period: "2020 - 2024",
    location: "Bengaluru",
    tech: [],
    points: [],
  },
];

export const projects = [
  {
    name: "Beacon AI",
    kind: "Cold-email automation platform",
    summary: "Multi-tenant SaaS: send personalized campaigns from your own Gmail, with a chat-based AI writing assistant.",
    built: [
      "Google OAuth 2.0 sign-in, data scoped per tenant",
      "Sends through the user's own Gmail via the Gmail API",
      "Chat-based AI assistant: drafts, subject lines, rewrites (Groq, Qwen3-32B)",
      "BullMQ + Redis send pipeline with resumable workers",
      "Live progress over Socket.IO, survives page refresh",
      "Layered Express API with JWT auth on MongoDB",
    ],
    tech: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.IO", "Gmail API", "Groq LLM"],
    github: "https://github.com/mailpratiksh11-ux/Beacon-AI",
    live: "https://beacon-web-epyi.onrender.com/login",
  },
  {
    name: "Skills Up",
    kind: "E-learning platform",
    summary: "Full-stack e-learning platform with course creation and smooth video streaming.",
    built: [
      "Course creation and management",
      "GridFS chunked video storage",
      "Range-request streaming for smooth seeking",
      "Authentication and user profiles",
    ],
    tech: ["Angular", "Node.js", "Express", "MongoDB", "GridFS"],
    github: "https://github.com/pratiksh11",
    live: "",
  },
];

export const process = [
  { step: "01", title: "Scope", desc: "A call to understand the problem. Not a fit? I'll say so." },
  { step: "02", title: "Propose", desc: "A short written plan: what, in what order, at what cost." },
  { step: "03", title: "Build", desc: "Small increments to staging, with written updates." },
  { step: "04", title: "Verify", desc: "Edge cases and failure paths tested before your users find them." },
  { step: "05", title: "Hand over", desc: "Docs, clean commit history, and a walkthrough. You own it all." },
];

export const faqs = [
  {
    q: "What kind of projects are you best at?",
    a: "Web apps with real backend complexity: multi-tenant data, background jobs, integrations, realtime features. If it's more than a static site, that's my lane.",
  },
  {
    q: "Can you work with an existing codebase?",
    a: "Yes, that's most of what I do. I follow your conventions, join mid-project, and don't insist on rewrites.",
  },
  {
    q: "How do you charge?",
    a: "Fixed price per milestone for scoped work. Weekly or monthly for ongoing work. Always in writing before anything starts.",
  },
  {
    q: "What timezone do you work in?",
    a: "India (IST), with overlap for US and EU calls. Day-to-day progress runs on written updates.",
  },
  {
    q: "Who owns the code?",
    a: "You do, fully, from the first commit. Work happens in your repository whenever possible.",
  },
  {
    q: "What happens after launch?",
    a: "A post-launch fix window is included. Then take over with the handover docs, or keep me on for maintenance.",
  },
];
