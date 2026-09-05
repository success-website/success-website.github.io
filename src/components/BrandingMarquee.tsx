"use client";

import React from "react";

export default function BrandingMarquee() {
  const textItems = [
    "SUCCESS ENGINEERING ENTERPRISES",
    "PRESS & PRECISION MANUFACTURING",
    "ISO 9001:2015 CERTIFIED",
    "20+ YEARS OF INDUSTRIAL EXCELLENCE",
    "HIGH TONNAGE STAMPING & FABRICATION",
    "TOOL & DIE SPECIALISTS",
  ];

  return (
    <section className="bg-[#D2251F] py-10 sm:py-14 overflow-hidden select-none border-y border-white/20">
      {/* Top Forward Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex gap-8 items-center animate-marquee">
          {textItems.concat(textItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white/95">
                {text}
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FF604B]" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Reverse Outlined Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden mt-4">
        <div className="flex gap-8 items-center animate-marquee-reverse">
          {textItems.concat(textItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span
                className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent"
                style={{
                  WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.4)",
                }}
              >
                {text}
              </span>
              <span className="w-3 h-3 rounded-full border border-white/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
