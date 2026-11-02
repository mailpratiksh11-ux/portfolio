import { focus, site } from "@/lib/data";

/**
 * Typography carries this hero. There is no panel beside the headline.
 *
 * The previous version put a queue schematic here, which made one
 * specialisation the face of the whole portfolio. Replacing it with a
 * different technical diagram would repeat the mistake in a wider shape, and
 * a decorative composition with no information in it is just something to
 * fill the right-hand column.
 *
 * The focus row carries the structure the panel used to: it is real content,
 * it sets up the sections below, and it reads as breadth rather than as
 * decoration.
 */
export function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <p className="settle font-mono text-[12px] uppercase tracking-[0.1em] text-ink-2">
          Software engineer · Full-stack developer
        </p>

        <h1
          className="settle mt-7 max-w-[17ch] font-display text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
          style={{ animationDelay: "80ms" }}
        >
          Building software that solves real problems.
        </h1>

        <p
          className="settle mt-8 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.2rem)] leading-[1.6] text-ink-2"
          style={{ animationDelay: "160ms" }}
        >
          I&rsquo;m a software engineer building enterprise SaaS applications, scalable backend
          systems and AI-powered products. I enjoy turning complex engineering challenges into
          reliable, practical solutions.
        </p>

        <p
          className="settle mt-6 flex items-center gap-2.5 font-mono text-[13px] text-ink-2"
          style={{ animationDelay: "200ms" }}
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          Currently building at {site.currentCompany}.
        </p>

        <div
          className="settle mt-10 flex flex-wrap items-center gap-x-3 gap-y-4"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="#work"
            className="rounded-md bg-accent px-5 py-3 text-[15px] font-medium text-paper transition-colors hover:bg-[#2d55c9]"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink-3 hover:bg-sunk"
          >
            Get in touch
          </a>

          <span aria-hidden className="mx-2 hidden h-5 w-px bg-line sm:block" />

          <ul className="flex items-center gap-5 font-mono text-[13px]">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-2 underline decoration-line underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-2 underline decoration-line underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-ink-2 underline decoration-line underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        {/* Three columns of real content, which is what gives the hero its
            structure now that nothing sits beside the headline. */}
        <ul
          className="settle mt-20 grid gap-x-12 gap-y-8 border-t border-line pt-9 sm:grid-cols-3 md:mt-24"
          style={{ animationDelay: "340ms" }}
        >
          {focus.map((f) => (
            <li key={f.n}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] text-accent">{f.n}</span>
                <h2 className="font-display text-[16px] font-semibold tracking-[-0.01em] text-ink">
                  {f.title}
                </h2>
              </div>
              <p className="mt-2.5 max-w-[34ch] text-[15px] leading-relaxed text-ink-2">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
