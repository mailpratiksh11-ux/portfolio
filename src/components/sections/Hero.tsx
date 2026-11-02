import { site } from "@/lib/data";

/**
 * A schematic of a send queue draining — the mechanism both the day job and
 * Beacon AI are built around.
 *
 * It fills once on load and then rests. A loop would pull the eye off the
 * headline for as long as the page is open, and nothing here is worth that.
 * Under prefers-reduced-motion the global rule collapses the duration and
 * `both` leaves every bar at its final width, so the schematic arrives
 * complete rather than vanishing.
 *
 * Job ids are deliberately abstract. This is a diagram of a mechanism, not a
 * dashboard — inventing recipients or throughput figures to fill it would be
 * dressing the page in claims that cannot be backed up.
 */
const JOBS = [
  { id: "job.01", state: "done" },
  { id: "job.02", state: "done" },
  { id: "job.03", state: "done" },
  { id: "job.04", state: "done" },
  { id: "job.05", state: "active" },
  { id: "job.06", state: "queued" },
];

function QueueSchematic() {
  return (
    <figure
      aria-hidden
      className="settle rounded-lg border border-line bg-sunk p-5"
      style={{ animationDelay: "320ms" }}
    >
      <figcaption className="mb-4 flex items-baseline justify-between font-mono text-[12px]">
        <span className="text-ink-2">worker · send queue</span>
        <span className="text-ink-3">resumable</span>
      </figcaption>

      <ul className="space-y-2.5">
        {JOBS.map((job, i) => (
          <li key={job.id} className="flex items-center gap-3 font-mono text-[11px]">
            <span className="w-[52px] shrink-0 text-ink-3">{job.id}</span>
            <span className="h-[5px] flex-1 overflow-hidden rounded-full bg-line">
              <span
                className="queue-fill block h-full rounded-full"
                style={
                  {
                    "--w": job.state === "done" ? "100%" : job.state === "active" ? "46%" : "0%",
                    animationDelay: `${420 + i * 110}ms`,
                    background: job.state === "queued" ? "transparent" : "var(--color-accent)",
                  } as React.CSSProperties
                }
              />
            </span>
            <span
              className={`w-[46px] shrink-0 text-right ${
                job.state === "done"
                  ? "text-ink-2"
                  : job.state === "active"
                    ? "text-accent"
                    : "text-ink-3"
              }`}
            >
              {job.state}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 border-t border-line pt-3 font-mono text-[11px] leading-relaxed text-ink-3">
        cursor held in redis · progress streamed over socket.io
      </p>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="settle font-mono text-[13px] text-ink-2">Hi, I&rsquo;m Pratik.</p>

            <h1
              className="settle mt-5 font-display text-[clamp(2.4rem,6.2vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              Building software that solves real problems.
            </h1>

            <p
              className="settle mt-7 max-w-[56ch] text-[18px] leading-[1.6] text-ink-2"
              style={{ animationDelay: "160ms" }}
            >
              I&rsquo;m a software engineer working on enterprise SaaS — queue-driven backends,
              multi-tenant data, and the integration layer that keeps two systems agreeing with
              each other.
            </p>

            <dl
              className="settle mt-9 flex flex-wrap gap-x-10 gap-y-4 font-mono text-[13px]"
              style={{ animationDelay: "220ms" }}
            >
              <div>
                <dt className="text-ink-3">Currently</dt>
                <dd className="mt-1.5 text-ink">
                  {site.currentRole}, {site.currentCompany}
                </dd>
              </div>
              <div>
                <dt className="text-ink-3">Based in</dt>
                <dd className="mt-1.5 text-ink">{site.location}</dd>
              </div>
            </dl>

            <div
              className="settle mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "280ms" }}
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

              <span aria-hidden className="mx-1 hidden h-5 w-px bg-line sm:block" />

              <ul className="flex items-center gap-4 font-mono text-[13px]">
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
          </div>

          <QueueSchematic />
        </div>
      </div>
    </section>
  );
}
