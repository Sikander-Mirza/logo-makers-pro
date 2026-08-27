"use client";

import { useState } from "react";
import Image from "next/image";

// 1. Define TypeScript Types
type TabCategory =
  | "Logo"
  | "Web Design"
  | "E-Commerce"
  | "Mobile Apps"
  | "Branding Design";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  fallbackBg: string;
}

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<TabCategory>("Logo");

  const tabs: TabCategory[] = [
    "Logo",
    "Web Design",
    "E-Commerce",
    "Mobile Apps",
    "Branding Design",
  ];

  // 2. Add Type Annotation to portfolioItems
  const portfolioItems: Record<TabCategory, PortfolioItem[]> = {
    Logo: [
      {
        id: 1,
        title: "JC's Precision Painting",
        image: "/portfolio-1.webp",
        fallbackBg: "bg-black",
      },
      {
        id: 2,
        title: "Karlo Center LLC",
        image: "/portfolio-2.webp",
        fallbackBg: "bg-[#1f242d]",
      },
      {
        id: 3,
        title: "JC's Precision Painting Green",
        image: "/portfolio-3.webp",
        fallbackBg: "bg-black",
      },
      {
        id: 4,
        title: "Sentinels Football Team",
        image: "/portfolio-4.webp",
        fallbackBg: "bg-white",
      },
    ],
    "Web Design": [
      {
        id: 5,
        title: "Web Design Project 1",
        image: "/portfolio-1.webp",
        fallbackBg: "bg-zinc-900",
      },
      {
        id: 6,
        title: "Web Design Project 2",
        image: "/portfolio-2.webp",
        fallbackBg: "bg-zinc-800",
      },
    ],
    "E-Commerce": [
      {
        id: 7,
        title: "E-Commerce Project 1",
        image: "/portfolio-3.webp",
        fallbackBg: "bg-zinc-900",
      },
    ],
    "Mobile Apps": [
      {
        id: 8,
        title: "Mobile App 1",
        image: "/portfolio-4.webp",
        fallbackBg: "bg-zinc-800",
      },
    ],
    "Branding Design": [
      {
        id: 9,
        title: "Branding Project 1",
        image: "/portfolio-1.webp",
        fallbackBg: "bg-zinc-900",
      },
    ],
  };

  const currentItems = portfolioItems[activeTab] || portfolioItems["Logo"];

  return (
    <section className="bg-[#f3f3f3] py-16 text-black lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING WITH RED ACCENTS */}
        <div className="relative mb-10 text-center">
          <div className="relative inline-block">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-[#222428] sm:text-5xl md:text-6xl lg:text-[64px]">
              OUR PORTFOLIO
            </h2>

            {/* Red Thin Circle Accent over the letter 'R' */}
            <span className="pointer-events-none absolute left-[54%] top-[10%] h-8 w-8 -translate-x-1/2 rounded-full border border-red-400/80 sm:h-10 sm:w-10" />

            {/* Small Red Dot Accent floating below right side */}
            <span className="absolute -bottom-3 -right-8 h-2.5 w-2.5 rounded-full bg-red-500 sm:bottom-0 sm:-right-12" />
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#18144b] text-white shadow-md"
                    : "text-zinc-800 hover:text-black"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-md bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-sm ${item.fallbackBg}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}