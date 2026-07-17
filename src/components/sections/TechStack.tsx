import { stackIcons } from "@/lib/stackIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Stack"
          title="Stack I use"
          desc="Chosen for what your product needs, not for my résumé."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {stackIcons.map((icon) => (
              <div key={icon.name} className="group flex flex-col items-center gap-3">
                <div className="grid size-16 place-items-center rounded-full border border-white/8 bg-white/[0.03] transition-colors duration-200 group-hover:border-white/20 group-hover:bg-white/[0.06] sm:size-[72px]">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-7 sm:size-8"
                    fill={icon.color}
                    aria-hidden="true"
                  >
                    <path d={icon.path} />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-12 font-mono text-[13px] leading-relaxed text-zinc-600">
            Also: BullMQ · GridFS · Webhooks · OAuth 2.0 · JWT · RBAC · Google APIs · GitLab ·
            Multi-tenant architecture · Queue-driven design · Microservices
          </p>
        </Reveal>
      </div>
    </section>
  );
}
