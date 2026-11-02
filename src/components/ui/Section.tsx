import type { ReactNode } from "react";

type Props = {
  id: string;
  /** Two-digit index. The page is a sequence, so the numbering is information. */
  index: string;
  /** Short machine-readable label under the index — not a decorative eyebrow. */
  rail: string;
  title: string;
  lede?: string;
  tint?: boolean;
  children: ReactNode;
};

/**
 * Every section shares one frame: a narrow monospace rail on the left carrying
 * position and category, and a wide column of content on the right.
 *
 * The rail is what keeps this page off the identical-card-grid path — the same
 * structure repeats, so each section can vary its content layout freely
 * without the page losing its spine. Below `lg` the rail becomes a single
 * inline line rather than a column, because a 200px gutter on a phone is a
 * waste of the only axis that matters.
 */
export function Section({ id, index, rail, title, lede, tint, children }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line ${tint ? "bg-sunk" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-y-8 lg:grid-cols-[132px_minmax(0,1fr)] lg:gap-x-16">
          <div className="flex items-baseline gap-3 lg:block">
            <span className="font-mono text-[13px] leading-none text-accent">{index}</span>
            <span className="font-mono text-[13px] leading-none text-ink-3 lg:mt-3 lg:block">
              {rail}
            </span>
          </div>

          {/* min-w-0 is load-bearing. A grid track sized `auto` takes its
              width from the widest max-content inside it, so one horizontally
              scrollable diagram was stretching the whole column past the
              viewport and pushing every heading off the right edge on a
              phone. */}
          <div className="min-w-0">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-ink">
              {title}
            </h2>
            {lede ? (
              <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-2">{lede}</p>
            ) : null}
            <div className="mt-12">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
