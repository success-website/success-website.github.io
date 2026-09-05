"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, MapPin, Tag, ArrowRight, CheckCircle2, X, Sparkles } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/websiteData";

interface ServicesShowcaseProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export default function ServicesShowcase({
  onOpenQuoteWithService,
}: ServicesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ["All", "Fabrication", "Metal Parts", "Assembly", "Design", "Tools & Dies"];

  const filteredServices =
    activeCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-50 text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
                02 / CORE CAPABILITIES
              </span>
              <div className="h-px bg-zinc-300 w-16" />
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900">
              Services We <span className="text-[#D2251F]">Provide</span>
            </h2>
            <p className="mt-3 text-zinc-600 text-base sm:text-lg max-w-2xl font-normal">
              From individual stamped press components to multi-ton structural welded fabrications,
              explore our 5 specialized manufacturing bays.
            </p>
          </div>

          {/* Filter Pills (Kortrijk Xpo style) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#D2251F] text-white shadow-md shadow-[#D2251F]/20"
                    : "bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Kortrijk Card Layout with Image Hover Transition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with dual hover effect (1.png to 1_hover.png) */}
                <div className="relative aspect-[16/11] w-full bg-zinc-100 overflow-hidden">
                  {/* Default Image */}
                  <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                    <Image
                      src={service.defaultImg}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Hover Image */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <Image
                      src={service.hoverImg}
                      alt={`${service.title} Alternate View`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#D2251F] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {service.tag}
                    </span>
                  </div>

                  {/* Bay indicator bar */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-xl">
                    <MapPin className="w-3.5 h-3.5 text-[#FF604B]" />
                    <span className="font-semibold tracking-wide">{service.hallOrBay}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D2251F] uppercase tracking-wider mb-2">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{service.category}</span>
                  </div>

                  <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight group-hover:text-[#D2251F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Material Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.materials.slice(0, 3).map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 border-t border-zinc-100 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:text-[#D2251F] transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-[#D2251F] hover:text-white text-xs font-bold uppercase transition-all"
                >
                  Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          SERVICE DETAIL MODAL (Kortrijk Xpo Technical Specification View)
      ========================================================================= */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden text-zinc-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image Banner */}
            <div className="relative h-56 sm:h-64 w-full bg-zinc-900">
              <Image
                src={selectedService.defaultImg}
                alt={selectedService.title}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold text-[#FF604B] uppercase tracking-widest">
                  {selectedService.hallOrBay}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Engineering Overview
                </h4>
                <p className="text-base text-zinc-700 leading-relaxed font-normal">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Machinery & Key Specs */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Machinery, Equipment & Tooling Capacities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-sm text-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D2251F] flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualified Materials */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Compatible Raw Materials
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-zinc-100 text-zinc-800 font-semibold text-xs"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-900"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteWithService(serviceName);
                }}
                className="c-btn c-btn--primary py-2.5 px-6 text-sm font-bold shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom Quote for this Capability</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
