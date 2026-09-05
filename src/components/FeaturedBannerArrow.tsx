"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface FeaturedBannerArrowProps {
  onOpenQuote: () => void;
}

export default function FeaturedBannerArrow({ onOpenQuote }: FeaturedBannerArrowProps) {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#D2251F] text-white">
          {/* Left Media (Photo of industrial metal stamping / fabrication) */}
          <div className="relative w-full lg:w-1/2 min-h-[340px] lg:min-h-[500px]">
            <Image
              src={getAssetPath("/images/Metalplates.png")}
              alt="Success Engineering Precision Quality Metal Plates"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Kortrijk Xpo Signature Diagonal Arrow Cutout Connecting Media & Content (Desktop) */}
            <div className="hidden lg:block absolute -right-1 top-0 bottom-0 w-24 h-full pointer-events-none z-10">
              <svg
                viewBox="0 0 100 850"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#D2251F]"
              >
                <path
                  d="M0 0H100V850H0L75 425L0 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold uppercase tracking-wider text-white mb-4 max-w-max">
              <MapPin className="w-3.5 h-3.5 text-[#FF604B]" />
              <span>SIDCO Industrial Estate, Kakkalur</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
              Visiting Our Manufacturing Facility?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              We warmly welcome engineering teams, procurement heads, and OEM auditors to inspect our 5 production bays, witness live hydraulic stamping runs, review toolroom CNC setups, and evaluate our ISO 9001:2015 quality testing labs.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-white/95">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Live sample stamping and tensile strength demonstrations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Confidential review of 2D / 3D CAD drawings & DFM optimizations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>30-minute drive from Chennai bypass with dedicated visitor parking</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="c-btn c-btn--white text-base font-bold shadow-xl group"
              >
                <span>Schedule a Plant Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="c-btn c-btn--outline-white text-base font-bold"
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
