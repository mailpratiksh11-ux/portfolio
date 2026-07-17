# Pratik Sharma — Portfolio

Freelance-focused portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**. Design language: restrained, engineering-first (Vercel/Linear/Stripe-inspired) — dark neutral palette, typography-led, minimal purposeful animation.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where everything lives

| What | Where |
|---|---|
| **All copy, links, pricing, projects, FAQ** | `src/lib/data.ts` — edit this one file to change any content |
| Design tokens, gradients, keyframes, glass/grid utilities | `src/app/globals.css` |
| SEO metadata + JSON-LD structured data | `src/app/layout.tsx` |
| OG share image (auto-generated) | `src/app/opengraph-image.tsx` |
| Page sections (Hero, How I Can Help, Services, Work, About, Experience, Stack, Process, FAQ, Contact) | `src/components/sections/*` |
| Reveal animation, section headings, brand SVG icons | `src/components/ui/*` |

## Before you deploy — checklist

1. **Domain**: replace `site.url` in `src/lib/data.ts` with your real domain (drives sitemap, robots, OG tags).
2. **Project links**: point `projects[].github` at the actual repos, and fill `projects[].live` when you deploy demos (the card automatically switches from "Ask me for a walkthrough" to a "Live demo" link).

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config needed. The site is fully static (SSG), so it scores ~100 on Lighthouse performance out of the box.
