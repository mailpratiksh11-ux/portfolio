type Layer = { tier: string; detail: string };
type Flow = { title: string; nodes: string[] };

/**
 * The request path as three stacked tiers, then the three asynchronous paths
 * that branch off it.
 *
 * Drawn with borders and text rather than SVG so it stays legible at any zoom,
 * reflows on a phone, and can be read by a screen reader as the ordered lists
 * it actually is. Each flow scrolls horizontally on its own below `sm` — the
 * alternative is wrapping a five-node chain into something that no longer
 * reads as a sequence.
 */
export function ArchitectureDiagram({ layers, flows }: { layers: Layer[]; flows: Flow[] }) {
  return (
    <div className="min-w-0 rounded-lg border border-line bg-sunk p-6 sm:p-8">
      <p className="font-mono text-[12px] text-ink-3">architecture</p>

      <ol className="mt-6 space-y-0">
        {layers.map((layer, i) => (
          <li key={layer.tier}>
            <div className="rounded border border-line bg-paper px-4 py-3.5">
              <p className="font-mono text-[11.5px] text-ink-3">{layer.tier}</p>
              <p className="mt-1 font-mono text-[13.5px] text-ink">{layer.detail}</p>
            </div>
            {i < layers.length - 1 ? (
              <div aria-hidden className="flex justify-center py-2">
                <span className="h-5 w-px bg-ink-3/40" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-8 space-y-6 border-t border-line pt-7">
        {flows.map((flow) => (
          <div key={flow.title}>
            <p className="font-mono text-[11.5px] text-ink-3">{flow.title}</p>
            {/* Scrolls rather than wraps: a wrapped chain stops reading as one
                path. -mx padding lets the scroll area bleed to the panel edge
                so the cut-off node is an obvious affordance. */}
            <div className="-mx-6 mt-3 overflow-x-auto px-6 sm:mx-0 sm:px-0">
              <ol className="flex w-max items-center gap-2">
                {flow.nodes.map((node, i) => (
                  <li key={`${flow.title}-${node}`} className="flex items-center gap-2">
                    <span className="whitespace-nowrap rounded border border-line bg-paper px-3 py-1.5 font-mono text-[12.5px] text-ink">
                      {node}
                    </span>
                    {i < flow.nodes.length - 1 ? (
                      <span aria-hidden className="h-px w-5 shrink-0 bg-ink-3/40" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
