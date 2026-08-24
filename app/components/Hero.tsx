"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-6 pb-6 md:px-12 lg:px-16">
      {/* Top-right sparkle */}
      <div className="absolute right-8 top-6 text-orange-400 md:right-16 md:top-8">
        <SparkleIcon className="h-6 w-6" />
      </div>

      <div className="mx-auto max-w-[1500px]">
        {/* Small label */}
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-[15px] font-bold tracking-[0.25em] text-black">
            LOGO DESIGN COMPANY
          </h2>
          <span className="h-[2px] w-14 bg-black"></span>
        </div>

        {/* ROW 1: LOGO */}
        <h1 className="font-black uppercase leading-[0.9] tracking-tight text-black text-[70px] md:text-[120px] lg:text-[150px]">
          LOGO
        </h1>

        {/* ROW 2: Paragraph FLOATED LEFT, MAKERS PRO wraps around it */}
        <div className="clear-both">
          {/* Paragraph floats left */}
          <p className="float-left mr-8 mt-20 w-[260px] text-[14px] leading-[1.6] text-gray-800">
            Elevate your business with captivating logo design solutions at
            Logo Makers Pro. We craft unique designs that enhance your
            brand&apos;s identity and leave a lasting impression. Achieve
            excellence with our{" "}
            <strong className="font-bold text-black">
              professional logo design services.
            </strong>
          </p>

          {/* MAKERS PRO */}
          <h1 className="relative font-black uppercase leading-[0.9] tracking-tight text-black text-[70px] md:text-[110px] lg:text-[130px]">
            MAKERS PRO
            <span className="absolute -top-2 right-[5%] text-orange-400 md:right-[8%]">
              <SparkleIcon className="h-7 w-7 md:h-10 md:w-10" />
            </span>
          </h1>
        </div>

        {/* ROW 3: Image with scroll pill */}
        <div className="clear-both mt-4 flex items-end gap-6">
          {/* Scroll pill */}
          <div className="flex h-14 w-8 shrink-0 items-center justify-center rounded-full border border-orange-400">
            <ArrowDown className="h-4 w-4 animate-bounce text-orange-400" />
          </div>

          {/* Full-width image */}
          <div className="relative h-[300px] w-full overflow-hidden md:h-[400px] lg:h-[450px]">
            <Image
              src="/hero-office.jpg"
              alt="Team collaboration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}