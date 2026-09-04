"use client";

import { useState, useRef, useEffect } from "react";

interface PackagePlan {
  id: string;
  name: string;
  price: string;
  phone: string;
  hasAccent?: boolean;
  features: string[];
}

export default function PricingPackages() {
  const packages: PackagePlan[] = [
    {
      id: "basic",
      name: "LOGO BASIC",
      price: "$29",
      phone: "(307) 218-3240",
      features: [
        "4 Original Logo Concepts",
        "2 Dedicated Logo Designer",
        "4 Revisions",
        "With Grey Scale Format",
        "Free Icon Design",
        "Formats: JPEG Only",
        "24 – 48 Business Hours Turnaround Time",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
      ],
    },
    {
      id: "silver",
      name: "LOGO SILVER",
      price: "$89",
      phone: "(307) 218-3240",
      features: [
        "6 Custom Logo Design Concepts",
        "By 2 Designers",
        "Unlimited Revisions",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "48 to 72 hours TAT",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Ownership Rights",
        "Vector & Source Files Included",
      ],
    },
    {
      id: "gold",
      name: "LOGO GOLD",
      price: "$129",
      phone: "(307) 218-3240",
      hasAccent: true,
      features: [
        "12 Logo Design Concepts",
        "By 4 Designers",
        "UNLIMITED Revisions",
        "Stationary Design (Business Card, Letterhead, Envelope)",
        "FREE MS Word Letterhead",
        "48 to 72 hours TAT",
        "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
        "100% Satisfaction Guarantee",
        "Complete Brand Guidelines",
      ],
    }, 
  ];

  return (
    <section className="bg-[#f2f2f2] py-16 text-black lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[#1e2125] sm:text-4xl lg:text-[44px]">
            Logo Design Packages
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: PackagePlan }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fixed height for the orange bar (55% of the total track height)
  const barHeightPercent = 55;

  // Calculate scroll position (0 = top, 1 = bottom)
  const handleScroll = () => {
    if (!listRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(scrollTop / maxScroll);
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  // Top position calculation: moves orange bar between 0% and (100% - barHeightPercent)%
  const topOffsetPercent = scrollProgress * (100 - barHeightPercent);

  return (
    <div className="relative flex h-[520px] flex-col justify-between rounded-2xl bg-[#0f0f0f] p-7 text-white shadow-2xl transition-transform duration-300 hover:-translate-y-1">
      {/* Top Right Cyan Accent Circle (Gold Card) */}
      {pkg.hasAccent && (
        <div className="absolute -top-4 right-10 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-[#0f0f0f] pointer-events-none">
          <span className="h-2.5 w-2.5 rounded-full bg-[#00d2ec]" />
        </div>
      )}

      {/* Card Header */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-lg font-black uppercase tracking-wider text-white">
          {pkg.name}
        </h3>
        <span className="text-3xl font-extrabold text-white">{pkg.price}</span>
      </div>

      {/* Body: Features List + White Track with Sliding Orange Bar + Phone */}
      <div className="my-3 flex flex-1 items-stretch justify-between overflow-hidden pt-2 gap-4">
        
        {/* Scrollable Features List */}
        <ul
          ref={listRef}
          onScroll={handleScroll}
          className="flex-1 space-y-4 text-[13px] font-semibold text-zinc-100 leading-snug overflow-y-auto max-h-[290px] pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-[#00d2ec] font-bold text-base leading-none select-none">
                →
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* WHITE LINE TRACK WITH SLIDING ORANGE BAR */}
        <div className="relative flex h-full w-[2px] bg-white rounded-full overflow-hidden select-none shrink-0">
          <div
            className="absolute w-full bg-[#e9532b] rounded-full transition-all duration-75 ease-out"
            style={{
              height: `${barHeightPercent}%`,
              top: `${topOffsetPercent}%`,
            }}
          />
        </div>

        {/* Rotated Phone Number */}
        <div className="flex items-center justify-center pl-1 select-none">
          <span className="whitespace-nowrap text-[11px] font-bold tracking-wider text-white [writing-mode:vertical-lr] rotate-180">
            {pkg.phone}
          </span>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-2">
        <button className="rounded-lg bg-[#00d2ec] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#00b8ce]">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}