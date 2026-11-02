import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Shot } from "@/lib/data";

/**
 * A product screenshot, or a frame naming the one that belongs here.
 *
 * The existence check runs at build time — this is a server component in a
 * statically exported app — so dropping a PNG at the path in data.ts and
 * rebuilding swaps the placeholder for the real thing with no code change.
 *
 * The placeholder deliberately looks unfinished. A stock browser mockup with
 * invented charts in it would read as the actual product to anyone skimming,
 * and the one thing worse than a missing screenshot is a fake one.
 */
export function ProjectShot({
  shot,
  aspect = "16 / 10",
  priority = false,
}: {
  shot: Shot;
  aspect?: string;
  priority?: boolean;
}) {
  const exists = existsSync(join(process.cwd(), "public", shot.file));

  return (
    <figure className="group overflow-hidden rounded-lg border border-line bg-sunk">
      {exists ? (
        <div className="overflow-hidden" style={{ aspectRatio: aspect }}>
          {/* Plain img rather than next/image: the app is a static export, so
              the optimiser is unavailable without extra configuration and a
              loader would buy nothing for a handful of screenshots. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.file}
            alt={`${shot.label} — screenshot`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 px-6 text-center"
          style={{ aspectRatio: aspect }}
        >
          <span className="font-mono text-[12px] text-ink-3">{shot.label}</span>
          <span className="font-mono text-[11px] text-ink-3/70">
            add {shot.file.replace(/^\//, "")}
          </span>
        </div>
      )}
      <figcaption className="border-t border-line bg-paper px-4 py-2.5 font-mono text-[11.5px] text-ink-2">
        {shot.label}
      </figcaption>
    </figure>
  );
}
