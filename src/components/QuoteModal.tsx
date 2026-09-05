"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, CheckCircle2, Building, Phone, Mail, User } from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/websiteData";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241F21]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#241F21]/10 p-6 sm:p-10 text-[#241F21] animate-in zoom-in-95 duration-200 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F2EFEA] text-[#7A716D] hover:text-[#241F21] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="floema-pill floema-pill-fluor text-xs mb-2">
                RFQs & Engineering Quotes
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#241F21] mt-2">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#7A716D] mt-1">
                Receive comprehensive pricing, tooling lead times, and DFM recommendations within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                  Primary Capability Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm font-semibold text-[#241F21] focus:border-[#241F21] focus:outline-none"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.hallOrBay})
                    </option>
                  ))}
                  <option value="Complete Turnkey Assembly">Complete Turnkey Assembly</option>
                </select>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm text-[#241F21] focus:border-[#241F21] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Tier-1 Automotive OEM"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm text-[#241F21] focus:border-[#241F21] focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm text-[#241F21] focus:border-[#241F21] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm text-[#241F21] focus:border-[#241F21] focus:outline-none"
                  />
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                  Estimated Batch Volume
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm font-semibold text-[#241F21] focus:border-[#241F21] focus:outline-none"
                >
                  <option value="Prototype / Sample Testing (1 - 50 pcs)">Prototype / Sample Testing (1 - 50 pcs)</option>
                  <option value="Pilot Batch (50 - 500 pcs)">Pilot Batch (50 - 500 pcs)</option>
                  <option value="Production (1,000+ units)">Production (1,000+ units)</option>
                  <option value="Mass Recurring (10,000+ units/month)">Mass Recurring (10,000+ units/month)</option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7A716D] mb-1.5">
                  Part Drawings, Materials & Tolerances
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details on sheet thickness, material grade (CRCA/SS304), stamping tonnage, or delivery timelines..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#F2EFEA] border border-[#241F21]/10 text-sm text-[#241F21] focus:border-[#241F21] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="floema-btn floema-btn-fluor w-full py-3.5 text-sm justify-center shadow-lg"
                >
                  <span>Submit RFQ to Engineering Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#241F21]">
              Quotation Request Received!
            </h3>
            <p className="mt-3 text-sm text-[#7A716D] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#241F21]">{name}</span> from <span className="font-bold text-[#241F21]">{company}</span>. Our tooling design engineers have received your inquiry and will respond within 24 hours.
            </p>
            <div className="mt-8">
              <button
                onClick={handleReset}
                className="floema-btn floema-btn-dark text-xs py-3 px-8"
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
