"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Award, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const isLarge = window.innerWidth >= 1024;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isPotato = typeof navigator !== "undefined" && typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
    setIsDesktop(isLarge && !isReduced && !isPotato);
  }, []);

  const imgParallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const highlights = [
    {
      code: "BAY.SYS // 01",
      title: "Single-Source Engineering Ecosystem",
      desc: "From rapid prototyping and 3D CAD modeling to progressive die making, 250T stamping, and turnkey welded sub-assemblies under one roof.",
      icon: Factory,
    },
    {
      code: "TENURE // 2004-PRESENT",
      title: "20+ Years of Manufacturing Integrity",
      desc: "Founded in 2004, serving premier multinational OEMs across automotive, heavy machinery, power generation, and infrastructure.",
      icon: Award,
    },
    {
      code: "CORRIDOR // SIDCO-TN",
      title: "Strategic Logistical Hub Location",
      desc: "Situated inside SIDCO Industrial Estate, Kakkalur, just 30 minutes from the Chennai bypass and international export gateways.",
      icon: MapPin,
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="cv-auto py-16 sm:py-28 bg-[#020A19] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      {/* Background Radial Glow (zero-blur GPU gradient) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full ambient-glow-blue pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
            <span className="hubtown-tag text-[10px] sm:text-xs">
              [ 01 // ENTERPRISE PROFILE ]
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#7099FF] tracking-wider">
              LAT 13.1438° N / LONG 79.9082° E
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
            Engineering Excellence Built on Two Decades of Precision.
          </h2>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#D5E0FF]/70 font-normal leading-relaxed">
            Headquartered in SIDCO Industrial Estate, Kakkalur, Success Engineering Enterprises is an ISO 9001:2015 certified manufacturer specializing in precision press tools, high-tonnage sheet metal stamping, and turnkey welded sub-assemblies.
          </p>
        </motion.div>

        {/* 2-Column Split: Highlight Cards & Facility Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="hubtown-beveled p-4 sm:p-6 bg-[#040E24]/85 border border-[#D5E0FF]/15 hover:border-[#7099FF]/40 hover:bg-[#081636]/80 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7099FF]">
                            {item.code}
                          </span>
                        </div>
                        <h3 className="mt-1 text-sm sm:text-base font-bold uppercase tracking-tight text-[#D5E0FF]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#D5E0FF]/65 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                data-cursor="AUDIT"
                className="hubtown-btn-solid text-xs py-3 sm:py-3.5 px-6 shadow-lg shadow-[#7099FF]/20 justify-center"
              >
                <span>Schedule a Plant Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hubtown-btn-glass text-xs py-3 sm:py-3.5 px-5 justify-center text-center"
              >
                <span>Open Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Photo with HUD markings */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div
              data-cursor="FACILITY"
              className="hubtown-beveled relative p-2 bg-[#040E24]/80 border border-[#D5E0FF]/20 group overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#020A19] hubtown-beveled">
                <motion.div style={isDesktop ? { y: imgParallaxY, scale: 1.08 } : undefined} className="absolute inset-0 w-full h-full">
                  <Image
                    src={getAssetPath("/images/Homepage_img.jpg")}
                    alt="Success Engineering Tooling Bay"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* HUD Corner Accents */}
                <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2">
                  <span className="hubtown-tag text-[10px]">
                    LIVE FACILITY // BAY 01-05
                  </span>
                </div>

                <div className="absolute top-4 right-4 pointer-events-none">
                  <div className="w-3 h-3 border-t-2 border-r-2 border-[#7099FF]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex items-end justify-between bg-gradient-to-t from-[#020A19] via-[#020A19]/80 to-transparent p-4 rounded-b-xl">
                  <div>
                    <span className="font-mono text-[10px] text-[#7099FF] block uppercase tracking-wider">
                      SIDCO Kakkalur Production Floor
                    </span>
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#D5E0FF]">
                      Heavy Stamping & Stacking Line
                    </h4>
                  </div>
                  <div className="font-mono text-[11px] text-[#D5E0FF]/70">
                    250T CAPACITY
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
