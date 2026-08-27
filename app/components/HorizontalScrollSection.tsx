"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function SmoothHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current && trackRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const maxScroll = rect.height - windowHeight;

            let scrollY = -rect.top;
            scrollY = Math.max(0, Math.min(scrollY, maxScroll));

            const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
            const trackWidth = trackRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const maxTranslateX = trackWidth - windowWidth;

            trackRef.current.style.transform = `translate3d(-${progress * maxTranslateX}px, 0, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#faf8f2]">
      <div className="sticky top-0 flex h-screen w-full overflow-hidden items-center">
        <div
          ref={trackRef}
          className="flex h-full w-[300vw] will-change-transform"
        >
          {/* PANEL 1: WHAT WE DO */}
          <div className="flex h-full w-[100vw] shrink-0 items-center justify-center md:justify-end px-8 md:px-32 bg-[#faf8f2]">
            <h2 className="text-[70px] sm:text-[100px] md:text-[140px] lg:text-[160px] font-black uppercase leading-[0.95] tracking-tight text-black text-center md:text-right">
              WHAT <br />
              WE DO
            </h2>
          </div>

          {/* PANEL 2: WHY CHOOSE US */}
          <div className="flex h-full w-[100vw] shrink-0 bg-[#faf8f2]">
            <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <span className="mb-12 text-sm font-bold tracking-[0.2em] text-black uppercase">
                  WHY <br /> CHOOSE US
                </span>

                <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                  <div>
                    <h3 className="text-5xl md:text-7xl lg:text-[85px] font-medium tracking-tighter text-[#1a1a1a] mb-2">
                      1000+
                    </h3>
                    <p className="text-[17px] font-medium leading-tight text-zinc-500">
                      Logo <br /> Designs
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-7xl lg:text-[85px] font-medium tracking-tighter text-[#1a1a1a] mb-2">
                      200+
                    </h3>
                    <p className="text-[17px] font-medium leading-tight text-zinc-500 relative inline-block">
                      Websites <br />
                      Desig
                      <span className="relative">
                        ns
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full border border-red-500/70" />
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-7xl lg:text-[85px] font-medium tracking-tighter text-[#1a1a1a] mb-2">
                      100+
                    </h3>
                    <p className="text-[17px] font-medium leading-tight text-zinc-500">
                      Mobile <br /> Apps
                    </p>
                  </div>

                  <div>
                    <h3 className="text-5xl md:text-7xl lg:text-[85px] font-medium tracking-tighter text-[#1a1a1a] mb-2">
                      150+
                    </h3>
                    <p className="text-[17px] font-medium leading-tight text-zinc-500">
                      Ecommerce <br /> Websites
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-full w-full hidden lg:block">
                <Image
                  src="/team-grid.webp"
                  alt="Why choose us team grid"
                  fill
                  className="object-cover object-left"
                />
              </div>
            </div>
          </div>

          {/* PANEL 3: CONTACT US — Second image design */}
          <div className="relative flex h-full w-[100vw] shrink-0 flex-col items-center justify-center bg-[#dfe3d0] px-6">
            {/* Subheading */}
            <p className="mb-6 text-center text-lg font-normal tracking-wide text-[#2a2a2a] md:mb-8 md:text-2xl">
              Have you project in mind?
            </p>

            {/* Main Heading */}
            <h2 className="mb-14 max-w-5xl text-center text-4xl font-black leading-[1.05] tracking-tight text-[#1a1a1a] sm:text-5xl md:mb-20 md:text-7xl lg:text-[90px]">
              Let&apos;s make something
              <br />
              great together!
            </h2>

            {/* Circular Contact Button */}
            <a
              href="#contact"
              className="group flex h-40 w-40 items-center justify-center rounded-full border border-[#1a1a1a] bg-transparent transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white md:h-48 md:w-48"
            >
              <span className="flex items-center gap-2 text-base font-medium leading-tight text-inherit md:text-lg">
                <span className="text-left">
                  Contact
                  <br />
                  With Us
                </span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-white shadow-xl transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          <span className="text-lg leading-none">↑</span>
        </button>
      </div>
    </section>
  );
}