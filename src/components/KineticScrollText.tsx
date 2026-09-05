"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Award, Factory, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

interface KineticScrollTextProps {
  onOpenQuote: () => void;
}

export default function KineticScrollText({ onOpenQuote }: KineticScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Kinetic Split Text Animation: SUCCESS slides from left, ENGINEERING slides from right
  const xLeft = useTransform(scrollYProgress, [0.15, 0.55], ["-60%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0.15, 0.55], ["60%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0.2, 1]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.55], [0.92, 1]);
  const letterSpacingLeft = useTransform(scrollYProgress, [0.15, 0.55], ["0.15em", "-0.02em"]);
  const letterSpacingRight = useTransform(scrollYProgress, [0.15, 0.55], ["0.15em", "-0.02em"]);

  // Glow line flash when text converges
  const flashGlow = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0.4]);

  // Info Cards joining animation (fade & slide up together)
  const cardsY = useTransform(scrollYProgress, [0.48, 0.72], [80, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.45, 0.68], [0, 1]);
  const cardsScale = useTransform(scrollYProgress, [0.48, 0.72], [0.95, 1]);

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
      className="relative min-h-[120vh] bg-gradient-to-b from-[#020A19] via-[#010712] to-[#010712] text-[#D5E0FF] overflow-hidden py-32 flex flex-col justify-center select-none border-t border-[#D5E0FF]/15"
    >
      {/* Background Ambient Radial Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7099FF]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#38BDF8]/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Telemetry Tag */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 hubtown-tag text-xs">
            <span className="w-2 h-2 rounded-full bg-[#7099FF] animate-pulse" />
            <span>KINETIC ENTERPRISE ASSEMBLY // SCROLL TO CONVERGE</span>
          </div>
        </div>

        {/* Big Kinetic Splitting & Joining Text */}
        <div className="overflow-hidden py-4 text-center">
          {/* Top Word: SUCCESS (Slides in from Left) */}
          <motion.div
            style={{
              x: xLeft,
              opacity: textOpacity,
              scale: textScale,
              letterSpacing: letterSpacingLeft,
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-white drop-shadow-[0_0_40px_rgba(112,153,255,0.25)] leading-none"
          >
            SUCCESS
          </motion.div>

          {/* Bottom Word: ENGINEERING (Slides in from Right) */}
          <motion.div
            style={{
              x: xRight,
              opacity: textOpacity,
              scale: textScale,
              letterSpacing: letterSpacingRight,
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-[#D5E0FF] via-white to-[#7099FF] leading-none mt-2"
          >
            ENGINEERING
          </motion.div>

          {/* Glowing Horizontal Laser Accent upon convergence */}
          <motion.div
            style={{ opacity: flashGlow }}
            className="h-[2px] w-full max-w-4xl mx-auto mt-6 bg-gradient-to-r from-transparent via-[#7099FF] to-transparent shadow-[0_0_20px_#7099FF]"
          />
        </div>

        {/* Enterprise Info Joining Together as Scroll Progresses */}
        <motion.div
          style={{
            y: cardsY,
            opacity: cardsOpacity,
            scale: cardsScale,
          }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoBlocks.map((block, idx) => {
              const IconComp = block.icon;
              return (
                <div
                  key={idx}
                  className="hubtown-beveled p-6 bg-[#040E24]/80 border border-[#D5E0FF]/20 hover:border-[#7099FF]/50 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 shadow-lg hover:shadow-[#7099FF]/15"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase text-[#7099FF] tracking-wider">
                      {block.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-white">
                    {block.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#D5E0FF]/65 font-mono leading-relaxed">
                    {block.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Convergence CTA Bar */}
          <div className="mt-10 hubtown-beveled p-6 bg-gradient-to-r from-[#040E24]/90 via-[#061433]/90 to-[#040E24]/90 border border-[#D5E0FF]/25 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D5E0FF] text-[#020A19] flex items-center justify-center font-black text-xl shadow-lg shadow-[#7099FF]/30">
                SE
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-tight text-white">
                  Ready to Build with Single-Source Precision?
                </div>
                <div className="text-xs font-mono text-[#D5E0FF]/65 mt-0.5">
                  Direct Line: {COMPANY_INFO.phoneDisplay} • {COMPANY_INFO.emails[0]}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                data-cursor="RFQ"
                className="hubtown-btn-solid text-xs py-3 px-6 shadow-xl shadow-[#7099FF]/25"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
