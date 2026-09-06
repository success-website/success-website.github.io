"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, FileCheck2, X } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

export default function QualityAssurance() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const qualityStandards = [
    {
      code: "METRO // SPEC-01",
      title: "Incoming Material Spectrometry",
      desc: "Every raw coil and plate is cross-verified against chemical mill test certificates (MTC) for tensile integrity and alloy composition.",
    },
    {
      code: "SPC // CPK-TRACK",
      title: "Statistical Process Control (SPC)",
      desc: "Real-time CPK tracking and dimensional verification during continuous high-tonnage stamping operations.",
    },
    {
      code: "NDT // WELD-ETCH",
      title: "Weld Penetration & NDT Testing",
      desc: "Certified macro-etching and non-destructive dye-penetrant testing for heavy fabricated structural sub-assemblies.",
    },
    {
      code: "FIXTURE // POKA-YOKE",
      title: "Comprehensive Poka-Yoke Fixturing",
      desc: "Foolproof mechanical tooling pins preventing improper orientation during multi-station sub-assembly integration.",
    },
  ];

  return (
    <section id="quality" className="cv-auto py-16 sm:py-28 bg-[#020A19] text-[#D5E0FF] relative overflow-hidden border-t border-[#D5E0FF]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-16"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <span className="hubtown-tag text-[10px] sm:text-xs">
                [ 05 // QUALITY & METROLOGY ]
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#7099FF]">
                ZERO-DEFECT STANDARD
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#D5E0FF] leading-tight">
              ISO 9001:2015 Certified Manufacturing.
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#D5E0FF]/70 max-w-2xl leading-relaxed">
              Certified by UCAS India Pvt. Ltd. Our quality management systems govern every stage from toolroom design to stamping and final crating.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="hubtown-beveled p-3.5 sm:p-4 bg-[#040E24]/85 border border-[#D5E0FF]/20 flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 p-1.5 sm:p-2 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src={getAssetPath("/images/ISO_LOGO.png")}
                  alt="ISO 9001:2015 Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#D5E0FF]">
                  UCAS India Certified
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#7099FF] mt-0.5">
                  Reg No: 12-UCAS-IND-092
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quality Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Media */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div
              data-cursor="INSPECT"
              className="hubtown-beveled overflow-hidden group p-2 bg-[#040E24]/80 border border-[#D5E0FF]/20"
            >
              <div className="relative aspect-[4/3] hubtown-beveled overflow-hidden w-full bg-[#020A19]">
                <Image
                  src={getAssetPath("/images/Metalplates.png")}
                  alt="Calibrated Metal Plates Quality Inspection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A19] via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="hubtown-tag text-[10px] mb-2 inline-block">
                      PRECISION METROLOGY
                    </span>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-[#D5E0FF]">
                      Optical Comparator & Digital Vernier Checks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Protocol Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-4"
          >
            {qualityStandards.map((std, idx) => (
              <div
                key={idx}
                className="hubtown-beveled p-5 bg-[#040E24]/85 border border-[#D5E0FF]/15 hover:border-[#7099FF]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="font-mono text-[10px] text-[#7099FF] block uppercase">
                      {std.code}
                    </span>
                    <h4 className="text-base font-bold uppercase tracking-tight text-[#D5E0FF] mt-0.5">
                      {std.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#D5E0FF]/65 leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => setIsCertModalOpen(true)}
                data-cursor="CERTIFICATE"
                className="hubtown-btn-solid text-xs py-3 sm:py-3.5 px-5 sm:px-6 shadow-xl shadow-[#7099FF]/20 w-full sm:w-auto justify-center"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>View ISO 9001:2015 Certificate Dossier</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Certificate Dossier Modal */}
        {isCertModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setIsCertModalOpen(false)}
          >
            <div
              className="relative w-full max-w-xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 p-6 sm:p-8 text-[#D5E0FF] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#D5E0FF]/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-[#D5E0FF]">
                      Certificate Dossier
                    </h3>
                    <p className="text-xs font-mono text-[#7099FF]">
                      Audited by UCAS India Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-6 p-6 rounded-2xl bg-[#020A19] border border-[#D5E0FF]/15 text-xs sm:text-sm space-y-3 font-mono">
                <div className="flex justify-between border-b border-[#D5E0FF]/10 pb-2">
                  <span className="text-[#D5E0FF]/60">Enterprise:</span>
                  <span className="font-bold text-[#D5E0FF]">Success Engineering Enterprises</span>
                </div>
                <div className="flex justify-between border-b border-[#D5E0FF]/10 pb-2">
                  <span className="text-[#D5E0FF]/60">Standard:</span>
                  <span className="font-bold text-[#D5E0FF]">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between border-b border-[#D5E0FF]/10 pb-2">
                  <span className="text-[#D5E0FF]/60">Scope:</span>
                  <span className="font-bold text-right text-[#D5E0FF]">Press Tools, Sheet Metal Stamping & Welding</span>
                </div>
                <div className="flex justify-between border-b border-[#D5E0FF]/10 pb-2">
                  <span className="text-[#D5E0FF]/60">Facility:</span>
                  <span className="font-bold text-[#D5E0FF]">SIDCO Industrial Estate, Kakkalur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D5E0FF]/60">Status:</span>
                  <span className="font-bold text-[#020A19] bg-[#D5E0FF] px-2 py-0.5 rounded">Active & Verified</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="hubtown-btn-solid text-xs py-3 px-6"
                >
                  <span>Close Window</span>
                </button>

                <span className="text-xs text-[#7099FF] font-mono">
                  Official Record • 2026 Audit
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
