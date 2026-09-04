"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const text = "LET'S TALK";

  return (
    <footer className="relative bg-[#0a0a0a] text-white">
      {/* SCOPED SPRING JUMP ANIMATION KEYFRAMES */}
      <style jsx>{`
        @keyframes springJump {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          15% {
            transform: translateY(-18px) scale(1.08);
          }
          30% {
            transform: translateY(4px) scale(0.97);
          }
          45% {
            transform: translateY(-2px) scale(1.01);
          }
          60% {
            transform: translateY(0) scale(1);
          }
        }
        .animate-spring-jump {
          animation: springJump 2.6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>

      {/* TOP SECTION */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-b border-zinc-800 lg:grid-cols-12">
        {/* LEFT — Logo + Description */}
        <div className="flex flex-col justify-center border-b border-zinc-800 px-8 py-14 md:px-12 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-20">
          <Link href="/" className="mb-8 inline-block w-fit">
            <Image
              src="/logo.png"
              alt="Logo Makers Pro"
              width={200}
              height={70}
              className="h-auto w-[180px] object-contain md:w-[200px]"
            />
          </Link>
          <p className="max-w-[320px] text-[15px] leading-[1.7] text-zinc-400">
            We&apos;re a team of strategic designers and digital architects,
            connected in our quest for mastery and bright curiosity.
          </p>
        </div>

        {/* MIDDLE — Social Links */}
        <div className="flex flex-col border-b border-zinc-800 lg:col-span-2 lg:border-b-0 lg:border-r">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center border-b border-zinc-800 px-6 py-10 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center px-6 py-10 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Instagram
          </a>
        </div>

        {/* RIGHT — AUTOMATIC SPRING JUMP LET'S TALK (Lighter & Clean White) */}
        <div className="flex items-center justify-center px-8 py-16 lg:col-span-6 lg:py-20">
          <a href="#contact" className="inline-block py-4">
            <h2 className="flex items-center justify-center text-center text-5xl font-medium uppercase leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px]">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.12}s`}}
                  className="animate-spring-jump inline-block text-zinc-100 hover:text-white"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 px-8 py-8 md:flex-row md:items-center md:px-12">
        {/* Copyright */}
        <p className="text-[13px] leading-relaxed text-zinc-500">
          © 2026 Logo Makers Pro. All
          <br className="md:hidden" /> rights reserved.
        </p>

        {/* Footer Nav Links */}
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] font-bold uppercase tracking-[0.15em] text-white md:gap-x-10">
          <Link
            href="#packages"
            className="transition-colors hover:text-zinc-400"
          >
            Packages
          </Link>
          <Link
            href="#portfolio"
            className="transition-colors hover:text-zinc-400"
          >
            Portfolio
          </Link>
          <div className="flex flex-col gap-1">
            <Link
              href="#about"
              className="transition-colors hover:text-zinc-400"
            >
              About Us
            </Link>
            <Link
              href="/terms"
              className="text-[10px] tracking-[0.1em] text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link
              href="#contact"
              className="transition-colors hover:text-zinc-400"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-[10px] tracking-[0.1em] text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Privacy Policy
            </Link>
          </div>
        </nav>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <span className="text-sm font-bold">↑</span>
      </button>
    </footer>
  );
}