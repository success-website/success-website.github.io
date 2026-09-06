"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/websiteData";

export default function MediaGallerySlider() {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-28 bg-[#020A19] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="hubtown-tag">
                [ 03 // FACILITY TOUR & TOOLROOM ]
              </span>
              <span className="font-mono text-[11px] text-[#7099FF]">
                INTERACTIVE GALLERY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
              Inside Our SIDCO Kakkalur Facility.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D5E0FF]/20 hover:border-[#7099FF] bg-[#040E24] hover:bg-[#081636] flex items-center justify-center text-[#D5E0FF] transition-all hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D5E0FF]/20 hover:border-[#7099FF] bg-[#040E24] hover:bg-[#081636] flex items-center justify-center text-[#D5E0FF] transition-all hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Draggable Horizontal Gallery */}
        <div
          ref={sliderRef}
          data-cursor="DRAG"
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-4 sm:pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none" }}
        >
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="flex-shrink-0 w-[82vw] sm:w-[420px] lg:w-[460px] hubtown-beveled bg-[#040E24]/80 border border-[#D5E0FF]/15 p-3.5 sm:p-4 cursor-pointer hover:border-[#7099FF]/50 hover:shadow-2xl hover:shadow-[#7099FF]/15 transition-all duration-500 snap-start group backdrop-blur-md"
            >
              <div className="relative aspect-[16/11] w-full hubtown-beveled overflow-hidden bg-[#020A19] border border-[#D5E0FF]/10">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 460px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#020A19]/40 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#D5E0FF] text-[#020A19] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-[#7099FF]/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#020A19]/85 border border-[#D5E0FF]/20 text-[#D5E0FF]">
                    BAY 0{idx + 1} // 06
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-bold text-[#D5E0FF] group-hover:text-white uppercase tracking-tight transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#D5E0FF]/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 overflow-hidden p-6 text-[#D5E0FF] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#D5E0FF]">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#020A19] border border-[#D5E0FF]/15">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-[#D5E0FF]/75 leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
