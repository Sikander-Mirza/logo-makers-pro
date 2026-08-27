"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function BuildingBrandsSection() {
  const centerImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (centerImageRef.current) {
            const rect = centerImageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress (0 when entering bottom of screen, 1 when past center)
            const totalDistance = windowHeight + rect.height;
            const currentPosition = windowHeight - rect.top;
            let progress = currentPosition / totalDistance;

            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // Map progress to clip-path inset percentage (e.g. 25% inset down to 0% fully revealed)
            // Starts revealing as soon as it enters viewport and reaches 100% revealed near center screen
            const revealProgress = Math.min(1, progress * 1.8); // Speeds up reveal completion
            const insetPercent = (1 - revealProgress) * 25; // Inset from 25% down to 0%

            // Apply smooth clip-path mask expansion
            centerImageRef.current.style.clipPath = `inset(${insetPercent}% ${insetPercent * 0.5}% ${insetPercent}% ${insetPercent * 0.5}% rounded 12px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white py-20 text-black md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* TOP HEADER: 2-COLUMN GRID */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 mb-16 lg:mb-24">
          
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-black tracking-tight uppercase leading-[1.05] text-black">
              Building Brands <br />
              with Impactful <br />
              Designs
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-sm sm:text-base leading-[1.8] text-zinc-600 font-normal">
              Our goal is simple: to provide logos that make an impact. With
              years of expertise in logo creation and branding, Logo Makers Pro
              ensures that every design we deliver is not only visually
              appealing but also meaningful. We believe that a great logo is
              the cornerstone of a successful brand, and we are dedicated to
              providing our clients with designs that resonate with their
              audience and elevate their brand image. Let us help you create a
              logo that speaks to your target market and sets the foundation for
              long-term business growth.
            </p>
          </div>
        </div>

        {/* BOTTOM IMAGE GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LEFT IMAGE (Portrait) */}
          <div className="md:col-span-3 relative h-[300px] sm:h-[380px] md:h-[420px] w-full overflow-hidden rounded-xl">
            <Image
              src="/team-left.webp" // Replace with your image path
              alt="Team member at work"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* CENTER IMAGE (Scroll Reveal Effect) */}
          <div
            ref={centerImageRef}
            className="md:col-span-6 relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full overflow-hidden shadow-xl will-change-[clip-path] transition-transform duration-300"
            style={{
              clipPath: "inset(25% 12.5% 25% 12.5% rounded 12px)",
            }}
          >
            <Image
              src="/team-center.webp" // Replace with your image path
              alt="Team collaboration"
              fill
              className="object-cover object-center scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* RIGHT IMAGE (Small Stack) */}
          <div className="md:col-span-3 relative h-[220px] sm:h-[280px] md:h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              src="/team-right.webp" // Replace with your image path
              alt="Office presentation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}