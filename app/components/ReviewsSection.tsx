"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Review {
  id: number;
  quote: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    quote:
      "Working with Logo Makers Pro was an excellent experience. The team is exceptionally professional and incredibly friendly. I would definitely recommend their services to all new businesses, as they provided valuable tips to enhance my online presence.",
    author: "AMY GILL",
  },
  {
    id: 2,
    quote:
      "The creativity and attention to detail blew us away. Our brand identity feels premium and unique thanks to Logo Makers Pro. Communication was seamless from start to finish.",
    author: "JAMES CARTER",
  },
  {
    id: 3,
    quote:
      "From concept to final delivery, everything was flawless. They understood our vision instantly and delivered a logo that perfectly represents our company values.",
    author: "SARAH MITCHELL",
  },
];

// Floating image positions & parallax speeds
const floatingImages = [
  {
    src: "/review-1.webp",
    className:
      "top-[8%] left-[2%] w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px]",
    speed: 0.03,
  },
  {
    src: "/review-2.webp",
    className:
      "bottom-[6%] left-[4%] w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px]",
    speed: 0.045,
  },
  {
    src: "/review-3.webp",
    className:
      "top-[10%] right-[3%] w-[150px] h-[180px] md:w-[190px] md:h-[230px] lg:w-[210px] lg:h-[250px]",
    speed: 0.035,
  },
  {
    src: "/review-4.webp",
    className:
      "bottom-[18%] right-[8%] w-[130px] h-[130px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]",
    speed: 0.05,
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef(floatingImages.map(() => ({ x: 0, y: 0 })));
  const rafId = useRef<number | null>(null);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Smooth mouse-follow parallax logic for floating images
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.current.y = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const animate = () => {
      floatingImages.forEach((img, i) => {
        const el = imageRefs.current[i];
        if (!el) return;

        const targetX = mouse.current.x * 100 * img.speed * 20;
        const targetY = mouse.current.y * 100 * img.speed * 20;

        current.current[i].x += (targetX - current.current[i].x) * 0.08;
        current.current[i].y += (targetY - current.current[i].y) * 0.08;

        el.style.transform = `translate3d(${current.current[i].x}px, ${current.current[i].y}px, 0)`;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white py-24 md:py-32"
    >
      {/* FLOATING IMAGES — Moves with mouse cursor */}
      {floatingImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => {
            imageRefs.current[i] = el;
          }}
          className={`pointer-events-none absolute z-10 overflow-hidden rounded-sm shadow-lg will-change-transform ${img.className}`}
        >
          <Image
            src={img.src}
            alt="Client highlight"
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      ))}

      {/* CENTER CONTENT CONTAINER */}
      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6">
        
        {/* SLIDER VIEWPORT */}
        <div className="w-full overflow-hidden">
          {/* SLIDING TRACK */}
          <div
            className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex w-full shrink-0 flex-col items-center justify-center text-center px-4 md:px-12"
              >
                {/* Quote */}
                <blockquote className="mb-10 max-w-3xl">
                  <p className="font-serif text-[22px] font-normal italic leading-[1.55] tracking-tight text-black sm:text-[26px] md:text-[30px] lg:text-[34px]">
                    {review.quote}
                  </p>
                </blockquote>

                {/* Author Name */}
                <h3 className="text-lg font-black uppercase tracking-[0.15em] text-black md:text-2xl">
                  {review.author}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous review"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-base transition-transform duration-200 group-hover:-translate-x-0.5">
              ←
            </span>
          </button>
          
          <button
            onClick={goNext}
            aria-label="Next review"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            <span className="text-base transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}