"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
      <motion.p
        {...fade(0)}
        className="flex items-center gap-2.5 font-mono text-[13px] tracking-widest text-zinc-500 uppercase"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        Open to freelance work
      </motion.p>

      <motion.h1
        {...fade(0.08)}
        className="mt-8 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
      >
        I help startups and businesses ship{" "}
        <span className="text-violet-300">reliable web applications</span> that scale.
      </motion.h1>

      <motion.p {...fade(0.16)} className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
        I&apos;m Pratik Sharma, a full-stack developer. By day I build enterprise SaaS. For
        clients, I ship complete products and fix the ones that are stuck.
      </motion.p>

      <motion.div {...fade(0.24)} className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-colors duration-150 hover:bg-violet-400"
        >
          Let&apos;s discuss your project
        </a>
        <a
          href="#work"
          className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors duration-150 hover:border-violet-400/40 hover:text-violet-200"
        >
          View my work
          <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <motion.p {...fade(0.32)} className="mt-14 font-mono text-[13px] text-zinc-600">
        Angular · React · Node.js · TypeScript · MongoDB · Redis · BullMQ · Socket.IO
      </motion.p>
    </section>
  );
}
