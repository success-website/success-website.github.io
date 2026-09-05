"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, Layers, ArrowUpRight } from "lucide-react";
import { STACKING_CARDS } from "@/data/websiteData";

interface StackingCardsProps {
  onOpenQuote: () => void;
}

export default function StackingCards({ onOpenQuote }: StackingCardsProps) {
  return (
    <section className="py-24 lg:py-32 bg-zinc-100 text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
              04 / MANUFACTURING PILLARS
            </span>
            <div className="h-px bg-zinc-300 w-16" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900">
            Engineered for <span className="text-[#D2251F]">Scale & Reliability</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Discover the key infrastructure, quality control protocols, and supply-chain advantages
            that make Success Engineering Enterprises the preferred contract manufacturer for global leaders.
          </p>
        </div>

        {/* Stacking Cards Container (Sticky Stacking Effect) */}
        <div className="space-y-12 lg:space-y-16 relative">
          {STACKING_CARDS.map((card, idx) => {
            const isRedCard = idx % 2 === 0;

            return (
              <div
                key={card.id}
                className="sticky top-28 sm:top-32 transition-transform duration-300"
                style={{
                  zIndex: idx + 1,
                }}
              >
                <div
                  className={`rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border transition-all duration-300 ${
                    isRedCard
                      ? "bg-[#D2251F] text-white border-[#D2251F]"
                      : "bg-white text-zinc-900 border-zinc-200"
                  }`}
                >
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between border-b pb-6 mb-8 border-current/15">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full ${
                        isRedCard
                          ? "bg-white/20 text-white"
                          : "bg-[#D2251F]/10 text-[#D2251F]"
                      }`}
                    >
                      {card.badge}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black opacity-40">
                      0{card.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left title & narrative */}
                    <div className="lg:col-span-6 space-y-4">
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isRedCard ? "text-[#FF604B]" : "text-[#D2251F]"
                        }`}
                      >
                        {card.subtitle}
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
                        {card.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-medium leading-snug ${
                          isRedCard ? "text-white/90" : "text-zinc-700"
                        }`}
                      >
                        {card.highlight}
                      </p>
                      <p
                        className={`text-sm sm:text-base leading-relaxed font-normal pt-2 ${
                          isRedCard ? "text-white/80" : "text-zinc-600"
                        }`}
                      >
                        {card.text}
                      </p>
                    </div>

                    {/* Right specification checkpoints */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-3">
                        {card.points.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all ${
                              isRedCard
                                ? "bg-white/10 border-white/15 text-white"
                                : "bg-zinc-50 border-zinc-100 text-zinc-800"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                isRedCard ? "text-[#FF604B]" : "text-[#D2251F]"
                              }`}
                            />
                            <span className="text-sm font-semibold leading-relaxed">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          onClick={onOpenQuote}
                          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all group ${
                            isRedCard
                              ? "text-white hover:text-[#FF604B]"
                              : "text-[#D2251F] hover:text-[#B31C17]"
                          }`}
                        >
                          <span>Request Specifications</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
