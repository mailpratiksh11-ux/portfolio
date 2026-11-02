import { education, experience } from "@/lib/data";
import { Section } from "@/components/ui/Section";

/**
 * A timeline whose line is a real border rather than a decorative column of
 * dots. The current role carries a filled marker; everything else is hollow,
 * which is the only state worth distinguishing.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      rail="history"
      title="Where I&rsquo;ve been building."
      tint
    >
      <div className="border-l border-line pl-7 sm:pl-10">
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="relative pb-14 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[33px] top-[7px] h-[9px] w-[9px] rounded-full border sm:-left-[45px] ${
                job.current ? "border-accent bg-accent" : "border-ink-3 bg-sunk"
              }`}
            />

            <p className="font-mono text-[13px] text-ink-2">{job.period}</p>

            <h3 className="mt-3 font-display text-[21px] font-semibold tracking-[-0.01em] text-ink">
              {job.role}
            </h3>
            <p className="mt-1.5 text-[15px] text-ink-2">
              {job.company} — {job.product}, {job.location}
            </p>

            <p className="mt-4 max-w-[64ch] text-[16px] leading-relaxed text-ink-2">
              {job.overview}
            </p>

            <ul className="mt-5 space-y-3">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-[10px] h-px w-3 shrink-0 bg-ink-3" />
                  <span className="max-w-[64ch]">{pt}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <li
                  key={t}
                  className="rounded border border-line bg-paper px-2.5 py-1 font-mono text-[12px] text-ink-2"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="relative pt-2">
          <span
            aria-hidden
            className="absolute -left-[33px] top-[9px] h-[9px] w-[9px] rounded-full border border-ink-3 bg-sunk sm:-left-[45px]"
          />
          <p className="font-mono text-[13px] text-ink-2">{education.period}</p>
          <h3 className="mt-3 font-display text-[21px] font-semibold tracking-[-0.01em] text-ink">
            {education.degree}
          </h3>
          <p className="mt-1.5 text-[15px] text-ink-2">
            {education.school}, {education.location}
          </p>
        </article>
      </div>
    </Section>
  );
}
