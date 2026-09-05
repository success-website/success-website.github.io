"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Upload, Sparkles, Building, Phone, Mail, User } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100 p-6 sm:p-10 text-zinc-900 animate-in zoom-in-95 duration-200 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-black tracking-widest text-[#D2251F] uppercase">
                RFQs & Engineering Quotes
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mt-1">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Receive comprehensive pricing, tooling lead times, and DFM recommendations within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                  Primary Capability Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-900 focus:border-[#D2251F] focus:outline-none"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:border-[#D2251F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Automotive OEM"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:border-[#D2251F] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Business Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:border-[#D2251F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:border-[#D2251F] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Estimated Batch Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                  Estimated Quantity / Annual Run
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-zinc-700">
                  {["Prototypes (< 50)", "Batch (500 - 5k)", "High Volume (10k+)"].map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => setQuantity(q)}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        quantity === q
                          ? "bg-[#D2251F] text-white border-[#D2251F]"
                          : "bg-zinc-50 border-zinc-200 hover:bg-zinc-100"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Specs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-1">
                  Part Details, Tolerances, or Material Grades
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention metal grades (e.g. SS304, CRCA, IS 2062), thickness, critical dimensions..."
                  className="w-full p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:border-[#D2251F] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full c-btn c-btn--primary font-bold uppercase tracking-wider text-sm shadow-xl mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit RFQ to Engineering Team</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900">
              Request Received!
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name || "Valued Partner"}</strong>. Your technical request for{" "}
              <strong>{service}</strong> has been logged. Our chief estimator will reach out at{" "}
              <strong>{phone || email}</strong> shortly.
            </p>
            <div className="pt-4">
              <button onClick={handleReset} className="c-btn c-btn--primary">
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
