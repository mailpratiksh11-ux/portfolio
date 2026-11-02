"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

/**
 * Sticky header with an active-section indicator.
 *
 * The indicator is driven by IntersectionObserver rather than scroll offsets:
 * it reports which section is actually in view instead of recomputing
 * positions on every scroll event, so it stays correct when sections change
 * height at different breakpoints.
 */
export function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // The topmost intersecting section wins, so scrolling through a tall
        // section does not hand the indicator to the one below it early.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -55% 0px", threshold: 0 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex shrink-0 items-baseline gap-2.5">
          {/* Without nowrap this breaks to two lines at 390px and shoves the
              nav into the gutter. */}
          <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">
            {site.name}
          </span>
          <span className="hidden font-mono text-[12px] text-ink-3 sm:inline">
            {site.role.toLowerCase()}
          </span>
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 sm:gap-2">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block whitespace-nowrap px-1.5 py-2 text-[13px] transition-colors sm:px-3 sm:text-[14px] ${
                      isActive ? "text-ink" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-1.5 -bottom-px h-px bg-accent transition-opacity sm:inset-x-3 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
