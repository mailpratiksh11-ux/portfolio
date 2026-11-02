import { problems } from "@/lib/data";
import { Section } from "@/components/ui/Section";

/**
 * Native <details> rather than a React accordion.
 *
 * It works before hydration, it is keyboard-operable and announced correctly
 * without any ARIA of mine, and Ctrl+F finds text inside a closed panel in
 * most browsers. Motion here answers a click, which is the kind worth having.
 *
 * The first entry opens by default so the section shows its shape rather than
 * four closed bars that could be hiding anything.
 */
export function Problems() {
  return (
    <Section
      id="problems"
      index="04"
      rail="case notes"
      title="Not just building features. Solving problems."
      lede="Four things that were harder than they looked, and what the fix actually was."
    >
      <div className="border-t border-line">
        {problems.map((p, i) => (
          <details key={p.title} open={i === 0} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-baseline gap-4 py-6 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-[12px] text-ink-3">{p.context}</span>
              <h3 className="flex-1 font-display text-[18px] font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-accent sm:text-[20px]">
                {p.title}
              </h3>
              <span
                aria-hidden
                className="relative mt-2 h-[9px] w-[9px] shrink-0 text-ink-3 transition-transform duration-200 group-open:rotate-45"
              >
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
              </span>
            </summary>

            <div className="grid gap-x-10 gap-y-6 pb-9 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-[12px] text-ink-3">What was wrong</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.problem}</p>
              </div>
              <div>
                <h4 className="font-mono text-[12px] text-ink-3">Why it was hard</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.hard}</p>
              </div>
              <div>
                <h4 className="font-mono text-[12px] text-ink-3">The approach</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.approach}</p>
              </div>
              <div>
                <h4 className="font-mono text-[12px] text-ink-3">Where it landed</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">{p.outcome}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
