import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CATEGORIES } from "@/lib/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CATEGORIES.find((x) => x.slug === slug);
  return { title: c?.title };
}

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <>
      <PageHero title={cat.title.toUpperCase()} image={cat.cover} />
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition ${
                c.slug === slug
                  ? "border-ink bg-ink text-white"
                  : "border-ink/15 hover:border-gold hover:text-gold"
              }`}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {cat.images.map((src, n) => (
          <Reveal key={src} delay={(n % 3) * 90} className="">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={src}
                alt={`${cat.title} ${n + 1}`}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover transition duration-[1200ms] group-hover:scale-105"
              />
            </div>
          </Reveal>
        ))}
      </section>
      <section className="px-5 pb-24 sm:px-8">
        <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink p-12 text-center">
          <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
            Need custom Designs? Let’s start with a free quote!
          </h2>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-2">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
