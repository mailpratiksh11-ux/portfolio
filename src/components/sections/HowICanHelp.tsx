import { ArrowRight } from "lucide-react";
import { howICanHelp } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function HowICanHelp() {
  return (
    <section id="help" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="How I can help"
          title="Wherever your product is stuck, that's where I start"
          desc="A stuck bug, a delayed feature, an 80%-done MVP: all normal, all fixable."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="grid overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
            {howICanHelp.map((item, i) => (
              <div
                key={item.title}
                className={`bg-base p-7 transition-colors duration-150 hover:bg-violet-400/[0.04] ${
                  i % 3 !== 2 ? "lg:border-r lg:border-white/5" : ""
                } ${i % 2 !== 1 ? "max-lg:sm:border-r max-lg:sm:border-white/5" : ""} ${
                  i < 3 ? "lg:border-b lg:border-white/5" : ""
                } ${i < 4 ? "max-lg:sm:border-b max-lg:sm:border-white/5" : ""} ${
                  i < 5 ? "max-sm:border-b max-sm:border-white/5" : ""
                }`}
              >
                <h3 className="text-[15px] font-medium text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
          >
            Let&apos;s discuss your project
            <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
