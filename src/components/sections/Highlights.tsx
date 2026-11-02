import { highlights } from "@/lib/data";
import { Section } from "@/components/ui/Section";

/**
 * Four areas, as rows rather than cards.
 *
 * A card grid would make these look like four equivalent product features.
 * They are not — they are overlapping areas of one person's experience, and a
 * ruled list reads that way while keeping the eye on one column of text.
 */
export function Highlights() {
  return (
    <Section
      id="highlights"
      index="01"
      rail="focus"
      title="Engineering beyond the basics."
      lede="Four areas where most of my work has landed so far."
    >
      <ul className="-mt-2">
        {highlights.map((h) => (
          <li
            key={h.n}
            className="grid gap-x-8 gap-y-3 border-t border-line py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:py-9"
          >
            <span className="font-display text-[2rem] font-medium leading-none tracking-[-0.02em] text-ink-3 sm:w-[64px] sm:text-[2.5rem]">
              {h.n}
            </span>
            <div>
              <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">
                {h.title}
              </h3>
              <p className="mt-2.5 max-w-[66ch] text-[16px] leading-relaxed text-ink-2">{h.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
