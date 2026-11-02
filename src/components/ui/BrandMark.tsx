import { BRAND_MARKS } from "@/lib/brandMarks";

/**
 * A technology's brand mark, drawn in ink rather than its brand colour.
 *
 * Twenty-four logos at full saturation turn a disciplined page into a sticker
 * sheet, and the section is meant to read as one technical ecosystem rather
 * than a sponsor wall. The marks still do the recognition work — silhouettes
 * are what people actually recognise at 16px.
 *
 * Anything without a mark (Azure, Groq, REST, BullMQ, GridFS, Webhooks) gets a
 * hollow square of the same size, so the column stays aligned and a missing
 * logo does not read as a broken image.
 */
export function BrandMark({ name, size = 15 }: { name: string; size?: number }) {
  const mark = BRAND_MARKS[name];

  if (!mark) {
    return (
      <span
        aria-hidden
        className="inline-block shrink-0 rounded-[2px] border border-ink-3/50"
        style={{ width: size - 3, height: size - 3 }}
      />
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
      className="shrink-0 fill-ink-2 transition-colors"
    >
      <path d={mark.path} />
    </svg>
  );
}
