import { BRAND_MARKS } from "@/lib/brandMarks";

/**
 * Darken a brand colour that would be illegible on white.
 *
 * Several official brand hexes are very light — JavaScript's #F7DF1E is the
 * obvious one — and rendered at 15px on a white background they read as a
 * smudge. Blending toward black past a luminance threshold keeps the colour
 * recognisably the brand's while leaving the mark actually visible.
 *
 * Only the light end is touched; dark brand colours are used exactly as
 * published.
 */
function legibleOnWhite(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);

  // Rec. 709 luma, which tracks perceived brightness far better than an average.
  const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (luma < 0.62) return hex;

  const mix = luma > 0.8 ? 0.52 : 0.34;
  const d = (c: number) => Math.round(c * (1 - mix));
  return `rgb(${d(r)}, ${d(g)}, ${d(b)})`;
}

/**
 * A technology's brand mark in its own colour, or a monogram when the set has
 * no icon for it.
 *
 * Azure, Groq and Webhooks have no mark — Microsoft icons were withdrawn from
 * Simple Icons over trademark policy — and REST, BullMQ, GridFS, LLM
 * integration and prompt design are concepts rather than products. They get an
 * initial in a tinted tile, which sits at the same size and weight as a logo
 * so the column reads as one list rather than a list with holes in it.
 */
export function BrandMark({
  name,
  size = 16,
  tone,
}: {
  name: string;
  size?: number;
  tone?: "gold";
}) {
  const mark = BRAND_MARKS[name];
  const gold = tone === "gold";

  // Nothing in the AI group has a brand mark, and three gold letter tiles say
  // less than one shared glyph. The sparkle marks the whole group as one idea.
  if (gold) {
    return (
      <svg
        aria-hidden
        focusable="false"
        role="presentation"
        viewBox="0 0 24 24"
        width={size + 2}
        height={size + 2}
        className="gold-star shrink-0"
        style={{ fill: "var(--color-gold)" }}
      >
        <path d="M12 1.5 14.35 9.65 22.5 12 14.35 14.35 12 22.5 9.65 14.35 1.5 12 9.65 9.65Z" />
      </svg>
    );
  }

  if (!mark) {
    return (
      <span
        aria-hidden
        className="inline-flex shrink-0 items-center justify-center rounded-[3px] bg-accent-soft font-mono font-medium text-accent"
        style={{ width: size, height: size, fontSize: Math.round(size * 0.6) }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <svg
      aria-hidden
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="shrink-0"
      style={{ fill: legibleOnWhite(mark.hex) }}
    >
      <path d={mark.path} />
    </svg>
  );
}
