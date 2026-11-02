import { projects } from "@/lib/data";
import { Section } from "@/components/ui/Section";

/**
 * Each project gets an architecture strip instead of a screenshot.
 *
 * There are no product screenshots in the repository, and a stock mockup or an
 * invented dashboard would be the most dishonest thing on the page. The data
 * path is the part worth showing anyway — it is what the work actually was,
 * and it survives a redesign of the UI it describes.
 */
const FLOWS: Record<string, string[]> = {
  "beacon-ai": ["Browser", "Express API", "BullMQ · Redis", "Gmail API", "Recipient"],
  "skills-up": ["Upload", "GridFS chunks", "Range request", "Player"],
};

function ArchitectureStrip({ slug }: { slug: string }) {
  const nodes = FLOWS[slug];
  if (!nodes) return null;

  return (
    <figure className="rounded-lg border border-line bg-sunk p-5 sm:p-6">
      <figcaption className="mb-5 font-mono text-[12px] text-ink-3">data path</figcaption>
      {/* Vertical, not horizontal. Laid out in a row these wrapped into
          disconnected lines with connectors dangling off the end, which read as
          three separate groups rather than one path. A column cannot wrap. */}
      <ol>
        {nodes.map((node, i) => (
          <li key={node} className="relative flex items-center gap-3.5 pb-4 last:pb-0">
            {i < nodes.length - 1 ? (
              <span aria-hidden className="absolute left-[5px] top-3 h-full w-px bg-ink-3/45" />
            ) : null}
            <span
              aria-hidden
              className={`relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border bg-paper ${
                i === 0 || i === nodes.length - 1 ? "border-accent" : "border-ink-3"
              }`}
            />
            <span className="font-mono text-[12.5px] leading-none text-ink">{node}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export function Projects() {
  return (
    <Section
      id="work"
      index="02"
      rail="work"
      title="Selected work."
      lede="Two products I built end to end, and what was actually hard about each."
    >
      <div className="space-y-20 md:space-y-28">
        {projects.map((p, i) => (
          <article key={p.slug} className="border-t border-line pt-10">
            <header className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-ink">
                {p.name}
              </h3>
              <span className="font-mono text-[13px] text-ink-2">{p.kind}</span>
              <span className="ml-auto flex items-center gap-3 font-mono text-[12px] text-ink-3">
                <span>{p.year}</span>
                <span
                  className={`rounded px-2 py-0.5 ${
                    p.status === "Live" ? "bg-accent-soft text-accent" : "bg-sunk text-ink-2"
                  }`}
                >
                  {p.status.toLowerCase()}
                </span>
              </span>
            </header>

            <p className="mt-5 max-w-[68ch] text-[17px] leading-relaxed text-ink-2">{p.intro}</p>

            {/* Alternating composition: the strip leads on the second project,
                so two case studies in a row do not read as a template. */}
            <div
              className={`mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="space-y-7">
                <div>
                  <h4 className="font-mono text-[12px] text-ink-3">The problem</h4>
                  <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-ink-2">
                    {p.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-[12px] text-ink-3">What I did</h4>
                  <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-ink-2">
                    {p.contribution}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {p.built.map((b) => (
                      <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[10px] h-px w-3 shrink-0 bg-ink-3" />
                        <span className="max-w-[58ch]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <ArchitectureStrip slug={p.slug} />

                <div>
                  <h4 className="font-mono text-[12px] text-ink-3">Built with</h4>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-line px-2.5 py-1 font-mono text-[12px] text-ink-2"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-5 font-mono text-[13px]">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink underline decoration-line underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
                  >
                    Source
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent underline decoration-accent/40 underline-offset-[5px] transition-colors hover:decoration-accent"
                    >
                      Visit the product
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
