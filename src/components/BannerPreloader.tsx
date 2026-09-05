"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles, RotateCcw } from "lucide-react";

interface BannerPreloaderProps {
  onOpenQuote: () => void;
}

export default function BannerPreloader({ onOpenQuote }: BannerPreloaderProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, [animationKey]);

  const handleReplay = () => {
    setIsAnimating(true);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section
      id="home"
      key={animationKey}
      className="relative min-h-[92vh] lg:min-h-screen bg-[#D2251F] text-white overflow-hidden flex flex-col justify-between pt-24 lg:pt-32 pb-12 select-none"
    >
      {/* =========================================================================
          KORTRIJK XPO SIGNATURE CURTAIN ARROWS (SWIPING LEFT & RIGHT)
      ========================================================================= */}
      <AnimatePresence>
        {isAnimating && (
          <div className="absolute inset-0 z-30 pointer-events-none flex">
            {/* Left giant chevron arrow */}
            <motion.div
              initial={{ x: "0%", opacity: 1 }}
              animate={{ x: "-110%", opacity: 0.95 }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-0 top-0 bottom-0 w-[60vw] max-w-[700px] h-full flex items-center"
            >
              <svg
                viewBox="0 0 498 1116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover text-[#FF604B]"
              >
                <path
                  d="M388.716 786.606L494.402 572.202C496.772 567.533 498 562.365 498 557.137C498 551.908 491.764 539.36 489.381 534.679L396.679 350.186L391.196 339.219C389.823 336.592 385.252 327.327 383.672 324.105L235.33 17.5093C232.449 11.5634 228.207 6.32281 222.712 2.65072C220.062 0.875465 217.838 0 216.075 0H19.4741C7.08702 0 0 5.31359 0 14.1655C0 17.716 1.76264 21.2544 3.54959 26.568L265.575 542.011C267.957 546.692 269.197 551.872 269.197 557.125C269.197 562.377 267.97 567.521 265.599 572.19L3.54959 1089.43C1.76264 1094.77 0 1098.3 0 1101.83C0 1110.69 7.08702 1116 19.4741 1116H216.683C223.94 1116 230.553 1111.89 233.774 1105.39L388.716 786.606Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            {/* Right giant chevron arrow */}
            <motion.div
              initial={{ x: "0%", opacity: 1 }}
              animate={{ x: "110%", opacity: 0.95 }}
              transition={{
                duration: 1.4,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute right-0 top-0 bottom-0 w-[60vw] max-w-[700px] h-full flex items-center justify-end"
            >
              <svg
                viewBox="0 0 498 1116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover text-[#FF604B]"
              >
                <path
                  d="M109.289 786.615L3.59838 572.208C1.22782 567.539 0 562.371 0 557.143C0 551.914 6.23639 539.366 8.61911 534.684L101.326 350.19L106.809 339.222C108.183 336.596 112.754 327.33 114.334 324.108L262.67 17.5095C265.551 11.5636 269.794 6.32288 275.289 2.65074C277.939 0.875475 280.164 0 281.926 0H478.525C490.913 0 498 5.31365 498 14.1657C498 17.7162 496.237 21.2546 494.45 26.5682L232.412 542.017C230.029 546.698 228.789 551.878 228.789 557.131C228.789 562.383 230.017 567.527 232.388 572.196L494.45 1089.43C496.237 1094.77 498 1098.3 498 1101.83C498 1110.69 490.913 1116 478.525 1116H281.306C274.049 1116 267.436 1111.89 264.214 1105.38L109.265 786.602L109.289 786.615Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          BACKGROUND FLOATING GEOMETRIC SHAPES (KORTRIJK XPO STYLE)
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 4, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-12 w-96 h-96 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 -right-16 w-[32rem] h-[32rem] border border-white/20 rotate-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT (KORTRIJK ARCHITECTURAL TYPOGRAPHY)
      ========================================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 my-auto text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>AN ISO 9001:2015 CERTIFIED INDUSTRIAL ENTERPRISE</span>
        </motion.div>

        {/* Hero Title with scaling entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight leading-[1.04] uppercase">
            when precision <br />
            <span className="font-light tracking-normal opacity-95">meets excellence</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl font-normal text-white/90 max-w-3xl mx-auto leading-relaxed">
            Press & Precision Manufacturing for Over 20 Years. Providing high-tonnage stamping,
            welding, tool & die engineering, and turnkey fabrication worldwide.
          </p>
        </motion.div>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onOpenQuote}
            className="c-btn c-btn--white text-base font-bold shadow-2xl group"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#services"
            className="c-btn c-btn--outline-white text-base font-bold"
          >
            <span>Explore 5 Capabilities</span>
          </a>

          <a
            href="#quality"
            className="c-btn bg-black/25 hover:bg-black/40 text-white border border-white/20 text-base font-medium backdrop-blur-sm"
          >
            <ShieldCheck className="w-5 h-5 text-white/90" />
            <span>ISO 9001 Specs</span>
          </a>
        </motion.div>
      </div>

      {/* =========================================================================
          BOTTOM META BAR & REPLAY TRIGGER
      ========================================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-8 mt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/80">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">SIDCO Kakkalur Facilities Operational</span>
          </div>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline font-light">UCAS India Certified Quality</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleReplay}
            title="Replay intro animation"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Curtain Intro</span>
          </button>

          <a
            href="#aboutus"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
