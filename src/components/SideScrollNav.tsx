"use client";

import React, { useEffect, useState } from "react";

export default function SideScrollNav() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "01 // HERO" },
    { id: "about", label: "02 // PROFILE" },
    { id: "services", label: "03 // BAYS" },
    { id: "gallery", label: "04 // TOUR" },
    { id: "quality", label: "05 // QUALITY" },
    { id: "clients", label: "06 // CLIENTS" },
    { id: "news", label: "07 // BULLETINS" },
    { id: "contact", label: "08 // CONTACT" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight / 3;
          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, opts: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -60, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Section Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group flex items-center gap-2.5 py-1 focus:outline-none"
          >
            <span
              className={`font-mono text-[9px] uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-[#D5E0FF] font-bold translate-x-0"
                  : "opacity-0 group-hover:opacity-100 text-[#D5E0FF]/60 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {sec.label}
            </span>

            <div
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? "w-7 h-1.5 bg-[#D5E0FF] shadow-[0_0_12px_#7099FF]"
                  : "w-1.5 h-1.5 bg-[#D5E0FF]/25 group-hover:bg-[#D5E0FF]/70 group-hover:scale-125"
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
}
