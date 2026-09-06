"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/websiteData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  preselectedService = "",
}: QuoteModalProps) {
  const [service, setService] = useState(preselectedService || SERVICES_DATA[0].title);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("Production (1,000+ units)");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#040E24] rounded-3xl shadow-2xl overflow-hidden border border-[#D5E0FF]/25 p-5 sm:p-8 text-[#D5E0FF] animate-in zoom-in-95 duration-200 max-h-[90dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/60 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="hubtown-tag text-[10px] sm:text-xs mb-2">
                [ RFQs & ENGINEERING QUOTES ]
              </span>
              <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-[#D5E0FF] mt-1.5 sm:mt-2">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#D5E0FF]/70 mt-1">
                Receive comprehensive pricing, tooling lead times, and DFM recommendations within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                  Primary Capability Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm font-semibold text-[#D5E0FF] focus:border-[#7099FF] focus:outline-none"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#040E24] text-white">
                      {s.title} ({s.hallOrBay})
                    </option>
                  ))}
                  <option value="Complete Turnkey Assembly" className="bg-[#040E24] text-white">
                    Complete Turnkey Assembly
                  </option>
                </select>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 focus:border-[#7099FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Tier-1 Automotive OEM"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 focus:border-[#7099FF] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 focus:border-[#7099FF] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 focus:border-[#7099FF] focus:outline-none"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                  Estimated Batch Volume
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm font-semibold text-[#D5E0FF] focus:border-[#7099FF] focus:outline-none"
                >
                  <option value="Prototype / Sample Testing (1 - 50 pcs)" className="bg-[#040E24] text-white">Prototype / Sample Testing (1 - 50 pcs)</option>
                  <option value="Pilot Batch (50 - 500 pcs)" className="bg-[#040E24] text-white">Pilot Batch (50 - 500 pcs)</option>
                  <option value="Production (1,000+ units)" className="bg-[#040E24] text-white">Production (1,000+ units)</option>
                  <option value="Mass Recurring (10,000+ units/month)" className="bg-[#040E24] text-white">Mass Recurring (10,000+ units/month)</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-1.5">
                  Part Drawings, Materials & Tolerances
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details on sheet thickness, material grade (CRCA/SS304), stamping tonnage, or delivery timelines..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/20 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 focus:border-[#7099FF] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="hubtown-btn-solid w-full py-3.5 text-sm justify-center shadow-lg shadow-[#7099FF]/20"
                >
                  <span>Submit RFQ to Engineering Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#7099FF]/20 border border-[#7099FF]/40 text-[#7099FF] flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#D5E0FF]">
              Quotation Request Received!
            </h3>
            <p className="mt-3 text-sm text-[#D5E0FF]/70 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-white">{name}</span> from <span className="font-bold text-white">{company}</span>. Our tooling design engineers have received your inquiry and will respond within 24 hours.
            </p>
            <div className="mt-8">
              <button
                onClick={handleReset}
                className="hubtown-btn-solid text-xs py-3 px-8"
              >
                <span>Back to Website</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
