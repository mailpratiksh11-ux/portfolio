import { stack } from "@/lib/data";
import { Section } from "@/components/ui/Section";

/**
 * Grouped lists, no proficiency bars.
 *
 * A bar claiming "Node.js 85%" is unfalsifiable and everyone reading it knows
 * that. The grouping is the only honest signal available: these are the things
 * that appear in the work above, arranged so a reader can scan for the one
 * they care about.
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
        {stack.map((group) => (
          <div key={group.group} className="border-t border-line pt-5">
            <dt className="font-mono text-[12px] text-ink-3">{group.group}</dt>
            <dd className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
              {group.items.map((item) => (
                <span key={item} className="text-[15px] text-ink">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
