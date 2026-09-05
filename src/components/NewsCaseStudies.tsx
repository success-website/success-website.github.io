"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, X, Tag } from "lucide-react";
import { NEWS_DATA, NewsItem } from "@/data/websiteData";

export default function NewsCaseStudies() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
                07 / ENGINEERING INSIGHTS
              </span>
              <div className="h-px bg-zinc-300 w-16" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900">
              Manufacturing <span className="text-[#D2251F]">Newsflash</span>
            </h2>
            <p className="mt-3 text-zinc-600 text-base sm:text-lg max-w-xl font-normal">
              Stay informed on our latest machinery upgrades, tooling breakthroughs, and ISO quality achievements.
            </p>
          </div>
        </div>

        {/* News Grid (Kortrijk Xpo c-card-landscape Style) */}
        <div className="space-y-8">
          {NEWS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-[#D2251F] hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row items-stretch gap-8 cursor-pointer group"
            >
              {/* Image side */}
              <div className="relative w-full lg:w-96 aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-200 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#D2251F] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 mb-3 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-[#D2251F]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 group-hover:text-[#D2251F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {item.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#D2251F] uppercase tracking-wider">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Article Modal */}
      {selectedNews && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 w-full bg-zinc-900">
              <Image
                src={selectedNews.image}
                alt={selectedNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-[#D2251F] text-white text-[11px] font-bold uppercase tracking-wider">
                  {selectedNews.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-2">
                  {selectedNews.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-zinc-700 leading-relaxed">
              <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-wider pb-3 border-b border-zinc-100">
                <span>Published: {selectedNews.date}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>
              <p className="text-base font-semibold text-zinc-900 leading-snug">
                {selectedNews.excerpt}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 font-normal">
                {selectedNews.content}
              </p>
            </div>

            <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300 text-xs font-bold uppercase text-zinc-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
