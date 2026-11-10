import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";
import { accountPages } from "@/lib/content";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  offers?: readonly string[];
  image?: { src: string; alt: string };
  /** In-page anchor for the "Learn More" button. */
  learnMore?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
}

const OFFER_RE = /\$\d+/;

/** Shared top-of-page hero: fabric texture, stitched frame, offer chips, CTAs, optional image. */
export function PageHero({
  eyebrow,
  title,
  offers = [],
  image,
  learnMore = "#details",
  cta = { label: "Order Now", href: accountPages.order },
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="section-x fabric-texture relative overflow-hidden border-b border-line py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 85% 0%, rgba(84,26,36,0.55), transparent 55%)" }}
      />
      <div className={`relative grid items-center gap-12 ${image ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div className="animate-hero-in">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="heading-display text-[clamp(2.2rem,1.4rem+3.6vw,4.4rem)]">{title}</h1>

          {offers.length > 0 && (
            <ul className="mt-7 grid max-w-xl gap-3">
              {offers.map((o) => (
                <li
                  key={o}
                  className={`flex items-start gap-3 rounded-(--radius) border px-4 py-3 text-sm leading-relaxed ${
                    OFFER_RE.test(o) ? "border-brand/50 bg-brand/10 text-ivory" : "border-line bg-panel/60 text-muted"
                  }`}
                >
                  <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand" />
                  {o}
                </li>
              ))}
            </ul>
          )}

          {children}

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={cta.href} className="btn btn-primary">
              {cta.label} <ArrowUpRight className="size-4" />
            </a>
            {secondaryCta ? (
              <a href={secondaryCta.href} className="btn btn-ghost">
                {secondaryCta.label}
              </a>
            ) : (
              <a href={learnMore} className="btn btn-ghost">
                Learn More <ArrowDown className="size-4" />
              </a>
            )}
          </div>
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-xl animate-hero-in [animation-delay:150ms]">
            <div aria-hidden className="absolute -inset-3 rounded-[0.8rem] border border-dashed border-brand/40" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-(--radius) border border-line bg-panel">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width:1024px) 540px, 100vw" className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
