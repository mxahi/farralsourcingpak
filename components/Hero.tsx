"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SLIDES, SITE } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {HERO_SLIDES.map((src, n) => (
        <div
          key={src}
          className={`absolute inset-0 -z-10 transition-opacity duration-[1600ms] ${
            n === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={n === 0}
            sizes="100vw"
            className={`object-cover ${n === i ? "kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ivory to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8">
        <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-2">
          <span className="h-px w-10 bg-gold" /> {SITE.name}
        </p>
        <h1 className="font-display max-w-3xl text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Your <span className="gold-text italic">sourcing</span> solution! We are team of talented
        </h1>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:bg-gold-2"
          >
            Read More
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:text-gold-2"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-24 right-6 flex gap-2 sm:right-10">
        {HERO_SLIDES.map((_, n) => (
          <button
            key={n}
            aria-label={`Slide ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-1.5 rounded-full transition-all ${
              n === i ? "w-10 bg-gold" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
