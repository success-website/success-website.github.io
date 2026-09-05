"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Award, FileCheck2, Download, Eye, X, CheckCircle2 } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

export default function QualityAssurance() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const qualityStandards = [
    {
      title: "Incoming Material Spectrometry",
      desc: "Every raw coil and plate is cross-verified against chemical mill test certificates (MTC) for tensile integrity.",
    },
    {
      title: "Statistical Process Control (SPC)",
      desc: "Real-time CPK tracking and dimensional verification during continuous high-tonnage stamping operations.",
    },
    {
      title: "Weld Penetration & NDT Testing",
      desc: "Certified macro-etching and non-destructive dye-penetrant testing for heavy fabricated structural assemblies.",
    },
    {
      title: "Comprehensive Poka-Yoke Fixturing",
      desc: "Foolproof mechanical tooling pins preventing improper orientation during sub-assembly integration.",
    },
  ];

  return (
    <section id="quality" className="py-24 sm:py-32 bg-[#F2EFEA] text-[#241F21] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="floema-pill floema-pill-stone mb-4">
              05 • Quality & Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#241F21] leading-tight">
              ISO 9001:2015 Certified Manufacturing.
            </h2>
            <p className="mt-4 text-base text-[#7A716D] max-w-2xl leading-relaxed">
              Certified by UCAS India Pvt. Ltd. Our quality management systems govern every stage from toolroom design to stamping and final crating.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="floema-card p-4 bg-white flex items-center gap-4">
              <div className="relative w-16 h-16 p-2 bg-[#F9F8F6] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image
                  src={getAssetPath("/images/ISO_LOGO.png")}
                  alt="ISO 9001:2015 Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[#241F21]">
                  UCAS India Certified
                </div>
                <div className="text-[11px] text-[#7A716D] mt-0.5">
                  Reg No: 12-UCAS-IND-092
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Media */}
          <div className="lg:col-span-6">
            <div
              data-cursor="INSPECT"
              className="floema-card overflow-hidden group p-3 bg-white"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full bg-[#EBE7DF]">
                <Image
                  src={getAssetPath("/images/Metalplates.png")}
                  alt="Calibrated Metal Plates Quality Inspection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="floema-pill floema-pill-fluor text-[10px] mb-2">
                      Precision Metrology
                    </span>
                    <h4 className="text-lg font-bold uppercase tracking-tight">
                      Optical Comparator & Digital Vernier Checks
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Protocol Cards */}
          <div className="lg:col-span-6 space-y-4">
            {qualityStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#241F21]/8 hover:border-[#241F21]/25 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-tight text-[#241F21]">
                      {std.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#7A716D] leading-relaxed">
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
                className="floema-btn floema-btn-dark text-xs py-3.5 px-6 shadow-md"
              >
                <FileCheck2 className="w-4 h-4 text-[#E9E778]" />
                <span>View ISO 9001:2015 Certificate Dossier</span>
              </button>
            </div>
          </div>
        </div>

        {/* Certificate Dossier Modal */}
        {isCertModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241F21]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setIsCertModalOpen(false)}
          >
            <div
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-[#241F21] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#241F21]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight">
                      Certificate Dossier
                    </h3>
                    <p className="text-xs font-mono text-[#7A716D]">
                      Audited by UCAS India Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F2EFEA] text-[#241F21] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="my-6 p-6 rounded-2xl bg-[#F9F8F6] border border-[#241F21]/10 text-xs sm:text-sm space-y-3 font-mono">
                <div className="flex justify-between border-b border-[#241F21]/10 pb-2">
                  <span className="text-[#7A716D]">Enterprise:</span>
                  <span className="font-bold text-[#241F21]">Success Engineering Enterprises</span>
                </div>
                <div className="flex justify-between border-b border-[#241F21]/10 pb-2">
                  <span className="text-[#7A716D]">Standard:</span>
                  <span className="font-bold text-[#241F21]">ISO 9001:2015</span>
                </div>
                <div className="flex justify-between border-b border-[#241F21]/10 pb-2">
                  <span className="text-[#7A716D]">Scope:</span>
                  <span className="font-bold text-right text-[#241F21]">Press Tools, Sheet Metal Stamping & Welding</span>
                </div>
                <div className="flex justify-between border-b border-[#241F21]/10 pb-2">
                  <span className="text-[#7A716D]">Facility:</span>
                  <span className="font-bold text-[#241F21]">SIDCO Industrial Estate, Kakkalur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A716D]">Status:</span>
                  <span className="font-bold text-[#042D2B] bg-[#E9E778] px-2 py-0.5 rounded">Active & Verified</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsCertModalOpen(false)}
                  className="floema-btn floema-btn-dark text-xs py-3 px-6"
                >
                  <span>Close Window</span>
                </button>

                <span className="text-xs text-[#7A716D] font-mono">
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
