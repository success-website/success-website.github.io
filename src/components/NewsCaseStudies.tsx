"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Clock, Calendar } from "lucide-react";
import { NEWS_DATA, NewsItem } from "@/data/websiteData";

export default function NewsCaseStudies() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-24 sm:py-32 bg-[#F2EFEA] text-[#241F21] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="floema-pill floema-pill-stone mb-4">
            07 • Engineering Bulletins
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
            Latest Infrastructure & Technical Insights.
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((item) => (
            <div
              key={item.id}
              data-cursor="READ"
              onClick={() => setSelectedNews(item)}
              className="floema-card bg-white p-6 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#EBE7DF]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="floema-pill floema-pill-fluor text-[10px]">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#988F8B] mb-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#241F21] group-hover:text-[#241F21] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#7A716D] leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#241F21]/8 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#241F21] group-hover:underline">
                  Read Bulletin
                </span>
                <span className="w-8 h-8 rounded-full bg-[#F2EFEA] group-hover:bg-[#E9E778] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedNews && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241F21]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedNews(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 text-[#241F21] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="floema-pill floema-pill-fluor text-xs">
                  {selectedNews.category}
                </span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#241F21] leading-snug mb-3">
                {selectedNews.title}
              </h3>

              <div className="flex items-center gap-3 text-xs font-mono text-[#988F8B] mb-6">
                <span>Published: {selectedNews.date}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#EBE7DF]">
                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#7A716D] leading-relaxed">
                <p className="font-semibold text-[#241F21]">
                  {selectedNews.excerpt}
                </p>
                <p>{selectedNews.content}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#241F21]/10 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="floema-btn floema-btn-dark text-xs py-2.5 px-6"
                >
                  <span>Close Bulletin</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
