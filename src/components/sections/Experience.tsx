import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Experience" title="Where I've built things" />

        <div className="relative mt-14 max-w-3xl">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute top-2 bottom-8 left-[7px] w-px bg-gradient-to-b from-violet-400/70 via-violet-400/20 to-transparent"
          />

          <div className="space-y-10">
            {experience.map((exp) => {
              const isEdu = exp.points.length === 0;
              return (
                <Reveal key={`${exp.role}-${exp.period}`} className="relative pl-10">
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute top-2 left-0 grid size-[15px] place-items-center rounded-full border border-violet-400/60 bg-base"
                  >
                    <span className="size-[6px] rounded-full bg-violet-400" />
                  </span>

                  <article className="rounded-xl border border-white/8 bg-white/[0.02] p-7 transition-colors duration-200 hover:border-violet-400/30">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="flex items-center gap-2.5 text-lg font-medium text-zinc-50">
                          {isEdu ? (
                            <GraduationCap className="size-4 text-violet-300/80" />
                          ) : (
                            <Briefcase className="size-4 text-violet-300/80" />
                          )}
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-violet-300">{exp.company}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 flex items-center gap-1.5 text-[13px] text-zinc-500">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </p>

                    {exp.points.length > 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {exp.points.map((pt) => (
                          <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-violet-400/70" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.tech.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1 text-xs text-violet-200/90"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
