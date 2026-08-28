"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    if (!form.name || !form.email || !form.subject || !form.message || !form.consent)
      return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    });
  };

  const fieldClass =
    "w-full border-0 border-b border-zinc-300 bg-transparent px-0 pb-3 pt-2 text-[15px] text-black outline-none transition-colors focus:border-black";

  return (
    <main className="min-h-screen bg-white text-black">
      {/* ========== TOP: Title + Intro ========== */}
      <section className="pt-8 md:pt-12">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between lg:px-16 xl:px-20">
          {/* Giant heading — left */}
          <h1 className="max-w-[720px] text-[52px] font-black leading-[0.92] tracking-tight text-black sm:text-[68px] md:text-[80px] lg:text-[96px]">
            Let&apos;s get in
            <br />
            touch
          </h1>

          {/* Intro — top right */}
          <p className="max-w-[300px] shrink-0 pt-2 text-[14px] leading-[1.7] text-zinc-500 md:pt-4 md:text-[15px]">
            We&apos;re excited to connect with you and begin something
            extraordinary together. Feel free to reach out to us for any
            inquiries or to start a special project.
          </p>
        </div>
      </section>

      {/* Spacer matching the large empty area in the design */}
      <div className="h-16 md:h-24 lg:h-32" />

      {/* ========== BOTTOM: Info + Form ========== */}
      <section className="pb-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-8 lg:px-16 xl:px-20">
          
          {/* LEFT — Contact details */}
          <div className="lg:col-span-4 xl:col-span-4">
            <h2 className="mb-8 text-[26px] font-bold leading-[1.2] tracking-tight text-black md:text-[30px]">
              Have a Question?
              <br />
              Say Hello!
            </h2>

            <ul className="space-y-5">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  className="h-[18px] w-[18px] shrink-0 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+13072183240"
                  className="text-[14px] text-zinc-800 underline decoration-zinc-400 underline-offset-[5px] transition-colors hover:text-black hover:decoration-black"
                >
                  (307) 218-3240
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="h-[18px] w-[18px] shrink-0 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:support@logomakerspro.com"
                  className="text-[14px] text-zinc-800 underline decoration-zinc-400 underline-offset-[5px] transition-colors hover:text-black hover:decoration-black"
                >
                  support@logomakerspro.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[14px] leading-relaxed text-zinc-800">
                  1309 Coffeen Ave. STE 1200, Sheridan, WY 82801
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-8 xl:col-span-8">
            <form onSubmit={handleSubmit} className="w-full">
              {/* Name | Email */}
              <div className="mb-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-semibold text-black"
                  >
                    Name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold text-black"
                  >
                    Email <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Phone | Subject */}
              <div className="mb-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[13px] font-semibold text-black"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[13px] font-semibold text-black"
                  >
                    Subject <span>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Messages — full width */}
              <div className="mb-10">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-semibold text-black"
                >
                  Messages <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  value={form.message}
                  onChange={handleChange}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {/* Consent */}
              <label className="mb-10 flex max-w-2xl cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 border border-zinc-400 accent-black"
                />
                <span className="text-[12px] leading-[1.65] text-zinc-500">
                  By providing a telephone number and submitting this form, you
                  are consenting to be contacted by SMS text message. Message
                  &amp; data rates may apply. You can reply STOP to unsubscribe
                  at any time.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-black px-10 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting
                  ? "Sending..."
                  : sent
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}