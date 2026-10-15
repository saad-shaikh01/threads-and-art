import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/content";

export function SampleCta() {
  return (
    <section
      id="sample"
      className="section-x section-y relative grid gap-6 overflow-hidden bg-[radial-gradient(ellipse_at_0_100%,#541a24,transparent_65%),#141818] md:gap-14 lg:grid-cols-2 lg:items-center lg:gap-24"
    >
      {/* decorative stitched ring */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden size-[28rem] animate-float opacity-30 lg:block"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="92" fill="none" stroke="var(--red)" strokeWidth="1" strokeDasharray="5 6" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 5" />
      </svg>

      <Reveal className="relative">
        <p className="eyebrow mb-4">Let’s make something great</p>
        <h2 className="heading-2 text-[clamp(2.1rem,1.4rem+3vw,3.5rem)]">
          Your artwork.
          <br />
          <em className="text-accent">Our next great stitch.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.15} className="relative">
        <p className="max-w-sm text-[0.95rem] text-muted">
          Send one design and tell us what you’re making. Let’s start with your first qualified sample.
        </p>
        <a href={links.sampleMail} className="btn btn-primary mt-7">
          Request Your Free Sample <ArrowUpRight className="size-4" />
        </a>
        <small className="mt-4 block text-[11px] text-muted">
          Opens your email app. Attach your artwork and requirements.
        </small>
      </Reveal>
    </section>
  );
}
