import { RichText } from "@/components/page/RichText";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "./ScrambleText";

export interface FaqItem {
  q: string;
  /** Supports **bold** and [label](href). */
  a: string;
}

const plain = (s: string) => s.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** Accessible FAQ accordion (native <details>) + FAQPage structured data. */
export function Faq({ items, eyebrow = "Questions", word = "FAQ", script = "Asked & answered." }: { items: readonly FaqItem[]; eyebrow?: string; word?: string; script?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
  return (
    <section className="relative border-b border-line bg-deep section-y">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <div className="section-x grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
          <Eyebrow>{eyebrow}</Eyebrow>
          <PosterHeading word={word} script={script} size="compact" />
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="flex gap-4">
                    <span className="mt-1.5 font-mono text-[11px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <span className="heading-display text-[clamp(1.15rem,1rem+0.6vw,1.45rem)] text-ivory transition-colors group-hover:text-brand">{f.q}</span>
                  </span>
                  <span aria-hidden className="relative mt-2 size-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-ivory" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-ivory transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pl-9 text-[0.95rem] leading-[1.8] text-muted">
                  <RichText text={f.a} />
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
