"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface FeaturedBannerArrowProps {
  onOpenQuote: () => void;
}

export default function FeaturedBannerArrow({ onOpenQuote }: FeaturedBannerArrowProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F8F6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#241F21] text-[#F2EFEA]">
          {/* Left Media (Photo of calibrated metal stamping & plates) */}
          <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[480px]">
            <Image
              src={getAssetPath("/images/Metalplates.png")}
              alt="Success Engineering Precision Quality Metal Plates"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-[#241F21]/80 hidden lg:block" />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="floema-pill floema-pill-fluor text-xs">
                Plant Visit & Vendor Audit
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Visiting Our Manufacturing Facility?
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#D2CDC4] leading-relaxed font-normal">
              We warmly welcome engineering teams, procurement directors, and tier-1 auditors to inspect our 5 production bays, witness live 250T press operations, and review our ISO 9001:2015 quality labs.
            </p>

            <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#EBE7DF]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E9E778] flex-shrink-0" />
                <span>Live sample stamping and non-destructive joint testing (NDT)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E9E778] flex-shrink-0" />
                <span>Confidential review of 2D/3D CAD drawings & DFM tooling advice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E9E778] flex-shrink-0" />
                <span>30-minute drive from Chennai bypass with dedicated visitor bays</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                data-cursor="AUDIT"
                className="floema-btn floema-btn-fluor text-xs py-3.5 px-6 shadow-xl group"
              >
                <span>Schedule a Plant Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="floema-btn floema-btn-outline text-xs py-3.5 px-5 text-white border-white/20 hover:border-white"
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
