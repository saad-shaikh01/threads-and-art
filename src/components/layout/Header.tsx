"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Close, Menu } from "@/components/ui/Icons";
import { accountPages, nav, type NavItem } from "@/lib/content";

const hashOf = (href: string) => (href.includes("#") ? href.split("#")[1] : "");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Shadow/blur once the page moves + scroll-spy for the nav underline (home only).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (pathname === "/") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      nav.forEach((n) => {
        const id = hashOf(n.href);
        const el = id ? document.getElementById(id) : null;
        if (el) observer!.observe(el);
      });
    } else {
      setActive("");
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (item: NavItem) => {
    const hash = hashOf(item.href);
    if (item.children?.some((c) => c.href === pathname)) return true;
    if (hash) return pathname === "/" && active === hash;
    if (item.href === "/") return pathname === "/" && active === "";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 flex h-(--header-h) items-center gap-6 border-b border-line px-[max(var(--gutter-x),calc((100vw-var(--content-max))/2))] backdrop-blur-xl transition-colors duration-300 lg:gap-9 ${
        scrolled || open ? "bg-bg/95" : "bg-bg/80"
      }`}
    >
      <Logo />

      <nav aria-label="Primary" className="ml-auto hidden gap-6 text-xs lg:flex">
        {nav.map((item) => {
          const current = isActive(item);
          const underline = (
            <span
              className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                current ? "scale-x-100" : "scale-x-0"
              }`}
            />
          );

          if (!item.children) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 transition-colors hover:text-brand ${current ? "text-brand" : ""}`}
              >
                {item.label}
                {underline}
              </Link>
            );
          }

          return (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`relative inline-flex items-center gap-1 py-2 transition-colors hover:text-brand ${current ? "text-brand" : ""}`}
              >
                {item.label}
                <svg viewBox="0 0 10 6" className="size-2 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M1 1l4 4 4-4" />
                </svg>
                {underline}
              </Link>
              <div className="invisible absolute left-0 top-full min-w-64 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-0.5 rounded-md border border-line bg-bg/95 p-2 shadow-xl backdrop-blur-xl">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`rounded px-3 py-2 transition-colors hover:bg-white/5 hover:text-brand ${pathname === c.href ? "text-brand" : ""}`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="ml-auto flex items-center gap-3 lg:ml-0">
        <a href={accountPages.signup} className="btn btn-primary btn-sm hidden sm:inline-flex">
          Sign Up <ArrowUpRight className="size-3.5" />
        </a>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-line lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fabric-texture absolute inset-x-0 top-full grid h-[calc(100svh-var(--header-h))] content-start gap-1 overflow-y-auto border-b border-line bg-bg px-[6%] py-8 lg:hidden"
          >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                {item.children ? (
                  <>
                    <div className="flex items-center border-b border-line">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex flex-1 items-baseline gap-4 py-4 font-display text-3xl"
                      >
                        <span className="font-sans text-[11px] text-brand">0{i + 1}</span>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle services"
                        aria-expanded={mobileServices}
                        onClick={() => setMobileServices((v) => !v)}
                        className="grid size-10 place-items-center"
                      >
                        <svg viewBox="0 0 10 6" className={`size-3 transition-transform ${mobileServices ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                          <path d="M1 1l4 4 4-4" />
                        </svg>
                      </button>
                    </div>
                    {mobileServices && (
                      <div className="grid border-b border-line py-2 pl-8">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="py-2.5 text-sm text-muted hover:text-brand"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl"
                  >
                    <span className="font-sans text-[11px] text-brand">0{i + 1}</span>
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={accountPages.signup} onClick={() => setOpen(false)} className="btn btn-primary">
                Sign Up <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
