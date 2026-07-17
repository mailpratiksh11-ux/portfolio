"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#help", label: "How I can help" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/5 bg-base/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-baseline gap-2 text-[15px] font-semibold tracking-tight text-zinc-100">
          Pratik Sharma
          <span className="hidden font-mono text-xs font-normal text-zinc-500 sm:inline">
            / full-stack developer
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 transition-colors duration-150 hover:text-zinc-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-violet-400"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="grid size-9 place-items-center text-zinc-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-white/5 bg-base/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-violet-500 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
