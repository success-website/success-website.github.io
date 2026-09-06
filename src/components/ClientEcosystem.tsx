"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CLIENTS_DATA } from "@/data/websiteData";

export default function ClientEcosystem() {
  return (
    <section id="clients" className="py-16 sm:py-28 bg-[#040E24] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
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
            <span className="hubtown-tag">
              [ 06 // OEM PARTNERS & ECOSYSTEM ]
            </span>
            <span className="font-mono text-[11px] text-[#7099FF]">
              TIER-1 ACCREDITED
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
            Trusted by Leaders Across Automotive, Elevators & Heavy Infrastructure.
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#D5E0FF]/70 font-normal leading-relaxed">
            Supplying critical stamped components, structural brackets, and progressive die tooling to renowned tier-1 manufacturers.
          </p>
        </motion.div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CLIENTS_DATA.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
              data-cursor="OEM"
              className="hubtown-beveled p-3.5 sm:p-6 bg-[#020A19]/85 border border-[#D5E0FF]/15 hover:border-[#7099FF]/50 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7099FF]/10 transition-all duration-500 group"
            >
              {/* Logo Area */}
              <div className="relative w-full h-16 sm:h-24 flex items-center justify-center mb-3 sm:mb-6 bg-white/95 rounded-xl p-2 sm:p-4 overflow-hidden shadow-inner">
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 p-2 sm:p-3"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Client Specs */}
              <div>
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                  {client.category}
                </span>
                <h3 className="text-xs sm:text-lg font-bold uppercase tracking-tight text-[#D5E0FF] group-hover:text-white mt-1">
                  {client.name}
                </h3>
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-[#D5E0FF]/65 leading-relaxed border-t border-[#D5E0FF]/10 pt-1.5 sm:pt-2 font-mono">
                  {client.relationship}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
