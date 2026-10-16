import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { links } from "@/lib/content";

const linkClass =
  "py-0.5 text-sm text-muted transition-colors duration-200 hover:text-brand";

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

      <div className="relative grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1.3fr]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Precision digitizing.
            <br />
            Made for real-world production.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ivory/50">
            Explore
          </h4>
          <nav className="flex flex-col gap-2.5">
            <Link href="#services" className={linkClass}>
              Services
            </Link>
            <Link href="#portfolio" className={linkClass}>
              Our work
            </Link>
            <Link href="#process" className={linkClass}>
              How it works
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-ivory/50">
            Let&apos;s talk
          </h4>
          <nav className="flex flex-col gap-2.5">
            <a href={`mailto:${links.email}`} className={linkClass}>
              {links.email}
            </a>
            <a href={links.contact} className={linkClass}>
              Contact us <ArrowUpRight className="inline size-3" />
            </a>
            <a href={links.login} className={linkClass}>
              Client login <ArrowUpRight className="inline size-3" />
            </a>
          </nav>
        </div>
      </div>

      <div className="relative mt-20 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[11px] text-muted md:mt-28">
        <span className="max-md:w-full">&copy; 2026 Threads &amp; Arts</span>
        <span className="md:mr-auto">Serving since 2017</span>
        <a
          href={links.privacy}
          className="transition-colors duration-200 hover:text-brand"
        >
          Privacy Policy
        </a>
        <a
          href={links.terms}
          className="transition-colors duration-200 hover:text-brand"
        >
          Terms of Use
        </a>
      </div>
    </footer>
  );
}
