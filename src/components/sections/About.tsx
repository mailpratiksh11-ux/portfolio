import { about, exploring, site } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      index="06"
      rail="about"
      title="A little about the person behind the code."
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="space-y-5">
          {about.map((para) => (
            <p key={para.slice(0, 32)} className="max-w-[62ch] text-[17px] leading-[1.65] text-ink-2">
              {para}
            </p>
          ))}

          <p className="pt-2 font-mono text-[13px] text-ink-3">
            Also on{" "}
            <a
              href={site.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-2 underline decoration-line underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent"
            >
              LeetCode
            </a>
            , when a problem needs sleeping on.
          </p>
        </div>

        {/* Currently exploring, kept beside the bio rather than given its own
            section. It is the same thought — what I am interested in — and
            splitting it in two would pad the page without adding anything. */}
        <div>
          <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink">
            Always learning. Always building.
          </h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-2">
            What I&rsquo;m reading about and poking at right now.
          </p>

          <ul className="mt-7 space-y-6">
            {exploring.map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h4 className="text-[16px] font-medium text-ink">{item.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{item.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
