"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

interface BannerPreloaderProps {
  onOpenQuote: () => void;
}

export default function BannerPreloader({ onOpenQuote }: BannerPreloaderProps) {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax Layer Transforms
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yCard3 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen bg-[#020A19] text-[#D5E0FF] overflow-hidden pt-28 sm:pt-36 pb-16 flex flex-col justify-between"
    >
      {/* Cinematic Ambient Glows & Grid Mesh with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        {/* Deep radial background lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#7099FF]/15 blur-[140px] rounded-full" />
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#38BDF8]/10 blur-[100px] rounded-full" />

        {/* Technical Coordinate Overlay Lines */}
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-12 grid grid-cols-6 lg:grid-cols-12 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#D5E0FF] h-full hidden lg:block" />
          ))}
        </div>
      </motion.div>

      {/* Main Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 my-auto">
        <div className="max-w-4xl">
          {/* Technical Coordinate Telemetry Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2.5 mb-6"
          >
            <span className="hubtown-tag flex items-center gap-2">
              <Radio className="w-3 h-3 text-[#38BDF8] animate-pulse" />
              <span>COORDS: 13.1438° N, 79.9082° E // SIDCO KAKKALUR</span>
            </span>
            <span className="hidden sm:inline-flex hubtown-tag">
              ISO 9001:2015 CERTIFIED // UCAS INDIA
            </span>
          </motion.div>

          {/* Cinematic Headline (Hubtown Inspired) */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white font-['Space_Grotesk'] leading-[0.95]"
          >
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5E0FF] via-white to-[#7099FF]">
              Extreme Precision.
            </span>
          </motion.h1>

          {/* Technical Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0, 0, 1] }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-[#D5E0FF]/70 font-normal leading-relaxed max-w-2xl"
          >
            Two decades of specialized press tool engineering, 250-ton progressive hydraulic stamping, certified structural robotic welding, and turnkey sub-assembly for global tier-1 automotive, elevator, and infrastructure OEMs.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.2, 0, 0, 1] }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenQuote}
              data-cursor="RFQ"
              className="hubtown-btn-solid text-sm py-3.5 px-8 group"
            >
              <span>Initiate Manufacturing RFQ</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>

            <Link
              href="#services"
              data-cursor="EXPLORE"
              className="hubtown-btn-glass text-sm py-3.5 px-7"
            >
              <span>Explore 5 Production Bays</span>
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Monolith Image Cards (Hubtown 3D Geometry Aesthetic with Parallax) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: 250T Press Line (Parallax Speed 1) */}
          <motion.div
            style={{ y: yCard1 }}
            data-cursor="STAMPING"
            className="hubtown-beveled p-5 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#040E24] border border-[#D5E0FF]/15">
              <Image
                src={getAssetPath("/images/2_hover.png")}
                alt="250 Ton Stamping Press Bank"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020A19] via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="hubtown-tag text-[9px]">
                  250T HYDRAULIC LINE
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-white font-['Space_Grotesk']">
                01 // High-Tonnage Stamping
              </h3>
              <span className="text-xs font-mono text-[#7099FF]">BAY 2</span>
            </div>
            <p className="mt-2 text-xs text-[#D5E0FF]/60 leading-relaxed font-mono">
              Deep-draw stamping, automated de-coiling, progressive dies.
            </p>
          </motion.div>

          {/* Card 2: Precision Toolroom (Parallax Speed 2 - Counter/Ascending) */}
          <motion.div
            style={{ y: yCard2 }}
            data-cursor="TOOLROOM"
            className="hubtown-beveled p-5 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#040E24] border border-[#D5E0FF]/15">
              <Image
                src={getAssetPath("/images/5.png")}
                alt="Tool and Die Toolroom"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020A19] via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="hubtown-tag text-[9px]">
                  MULTI-MILLION CYCLES
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-white font-['Space_Grotesk']">
                02 // Progressive Die Toolroom
              </h3>
              <span className="text-xs font-mono text-[#7099FF]">BAY 5</span>
            </div>
            <p className="mt-2 text-xs text-[#D5E0FF]/60 leading-relaxed font-mono">
              Wire-cut EDM, CNC surface grinding, hardened D2/D3 alloys.
            </p>
          </motion.div>

          {/* Card 3: Robotic Welding (Parallax Speed 3) */}
          <motion.div
            style={{ y: yCard3 }}
            data-cursor="WELDING"
            className="hubtown-beveled p-5 group cursor-pointer sm:col-span-2 lg:col-span-1"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#040E24] border border-[#D5E0FF]/15">
              <Image
                src={getAssetPath("/images/1.png")}
                alt="Industrial Welding Cell"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020A19] via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="hubtown-tag text-[9px]">
                  NDT VERIFIED
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base uppercase tracking-tight text-white font-['Space_Grotesk']">
                03 // Heavy Structural Welding
              </h3>
              <span className="text-xs font-mono text-[#7099FF]">BAY 1</span>
            </div>
            <p className="mt-2 text-xs text-[#D5E0FF]/60 leading-relaxed font-mono">
              Certified TIG/MIG/Arc welding with custom laser-guided fixtures.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Hubtown Monospace Metrics Telemetry Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-16 pt-8 border-t border-[#D5E0FF]/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono">
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              20<span className="text-[#7099FF]">+</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#D5E0FF]/60 mt-1">
              Years in Operation
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              250<span className="text-[#7099FF]">T</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#D5E0FF]/60 mt-1">
              Stamping Press Capacity
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              0.01<span className="text-[#7099FF]">MM</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#D5E0FF]/60 mt-1">
              Micron Tolerance Standard
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              5<span className="text-[#7099FF]">BAYS</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#D5E0FF]/60 mt-1">
              Integrated Production Cells
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
