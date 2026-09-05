"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { STACKING_CARDS } from "@/data/websiteData";

interface StackingCardsProps {
  onOpenQuote: () => void;
}

export default function StackingCards({ onOpenQuote }: StackingCardsProps) {
  const cardColors = [
    "bg-[#241F21]",
    "bg-[#2B2527]",
    "bg-[#322B2E]",
    "bg-[#1D181A]",
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F8F6] text-[#241F21] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="floema-pill floema-pill-stone mb-4">
            04 • Architectural Pillars
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
            Engineered for Million-Cycle Repeatability.
          </h2>
          <p className="mt-4 text-base text-[#7A716D] font-normal leading-relaxed">
            Our operational framework is structured to eliminate supply chain variances and guarantee strict micron tolerances across every mass production run.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="space-y-8 relative">
          {STACKING_CARDS.map((card, idx) => (
            <div
              key={card.id}
              style={{ top: `${100 + idx * 30}px` }}
              className={`sticky rounded-[32px] p-8 sm:p-12 text-[#F2EFEA] ${cardColors[idx % cardColors.length]} shadow-2xl border border-white/10 transition-transform duration-500`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[#E9E778]">
                      0{card.id}
                    </span>
                    <span className="floema-pill floema-pill-dark text-xs border border-white/20">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#D2CDC4] leading-relaxed">
                    {card.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.points.map((p, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90"
                      >
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={onOpenQuote}
                    data-cursor="QUOTE"
                    className="floema-btn floema-btn-fluor text-xs py-3.5 px-6 shadow-xl"
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
