import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata = { title: "Our Services" };

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" image="/img/hangers.jpg" />
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, n) => (
            <Reveal key={s.title} delay={(n % 2) * 100}>
              <div className="group flex h-full gap-6 rounded-3xl border border-ink/10 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                <span className="font-display text-5xl text-gold/40 transition group-hover:text-gold">
                  {String(n + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <p className="mt-3 leading-7 text-ink/65">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
