import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo size={56} />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            Kindly get in touch with us if you have any queries.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-2">Explore</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              ["Services", "/services"],
              ["Products", "/products/bedding"],
              ["Contact", "/contact"],
              ["About", "/about"],
            ].map(([l, h]) => (
              <li key={l}>
                <Link href={h} className="transition hover:text-gold-2">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-2">Address :</h4>
          <p className="mt-6 text-sm">{SITE.address}</p>
          <div className="mt-4 space-y-1 text-sm">
            {SITE.phones.map((p) => (
              <a key={p.label} href={p.href} className="block transition hover:text-gold-2">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block transition hover:text-gold-2">
              Email:{SITE.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © Copyright 2023 - All Rights Reserved.
      </div>
    </footer>
  );
}
