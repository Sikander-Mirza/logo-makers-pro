"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BuildingBrandsSection from "../components/AboutPage/BuildingBrandsSection";
import StatsCounterSection from "../components/AboutPage/StatsCounterSection";
import ReviewsSection from "../components/HomePage/ReviewsSection";

export default function AboutPage() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [isFilled, setIsFilled] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 }); // % inside the button

  const getOriginFromEvent = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    return { x, y };
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOrigin(getOriginFromEvent(e));
    // next frame so browser applies new transform-origin before scaling
    requestAnimationFrame(() => setIsFilled(true));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOrigin(getOriginFromEvent(e));
    requestAnimationFrame(() => setIsFilled(false));
  };

  return (
    <div>
    <section className="relative overflow-hidden bg-white py-20 text-black md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <h1 className="mb-16 max-w-5xl text-4xl font-black tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]">
          About Logo Makers Pro
        </h1>

        {/* 3-column layout matching the design */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Contact circle */}
          <div className="flex justify-center lg:col-span-3 lg:justify-start">
            <Link
              ref={btnRef}
              href="/contact"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-[#2a2a6a] md:h-48 md:w-48"
            >
              {/* Dark blue fill — expands from cursor entry / exits from leave point */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-[#0b1b33] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: isFilled ? "scale(1)" : "scale(0)",
                  transformOrigin: `${origin.x}% ${origin.y}%`,
                }}
              />

              {/* Label */}
              <span
                className={`relative z-10 flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-colors duration-500 ${
                  isFilled ? "text-white" : "text-black"
                }`}
              >
                Contact Us
                <span
                  className={`transition-transform duration-500 ${
                    isFilled ? "translate-x-0.5 -translate-y-0.5" : ""
                  }`}
                >
                  ↗
                </span>
              </span>
            </Link>
          </div>

          {/* CENTER — Description */}
          <div className="lg:col-span-5">
            <p className="max-w-[420px] text-[15px] leading-[1.85] text-zinc-500 md:text-[16px]">
              At Logo Makers Pro, we are passionate about helping businesses and
              entrepreneurs stand out with high-quality, custom logos. Our team
              of experienced designers works closely with clients to understand
              their brand&apos;s vision and create unique logos that reflect
              their identity and values. Whether you&apos;re a startup or an
              established business, we provide tailored logo design solutions
              that set you apart from the competition.
            </p>
          </div>

          {/* RIGHT — line + logo */}
          <div className="flex items-center gap-8 lg:col-span-4 lg:justify-end">
            <div className="hidden h-px w-24 bg-zinc-200 sm:block lg:w-32" />
            <div className="relative h-16 w-40 shrink-0 md:h-20 md:w-48">
              <Image
                src="/logo.png"
                alt="Logo Makers Pro"
                fill
                className="object-contain object-right"
                sizes="200px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <BuildingBrandsSection/>
    <StatsCounterSection/>
    <ReviewsSection/>
    </div>
  );
}