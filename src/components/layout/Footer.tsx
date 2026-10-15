import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { links } from "@/lib/content";

const linkClass = "block py-1 text-sm text-muted transition-colors hover:text-brand";

export function Footer() {
  return (
    <footer className="section-x relative overflow-hidden pb-6 pt-14">
      {/* Oversized outlined wordmark as a quiet closing flourish */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(5rem,18vw,16rem)] italic leading-none text-transparent opacity-40 [-webkit-text-stroke:1px_var(--line)]"
      >
        Threads &amp; Arts
      </span>

      <div className="relative grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1.3fr]">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-5 text-sm">
            Precision digitizing.
            <br />
            Made for real-world production.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <Link href="#services" className={linkClass}>Services</Link>
          <Link href="#portfolio" className={linkClass}>Our work</Link>
          <Link href="#process" className={linkClass}>How it works</Link>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Let’s talk</h4>
          <a href={`mailto:${links.email}`} className={linkClass}>{links.email}</a>
          <a href={links.contact} className={linkClass}>
            Contact us <ArrowUpRight className="inline size-3" />
          </a>
          <a href={links.login} className={linkClass}>
            Client login <ArrowUpRight className="inline size-3" />
          </a>
        </div>
      </div>

      <div className="relative mt-24 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-[11px] text-muted md:mt-32">
        <span className="max-md:w-full">© 2026 Threads &amp; Arts</span>
        <span className="md:mr-auto">Serving since 2017</span>
        <a href={links.privacy} className="hover:text-brand">Privacy Policy</a>
        <a href={links.terms} className="hover:text-brand">Terms of Use</a>
      </div>
    </footer>
  );
}
