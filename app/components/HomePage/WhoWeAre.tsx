"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT - Image Container */}
          <div className="lg:col-span-5 relative h-[480px] sm:h-[580px] lg:h-[660px] w-full">
            {/* Top-left red circle overlay */}
            <div className="absolute top-3 left-3 z-10 h-7 w-7 rounded-full border border-red-500/80 pointer-events-none" />
            
            {/* Top-right red dot accent */}
            <div className="absolute top-10 right-10 z-10 h-2 w-2 rounded-full bg-red-500 pointer-events-none" />

            <Image
              src="/office-team.webp"
              alt="Our team at work"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* RIGHT - Content Section */}
          <div className="lg:col-span-7 relative flex flex-col justify-center py-4">
            
            {/* CONTINUOUS VERTICAL LINE (Extends to the top & bottom of section) */}
            <div className="absolute -top-32 -bottom-32 left-4 md:left-12 lg:left-16 w-[1px] bg-zinc-800" />

            {/* 1. SUB-HEADING (Aligned to the right of the vertical line) */}
            <div className="pl-5 md:pl-5 lg:pl-3 ">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-white uppercase">
                WHO WE ARE
              </span>
            </div>

            {/* 2. MAIN HEADING (Extends left so the line cuts right through it) */}
            <h2 className="relative z-10 font-extrabold uppercase leading-[1.03] tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[66px] mb-10 pl-0 md:pl-2">
              BEST AND<br />
              REMARKABLE LOGO<br />
              DESIGN AGENCY
            </h2>

            {/* 3. DESCRIPTION & BUTTON (Aligned to the right of the line, exact match with WHO WE ARE) */}
            <div className="pl-10 md:pl-20 lg:pl-24 space-y-10">
              <p className="max-w-[480px] text-sm md:text-[15px] leading-[1.75] text-zinc-400 font-normal">
                At Logo Makers Pro, we pride ourselves on delivering top-tier
                logo design services. With experience spanning various
                industries, from startups to established brands, our team is
                adept at meeting the unique needs of every project. Trust us to
                bring your brand to life with excellence and precision.
              </p>

              {/* Circular Button */}
              <div>
                <a
                  href="#"
                  className="group inline-flex h-32 w-32 md:h-36 md:w-36 items-center justify-center rounded-full border border-zinc-800 bg-transparent text-xs sm:text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white hover:bg-white/5 hover:text-white"
                >
                  <span className="flex items-center gap-1.5">
                    Explore Us{" "}
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}