import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ABOUT, VALUES } from "@/lib/data";

export const metadata = { title: "About Us" };

export default function About() {
  return (
    <>
      <PageHero title="About Us" image="/img/rack.jpg" />
      <section className="mx-auto grid max-w-7xl items-start gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/img/tees.jpg" alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-6 text-lg leading-9 text-ink/75">
            {ABOUT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink">
            Contact
          </Link>
        </Reveal>
      </section>
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-light text-white">Our Cornerstone Values</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <li key={v} className="rounded-2xl border border-white/10 p-6 text-white/85 transition hover:border-gold">
                <span className="mr-3 text-gold">►</span>
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
