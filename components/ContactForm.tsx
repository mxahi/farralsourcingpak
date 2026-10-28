"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-5 py-4 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Quote request from " + f.get("name")
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <input name="name" required placeholder="Enter your name" className={field} />
      <input name="email" type="email" required placeholder="Enter your email" className={field} />
      <textarea name="message" required rows={5} placeholder="Enter your message" className={field} />
      <label className="flex items-center gap-3 text-sm text-ink/70">
        <input type="checkbox" required className="h-4 w-4 accent-[#c8a04a]" />
        I agree to the Terms and Conditions
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-gold hover:text-ink sm:w-auto"
      >
        Submit
      </button>
      {sent && <p className="text-sm text-gold">Opening your email app…</p>}
    </form>
  );
}
