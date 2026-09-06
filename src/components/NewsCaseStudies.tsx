"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { NEWS_DATA, NewsItem } from "@/data/websiteData";

export default function NewsCaseStudies() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section id="news" className="py-16 sm:py-28 bg-[#020A19] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="hubtown-tag text-[10px] sm:text-xs">
              [ 07 // TECHNICAL BULLETINS ]
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#7099FF]">
              INDUSTRY UPDATES
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
            Latest Infrastructure & Technical Insights.
          </h2>
        </motion.div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {NEWS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              data-cursor="READ"
              onClick={() => setSelectedNews(item)}
              className="hubtown-beveled bg-[#040E24]/85 border border-[#D5E0FF]/15 hover:border-[#7099FF]/50 p-4 sm:p-6 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7099FF]/10 transition-all duration-500"
            >
              <div>
                <div className="relative aspect-[16/10] hubtown-beveled overflow-hidden mb-4 sm:mb-6 bg-[#020A19] border border-[#D5E0FF]/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="hubtown-tag text-[10px]">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#7099FF] mb-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#D5E0FF] group-hover:text-white leading-snug transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#D5E0FF]/65 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5E0FF]/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] group-hover:underline">
                  Read Bulletin
                </span>
                <span className="w-8 h-8 rounded-full bg-[#020A19] border border-[#D5E0FF]/20 group-hover:bg-[#D5E0FF] group-hover:text-[#020A19] text-[#D5E0FF] flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedNews && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedNews(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 overflow-hidden p-6 sm:p-8 text-[#D5E0FF] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="hubtown-tag text-xs">
                  {selectedNews.category}
                </span>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#D5E0FF] leading-snug mb-3">
                {selectedNews.title}
              </h3>

              <div className="flex items-center gap-3 text-xs font-mono text-[#7099FF] mb-6">
                <span>Published: {selectedNews.date}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#020A19] border border-[#D5E0FF]/15">
                <Image
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#D5E0FF]/75 leading-relaxed">
                <p className="font-semibold text-[#D5E0FF]">
                  {selectedNews.excerpt}
                </p>
                <p>{selectedNews.content}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D5E0FF]/15 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="hubtown-btn-solid text-xs py-2.5 px-6"
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
