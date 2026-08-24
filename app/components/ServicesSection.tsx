"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "UI/UX\nDESIGN",
      description:
        "Your company logo isn't just a tiny artwork! It has to have an idea, a story behind the design. Team WebbMight aims to give your brand an edge, we design logos that become the talk of the town, making brands approachable!",
      icon: (
        <div className="relative inline-block">
          {/* Yellow accent circle */}
          <span className="absolute -bottom-1 -left-2 h-7 w-7 rounded-full bg-[#f3b749]" />
          {/* UI/UX Icon */}
          <svg
            className="relative z-10 h-11 w-11 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <path d="M15 7l-4 4" />
            <path d="M17 5l-2 2" />
          </svg>
        </div>
      ),
    },
    {
      title: "LOGO\nDESIGN",
      description:
        "Designing engaging logos that resonate with your brand's identity. Our team ensures your logo reflects your products and services, establishing a memorable and impactful brand presence.",
      icon: (
        <div className="relative inline-block">
          {/* Yellow accent circle */}
          <span className="absolute -bottom-1 -left-2 h-7 w-7 rounded-full bg-[#f3b749]" />
          {/* Logo Design Icon */}
          <svg
            className="relative z-10 h-11 w-11 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="1" strokeDasharray="2 2" />
            <path d="M12 7l-4 9h8l-4-9z" />
            <line x1="9.5" y1="13" x2="14.5" y2="13" />
            <circle cx="3" cy="3" r="1.5" fill="currentColor" />
            <circle cx="21" cy="3" r="1.5" fill="currentColor" />
            <circle cx="3" cy="21" r="1.5" fill="currentColor" />
            <circle cx="21" cy="21" r="1.5" fill="currentColor" />
          </svg>
        </div>
      ),
    },
    {
      title: "ANIMATION",
      description:
        "Creating dynamic animations that bring your brand to life. Our team specializes in delivering captivating motion graphics and animations that engage and captivate your audience.",
      icon: (
        <div className="relative inline-block">
          {/* Yellow accent circle */}
          <span className="absolute -bottom-1 -left-2 h-7 w-7 rounded-full bg-[#f3b749]" />
          {/* Animation Icon */}
          <svg
            className="relative z-10 h-11 w-11 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9v6" />
            <path d="M9 12h6" />
            <circle cx="5" cy="7" r="1" fill="currentColor" />
            <circle cx="19" cy="7" r="1" fill="currentColor" />
            <circle cx="5" cy="17" r="1" fill="currentColor" />
            <circle cx="19" cy="17" r="1" fill="currentColor" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 text-black lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        
        {/* CENTERED HEADER & DESCRIPTION CONTAINER */}
        <div className="mx-auto max-w-4xl mb-16 lg:mb-20">
          
          {/* Subheading */}
          <span className="mb-4 block text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">
            SERVICES
          </span>

          {/* Main Heading with Red Circle Overlay */}
          <div className="relative mb-8 inline-block w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase leading-[1.08] tracking-tight text-black">
              GRAPHIC DESIGN SERVICES
              <br />
              WE OFFER
            </h2>

            {/* Red Ring + Dot Accent (overlaying the heading as in image) */}
            <div className="absolute left-[330px] sm:left-[420px] lg:left-[510px] top-1 sm:top-2 lg:top-3 flex items-center pointer-events-none">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-red-400">
                <span className="absolute -bottom-0.5 -right-1 h-2 w-2 rounded-full bg-red-500" />
              </div>
            </div>
          </div>

          {/* Vertical Line + Description (Aligned to the center/right of heading) */}
          <div className="relative ml-0 md:ml-[37%] pl-8 md:pl-12 pt-4">
            
            {/* Vertical Line */}
            <div className="absolute -top-6 bottom-0 left-0 w-[1px] bg-gray-200" />

            {/* Paragraph Text */}
            <p className="max-w-[460px] text-xs sm:text-[13px] leading-[1.8] text-zinc-600 font-normal">
              Logo Makers Pro specializes in comprehensive logo design services,
              empowering businesses to craft a compelling digital identity. Our
              skilled designers collaborate closely with you to create bespoke
              logo solutions. From conceptualization to execution, we offer a
              range of logo design services tailored to your needs.
            </p>
          </div>

        </div>

        {/* 3 CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-[#f2f2f2] p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Body */}
              <div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="whitespace-pre-line text-base font-bold tracking-tight text-black uppercase leading-snug">
                  {service.title}
                </h3>
                <p className="mt-4 text-[12px] leading-[1.7] text-zinc-600 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Button */}
              <div className="pt-6">
                <button className="rounded-full bg-[#1c1a4e] px-7 py-2.5 text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-black">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}