"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/websiteData";

export default function MediaGallerySlider() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    desc: string;
  } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white text-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Intro Grid (Kortrijk Xpo style) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
                03 / INFRASTRUCTURE GALLERY
              </span>
              <div className="h-px bg-zinc-300 w-16" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900">
              Inside Our <span className="text-[#D2251F]">Production Bays</span>
            </h2>
          </div>

          <div className="max-w-xl text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              Take a visual tour through our 25,000+ sq.ft SIDCO Kakkalur facility.
              From high-tonnage power presses to certified robotic welding fixtures, our investments in
              world-class machinery ensure micro-precision and uninterrupted batch deliveries.
            </p>
          </div>
        </div>

        {/* Gallery Navigation Controls & Wiggle Icon */}
        <div className="flex items-center justify-between mb-6">
          {/* Kortrijk Xpo Signature Wiggle Icon */}
          <div className="flex items-center gap-3">
            <div className="animate-wiggle text-[#D2251F]">
              <svg width="42" height="48" viewBox="0 0 101 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.0644 117.999C32.3267 117.999 31.1351 116.893 30.6952 115.609C30.4829 114.994 30.4937 114.457 30.5024 114.024C30.5024 113.935 30.5067 113.839 30.5046 113.734V113.56L30.5262 113.385L37.2625 63.7595C37.2733 63.6853 37.2646 63.6089 37.2408 63.5391C37.2169 63.4671 37.1758 63.4038 37.1216 63.3514L1.30415 28.5551L1.19799 28.4154C1.13515 28.3325 1.07449 28.2605 1.02032 28.1906C0.749483 27.8545 0.409313 27.4376 0.199145 26.8221C-0.171358 25.746 -0.0196901 24.6001 0.610815 23.679C1.11132 22.95 1.86533 22.4065 2.85117 22.0616L18.785 16.5067C19.3873 16.2972 20.0395 16.2885 20.7761 16.4805C21.7122 16.725 22.5853 17.2401 23.3047 17.9648L43.4722 38.3532L46.4947 9.22967C46.5705 8.63816 46.8219 8.05539 47.2422 7.49881C47.8532 6.68903 48.7025 6.07788 49.6992 5.73083L65.295 0.295964C67.9254 -0.620761 69.7346 0.736865 70.3022 2.38697C70.5861 3.21421 70.4886 3.96068 70.4236 4.45397L63.8672 54.2518C63.8628 54.2802 63.8672 54.3107 63.8758 54.3369C63.8845 54.3631 63.8997 54.3871 63.9213 54.4089L99.6261 89.4737C99.9815 89.8229 100.514 90.3489 100.798 91.174C101.169 92.2501 101.017 93.396 100.387 94.3171C99.8861 95.0461 99.1321 95.5896 98.1463 95.9344L81.7813 101.638C80.2841 102.159 78.9256 101.834 77.7448 100.666L77.7058 100.627L57.7875 80.0249L54.3641 108.771C54.1973 110.392 53.1031 111.774 51.5669 112.298L35.6851 117.704C35.1044 117.907 34.5606 117.997 34.0644 117.997V117.999Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Drag or click cards to view high-res
            </span>
          </div>

          {/* Left/Right Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous gallery slide"
              className="p-3 rounded-full border border-zinc-200 hover:border-[#D2251F] hover:bg-[#D2251F] hover:text-white transition-all shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next gallery slide"
              className="p-3 rounded-full border border-zinc-200 hover:border-[#D2251F] hover:bg-[#D2251F] hover:text-white transition-all shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Slider Strip */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[480px] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200 group cursor-pointer hover:shadow-2xl transition-all duration-300 snap-start"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 480px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-5 h-5 text-[#D2251F]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#D2251F] transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-2 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Kortrijk Xpo c-lightbox style) */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1024px"
              />
            </div>

            <div className="p-6 bg-zinc-950 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-zinc-800">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {selectedImage.desc}
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#D2251F] text-white font-bold uppercase tracking-wider flex-shrink-0">
                Facility View
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
