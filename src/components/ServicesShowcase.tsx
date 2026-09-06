"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, X, MapPin, SlidersHorizontal, ChevronRight, Layers, Radio } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/websiteData";

interface ServicesShowcaseProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function ServicesShowcase({ onOpenQuoteWithService }: ServicesShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth Horizontal Scrubbing Translation across the 5 bays (Hubtown signature)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  // Dynamic progress percentage for HUD
  const progressPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative lg:h-[380vh] bg-[#020A19] text-[#D5E0FF] py-16 sm:py-24 lg:py-0 border-t border-[#D5E0FF]/10"
    >
      {/* Mobile View (< lg): Fluid Horizontal Touch Carousel */}
      <div className="lg:hidden container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="hubtown-tag flex items-center gap-2 text-[10px]">
              <Radio className="w-3 h-3 text-[#38BDF8] animate-pulse" />
              <span>02 // CAPABILITIES & BAYS</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-tight">
            Five Production Bays Under One Roof.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#D5E0FF]/70 leading-relaxed">
            Our SIDCO Kakkalur complex integrates progressive tool design, 250T stamping, certified robotic welding, and turnkey sub-assembly.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#D5E0FF]/15 font-mono">
            <div className="p-2.5 rounded-lg bg-[#040E24]/80 border border-[#D5E0FF]/10">
              <span className="text-[#7099FF] block font-bold text-base">250T</span>
              <span className="text-[#D5E0FF]/60 text-[9px] uppercase">Press Capacity</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#040E24]/80 border border-[#D5E0FF]/10">
              <span className="text-[#7099FF] block font-bold text-base">0.01 mm</span>
              <span className="text-[#D5E0FF]/60 text-[9px] uppercase">Tolerance Standard</span>
            </div>
          </div>

          <div className="mt-4 text-[11px] font-mono text-[#7099FF] flex items-center gap-2">
            <span>Swipe bays horizontally →</span>
          </div>
        </div>

        {/* Swipeable Bays Container */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="w-[82vw] max-w-[340px] flex-shrink-0 snap-center hubtown-beveled p-4 bg-[#040E24]/90 border border-[#D5E0FF]/20 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#020A19] border border-[#D5E0FF]/15 mb-3">
                <Image
                  src={service.defaultImg}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="82vw"
                />
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#020A19]/90 border border-[#D5E0FF]/20 text-[#D5E0FF]">
                    BAY {service.number}
                  </span>
                  <span className="hubtown-tag text-[9px]">
                    {service.tag}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                    {service.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#D5E0FF]/60">
                    {service.hallOrBay}
                  </span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white font-['Space_Grotesk'] mt-1">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#D5E0FF]/65 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D5E0FF]/10 flex items-center justify-between mt-3">
                <span className="text-[10px] font-mono text-[#7099FF] uppercase tracking-wider">
                  Tap for dossier
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuoteWithService(service.title);
                  }}
                  className="hubtown-btn-solid text-[10px] py-1.5 px-3 flex items-center gap-1"
                >
                  <span>RFQ</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View (>= lg): Sticky Fullscreen Viewport Window (Hubtown Pinned Scroll) */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden flex-col justify-between py-6 sm:py-8 z-20">
        {/* Background Ambient Radial Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#7099FF]/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#38BDF8]/10 blur-[120px] rounded-full" />
        </div>

        {/* Top Header & Telemetry Bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="hubtown-tag flex items-center gap-2">
              <Radio className="w-3 h-3 text-[#38BDF8] animate-pulse" />
              <span>02 // PINNED PRODUCTION BAY TOUR</span>
            </span>
            <span className="hidden md:inline-flex font-mono text-[11px] text-[#7099FF]">
              HORIZONTAL CAMERA CAROUSEL
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-[#D5E0FF]/70">
            <div className="flex items-center gap-2">
              <span className="text-[#38BDF8] animate-pulse">●</span>
              <span>SCROLL VERTICALLY TO SCRUB BAYS</span>
            </div>
            <div className="w-28 h-1.5 bg-[#D5E0FF]/15 rounded-full overflow-hidden hidden sm:block">
              <motion.div
                style={{ width: useTransform(progressPercent, (v) => `${v}%`) }}
                className="h-full bg-gradient-to-r from-[#7099FF] to-[#38BDF8]"
              />
            </div>
          </div>
        </div>

        {/* Center: Horizontal Sliding Track of Monolith Production Bay Cards */}
        <div className="relative w-full overflow-visible my-auto z-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-10 items-center px-4 sm:px-8 lg:px-16 will-change-transform"
          >
            {/* Card 0: Section Overview & Telemetry Banner */}
            <div className="w-[85vw] sm:w-[55vw] lg:w-[38vw] max-w-[560px] h-[64vh] sm:h-[70vh] flex-shrink-0 hubtown-beveled p-8 sm:p-10 bg-gradient-to-br from-[#040E24] via-[#061433] to-[#040E24] border border-[#D5E0FF]/20 flex flex-col justify-between backdrop-blur-xl shadow-2xl">
              <div>
                <span className="hubtown-tag text-[10px] mb-4 inline-block">
                  SINGLE-SOURCE FACILITY
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[1.05]">
                  Five Production Bays Under One Roof.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#D5E0FF]/70 leading-relaxed font-normal">
                  Our SIDCO Kakkalur complex integrates progressive tool design, 250T stamping, certified robotic welding, and turnkey sub-assembly into an uninterrupted supply chain.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#D5E0FF]/15">
                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <span className="text-[#7099FF] block font-bold text-lg">250T</span>
                    <span className="text-[#D5E0FF]/60 text-[10px] uppercase">Max Press Capacity</span>
                  </div>
                  <div>
                    <span className="text-[#7099FF] block font-bold text-lg">0.01 mm</span>
                    <span className="text-[#D5E0FF]/60 text-[10px] uppercase">Tolerance Precision</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] pt-2">
                  <span>Scroll down to navigate through Bays →</span>
                </div>
              </div>
            </div>

            {/* Cards 1 to 5: The 5 Dedicated Production Bays */}
            {SERVICES_DATA.map((service, idx) => (
              <div
                key={service.id}
                data-cursor="INSPECT"
                onClick={() => setSelectedService(service)}
                className="w-[85vw] sm:w-[65vw] lg:w-[48vw] max-w-[740px] h-[64vh] sm:h-[70vh] flex-shrink-0 hubtown-beveled p-6 sm:p-8 bg-[#040E24]/85 border border-[#D5E0FF]/20 hover:border-[#7099FF]/60 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#7099FF]/15 group cursor-pointer"
              >
                {/* Image Section with Crossfade */}
                <div className="relative aspect-[16/9] w-full hubtown-beveled overflow-hidden bg-[#020A19] border border-[#D5E0FF]/15">
                  <Image
                    src={service.defaultImg}
                    alt={service.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 85vw, 48vw"
                  />
                  <Image
                    src={service.hoverImg}
                    alt={`${service.title} Alternate View`}
                    fill
                    className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 48vw"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-[#020A19]/85 border border-[#D5E0FF]/20 text-[#D5E0FF]">
                      BAY {service.number} // 05
                    </span>
                    <span className="hubtown-tag text-[10px]">
                      {service.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-[#020A19]/85 border border-[#D5E0FF]/20 text-[#D5E0FF] px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#7099FF]" />
                    <span>{service.hallOrBay}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                        {service.category}
                      </span>
                      <span className="text-xs font-mono text-[#D5E0FF]/50">
                        CLICK TO EXPAND DOSSIER
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#D5E0FF] transition-colors mt-1 font-['Space_Grotesk']">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#D5E0FF]/65 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Footer Bar: Materials & Action Button */}
                  <div className="pt-4 border-t border-[#D5E0FF]/10 flex items-center justify-between mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-[#020A19] border border-[#D5E0FF]/15 text-[#D5E0FF]/70 text-[11px] font-mono"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteWithService(service.title);
                      }}
                      className="hubtown-btn-solid text-xs py-2 px-4 shadow-md shadow-[#7099FF]/20 flex items-center gap-1.5"
                    >
                      <span>Request RFQ</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Navigation Indicators */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex items-center justify-between pt-2 border-t border-[#D5E0FF]/10 font-mono text-xs text-[#D5E0FF]/60">
          <div className="flex items-center gap-3">
            <span>BAY SCRUBBER</span>
            <span className="text-[#7099FF]">01 / 05 BAYS</span>
          </div>

          <div className="flex items-center gap-2">
            <span>INSPECTION READY</span>
            <span className="w-2 h-2 rounded-full bg-[#7099FF] animate-ping" />
          </div>
        </div>
      </div>

      {/* Detailed Bay Inspection Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 overflow-hidden p-6 sm:p-8 text-[#D5E0FF] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="hubtown-tag text-xs mb-2">
                  {selectedService.hallOrBay}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-['Space_Grotesk']">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#020A19] border border-[#D5E0FF]/15">
              <Image
                src={selectedService.defaultImg}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm sm:text-base text-[#D5E0FF]/75 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                Technical Specifications & Equipment:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#D5E0FF]/70">
                {selectedService.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7099FF] mt-2 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D5E0FF]/10 flex items-center justify-between">
              <button
                onClick={() => {
                  const name = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteWithService(name);
                }}
                className="hubtown-btn-solid text-xs py-3 px-6 shadow-lg shadow-[#7099FF]/20"
              >
                <span>Request RFQ for this Bay</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#D5E0FF]/60 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
