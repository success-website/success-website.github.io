"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Award, Factory, Radio } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

interface KineticScrollTextProps {
  onOpenQuote: () => void;
}

export default function KineticScrollText({ onOpenQuote }: KineticScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Kinetic Split Text Animation: SUCCESS slides from left, ENGINEERING slides from right
  const xLeft = useTransform(scrollYProgress, [0.05, 0.4], ["-60%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0.05, 0.4], ["60%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0.3, 1]);
  const textScale = useTransform(scrollYProgress, [0.05, 0.4], [0.94, 1]);

  // Glow line flash when text converges
  const flashGlow = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const laserWidth = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "100%"]);

  // Info Cards joining animation (fade & slide up together)
  const cardsY = useTransform(scrollYProgress, [0.35, 0.65], [60, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.32, 0.6], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.35, 0.65], [0.95, 1]);

  const infoBlocks = [
    {
      label: "FOUNDATION",
      title: "20+ Years Excellence",
      subtitle: "Established 2004 • Tier-1 Supplier",
      icon: Award,
    },
    {
      label: "STAMPING POWER",
      title: "250-Ton Press Lines",
      subtitle: "Progressive & Deep-Draw Tooling",
      icon: Factory,
    },
    {
      label: "QUALITY SEAL",
      title: "ISO 9001:2015",
      subtitle: "Certified by UCAS India Pvt. Ltd.",
      icon: ShieldCheck,
    },
    {
      label: "CORRIDOR",
      title: "SIDCO Kakkalur",
      subtitle: "Chennai Logistical Hub Gateway",
      icon: MapPin,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative lg:h-[240vh] bg-gradient-to-b from-[#020A19] via-[#010712] to-[#010712] text-[#D5E0FF] select-none border-t border-[#D5E0FF]/15 py-16 lg:py-0"
    >
      {/* Mobile View (< lg): Natural Responsive Assembly */}
      <div className="lg:hidden container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 hubtown-tag text-[10px]">
            <Radio className="w-3 h-3 text-[#38BDF8] animate-pulse" />
            <span>KINETIC ENTERPRISE ASSEMBLY</span>
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center py-4">
          <div className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-white drop-shadow-[0_0_35px_rgba(112,153,255,0.3)] leading-none">
            SUCCESS
          </div>
          <div className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-[#D5E0FF] via-white to-[#7099FF] leading-none mt-1">
            ENGINEERING
          </div>
          <div className="w-48 mx-auto mt-3 h-[2px] bg-gradient-to-r from-transparent via-[#7099FF] to-transparent shadow-[0_0_15px_#7099FF]" />
        </div>

        {/* 4 Info Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          {infoBlocks.map((block, idx) => {
            const IconComp = block.icon;
            return (
              <div
                key={idx}
                className="hubtown-beveled p-4 bg-[#040E24]/85 border border-[#D5E0FF]/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase text-[#7099FF] tracking-wider">
                    {block.label}
                  </span>
                  <div className="w-6 h-6 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center">
                    <IconComp className="w-3 h-3" />
                  </div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight text-white">
                  {block.title}
                </h4>
                <p className="mt-0.5 text-[11px] text-[#D5E0FF]/65 font-mono leading-relaxed">
                  {block.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-6 hubtown-beveled p-4 bg-gradient-to-r from-[#040E24]/90 via-[#061433]/90 to-[#040E24]/90 border border-[#D5E0FF]/25 flex flex-col items-stretch gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5E0FF] text-[#020A19] flex items-center justify-center font-black text-base shadow-lg shadow-[#7099FF]/30 flex-shrink-0">
              SE
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-tight text-white">
                Ready to Build with Precision?
              </div>
              <div className="text-[10px] font-mono text-[#D5E0FF]/65 mt-0.5">
                {COMPANY_INFO.phoneDisplay} • {COMPANY_INFO.emails[0]}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            data-cursor="RFQ"
            className="hubtown-btn-solid text-xs py-2.5 px-6 shadow-xl shadow-[#7099FF]/25 justify-center w-full"
          >
            <span>Request RFQ</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop View (>= lg): Sticky Pinned Viewport Container */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-12 z-20">
        {/* Background Ambient Radial Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7099FF]/12 blur-[160px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#38BDF8]/10 blur-[130px] rounded-full" />
        </div>

        <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col justify-between h-full max-h-[88vh]">
          {/* Section Telemetry Tag */}
          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-2 hubtown-tag text-xs">
              <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
              <span>KINETIC ENTERPRISE ASSEMBLY // SCROLL TO CONVERGE</span>
            </div>
          </div>

          {/* Big Kinetic Splitting & Joining Text */}
          <div className="overflow-hidden py-2 text-center my-auto">
            {/* Top Word: SUCCESS (Slides in from Left) */}
            <motion.div
              style={{
                x: xLeft,
                opacity: textOpacity,
                scale: textScale,
              }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-white drop-shadow-[0_0_45px_rgba(112,153,255,0.3)] leading-none"
            >
              SUCCESS
            </motion.div>

            {/* Bottom Word: ENGINEERING (Slides in from Right) */}
            <motion.div
              style={{
                x: xRight,
                opacity: textOpacity,
                scale: textScale,
              }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-[#D5E0FF] via-white to-[#7099FF] leading-none mt-1 sm:mt-2"
            >
              ENGINEERING
            </motion.div>

            {/* Glowing Horizontal Laser Accent upon convergence */}
            <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 h-[2px] flex justify-center">
              <motion.div
                style={{
                  width: laserWidth,
                  opacity: flashGlow,
                }}
                className="h-full bg-gradient-to-r from-transparent via-[#7099FF] to-transparent shadow-[0_0_25px_#7099FF]"
              />
            </div>
          </div>

          {/* Enterprise Info Joining Together as Scroll Progresses */}
          <motion.div
            style={{
              y: cardsY,
              opacity: cardsOpacity,
              scale: cardsScale,
            }}
            className="w-full pb-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {infoBlocks.map((block, idx) => {
                const IconComp = block.icon;
                return (
                  <div
                    key={idx}
                    className="hubtown-beveled p-5 bg-[#040E24]/85 border border-[#D5E0FF]/20 hover:border-[#7099FF]/50 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 shadow-lg hover:shadow-[#7099FF]/15"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] uppercase text-[#7099FF] tracking-wider">
                        {block.label}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                      {block.title}
                    </h4>
                    <p className="mt-1 text-[11px] sm:text-xs text-[#D5E0FF]/65 font-mono leading-relaxed">
                      {block.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Interactive Convergence CTA Bar */}
            <div className="mt-6 hubtown-beveled p-4 sm:p-5 bg-gradient-to-r from-[#040E24]/90 via-[#061433]/90 to-[#040E24]/90 border border-[#D5E0FF]/25 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D5E0FF] text-[#020A19] flex items-center justify-center font-black text-lg shadow-lg shadow-[#7099FF]/30 flex-shrink-0">
                  SE
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-tight text-white">
                    Ready to Build with Single-Source Precision?
                  </div>
                  <div className="text-[11px] font-mono text-[#D5E0FF]/65 mt-0.5">
                    Helpline: {COMPANY_INFO.phoneDisplay} • {COMPANY_INFO.emails[0]}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={onOpenQuote}
                  data-cursor="RFQ"
                  className="hubtown-btn-solid text-xs py-2.5 px-6 shadow-xl shadow-[#7099FF]/25"
                >
                  <span>Request RFQ</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
