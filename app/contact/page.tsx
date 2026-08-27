"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message || !form.consent) return;

    setSubmitting(true);
    // TODO: wire to your API / email service
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    setForm({ name: "", phone: "", message: "", consent: false });
  };

  return (
    <main className="bg-white text-black">
      {/* TOP HERO STRIP */}
      <section className="border-b border-zinc-100 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-10 px-6 lg:grid-cols-12 lg:px-12">
          {/* Big heading */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[88px]">
              Let&apos;s get in
              <br />
              touch
            </h1>
          </div>

          {/* Intro copy */}
          <div className="lg:col-span-5 lg:pb-3">
            <p className="max-w-sm text-[15px] leading-[1.75] text-zinc-500 md:ml-auto md:text-right">
              begin something extraordinary together.
              <br />
              Feel free to reach out to us for any
              <br />
              inquiries or to start a special project.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT GRID */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
          
          {/* LEFT — Contact info */}
          <div className="lg:col-span-4">
            <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl">
              Have a Question?
              <br />
              Say Hello!
            </h2>

            <ul className="space-y-5 text-[15px] text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg" aria-hidden>
                  ☎
                </span>
                <a
                  href="tel:+13072183240"
                  className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
                >
                  (307) 218-3240
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg" aria-hidden>
                  ✉
                </span>
                <a
                  href="mailto:support@logomakerspro.com"
                  className="underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
                >
                  support@logomakerspro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg" aria-hidden>
                  📍
                </span>
                <span className="leading-relaxed">
                  1309 Coffeen Ave. STE 1200, Sheridan, WY 82801
                </span>
              </li>
            </ul>
          </div>

          {/* CENTER — Form */}
          <div className="lg:col-span-4">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Name <span className="text-black">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-[15px] text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black"
                  placeholder=""
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-[15px] text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black"
                  placeholder=""
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Messages <span className="text-black">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none border-0 border-b border-zinc-300 bg-transparent px-0 py-3 text-[15px] text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black"
                  placeholder=""
                />
              </div>

              {/* Consent */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-400 text-black accent-black"
                />
                <span className="text-[12px] leading-[1.65] text-zinc-500">
                  By providing a telephone number and submitting this form, you
                  are consenting to be contacted by SMS text message. Message
                  &amp; data rates may apply. You can reply STOP to
                  unsubscribe at any time.
                </span>
              </label>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-black px-10 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT — Media card */}
          <div className="lg:col-span-4">
            <div className="relative ml-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl lg:max-w-none">
              {/* Replace with your image or video */}
              <Image
                src="/contact-office.webp"
                alt="Our studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
                priority
              />

              {/* Optional: use a video instead
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/contact-office.webp"
              >
                <source src="/contact-office.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Back to top (optional — remove if global footer already has one) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-8 left-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110"
      >
        <span className="text-sm">↑</span>
      </button>
    </main>
  );
}