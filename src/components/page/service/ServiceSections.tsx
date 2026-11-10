import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/cinematic/ScrambleText";
import { GhostWord } from "@/components/cinematic/Ambient";
import { Odometer } from "@/components/cinematic/Odometer";
import { BurstButton } from "@/components/cinematic/CinematicCta";
import { anton } from "@/components/ui/fonts";
import { ArrowUpRight, Check } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { accountPages, links, servicePages } from "@/lib/content";
import { serviceThumbs } from "@/lib/pages/service-details";

const INCLUDED = [
  "Hand-digitized by an experienced machine operator",
  "Stitch preview before you download",
  "Free minor revisions until it's right",
  "All major machine formats (DST, PES, EXP, JEF…)",
  "4–6 hour standard turnaround",
  "Pay-after-delivery option for regular clients",
];

/** Startup offer + premium membership + what every file includes. */
export function PricingSection({ service, included = INCLUDED }: { service: string; included?: readonly string[] }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line section-y">
      <GhostWord word="$10 · $10 · $10" className="absolute inset-x-0 bottom-0 -z-10" />
      <div className="section-x">
        <Eyebrow>Simple pricing</Eyebrow>
        <PosterHeading word="Pricing" script="No surprises." size="compact" />
      </div>

      <div className="section-x mt-16 grid gap-5 lg:grid-cols-[1fr_1fr_1.1fr]">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] border border-brand/60 p-8 shadow-[0_20px_60px_rgb(243_30_57/0.12)] [background:linear-gradient(160deg,rgb(84_26_36/0.85),var(--panel-deep))]">
          <p className="eyebrow">Startup offer</p>
          <p className={`${anton.className} mt-6 text-[clamp(4.5rem,9vw,7rem)] leading-none text-ivory`}>
            <Odometer value="$10" />
          </p>
          <p className="mt-3 text-sm text-ivory/80">for your first {service} design — sign up and test us on a real job.</p>
          <BurstButton href={accountPages.signup} className="btn btn-primary mt-8 w-full">
            Claim the $10 offer <ArrowUpRight className="size-4" />
          </BurstButton>
        </Reveal>

        <Reveal delay={0.08} className="surface-card flex flex-col rounded-[1.75rem] p-8">
          <p className="eyebrow">Premium membership</p>
          <p className="heading-display mt-6 text-[clamp(2rem,1.4rem+2vw,3rem)] leading-tight text-ivory">
            Member pricing on <em className="text-accent">every order.</em>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Running steady volume? Premium members get discounted rates on all digitizing and vector work, plus priority in the queue.
          </p>
          <a href={links.contact} className="btn btn-ghost mt-8 w-full">
            Ask about membership
          </a>
        </Reveal>

        <Reveal delay={0.16} className="rounded-[1.75rem] border border-line bg-deep p-8">
          <p className="eyebrow">Every file includes</p>
          <ul className="mt-6 space-y-4">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-ivory/90">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Image cards linking to the other services. */
export function RelatedGrid({ current }: { current?: string }) {
  const items = servicePages.filter((s) => s.href !== current);
  return (
    <section className="relative border-b border-line bg-deep section-y">
      <div className="section-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Eyebrow>More services</Eyebrow>
          <PosterHeading word="Explore" script="every stitch." size="compact" />
        </div>
        <Link href="/#services" className="btn btn-outline btn-sm w-fit">
          All services <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
      <div className="section-x mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.href} delay={(i % 4) * 0.06}>
            <Spotlight className="group overflow-hidden rounded-[1.25rem] border border-line bg-panel transition-colors hover:border-brand">
              <Link href={s.href} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={serviceThumbs[s.href] ?? "/assets/hero-bg.jpg"}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
                    className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-panel to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <span>
                    <span className="block font-mono text-[10px] tracking-widest text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-1 block text-sm text-ivory">{s.label}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
              </Link>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Small sticky offer card shown beside the long-form guide. */
export function GuideOffer() {
  return (
    <div className="sticky top-[calc(var(--header-h)+2rem)] overflow-hidden rounded-[1.25rem] border border-brand/50 p-6 [background:linear-gradient(160deg,rgb(84_26_36/0.75),var(--panel-deep))]">
      <p className="eyebrow mb-2">Startup offer</p>
      <p className="heading-display text-3xl">
        <span className="text-accent">$10</span> per design
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted">4–6 hour turnaround, free minor revisions.</p>
      <a href={accountPages.order} className="btn btn-primary btn-sm mt-5 w-full">
        Order Now <ArrowUpRight className="size-3.5" />
      </a>
      <a href={links.sampleMail} className="mt-3 block text-center text-xs text-muted underline-offset-4 hover:text-ivory hover:underline">
        or request a free sample
      </a>
    </div>
  );
}
