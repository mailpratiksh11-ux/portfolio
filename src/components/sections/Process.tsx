import { process } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="How I work"
          title="A process designed to remove your risk"
          desc="Hiring a freelancer shouldn't feel like a gamble. You'll always know what's being built, what it costs, and where things stand."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-10 border-t border-white/5 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.step}>
                <p className="font-mono text-[13px] text-violet-400">{p.step}</p>
                <h3 className="mt-2 text-[15px] font-medium text-zinc-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
