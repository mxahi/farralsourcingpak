"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CATEGORIES, NAV, SITE } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || open || path !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ink/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={SITE.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) =>
            n.children ? (
              <div key={n.label} className="group relative">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/85 transition hover:text-gold-2">
                  {n.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className="transition group-hover:rotate-180">
                    <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full w-52 translate-y-2 rounded-xl border border-white/10 bg-ink/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="block rounded-lg px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-gold-2"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={n.label}
                href={n.href}
                className={`relative px-4 py-2 text-sm font-medium transition hover:text-gold-2 ${
                  path === n.href ? "text-gold-2" : "text-white/85"
                }`}
              >
                {n.label}
                {path === n.href && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold" />
                )}
              </Link>
            )
          )}
          <a
            href={SITE.phones[0].href}
            className="ml-3 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-2"
          >
            Call Us
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center text-white lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 px-5 pb-6 lg:hidden">
          {NAV.filter((n) => !n.children).map((n) => (
            <Link key={n.label} href={n.href} className="block border-b border-white/10 py-3.5 text-white">
              {n.label}
            </Link>
          ))}
          <p className="pt-4 text-xs uppercase tracking-widest text-gold-2">Products</p>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/products/${c.slug}`} className="block py-2.5 pl-3 text-white/80">
              {c.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
