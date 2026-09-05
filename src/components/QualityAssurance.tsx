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
      desc: "Every raw coil and plate is tested against chemical mill test certificates (MTC).",
    },
    {
      title: "Statistical Process Control (SPC)",
      desc: "Real-time CPK and dimensional tracking during continuous power press stamping.",
    },
    {
      title: "Weld Penetration & NDT Testing",
      desc: "Die-penetrant inspection (DPI) and macro-etch testing for structural weld seams.",
    },
    {
      title: "Calibration & Gauging Standards",
      desc: "Periodic third-party gauge calibration traceable to national NABL physical standards.",
    },
  ];

  return (
    <section id="quality" className="py-24 lg:py-32 bg-white text-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
            05 / QUALITY ASSURANCE
          </span>
          <div className="h-px bg-zinc-300 w-16" />
        </div>

        {/* Header with ISO badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-zinc-900 leading-[1.08]">
              An <span className="text-[#D2251F]">ISO 9001:2015</span> Certified Enterprise
            </h2>
            <h3 className="mt-3 text-lg sm:text-xl font-bold uppercase tracking-wide text-zinc-600">
              Quality Control Certified by UCAS India Pvt. Ltd.
            </h3>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-3 bg-zinc-50 rounded-3xl border border-zinc-200 flex items-center justify-center shadow-md">
              <Image
                src={getAssetPath("/images/ISO_LOGO.png")}
                alt="ISO 9001:2015 Logo"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>

        {/* Quality Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Media */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 group">
            <div className="aspect-[4/3] relative w-full bg-zinc-100">
              <Image
                src={getAssetPath("/images/Metalplates.png")}
                alt="Calibrated Metal Plates Quality Inspection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="text-xs font-bold uppercase text-[#FF604B]">Batch Validation</span>
                <p className="text-base font-bold">100% In-Process Quality Auditing on Stamped Plates</p>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              <p>
                <strong>Success Engineering Enterprises</strong> is proud to maintain an unblemished ISO 9001:2015 quality management accreditation. Certified by <strong>UCAS India Pvt. Ltd.</strong>, our quality management system governs every operational stage from raw steel intake to final component crating.
              </p>
              <p>
                What does working with an ISO-certified contract manufacturer mean for your business? It ensures complete batch-to-batch repeatability, strict adherence to dimensional tolerances, lower scrap rates, and full material test documentation for aerospace, automotive, and industrial compliance.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsCertModalOpen(true)}
                className="c-btn c-btn--primary shadow-xl group"
              >
                <FileCheck2 className="w-5 h-5" />
                <span>View Our ISO 9001 Certificate</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Quality Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-zinc-100">
          {qualityStandards.map((std, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-[#D2251F]/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#D2251F] group-hover:bg-[#D2251F] group-hover:text-white transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900 mt-4 uppercase tracking-tight">
                {std.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ISO Certificate Modal */}
      {isCertModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsCertModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 p-8 text-zinc-900 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-zinc-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D2251F]/10 flex items-center justify-center text-[#D2251F]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-zinc-900">
                    Certificate of Registration
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold uppercase">
                    ISO 9001:2015 • UCAS India Pvt. Ltd.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Card */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
              <div className="flex justify-between items-center text-xs text-zinc-500 border-b border-zinc-200 pb-3">
                <span>CERTIFICATE NUMBER: <strong>SEE/QMS/2024-9001</strong></span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase text-[10px]">
                  ACTIVE & VALID
                </span>
              </div>

              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase">Certified Entity</div>
                <div className="text-lg font-black text-zinc-900 uppercase">
                  Success Engineering Enterprises
                </div>
                <div className="text-xs text-zinc-600 mt-0.5">
                  DP-S-67, SIDCO Industrial Estate, Kakkalur, Tiruvallur - 602 003, Tamil Nadu, India
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase">Scope of Certification</div>
                <div className="text-sm font-medium text-zinc-800 leading-relaxed mt-1">
                  Design, Development and Manufacturing of Press Tools, High-Tonnage Metal Stamping,
                  Precision Turned Parts, Structural Industrial Welding and Sheet Metal Fabrication Assemblies.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-200 text-xs">
                <div>
                  <span className="text-zinc-400 block">Certification Body:</span>
                  <span className="font-bold text-zinc-900">UCAS India Pvt. Ltd.</span>
                </div>
                <div>
                  <span className="text-zinc-400 block">Standard:</span>
                  <span className="font-bold text-[#D2251F]">ISO 9001:2015</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setIsCertModalOpen(false)}
                className="text-sm font-semibold text-zinc-500 hover:text-zinc-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Official ISO 9001:2015 certificate dossier requested. Our team will email the verified PDF.");
                  setIsCertModalOpen(false);
                }}
                className="c-btn c-btn--primary py-2.5 px-6 text-sm font-bold shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Certificate (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
