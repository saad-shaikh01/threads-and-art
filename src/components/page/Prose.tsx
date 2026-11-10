import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { RichText, slugify } from "./RichText";

export type Block =
  | { t: "img"; src: string; alt: string }
  | { t: "h2" | "h3" | "h4" | "h5" | "h6"; text: string }
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] };

/** Renders content blocks from the page data files in the site's typographic style. */
export function Prose({ blocks }: { blocks: readonly Block[] }) {
  let h2 = 0;
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            h2 += 1;
            return (
              <Reveal key={i} className="pt-10 first:pt-0">
                <h2 id={slugify(b.text)} className="heading-2 scroll-mt-28">
                  <span className="eyebrow mb-3 block">{String(h2).padStart(2, "0")}</span>
                  <RichText text={b.text} />
                </h2>
              </Reveal>
            );
          case "h3":
            return (
              <h3 key={i} id={slugify(b.text)} className="heading-display scroll-mt-28 pt-6 text-[1.55rem] text-ivory">
                <RichText text={b.text} />
              </h3>
            );
          case "h4":
          case "h5":
          case "h6":
            return (
              <h4 key={i} className="pt-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                <RichText text={b.text} />
              </h4>
            );
          case "p":
            return (
              <p key={i} className="whitespace-pre-line text-[0.98rem] leading-[1.85] text-muted">
                <RichText text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="grid gap-2.5 sm:grid-cols-2">
                {b.items.map((it, j) => (
                  <li key={j} className="surface-card flex items-start gap-3 px-4 py-3 text-sm leading-relaxed text-ivory/90">
                    <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>
                      <RichText text={it} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="relative space-y-4 border-l border-dashed border-line pl-8">
                {b.items.map((it, j) => (
                  <li key={j} className="relative text-[0.95rem] leading-relaxed text-ivory/90">
                    <span className="absolute -left-[2.9rem] grid size-7 place-items-center rounded-full border border-brand bg-bg text-[11px] font-semibold text-brand">
                      {j + 1}
                    </span>
                    <RichText text={it} />
                  </li>
                ))}
              </ol>
            );
          case "img":
            return (
              <Reveal key={i} className="relative aspect-[16/9] overflow-hidden rounded-(--radius) border border-line">
                <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 720px, 100vw" className="object-cover" />
              </Reveal>
            );
        }
      })}
    </div>
  );
}
