import { services } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Services"
          title="What I can take off your plate"
          desc="Everything here is something I've done in production. Not sure where your problem fits? Just describe it."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-x-14 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="group border-b border-white/5 py-6">
                <h3 className="text-[15px] font-medium text-zinc-100 transition-colors duration-150 group-hover:text-violet-200">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
