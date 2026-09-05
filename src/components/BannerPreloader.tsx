"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Factory, Cpu, Sparkles, MapPin } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

interface BannerPreloaderProps {
  onOpenQuote: () => void;
}

export default function BannerPreloader({ onOpenQuote }: BannerPreloaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#F2EFEA] text-[#241F21] overflow-hidden pt-28 sm:pt-36 pb-16 flex flex-col justify-between"
    >
      {/* Background Architectural Grid Lines & Organic Fluor Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#E9E778]/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF004D]/5 blur-3xl" />
        
        {/* Delicate architectural vertical column guides */}
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-12 grid grid-cols-6 lg:grid-cols-12 opacity-15">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#241F21] h-full hidden lg:block" />
          ))}
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Floema Top Pill Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="floema-pill floema-pill-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E9E778] animate-pulse" />
              <span>Established 2004 • SIDCO Kakkalur, India</span>
            </span>
            <span className="hidden sm:inline-flex floema-pill floema-pill-fluor">
              ISO 9001:2015 Certified
            </span>
          </motion.div>

          {/* Staggered Editorial Headline (Floema Style) */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#241F21] leading-[0.95]"
          >
            Spaces for Industry,
            <br />
            <span className="text-[#241F21]/90">Made for Precision.</span>
          </motion.h1>

          {/* Architectural Sub-narrative */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-[#7A716D] font-normal leading-relaxed max-w-2xl"
          >
            Over 20 years of progressive press tool design, 250-ton automated hydraulic stamping, structural industrial welding, and turnkey sub-assembly for global tier-1 automotive and industrial OEMs.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              data-cursor="QUOTE"
              className="floema-btn floema-btn-fluor text-sm py-3.5 px-7 group shadow-lg"
            >
              <span>Request Manufacturing Quote</span>
              <span className="w-6 h-6 rounded-full bg-[#241F21] text-[#E9E778] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <Link
              href="#services"
              data-cursor="EXPLORE"
              className="floema-btn floema-btn-outline text-sm py-3.5 px-6"
            >
              <span>Explore 5 Production Bays</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Capability Cards Showcase (Floema Interaction) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Tooling & Stamping */}
          <div
            data-cursor="STAMPING"
            className="floema-card p-6 bg-white/90 backdrop-blur-sm group hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#EBE7DF]">
              <Image
                src={getAssetPath("/images/2.png")}
                alt="Precision Metal Parts"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="floema-pill floema-pill-fluor text-[10px]">
                  20T – 250T Press Line
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-[#241F21]">
                01 • Precision Stamping
              </h3>
              <span className="text-xs font-mono text-[#988F8B]">Bay 2</span>
            </div>
            <p className="mt-2 text-xs text-[#7A716D] leading-relaxed">
              Automated high-repeatability pressings and deep-draw brackets.
            </p>
          </div>

          {/* Card 2: Progressive Toolroom */}
          <div
            data-cursor="TOOLROOM"
            className="floema-card p-6 bg-white/90 backdrop-blur-sm group hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#EBE7DF]">
              <Image
                src={getAssetPath("/images/5.png")}
                alt="Progressive Dies & Tooling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="floema-pill floema-pill-dark text-[10px]">
                  Multi-Million Cycle Dies
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-[#241F21]">
                02 • Tool & Die Toolroom
              </h3>
              <span className="text-xs font-mono text-[#988F8B]">Bay 5</span>
            </div>
            <p className="mt-2 text-xs text-[#7A716D] leading-relaxed">
              In-house wire-cut EDM, CNC machining, and hardened D2/D3 tooling.
            </p>
          </div>

          {/* Card 3: Quality Certification */}
          <div
            data-cursor="QUALITY"
            className="floema-card p-6 bg-white/90 backdrop-blur-sm group hover:-translate-y-1.5 transition-all duration-500 sm:col-span-2 lg:col-span-1"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#F9F8F6] flex items-center justify-center p-6 border border-[#241F21]/5">
              <Image
                src={getAssetPath("/images/ISO_LOGO.png")}
                alt="ISO 9001:2015 Quality"
                width={120}
                height={120}
                className="object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="floema-pill floema-pill-stone text-[10px]">
                  UCAS India Verified
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-[#241F21]">
                03 • Zero-Defect QA
              </h3>
              <span className="text-xs font-mono text-[#988F8B]">ISO 9001</span>
            </div>
            <p className="mt-2 text-xs text-[#7A716D] leading-relaxed">
              Certified metrology laboratory, SPC tracking, and NDT weld testing.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floema Architectural Metrics Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-16 pt-8 border-t border-[#241F21]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#241F21]">
              20<span className="text-[#E9E778]">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#7A716D] mt-1">
              Years in Manufacturing
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#241F21]">
              250<span className="text-[#E9E778]">T</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#7A716D] mt-1">
              Heavy Press Capacity
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#241F21]">
              5<span className="text-[#E9E778]">BAYS</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#7A716D] mt-1">
              Integrated Production Cells
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-[#241F21]">
              100<span className="text-[#E9E778]">%</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#7A716D] mt-1">
              Batch Traceability
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
