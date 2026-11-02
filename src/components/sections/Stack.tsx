import { stack } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { BrandMark } from "@/components/ui/BrandMark";

/**
 * Grouped lists with brand marks, and no proficiency bars.
 *
 * A bar claiming "Node.js 85%" is unfalsifiable and every reader knows it.
 * The grouping is the honest signal: these are the things that appear in the
 * work above, arranged so someone can scan for the one they care about.
 */
export function Stack() {
  return (
    <Section
      id="stack"
      index="05"
      rail="tooling"
      title="Tools I use to build things."
      lede="Everything here appears somewhere in the work above."
      tint
    >
      <dl className="grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => {
          const gold = "tone" in group && group.tone === "gold";
          return (
            <div
              key={group.group}
              className={`border-t pt-5 ${gold ? "border-gold/35" : "border-line"}`}
            >
              <dt className={`font-mono text-[12px] ${gold ? "text-gold" : "text-ink-3"}`}>
                {group.group}
              </dt>
              <dd className="mt-4">
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <BrandMark name={item} tone={gold ? "gold" : undefined} />
                      <span className="text-[15px] leading-none text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
