import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Bolt } from "@/components/ui/Icons";
import { accountPages, links, servicePages } from "@/lib/content";

const linkClass =
  "py-0.5 text-sm text-muted transition-colors duration-200 hover:text-brand";

const headingClass =
  "mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ivory/50";

const explore = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Process", href: "/our-process" },
  { label: "About Us", href: "/aboutus" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contactus" },
];

export function Footer() {
  return (
    <footer className="section-x relative overflow-hidden pb-8 pt-16 md:pt-20">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent)",
          opacity: 0.35,
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(5rem,18vw,16rem)] italic leading-none text-transparent opacity-40 [-webkit-text-stroke:1px_var(--line)]"
      >
        Threads &amp; Arts
      </span>

      <div className="relative grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.5fr_1fr_1.5fr_1.2fr]">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Precision digitizing.
            <br />
            Made for real-world production.
          </p>
          <a href={accountPages.order} className="btn btn-primary btn-sm mt-6">
            Order Now <ArrowUpRight className="size-3.5" />
          </a>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
            <Bolt className="size-3.5 text-brand" />
            First design $10 · 4–6h turnaround
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className={headingClass}>Explore</h4>
          <nav aria-label="Explore" className="flex flex-col gap-2.5">
            {explore.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services (below the two short columns on mobile) */}
        <div className="col-span-2 max-md:order-last md:col-span-1">
          <h4 className={headingClass}>Services</h4>
          <nav aria-label="Services" className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
            {servicePages.map((s) => (
              <Link key={s.href} href={s.href} className={linkClass}>
                {s.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className={headingClass}>Let&apos;s talk</h4>
          <nav aria-label="Contact" className="flex flex-col gap-2.5">
            <a href={`mailto:${links.email}`} className={`${linkClass} break-all`}>
              {links.email}
            </a>
            <Link href="/contactus#quote" className={linkClass}>
              Get a quote <ArrowUpRight className="inline size-3" />
            </Link>
            <a href={links.sampleMail} className={linkClass}>
              Free sample
            </a>
            <a href={accountPages.login} className={linkClass}>
              Login <ArrowUpRight className="inline size-3" />
            </a>
            <a href={accountPages.signup} className={linkClass}>
              Signup
            </a>
          </nav>
        </div>
      </div>

      <div className="relative mt-20 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[11px] text-muted md:mt-28">
        <span className="max-md:w-full">&copy; 2026 Threads &amp; Arts</span>
        <span className="md:mr-auto">Serving since 2017</span>
        <Link
          href="/privacy-policy"
          className="transition-colors duration-200 hover:text-brand"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-use"
          className="transition-colors duration-200 hover:text-brand"
        >
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}
