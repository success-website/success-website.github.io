"use client";

import React from "react";
import Image from "next/image";
import { Building2, Handshake, Star } from "lucide-react";
import { CLIENTS_DATA } from "@/data/websiteData";

export default function ClientEcosystem() {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-zinc-50 text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
            06 / CLIENT ECOSYSTEM
          </span>
          <div className="h-px bg-zinc-300 w-16" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900">
              Trusted by <span className="text-[#D2251F]">Industry Giants</span>
            </h2>
            <p className="mt-3 text-zinc-600 text-base sm:text-lg max-w-2xl font-normal">
              For over two decades, Fortune 500 conglomerates, multinational automotive leaders,
              and industrial machinery innovators have relied on Success Engineering Enterprises.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-xs text-xs font-bold uppercase tracking-wider text-zinc-700">
            <Handshake className="w-4 h-4 text-[#D2251F]" />
            <span>Tier-1 Approved Supplier</span>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {CLIENTS_DATA.map((client, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 hover:border-[#D2251F] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center group"
            >
              {/* Logo Container */}
              <div className="relative w-full h-20 sm:h-24 flex items-center justify-center mb-4">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105 p-2"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Client Info */}
              <div className="pt-3 border-t border-zinc-100 w-full">
                <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight group-hover:text-[#D2251F] transition-colors">
                  {client.name}
                </h3>
                <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mt-0.5">
                  {client.category}
                </p>
                <div className="mt-2 text-xs text-zinc-600 font-medium bg-zinc-50 py-1.5 px-2.5 rounded-lg">
                  {client.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OEM Endorsement Quote */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#D2251F] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1 text-[#FF604B] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight leading-snug">
              &quot;Success Engineering Enterprises has consistently achieved 99.8% on-time delivery across high-volume stamped safety components for our production lines.&quot;
            </p>
            <p className="text-sm font-semibold text-white/80 mt-3 uppercase tracking-wider">
              Automotive & Industrial OEM Quality Review
            </p>
          </div>

          <a
            href="#contact"
            className="c-btn c-btn--white text-sm font-bold uppercase tracking-wider shadow-lg flex-shrink-0"
          >
            Become an OEM Partner
          </a>
        </div>
      </div>
    </section>
  );
}
