"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface FeaturedBannerArrowProps {
  onOpenQuote: () => void;
}

export default function FeaturedBannerArrow({ onOpenQuote }: FeaturedBannerArrowProps) {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const plateParallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={bannerRef} className="py-20 sm:py-28 bg-[#020A19] text-[#D5E0FF] overflow-hidden border-t border-[#D5E0FF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="hubtown-beveled relative overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-gradient-to-r from-[#040E24] via-[#061331] to-[#040E24] border border-[#D5E0FF]/20">
          {/* Left Media (Photo of calibrated metal stamping & plates) */}
          <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[480px] overflow-hidden">
            <motion.div style={{ y: plateParallaxY, scale: 1.15 }} className="absolute inset-0 w-full h-full">
              <Image
                src={getAssetPath("/images/Metalplates.png")}
                alt="Success Engineering Precision Quality Metal Plates"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#040E24]/40 to-[#040E24] hidden lg:block" />
            <div className="absolute top-4 left-4">
              <span className="hubtown-tag text-[10px]">
                METROLOGY // AUDIT CORRIDOR
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="hubtown-tag">
                [ PLANT VISIT & VENDOR AUDIT ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
              Visiting Our Manufacturing Facility?
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#D5E0FF]/70 leading-relaxed font-normal">
              We warmly welcome engineering teams, procurement directors, and tier-1 auditors to inspect our 5 production bays, witness live 250T press operations, and review our ISO 9001:2015 quality labs.
            </p>

            <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#D5E0FF]/80 font-mono">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7099FF] shadow-[0_0_8px_#7099FF] flex-shrink-0" />
                <span>Live sample stamping & non-destructive joint testing (NDT)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7099FF] shadow-[0_0_8px_#7099FF] flex-shrink-0" />
                <span>Confidential review of 2D/3D CAD drawings & DFM tooling advice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7099FF] shadow-[0_0_8px_#7099FF] flex-shrink-0" />
                <span>30-minute drive from Chennai bypass with dedicated visitor parking</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                data-cursor="AUDIT"
                className="hubtown-btn-solid text-xs py-3.5 px-6 shadow-xl shadow-[#7099FF]/20 group"
              >
                <span>Schedule a Plant Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hubtown-btn-glass text-xs py-3.5 px-5"
              >
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
