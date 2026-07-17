import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { projects, site } from "@/lib/data";
import { GitHubIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d11]">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="mx-auto rounded bg-white/[0.04] px-3 py-0.5 font-mono text-[10px] text-zinc-500">
          {url}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/** Static mock of the Beacon AI campaign view — layout only, no invented metrics. */
function BeaconMock() {
  return (
    <Frame url="beacon / campaigns">
      <div className="flex gap-3">
        <div className="hidden w-24 shrink-0 space-y-1.5 sm:block">
          {["Campaigns", "Contacts", "AI Writer", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`rounded px-2 py-1.5 text-[10px] ${
                i === 0 ? "bg-white/[0.06] font-medium text-zinc-200" : "text-zinc-600"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-medium text-zinc-200">Campaign: outreach batch</div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 px-2 py-0.5 text-[9px] text-emerald-300">
              <span className="size-1 rounded-full bg-emerald-400" />
              sending
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-2/3 rounded-full bg-zinc-300" />
          </div>
          <div className="space-y-1.5">
            {["Queued", "In progress", "Sent"].map((row) => (
              <div key={row} className="flex items-center justify-between rounded border border-white/5 px-2.5 py-1.5">
                <span className="text-[10px] text-zinc-500">{row}</span>
                <span className="h-1.5 w-16 rounded-full bg-white/8" />
              </div>
            ))}
          </div>
          <div className="rounded border border-white/8 bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-1.5 text-[9px] font-medium tracking-wide text-zinc-500 uppercase">
              <span className="size-1 rounded-full bg-violet-400" />
              AI assistant
            </div>
            <div className="mt-2 space-y-1.5">
              {/* user message */}
              <div className="ml-auto w-3/5 rounded-lg rounded-br-sm border border-white/8 bg-white/[0.05] px-2 py-1.5">
                <div className="text-[9px] text-zinc-400">Write a short intro email for a SaaS founder</div>
              </div>
              {/* AI reply */}
              <div className="w-4/5 rounded-lg rounded-bl-sm border border-violet-400/15 bg-violet-400/[0.06] px-2 py-1.5">
                <div className="space-y-1">
                  <div className="h-1 w-11/12 rounded-full bg-white/10" />
                  <div className="h-1 w-4/5 rounded-full bg-white/10" />
                  <div className="h-1 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Static mock of the Skills Up course player — layout only. */
function SkillsUpMock() {
  return (
    <Frame url="skills up / course player">
      <div className="flex gap-3">
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="relative grid aspect-video place-items-center rounded-lg border border-white/5 bg-white/[0.02]">
            <span className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
              <span className="ml-0.5 border-y-6 border-l-9 border-y-transparent border-l-zinc-300" />
            </span>
            <div className="absolute inset-x-3 bottom-2.5">
              <div className="h-1 overflow-hidden rounded-full bg-white/8">
                <div className="h-full w-2/5 rounded-full bg-zinc-300" />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/3 rounded-full bg-white/5" />
          </div>
        </div>
        <div className="hidden w-28 shrink-0 space-y-1.5 sm:block">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 rounded px-2 py-1.5 ${
                i === 3 ? "bg-white/[0.06]" : ""
              }`}
            >
              <span className="font-mono text-[9px] text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
              <span className={`h-1.5 flex-1 rounded-full ${i === 3 ? "bg-white/20" : "bg-white/8"}`} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

const mocks: Record<string, () => ReactNode> = {
  "Beacon AI": BeaconMock,
  "Skills Up": SkillsUpMock,
};

export function Projects() {
  return (
    <section id="work" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Work"
          title="Projects built end-to-end"
          desc="Two complete products, designed and shipped solo."
        />

        <div className="mt-14 space-y-20">
          {projects.map((p) => {
            const Mock = mocks[p.name];
            return (
              <Reveal key={p.name}>
                <article className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <p className="font-mono text-[13px] text-violet-400">{p.kind}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">
                      {p.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-400">{p.summary}</p>

                    <div className="mt-7">
                      <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                        What I built
                      </p>
                      <ul className="mt-3 space-y-2">
                        {p.built.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-violet-400/70" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 lg:pt-1">
                    {Mock && <Mock />}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1 text-xs text-violet-200/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-150 hover:border-white/25"
                      >
                        <GitHubIcon className="size-4" />
                        View code
                      </a>
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200"
                        >
                          Live demo <ArrowUpRight className="size-4" />
                        </a>
                      ) : (
                        <a
                          href={`mailto:${site.email}?subject=Walkthrough%20request%3A%20${encodeURIComponent(p.name)}`}
                          className="text-sm text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-300 hover:underline"
                        >
                          Ask me for a walkthrough
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
