"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title="Common questions" />

          <Reveal delay={0.08}>
            <div className="divide-y divide-white/5 border-y border-white/5">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-[15px] font-medium text-zinc-100">{f.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`shrink-0 ${isOpen ? "text-violet-300" : "text-zinc-500"}`}
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-zinc-400">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
