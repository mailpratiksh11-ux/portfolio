import { projects } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShot } from "@/components/ui/ProjectShot";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

type Project = (typeof projects)[number];

function ProjectLinks({ github, live }: { github: string; live?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-md bg-accent px-5 py-2.5 text-[14.5px] font-medium text-paper transition-colors hover:bg-[#2d55c9]"
        >
          Visit the product
        </a>
      ) : null}
      <a
        href={github}
        target="_blank"
        rel="noreferrer noopener"
        className="font-mono text-[13.5px] text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent"
      >
        View source
      </a>
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-[12px] text-ink-3">Built with</h4>
      {/* A list separated by rules rather than a field of pills — eleven badges
          in a row stop being readable and start being texture.

          flex-wrap, not inline text. Each item is nowrap so "Gmail API" cannot
          split across lines, but JSX strips the whitespace between sibling
          elements, so an inline run of nowrap spans has no break opportunity
          at all and overflows the viewport as one unbreakable line. The flex
          container puts the break opportunities back between items. */}
      <ul className="mt-3 flex flex-wrap items-baseline gap-y-1 font-mono text-[13px] text-ink-2">
        {items.map((t, i) => (
          <li key={t} className="whitespace-nowrap">
            <span className="text-ink">{t}</span>
            {i < items.length - 1 ? <span className="px-2 text-ink-3">/</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryBlock({
  n,
  title,
  points,
  compact = false,
}: {
  n: string;
  title: string;
  points: string[];
  compact?: boolean;
}) {
  return (
    <div className="border-t border-line pt-5">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[12px] text-accent">{n}</span>
        <h4
          className={`font-display font-semibold tracking-[-0.01em] text-ink ${
            compact ? "text-[16px]" : "text-[17px]"
          }`}
        >
          {title}
        </h4>
      </div>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-2">
            <span aria-hidden className="mt-[10px] h-px w-2.5 shrink-0 bg-ink-3" />
            <span className="max-w-[52ch]">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Beacon AI: full-bleed hero shot, five story blocks, architecture. */
function FeaturedProject({ p }: { p: Project }) {
  const [hero, ...rest] = p.shots;

  return (
    <article className="border-t-2 border-ink pt-10">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
            Featured project
          </span>
          <span className="font-mono text-[12px] text-ink-3">
            {p.year} · {p.status.toLowerCase()}
          </span>
        </div>

        <h3 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
          {p.name}
        </h3>
        <p className="mt-2.5 font-mono text-[14px] text-ink-2">{p.category}</p>
        <p className="mt-6 max-w-[64ch] text-[18px] leading-[1.6] text-ink-2">{p.tagline}</p>
      </Reveal>

      {hero ? (
        <Reveal delay={80} className="mt-10">
          <ProjectShot shot={hero} aspect="16 / 9" priority />
        </Reveal>
      ) : null}

      <Reveal delay={60} className="mt-12">
        <p className="max-w-[70ch] text-[17px] leading-[1.7] text-ink-2">{p.overview}</p>
      </Reveal>

      <Reveal className="mt-16">
        <h4 className="font-mono text-[12px] text-ink-3">How it is built</h4>
        <div className="mt-6 grid gap-x-14 gap-y-9 md:grid-cols-2">
          {p.story?.map((s) => (
            <StoryBlock key={s.n} n={s.n} title={s.title} points={s.points} />
          ))}
        </div>
      </Reveal>

      {/* The diagram gets the full column. Beside the screenshots it was about
          440px wide, which forced a five-node chain to scroll on a 1440px
          desktop — scrolling is meant to be the phone fallback, not the
          default. */}
      <Reveal className="mt-16">
        {p.stackLayers && p.flows ? (
          <ArchitectureDiagram layers={p.stackLayers} flows={p.flows} />
        ) : null}
      </Reveal>

      {rest.length ? (
        <Reveal delay={60} className="mt-10 grid gap-6 sm:grid-cols-2">
          {rest.slice(0, 2).map((shot) => (
            <ProjectShot key={shot.file} shot={shot} aspect="16 / 10" />
          ))}
        </Reveal>
      ) : null}

      <Reveal className="mt-14 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
        <TechList items={p.tech} />
        <ProjectLinks github={p.github} live={p.live} />
      </Reveal>
    </article>
  );
}

/** Skills Up: alternating two-column, text left and screens right. */
function SecondaryProject({ p }: { p: Project }) {
  return (
    <article className="border-t border-line pt-10">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16">
        <Reveal>
          <p className="font-mono text-[12px] text-ink-3">
            {p.year} · {p.status.toLowerCase()}
          </p>
          <h3 className="mt-4 font-display text-[clamp(1.6rem,3.4vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
            {p.name}
          </h3>
          <p className="mt-2 font-mono text-[13.5px] text-ink-2">{p.category}</p>
          <p className="mt-5 max-w-[56ch] text-[16.5px] leading-[1.65] text-ink-2">{p.tagline}</p>
          <p className="mt-4 max-w-[56ch] text-[15.5px] leading-[1.7] text-ink-2">{p.overview}</p>

          <div className="mt-9 space-y-7">
            {p.story?.map((s) => (
              <StoryBlock key={s.n} n={s.n} title={s.title} points={s.points} compact />
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {p.shots.map((shot) => (
            <ProjectShot key={shot.file} shot={shot} aspect="16 / 10" />
          ))}

          <div className="space-y-7 border-t border-line pt-7">
            <TechList items={p.tech} />
            <ProjectLinks github={p.github} live={p.live} />
          </div>
        </Reveal>
      </div>

      {/* Full width, not in the right rail. A four-node chain does not fit a
          ~335px column, and it was clipping "Player" behind a scrollbar on a
          1440px desktop — the same mistake as Beacon's, in a narrower column. */}
      {p.stackLayers && p.flows ? (
        <Reveal className="mt-12">
          <ArchitectureDiagram layers={p.stackLayers} flows={p.flows} />
        </Reveal>
      ) : null}
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      index="02"
      rail="selected work"
      title="Building products. Solving engineering problems."
      lede="Products and engineering projects spanning full-stack development, backend architecture, integrations and AI-powered experiences."
    >
      <div className="space-y-24 md:space-y-32">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} p={p} />
        ))}
        {others.map((p) => (
          <SecondaryProject key={p.slug} p={p} />
        ))}
      </div>
    </Section>
  );
}
