import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import {
  BENEFITS,
  CATEGORIES,
  SERVICES,
  SITE,
  VALUES,
  WHAT_WE_DO,
} from "@/lib/data";

const icons = [
  <path key="a" d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  <path key="b" d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  <path key="c" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 12l2-1-2-3-2 .5a7 7 0 0 0-1.5-.9L15 5h-4l-.5 2.6a7 7 0 0 0-1.5.9L7 8 5 11l2 1a7 7 0 0 0 0 1l-2 1 2 3 2-.5a7 7 0 0 0 1.5.9L11 19h4l.5-2.6a7 7 0 0 0 1.5-.9l2 .5 2-3-2-1a7 7 0 0 0 0-1Z" />,
];

function Heading({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <div className="mb-14">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        <span className="h-px w-10 bg-gold" />
        {kicker}
      </p>
      <h2 className={`font-display text-4xl font-light sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="relative z-10 -mt-24 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {BENEFITS.map((b, n) => (
            <Reveal key={b.title} delay={n * 120}>
              <div className="group h-full rounded-3xl border border-ink/5 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(10,26,42,.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(200,160,74,.5)]">
                <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-gold transition group-hover:bg-gold group-hover:text-ink">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {icons[n]}
                  </svg>
                </span>
                <h3 className="font-display text-2xl text-ink">{b.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/65">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/img/hangers.jpg" alt="Quality textiles and garments" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden aspect-square w-48 overflow-hidden rounded-[1.5rem] border-8 border-ivory shadow-2xl sm:block">
              <Image src="/img/bedroom-1.jpg" alt="" fill sizes="200px" className="object-cover" />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[2rem] border border-gold/50" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <span className="h-px w-10 bg-gold" />
            {WHAT_WE_DO.kicker}
          </p>
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">
            . . . <span className="italic text-gold">{WHAT_WE_DO.title}</span> . . .
          </h2>
          <p className="mt-8 leading-8 text-ink/70">{WHAT_WE_DO.text}</p>
          <Link href="/about" className="mt-10 inline-flex items-center gap-3 font-semibold text-ink transition hover:gap-5 hover:text-gold">
            About Us <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="grain relative overflow-hidden bg-ink py-28">
        <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Heading kicker="Services" title="Services" light />
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, n) => (
              <Reveal key={s.title} delay={(n % 4) * 90}>
                <div className="group h-full bg-ink-2 p-8 transition duration-500 hover:bg-ink">
                  <span className="font-display text-5xl text-gold/30 transition group-hover:text-gold">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-xl text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <Heading kicker="Products" title="Recent Products" />
        <div className="grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CATEGORIES.map((c, n) => (
            <Reveal
              key={c.slug}
              delay={n * 90}
              className={n < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <Link href={`/products/${c.slug}`} className="group relative block h-full overflow-hidden rounded-3xl">
                <Image src={c.cover} alt={c.title} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover transition duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <h3 className="font-display text-2xl text-white">{c.title}</h3>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink transition group-hover:rotate-45">↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading kicker="Values" title="Our Cornerstone Values" />
        </div>
        <div className="overflow-hidden">
          <div className="marquee flex w-max gap-4 py-2">
            {[...VALUES, ...VALUES].map((v, n) => (
              <span key={n} className="whitespace-nowrap rounded-full border border-ink/15 bg-white px-8 py-4 font-display text-xl text-ink">
                <span className="mr-3 text-gold">►</span>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-28 sm:px-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Heading kicker="Contact" title="Our Location" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Address :</p>
          <p className="mt-3 text-lg">{SITE.address}</p>
          <div className="mt-6 space-y-2">
            {SITE.phones.map((p) => (
              <a key={p.label} href={p.href} className="block text-lg font-medium transition hover:text-gold">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block text-lg transition hover:text-gold">
              Email:{SITE.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-3">
          <iframe
            title="Farral Sourcing Pakistan location"
            src="https://maps.google.com/maps?q=Humara%20Town%20Malir%20Karachi&output=embed"
            loading="lazy"
            className="h-[26rem] w-full rounded-3xl border-0 shadow-xl"
          />
        </Reveal>
      </section>
    </>
  );
}
