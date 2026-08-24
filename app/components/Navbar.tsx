"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedMenuLink from "./AnimatedMenuLink";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
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

      {/* Menu - hidden on mobile */}
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

      {/* Hamburger */}
      <button
        className="flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span className="block h-0.5 w-7 bg-black"></span>
        <span className="block h-0.5 w-7 bg-black"></span>
        <span className="block h-0.5 w-7 bg-black"></span>
      </button>
    </nav>
  );
}