"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronRight, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/websiteData";

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
        className="fixed inset-0 z-50 bg-[#020A19]/98 text-[#D5E0FF] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto backdrop-blur-2xl border-l border-[#D5E0FF]/15"
      >
        {/* Top bar with Search & Close */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D5E0FF]/15">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#040E24] text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] border border-[#D5E0FF]/20 hover:border-[#7099FF] transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Index</span>
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#040E24] hover:bg-[#081636] border border-[#D5E0FF]/20 text-[#D5E0FF] transition-colors"
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
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              01 • Home
            </a>
          </div>

          <div>
            <a
              href="#about"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              02 • Enterprise
            </a>
          </div>

          <div>
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className="w-full flex items-center justify-between text-3xl sm:text-4xl font-black uppercase tracking-tight hover:text-[#7099FF] transition-colors"
            >
              <span>03 • Capabilities</span>
              <ChevronRight
                className={`w-6 h-6 transition-transform duration-300 ${
                  isServicesExpanded ? "rotate-90 text-[#7099FF]" : ""
                }`}
              />
            </button>

            {isServicesExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pl-4 border-l-2 border-[#7099FF] space-y-2.5"
              >
                {SERVICES_DATA.map((s) => (
                  <a
                    key={s.id}
                    href={`#service-${s.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-1 text-sm font-mono text-[#D5E0FF]/70 hover:text-[#7099FF]"
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
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              04 • Facility Tour
            </a>
          </div>

          <div>
            <a
              href="#quality"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              05 • Quality & ISO
            </a>
          </div>

          <div>
            <a
              href="#clients"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              06 • OEM Partners
            </a>
          </div>

          <div>
            <a
              href="#contact"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              07 • Contact
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-[#D5E0FF]/15 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full hubtown-btn-solid text-center font-bold text-sm uppercase shadow-xl shadow-[#7099FF]/20"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="text-xs font-mono text-[#7099FF] text-center">
            SIDCO Industrial Estate, Kakkalur • ISO 9001:2015
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
