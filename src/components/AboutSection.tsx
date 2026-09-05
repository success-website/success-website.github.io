"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Cpu, Award, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export default function AboutSection({ onOpenQuote }: AboutSectionProps) {
  const highlights = [
    {
      title: "Single-Source Capabilities",
      desc: "From rapid prototyping and 3D CAD design to die making, high-tonnage stamping, and final assembly.",
      icon: Factory,
    },
    {
      title: "20+ Years of Manufacturing Integrity",
      desc: "Founded in 2004, serving major multinational OEMs across automotive, construction, and power sectors.",
      icon: Award,
    },
    {
      title: "Zero-Defect Tolerances",
      desc: "Statistical Process Control (SPC), calibrated CMM inspections, and full material lot traceability.",
      icon: Cpu,
    },
    {
      title: "On-Time Global Delivery",
      desc: "Strategic logistics hub at SIDCO Kakkalur with seamless connectivity to Chennai seaports and highways.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="aboutus" className="py-24 lg:py-32 bg-white text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Index Marker (Kortrijk Xpo style) */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
            01 / COMPANY PROFILE
          </span>
          <div className="h-px bg-zinc-200 flex-1 max-w-[120px]" />
        </div>

        {/* Section Title & Tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.08] text-zinc-900">
              Let us be an extension of your{" "}
              <span className="text-[#D2251F] underline decoration-4 underline-offset-8">
                success
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              <p>
                <strong>Success Engineering Enterprises</strong> is a uniquely structured manufacturing enterprise providing precision press tools, high-tonnage metal stamping, and specialized welding fabrication solutions to global customers across heavy industries.
              </p>
              <p>
                As an accredited tier-1 production metal fabrication company, we empower our clients to optimize their bottom lines by delivering innovative processes, dedicated engineering support, and comprehensive single-source manufacturing capabilities under one roof.
              </p>
              <p>
                With over two decades of accumulated metallurgical experience, cutting-edge machinery, and a rigorously trained technical team, we take on challenging projects from the initial prototype phase right through to full container-load production with absolute on-time precision.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="c-btn c-btn--primary"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#quality"
                className="c-btn c-btn--secondary"
              >
                <span>View Quality Audits</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats & Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 group">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/images/Homepage_img.jpg"
                  alt="Success Engineering Tooling Bay"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FF604B]">
                    Industrial Facility
                  </div>
                  <div className="text-xl font-black uppercase mt-1">
                    SIDCO Industrial Estate, Kakkalur
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {COMPANY_INFO.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-[#D2251F]/30 hover:shadow-md transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#D2251F] tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-600 mt-1 uppercase tracking-wide">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-zinc-100">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-50 hover:bg-[#FFF5F5] border border-zinc-100 hover:border-[#D2251F]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#D2251F] group-hover:bg-[#D2251F] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-zinc-900 mt-4 uppercase tracking-tight">
                  {h.title}
                </h4>
                <p className="text-sm text-zinc-600 mt-2 leading-relaxed font-normal">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
