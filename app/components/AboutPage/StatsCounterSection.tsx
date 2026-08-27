"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 1000, suffix: "+", label: "Logo\nDesigns" },
  { value: 200, suffix: "+", label: "Websites\nDesigns" },
  { value: 100, suffix: "+", label: "Mobile\nApps" },
  { value: 150, suffix: "+", label: "Ecommerce\nWebsites" },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic for a natural finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, start, duration]);

  return count;
}

function StatCard({
  item,
  start,
}: {
  item: StatItem;
  start: boolean;
}) {
  const count = useCountUp(item.value, start);

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-5xl font-medium tracking-tight text-[#2a2a2a] sm:text-6xl md:text-7xl lg:text-[84px]">
        {count}
        {item.suffix}
      </h3>
      <p className="mt-4 whitespace-pre-line text-sm font-medium leading-snug text-zinc-500 sm:text-[15px]">
        {item.label}
      </p>
    </div>
  );
}

export default function StatsCounterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-y-14 gap-x-6 md:grid-cols-4 md:gap-8">
          {stats.map((item) => (
            <StatCard key={item.label} item={item} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}