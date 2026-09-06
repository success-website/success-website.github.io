"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronRight, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export default function MobileOverlay({
  isOpen,
  onClose,
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
        transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
        className="fixed inset-0 z-50 bg-[#020A19]/98 text-[#D5E0FF] flex flex-col justify-between p-5 sm:p-10 overflow-y-auto border-l border-[#D5E0FF]/15"
      >
        {/* Top bar with Brand & Close */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D5E0FF]/15">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-xl bg-white p-1 border border-[#D5E0FF]/30 flex items-center justify-center overflow-hidden">
              <Image
                src={getAssetPath("/images/logo.png")}
                alt="Success Engineering Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-bold uppercase tracking-tight text-white font-['Space_Grotesk']">
              Success Engineering
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#040E24] hover:bg-[#081636] border border-[#D5E0FF]/20 text-[#D5E0FF] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="py-6 space-y-3.5 my-auto">
          <div>
            <a
              href="#home"
              onClick={onClose}
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              01 • Home
            </a>
          </div>

          <div>
            <a
              href="#about"
              onClick={onClose}
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              02 • Enterprise
            </a>
          </div>

          <div>
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className="w-full flex items-center justify-between text-2xl sm:text-3xl font-extrabold uppercase tracking-tight hover:text-[#7099FF] transition-colors"
            >
              <span>03 • Capabilities</span>
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isServicesExpanded ? "rotate-90 text-[#7099FF]" : ""
                }`}
              />
            </button>

            {isServicesExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 pl-4 border-l-2 border-[#7099FF] space-y-2"
              >
                {SERVICES_DATA.map((s) => (
                  <a
                    key={s.id}
                    href={`#service-${s.id}`}
                    onClick={onClose}
                    className="flex items-center justify-between py-1 text-xs sm:text-sm font-mono text-[#D5E0FF]/70 hover:text-[#7099FF]"
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
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              04 • Facility Tour
            </a>
          </div>

          <div>
            <a
              href="#quality"
              onClick={onClose}
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              05 • Quality & ISO
            </a>
          </div>

          <div>
            <a
              href="#clients"
              onClick={onClose}
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
            >
              06 • OEM Partners
            </a>
          </div>

          <div>
            <a
              href="#contact"
              onClick={onClose}
              className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight block hover:text-[#7099FF] transition-colors"
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
