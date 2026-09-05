"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
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
    <section id="gallery" className="py-24 sm:py-32 bg-[#F2EFEA] text-[#241F21] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="floema-pill floema-pill-stone mb-4">
              03 • Facility Tour & Toolroom
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
              Inside Our SIDCO Kakkalur Facility.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#241F21]/15 hover:border-[#241F21] bg-white flex items-center justify-center text-[#241F21] transition-all hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#241F21]/15 hover:border-[#241F21] bg-white flex items-center justify-center text-[#241F21] transition-all hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Draggable Horizontal Gallery */}
        <div
          ref={sliderRef}
          data-cursor="DRAG"
          className="flex gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="flex-shrink-0 w-[300px] sm:w-[420px] lg:w-[460px] floema-card bg-white p-4 cursor-pointer hover:shadow-2xl transition-all duration-500 snap-start group"
            >
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#241F21]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 460px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="floema-pill floema-pill-dark text-[10px]">
                    0{idx + 1} / 06
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-bold text-[#241F21] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#7A716D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241F21]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 text-[#241F21] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#241F21]">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#EBE7DF]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-[#7A716D] leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
