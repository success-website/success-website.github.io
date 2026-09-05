"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Cpu, Award, ArrowUpRight, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const highlights = [
    {
      title: "Single-Source Engineering Ecosystem",
      desc: "From rapid prototyping and 3D CAD modeling to die making, high-tonnage stamping, and cleanroom assembly under one roof.",
      icon: Factory,
    },
    {
      title: "20+ Years of Manufacturing Integrity",
      desc: "Founded in 2004, serving premier multinational OEMs across automotive, heavy machinery, power, and construction sectors.",
      icon: Award,
    },
    {
      title: "Strategic Industrial Corridor Location",
      desc: "Situated inside SIDCO Industrial Estate, Kakkalur, just 30 minutes from Chennai bypass and export logistical gateways.",
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F9F8F6] text-[#241F21] relative overflow-hidden border-t border-[#241F21]/8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="floema-pill floema-pill-stone">
              01 • Company Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
            Engineering Excellence Built on Two Decades of Precision.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#7A716D] font-normal leading-relaxed">
            Headquartered in the SIDCO Industrial Estate, Kakkalur, Success Engineering Enterprises is an ISO 9001:2015 certified manufacturer specializing in precision press tools, high-tonnage sheet metal components, and turnkey welded sub-assemblies.
          </p>
        </div>

        {/* 2-Column Split: Story & Facility Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-[#241F21]/8 hover:border-[#241F21]/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold uppercase tracking-tight text-[#241F21]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-[#7A716D] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                data-cursor="AUDIT"
                className="floema-btn floema-btn-dark text-xs py-3 px-6 shadow-md"
              >
                <span>Schedule a Plant Audit</span>
                <ArrowUpRight className="w-4 h-4 text-[#E9E778]" />
              </button>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="floema-btn floema-btn-outline text-xs py-3 px-5"
              >
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Photo */}
          <div className="lg:col-span-6">
            <div
              data-cursor="FACILITY"
              className="floema-card overflow-hidden group relative p-3 bg-white"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full bg-[#EBE7DF]">
                <Image
                  src={getAssetPath("/images/Homepage_img.jpg")}
                  alt="Success Engineering Tooling Bay"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="floema-pill floema-pill-fluor text-[10px] mb-2">
                      SIDCO Kakkalur Facility
                    </span>
                    <h4 className="text-lg font-bold uppercase tracking-tight">
                      Active Production & Stamping Bays
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
