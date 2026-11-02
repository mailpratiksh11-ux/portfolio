import { site } from "@/lib/data";

/**
 * The closing section drops the rail and goes dark.
 *
 * It is the only inversion on the page, which is what makes it read as an
 * ending rather than a ninth row of the same table. One primary action; the
 * other three are quiet links, because a wall of equal-weight buttons asks the
 * reader to make a decision they do not have enough information to make.
 */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-[26ch]">
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            Have an interesting problem? Let&rsquo;s build something.
          </h2>
        </div>

        <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-white/60">
          I&rsquo;m always interested in talking about engineering challenges, product ideas, and
          opportunities to build something that lasts longer than a sprint.
        </p>

        <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-white/90"
          >
            {site.email}
          </a>

          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[14px]">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/60 underline decoration-white/20 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white/60"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/60 underline decoration-white/20 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white/60"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.leetcode}
                target="_blank"
                rel="noreferrer noopener"
                className="text-white/60 underline decoration-white/20 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white/60"
              >
                LeetCode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
