"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, MapPin } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/websiteData";

interface ServicesShowcaseProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function ServicesShowcase({ onOpenQuoteWithService }: ServicesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ["All", "Fabrication", "Metal Parts", "Assembly", "Design", "Tools & Dies"];

  const filteredServices = selectedCategory === "All"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#040E24] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7099FF]/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="hubtown-tag">
                [ 02 // PRODUCTION BAYS ]
              </span>
              <span className="font-mono text-[11px] text-[#7099FF]">
                5 ACTIVE CELLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
              Five Integrated Production Bays Under One Roof.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#D5E0FF]/70 font-normal leading-relaxed">
            From raw coils to finished sub-assemblies. Hover over each card to preview alternate tooling configurations and inspection views.
          </p>
        </div>

        {/* Hubtown Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#D5E0FF] text-[#020A19] shadow-md shadow-[#7099FF]/20 scale-105"
                    : "bg-[#020A19]/80 text-[#D5E0FF]/70 hover:text-white border border-[#D5E0FF]/15 hover:border-[#7099FF]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Hubtown Beveled Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              data-cursor="EXPAND"
              onClick={() => setSelectedService(service)}
              className="hubtown-beveled bg-[#020A19]/80 border border-[#D5E0FF]/15 hover:border-[#7099FF]/50 p-6 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#7099FF]/10 transition-all duration-500 backdrop-blur-md"
            >
              <div>
                {/* Image Container with smooth crossfade */}
                <div className="relative aspect-[16/11] w-full hubtown-beveled overflow-hidden bg-[#040E24] mb-6 border border-[#D5E0FF]/10">
                  {/* Default Image */}
                  <Image
                    src={service.defaultImg}
                    alt={service.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Image */}
                  <Image
                    src={service.hoverImg}
                    alt={`${service.title} Alternate`}
                    fill
                    className="object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#020A19]/80 border border-[#D5E0FF]/20 text-[#D5E0FF]">
                      {service.number}
                    </span>
                    <span className="hubtown-tag text-[10px]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Bay Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#020A19]/80 backdrop-blur-md border border-[#D5E0FF]/20 text-[#D5E0FF] px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#7099FF]" />
                    <span>{service.hallOrBay}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                    {service.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold uppercase tracking-tight text-[#D5E0FF] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#D5E0FF]/65 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer: Materials & Action */}
              <div className="mt-6 pt-4 border-t border-[#D5E0FF]/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.materials.slice(0, 2).map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#040E24] border border-[#D5E0FF]/10 text-[#D5E0FF]/70 text-[11px] font-mono"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                <span className="w-8 h-8 rounded-full bg-[#040E24] border border-[#D5E0FF]/20 group-hover:bg-[#D5E0FF] group-hover:text-[#020A19] text-[#D5E0FF] flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Detailed Service Inspection */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 overflow-hidden p-6 sm:p-8 text-[#D5E0FF] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="hubtown-tag text-xs mb-2">
                    {selectedService.hallOrBay}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#D5E0FF]">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#020A19] border border-[#D5E0FF]/15">
                <Image
                  src={selectedService.defaultImg}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-[#D5E0FF]/75 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF]">
                  Technical Specifications & Equipment:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#D5E0FF]/70">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7099FF] mt-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#D5E0FF]/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const name = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteWithService(name);
                  }}
                  className="hubtown-btn-solid text-xs py-3 px-6 shadow-lg shadow-[#7099FF]/20"
                >
                  <span>Request RFQ for this Bay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#D5E0FF]/60 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
