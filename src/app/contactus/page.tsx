import type { Metadata } from "next";
import { AmbientMesh, StitchDivider } from "@/components/cinematic/Ambient";
import { CinematicCta } from "@/components/cinematic/CinematicCta";
import { Faq } from "@/components/cinematic/Faq";
import { FormatsSection, SendChecklist } from "@/components/cinematic/InfoSections";
import { TestimonialBand } from "@/components/cinematic/KineticMarquee";
import { PosterTop } from "@/components/cinematic/PosterTop";
import { QuoteBuilder } from "@/components/cinematic/QuoteBuilder";
import { StickyCards } from "@/components/cinematic/StickyCards";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { PosterHeading } from "@/components/ui/PosterHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { accountPages, links } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Contact Threads and Arts | Embroidery Digitizing & Vector Art Services" },
  description:
    "Get in touch with the Threads and Arts embroidery digitizing experts. Send your design files and requirements and get a quote within hours.",
};

const channels = [
  { label: "Email us", value: links.email, note: "Send artwork + requirements. Quotes within hours.", href: `mailto:${links.email}`, big: true },
  { label: "Free sample", value: "Test us first", note: "First design up to 10,000 stitches, no card required.", href: links.sampleMail },
  { label: "Turnaround", value: "4–6 hours", note: "Standard on most designs, with free minor revisions." },
  { label: "Existing customers", value: "Client portal", note: "Log in to place orders and download files.", href: accountPages.login, big: true },
];

const nextSteps = [
  { title: "We reply with a quote", text: "A digitizer looks at your artwork, size and garment and sends a clear price — usually within hours.", meta: "Within hours" },
  { title: "Approve & we digitize", text: "Say yes and we start straight away: stitch types, underlay, density and sequence planned by hand.", meta: "4–6 hours" },
  { title: "Review the preview", text: "You see a stitch preview before downloading. Need tweaks? Minor revisions are free.", meta: "Free revisions" },
  { title: "Download & stitch", text: "Get your machine-ready file in DST, PES, EXP, JEF or any format you run.", meta: "Machine-ready" },
];

const faqs = [
  { q: "How do I get a quote?", a: "Use the [quote builder](#quote) above, or email your artwork to **admin@threadsandarts.com** with the finished size, garment and machine format. We'll reply with a price, usually within hours." },
  { q: "How much does digitizing cost?", a: "New customers get their **first design for $10**. After that, pricing depends on size and complexity, and Premium members get discounted rates on every order." },
  { q: "Can I try you for free first?", a: "Yes. Request a [free sample](" + links.sampleMail + ") — your first design up to 10,000 stitches, no card required." },
  { q: "What file types can I send?", a: "Anything: JPG, PNG, PDF, AI, EPS, SVG or a phone photo of a sketch. If the artwork is rough, we'll clean it up — or see our [vectorization service](/vectorization-services)." },
  { q: "Do you offer pay-after-delivery?", a: "Yes, for regular clients. Ask us about it once you've placed your first few orders." },
  { q: "I'm an existing customer — how do I order?", a: "Log in to the [client portal](" + accountPages.login + ") to place orders and download files, or simply email your design to **admin@threadsandarts.com**." },
];

function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-20">
      <AmbientMesh />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 fabric-texture opacity-20" />
      <div className="section-x flex items-center justify-between pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px]">
        <span>
          <span className="text-brand">Contact / </span>Threads & Arts studio
        </span>
        <span className="hidden items-center gap-2 lg:flex">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Digitizers online · <span className="text-ivory">Replies within hours</span>
        </span>
      </div>

      <div className="section-x mt-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
        <PosterHeading as="div" size="section" word="Talk" script="Let's stitch." />
        <Reveal delay={0.3} className="mt-16">
          <h1 className="font-display text-[clamp(1.7rem,1.2rem+1.6vw,2.6rem)] leading-tight text-ivory">Contact Threads and Arts</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Tell us about your project — a single logo or a monthly production run. Send your artwork and requirements and a real
            digitizer will get back to you with a quote within hours.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#quote" className="btn btn-primary">
              Build your quote <ArrowUpRight className="size-4" />
            </a>
            <a href={accountPages.signup} className="btn btn-ghost">
              Sign up — first design $10
            </a>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
            <Bolt className="size-3.5 text-brand" /> Serving embroidery shops since 2017
          </p>
        </Reveal>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {channels.map((c, i) => {
            const inner = (
              <Spotlight className={`group flex h-full flex-col rounded-[1.25rem] border border-line bg-panel/80 p-5 backdrop-blur-sm transition-colors ${c.href ? "hover:border-brand/70" : ""}`}>
                <span className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  <span>
                    <span className="text-brand">0{i + 1}</span> — {c.label}
                  </span>
                  {c.href && <ArrowUpRight className="size-4 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                </span>
                <span className={`mt-6 break-all font-display text-ivory ${c.big ? "text-[clamp(1.1rem,0.9rem+0.9vw,1.5rem)]" : "text-2xl"}`}>{c.value}</span>
                <span className="mt-2 text-xs leading-relaxed text-muted">{c.note}</span>
              </Spotlight>
            );
            return (
              <Reveal as="li" key={c.label} delay={0.35 + i * 0.08} className={c.big ? "sm:col-span-2" : ""}>
                {c.href ? (
                  <a href={c.href} className="block h-full">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />

        <section id="quote" className="section-x section-y scroll-mt-24 border-b border-line">
          <PosterTop
            eyebrow="Quote builder"
            word="Quote"
            script="In 60 seconds."
            intro="Fill in what you know — we'll write the email for you. It opens in your email app, ready for you to attach your artwork and send."
          />
          <QuoteBuilder />
        </section>

        <SendChecklist />

        <StickyCards
          eyebrow="What happens next"
          word="Next"
          script="Four steps."
          intro="From your first email to a file on your machine — usually the same working day."
          steps={nextSteps}
        />

        <FormatsSection intro="Tell us your machine and we'll send the right file. These are the formats we deliver most." />

        <Faq items={faqs} eyebrow="Before you write" script="Quick answers." />

        <TestimonialBand words={["Fast replies", "Fair pricing", "Clean files", "Real people"]} />
        <StitchDivider />
        <CinematicCta
          word="Ready?"
          script="Say hello."
          text="Email your artwork today and get your first design for just $10 — with free minor revisions."
          primary={{ label: "Email your artwork", href: `mailto:${links.email}` }}
          secondary={{ label: "Sign up now", href: accountPages.signup }}
        />
      </main>
      <Footer />
    </>
  );
}
