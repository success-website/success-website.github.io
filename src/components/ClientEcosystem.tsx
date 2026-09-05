"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS_DATA } from "@/data/websiteData";

export default function ClientEcosystem() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#F9F8F6] text-[#241F21] relative overflow-hidden border-t border-[#241F21]/8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="floema-pill floema-pill-stone mb-4">
            06 • OEM Partners & Ecosystem
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
            Trusted by Leaders Across Automotive, Elevators & Heavy Infrastructure.
          </h2>
          <p className="mt-4 text-base text-[#7A716D] font-normal leading-relaxed">
            Supplying critical stamped components, structural brackets, and progressive die tooling to renowned tier-1 manufacturers.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENTS_DATA.map((client, idx) => (
            <div
              key={idx}
              data-cursor="OEM"
              className="floema-card p-6 bg-white flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 group"
            >
              {/* Logo Area */}
              <div className="relative w-full h-24 flex items-center justify-center mb-6 bg-[#F2EFEA] rounded-2xl p-4 overflow-hidden">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 p-3"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Client Specs */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#988F8B]">
                  {client.category}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#241F21] mt-1">
                  {client.name}
                </h3>
                <p className="mt-2 text-xs text-[#7A716D] leading-relaxed border-t border-[#241F21]/8 pt-2">
                  {client.relationship}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
