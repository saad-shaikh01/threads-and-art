"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Close, Menu } from "@/components/ui/Icons";
import { links, nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Shadow/blur once the page moves + scroll-spy for the nav underline.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 flex h-(--header-h) items-center gap-6 border-b border-line px-[max(var(--gutter-x),calc((100vw-var(--content-max))/2))] backdrop-blur-xl transition-colors duration-300 lg:gap-9 ${
        scrolled || open ? "bg-bg/95" : "bg-bg/80"
      }`}
    >
      <Logo />

      <nav aria-label="Primary" className="ml-auto hidden gap-6 text-xs lg:flex">
        {nav.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 transition-colors hover:text-brand ${isActive ? "text-brand" : ""}`}
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="ml-auto flex items-center gap-3 lg:ml-0">
        <a href={links.login} className="btn btn-ghost btn-sm hidden sm:inline-flex">
          Client Login
        </a>
        <Link href="#sample" className="btn btn-primary btn-sm hidden xl:inline-flex">
          Get Free Sample <ArrowUpRight className="size-3.5" />
        </Link>
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
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl"
                >
                  <span className="font-sans text-[11px] text-brand">0{i + 1}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#sample" onClick={() => setOpen(false)} className="btn btn-primary">
                Get Free Sample <ArrowUpRight className="size-4" />
              </Link>
              <a href={links.login} className="btn btn-ghost">
                Client Login <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
