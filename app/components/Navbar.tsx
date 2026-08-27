"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedMenuLink from "./AnimatedMenuLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when the full-screen menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Makers Pro"
              width={150}
              height={60}
              priority
              className="h-auto w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <AnimatedMenuLink href="/">HOME</AnimatedMenuLink>
          </li>
          <li>
            <AnimatedMenuLink href="/services">SERVICES</AnimatedMenuLink>
          </li>
          <li>
            <AnimatedMenuLink href="/portfolio">PORTFOLIO</AnimatedMenuLink>
          </li>
          <li>
            <AnimatedMenuLink href="/packages">PACKAGES</AnimatedMenuLink>
          </li>
          <li>
            <AnimatedMenuLink href="/about">ABOUT US</AnimatedMenuLink>
          </li>
          <li>
            <AnimatedMenuLink href="/contact">CONTACT US</AnimatedMenuLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Open Menu"
        >
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
          <span className="block h-0.5 w-7 bg-black"></span>
        </button>
      </nav>

      {/* FULL-SCREEN MENU MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen bg-[#111111] text-white animate-in fade-in duration-300">
          <div className="grid h-full w-full grid-cols-1 overflow-y-auto lg:grid-cols-12 lg:overflow-hidden">
            
            {/* LEFT COLUMN - LOGO & SOCIAL LINKS */}
            <div className="flex flex-col justify-between border-b border-zinc-800 p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
              <div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Logo Makers Pro"
                    width={160}
                    height={60}
                    className="h-auto w-auto brightness-0 invert"
                  />
                </Link>
              </div>

              <div className="my-12 space-y-3">
                <h4 className="text-base font-bold tracking-wide text-white">
                  Follow Us
                </h4>
                <ul className="space-y-1.5 text-sm font-medium text-zinc-300">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-1 text-sm font-semibold text-zinc-300">
                <div>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-white"
                  >
                    contact
                  </Link>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN - MAIN MENU LINKS */}
            <div className="flex flex-col justify-center border-b border-zinc-800 lg:col-span-5 lg:border-b-0">
              <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
                {/* HOME */}
                <div className="flex items-center justify-between px-8 py-5 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    HOME
                  </Link>
                </div>

                {/* SERVICES */}
                <div className="flex items-center justify-between pl-8 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-5 text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    SERVICES
                  </Link>
                  <button className="flex h-16 w-16 items-center justify-center border-l border-zinc-800 text-lg font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white">
                    +
                  </button>
                </div>

                {/* PORTFOLIO */}
                <div className="flex items-center justify-between px-8 py-5 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    PORTFOLIO
                  </Link>
                </div>

                {/* PACKAGES */}
                <div className="flex items-center justify-between pl-8 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/packages"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-5 text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    PACKAGES
                  </Link>
                  <button className="flex h-16 w-16 items-center justify-center border-l border-zinc-800 text-lg font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white">
                    +
                  </button>
                </div>

                {/* ABOUT */}
                <div className="flex items-center justify-between px-8 py-5 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    ABOUT
                  </Link>
                </div>

                {/* CONTACT */}
                <div className="flex items-center justify-between px-8 py-5 transition-colors hover:bg-zinc-900/50">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-wider text-white transition-colors hover:text-cyan-400 lg:text-4xl"
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - CONTACT INFO & GRAPHIC ACCENTS */}
            <div className="relative flex flex-col justify-between border-l-2 border-cyan-400 bg-[#161616] p-8 lg:col-span-4 lg:p-12 overflow-hidden">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-white transition-all hover:bg-white hover:text-black"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Contact Info */}
              <div className="z-10 my-auto space-y-6 pt-6">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Get in touch
                </h3>
                <div className="space-y-3 text-sm font-medium text-zinc-300">
                  <p>(307) 218-3240</p>
                  <p>support@logomakerspro.com</p>
                  <p className="max-w-[260px] leading-relaxed">
                    1309 Coffeen Ave. STE 1200,
                    <br />
                    Sheridan, WY 82801
                  </p>
                </div>
              </div>

              {/* Decorative Overlapping Circles */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[#ff7e67] opacity-90"></div>
              <div className="pointer-events-none absolute bottom-24 right-8 h-24 w-24 rounded-full bg-[#8c62ff] opacity-90"></div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}