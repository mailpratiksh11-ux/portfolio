"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[13px] tracking-widest text-violet-400 uppercase">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 text-balance sm:text-5xl">
            Need a developer who can start immediately?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-zinc-400">
            A new product, a stuck feature, a backend that needs to scale. I reply within 24
            hours. Let&apos;s build something your users will love.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Project%20inquiry`}
              className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-colors duration-150 hover:bg-violet-400"
            >
              <Mail className="size-4" />
              {site.email}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm text-zinc-300 transition-colors duration-150 hover:border-white/25 hover:text-zinc-100"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Copy className="size-4" /> Copy email
                </>
              )}
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-zinc-500">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-zinc-200"
            >
              <GitHubIcon className="size-4" /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-zinc-200"
            >
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-600">{site.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
