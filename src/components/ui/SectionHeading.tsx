import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-[13px] tracking-widest text-violet-400 uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 text-balance sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-zinc-400">{desc}</p>}
    </Reveal>
  );
}
