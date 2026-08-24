"use client";

import Link from "next/link";

interface AnimatedMenuLinkProps {
  href: string;
  children: string;
}

export default function AnimatedMenuLink({ href, children }: AnimatedMenuLinkProps) {
  const letters = children.split("");

  return (
    <Link
      href={href}
      className="group inline-flex h-[1em] overflow-hidden font-semibold leading-none text-black text-sm tracking-wider"
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className="relative inline-block h-[1em] overflow-hidden leading-none"
        >
          {/* Top letter - slides up and out */}
          <span
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
          {/* Bottom letter - slides up into view */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 inline-block translate-y-full text-red-500 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
    </Link>
  );
}