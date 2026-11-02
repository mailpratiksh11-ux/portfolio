"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children once, when they first enter the viewport.
 *
 * Disconnects after firing — a reveal that replays every time you scroll past
 * is a distraction, not a flourish. Reduced-motion visitors skip straight to
 * the shown state rather than getting a faster version of the same movement.
 *
 * The element starts at opacity 0, so a visitor without JavaScript would see
 * nothing. The noscript rule in layout.tsx forces [data-reveal] visible to
 * cover that; the markup is in the HTML either way, so crawlers are unaffected.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-[opacity,transform] duration-[600ms] ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
