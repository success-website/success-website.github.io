"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, X, Layers, Tag, MapPin, ChevronRight, SlidersHorizontal } from "lucide-react";
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
    <section id="services" className="py-24 sm:py-32 bg-[#F2EFEA] text-[#241F21] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="floema-pill floema-pill-stone mb-4">
              02 • Manufacturing Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
              Five Integrated Production Bays Under One Roof.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#7A716D] font-normal leading-relaxed">
            From raw coils to finished sub-assemblies. Hover over each card to preview alternate tooling configurations and inspection views.
          </p>
        </div>

        {/* Floema Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#241F21] text-[#E9E778] shadow-md scale-105"
                    : "bg-white text-[#7A716D] hover:text-[#241F21] border border-[#241F21]/8 hover:border-[#241F21]/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Floema Card Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              data-cursor="EXPAND"
              onClick={() => setSelectedService(service)}
              className="floema-card bg-white p-6 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-500"
            >
              <div>
                {/* Image Container with smooth crossfade */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#EBE7DF] mb-6">
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
                    <span className="floema-pill floema-pill-dark text-[10px]">
                      {service.number}
                    </span>
                    <span className="floema-pill floema-pill-fluor text-[10px]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Bay Tag */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#E9E778]" />
                    <span>{service.hallOrBay}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#988F8B]">
                    {service.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold uppercase tracking-tight text-[#241F21] group-hover:text-[#241F21] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#7A716D] line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer: Materials & Action */}
              <div className="mt-6 pt-4 border-t border-[#241F21]/8 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.materials.slice(0, 2).map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#F2EFEA] text-[#7A716D] text-[11px] font-mono"
                    >
                      {mat}
                    </span>
                  ))}
                </div>

                <span className="w-8 h-8 rounded-full bg-[#F2EFEA] group-hover:bg-[#E9E778] text-[#241F21] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Detailed Service Inspection */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241F21]/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 text-[#241F21] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="floema-pill floema-pill-fluor text-xs mb-2">
                    {selectedService.hallOrBay}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#241F21]">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#EBE7DF]">
                <Image
                  src={selectedService.defaultImg}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-[#7A716D] leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#241F21]">
                  Technical Specifications & Equipment:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#7A716D]">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E9E778] mt-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#241F21]/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const name = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteWithService(name);
                  }}
                  className="floema-btn floema-btn-fluor text-xs py-3 px-6 shadow-md"
                >
                  <span>Request RFQ for this Bay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] hover:text-[#241F21]"
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
