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
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#D2251F] text-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
      >
        {/* Top bar with Search & Close */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Website</span>
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main navigation list */}
        <div className="py-8 space-y-6 my-auto">
          <div>
            <a
              href="#home"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              Home
            </a>
          </div>

          <div>
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className="w-full flex items-center justify-between text-3xl sm:text-4xl font-extrabold uppercase tracking-tight hover:opacity-80 transition-opacity"
            >
              <span>Capabilities</span>
              <ChevronRight
                className={`w-6 h-6 transition-transform duration-300 ${
                  isServicesExpanded ? "rotate-90" : ""
                }`}
              />
            </button>

            {isServicesExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pl-4 border-l-2 border-white/30 space-y-3"
              >
                {SERVICES_DATA.map((s) => (
                  <a
                    key={s.id}
                    href={`#service-${s.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-1.5 text-base sm:text-lg font-medium text-white/90 hover:text-white"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <div>
            <a
              href="#aboutus"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              About Us
            </a>
          </div>

          <div>
            <a
              href="#quality"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              Quality & ISO
            </a>
          </div>

          <div>
            <a
              href="#clients"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              Client Partners
            </a>
          </div>

          <div>
            <a
              href="#gallery"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              Facility Tour
            </a>
          </div>

          <div>
            <a
              href="#contact"
              onClick={onClose}
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight block hover:opacity-80 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom actions & direct contact */}
        <div className="pt-6 border-t border-white/20 space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full c-btn c-btn--white text-center font-bold text-base uppercase shadow-lg"
          >
            Request a Quote
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80 pt-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.emails[0]}`}
              className="flex items-center gap-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors truncate"
            >
              <Mail className="w-4 h-4" />
              <span className="truncate">{COMPANY_INFO.emails[0]}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
