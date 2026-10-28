import Image from "next/image";

export default function PageHero({
  title,
  image,
  sub,
}: {
  title: string;
  image: string;
  sub?: string;
}) {
  return (
    <section className="grain relative isolate flex min-h-[48vh] items-end overflow-hidden bg-ink pb-16 pt-40">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <span className="mb-4 block h-px w-14 bg-gold" />
        <h1 className="font-display text-5xl font-light text-white sm:text-6xl">{title}</h1>
        {sub && <p className="mt-4 max-w-xl text-white/70">{sub}</p>}
      </div>
    </section>
  );
}
