"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronRight, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/websiteData";

interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

export default function MobileOverlay({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenQuote,
}: MobileOverlayProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        className="fixed inset-0 z-50 bg-[#241F21] text-[#F2EFEA] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
      >
        {/* Top bar with Search & Close */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#E9E778] hover:bg-white/20 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Capabilities</span>
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="py-8 space-y-5 my-auto">
          <div>
            <a
              href="#home"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              01 • Home
            </a>
          </div>

          <div>
            <a
              href="#about"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              02 • Company
            </a>
          </div>

          <div>
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className="w-full flex items-center justify-between text-3xl sm:text-4xl font-black uppercase tracking-tight hover:text-[#E9E778] transition-colors"
            >
              <span>03 • Capabilities</span>
              <ChevronRight
                className={`w-6 h-6 transition-transform duration-300 ${
                  isServicesExpanded ? "rotate-90 text-[#E9E778]" : ""
                }`}
              />
            </button>

            {isServicesExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pl-4 border-l-2 border-[#E9E778] space-y-2.5"
              >
                {SERVICES_DATA.map((s) => (
                  <a
                    key={s.id}
                    href={`#service-${s.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-1 text-sm font-mono text-[#D2CDC4] hover:text-[#E9E778]"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <div>
            <a
              href="#gallery"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              04 • Facility Tour
            </a>
          </div>

          <div>
            <a
              href="#quality"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              05 • Quality & ISO
            </a>
          </div>

          <div>
            <a
              href="#clients"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              06 • OEM Clients
            </a>
          </div>

          <div>
            <a
              href="#contact"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#E9E778] transition-colors"
            >
              07 • Contact
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full floema-btn floema-btn-fluor text-center font-bold text-sm uppercase shadow-lg"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="text-xs font-mono text-[#988F8B] text-center">
            SIDCO Industrial Estate, Kakkalur • ISO 9001:2015
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
