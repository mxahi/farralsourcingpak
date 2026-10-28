import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT, SITE } from "@/lib/data";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" image="/img/hotel-room.jpg" sub={CONTACT.intro} />
      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-light leading-tight sm:text-5xl">{CONTACT.title}</h2>
          <ul className="mt-10 space-y-4">
            {CONTACT.points.map((p) => (
              <li key={p} className="flex items-center gap-4 text-lg text-ink/75">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-sm text-ink">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-2 border-t border-ink/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Address :</p>
            <p>{SITE.address}</p>
            {SITE.phones.map((p) => (
              <a key={p.label} href={p.href} className="block hover:text-gold">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block hover:text-gold">
              Email:{SITE.email}
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
