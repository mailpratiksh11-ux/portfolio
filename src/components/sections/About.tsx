import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const facts = [
  "Software engineer at Simplify3x, building SimplifyQA, an enterprise test management platform.",
  "Day job: RBAC, Jira integrations, and queue-driven export pipelines.",
  "Built two complete products solo: Beacon AI and Skills Up.",
  "Have personally handled OAuth flows, webhook retries, video streaming, and deployment.",
  "Habits: think about failure cases early, keep every change reviewable.",
];

export function About() {
  return (
    <section id="about" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="A bit about me" />
          <Reveal delay={0.08}>
            <ul className="max-w-2xl space-y-3.5">
              {facts.map((f) => (
                <li key={f} className="flex gap-3 leading-relaxed text-zinc-400">
                  <span className="mt-[11px] size-1 shrink-0 rounded-full bg-violet-400/70" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
