"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { STACKING_CARDS } from "@/data/websiteData";

interface StackingCardsProps {
  onOpenQuote: () => void;
}

export default function StackingCards({ onOpenQuote }: StackingCardsProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardColors = [
    "bg-[#020A19]",
    "bg-[#040E24]",
    "bg-[#061433]",
    "bg-[#030C22]",
  ];

  return (
    <section className="py-16 sm:py-28 bg-[#040E24] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hubtown-tag">
              [ 04 // ARCHITECTURAL PILLARS ]
            </span>
            <span className="font-mono text-[11px] text-[#7099FF]">
              RELIABILITY MATRIX
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
            Engineered for Million-Cycle Repeatability.
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#D5E0FF]/70 font-normal leading-relaxed">
            Our operational framework is structured to eliminate supply chain variances and guarantee strict micron tolerances across every mass production run.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="space-y-6 sm:space-y-8 relative">
          {STACKING_CARDS.map((card, idx) => (
            <div
              key={card.id}
              style={isDesktop ? { top: `${100 + idx * 30}px` } : undefined}
              className={`relative lg:sticky hubtown-beveled p-5 sm:p-10 lg:p-12 text-[#D5E0FF] ${cardColors[idx % cardColors.length]} shadow-2xl border border-[#D5E0FF]/20 transition-transform duration-500 backdrop-blur-xl`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-4xl font-black font-mono text-[#7099FF]">
                      0{card.id}
                    </span>
                    <span className="hubtown-tag text-[10px] sm:text-xs">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#D5E0FF]/75 leading-relaxed">
                    {card.text}
                  </p>

                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                    {card.points.map((p, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-1 rounded-full bg-[#D5E0FF]/10 border border-[#D5E0FF]/15 text-[11px] sm:text-xs font-mono text-[#D5E0FF]"
                      >
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 pt-2 lg:pt-0">
                  <button
                    onClick={onOpenQuote}
                    data-cursor="QUOTE"
                    className="hubtown-btn-solid text-xs py-3 px-5 sm:px-6 shadow-xl shadow-[#7099FF]/20 w-full sm:w-auto justify-center"
                  >
                    <span>Partner with Us</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
