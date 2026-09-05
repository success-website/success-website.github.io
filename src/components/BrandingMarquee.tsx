"use client";

import React from "react";

export default function BrandingMarquee() {
  const items = [
    "PRECISION METAL STAMPING",
    "PROGRESSIVE PRESS TOOLS",
    "ISO 9001:2015 CERTIFIED",
    "AUTOMATED 250T HYDRAULIC LINE",
    "STRUCTURAL ROBOTIC WELDING",
    "TIER-1 AUTOMOTIVE SUPPLIER",
    "TURNKEY SUB-ASSEMBLY",
    "SIDCO INDUSTRIAL ESTATE",
  ];

  return (
    <div className="py-12 bg-[#241F21] text-[#F2EFEA] overflow-hidden select-none border-y border-white/10">
      {/* Track 1 (Leftward) */}
      <div className="flex animate-floema-marquee mb-4 whitespace-nowrap">
        {Array.from({ length: 4 }).flatMap(() => items).map((text, i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <span className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {text}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E9E778]" />
          </div>
        ))}
      </div>

      {/* Track 2 (Rightward with outlined typography) */}
      <div className="flex animate-floema-marquee-reverse whitespace-nowrap">
        {Array.from({ length: 4 }).flatMap(() => items).map((text, i) => (
          <div key={i} className="flex items-center gap-6 mx-4">
            <span
              className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-transparent"
              style={{ WebkitTextStroke: "1px #E9E778" }}
            >
              {text}
            </span>
            <span className="w-2 h-2 rounded-full border border-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
