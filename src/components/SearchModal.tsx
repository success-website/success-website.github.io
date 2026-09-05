"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, CLIENTS_DATA } from "@/data/websiteData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectService,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.category.toLowerCase().includes(normalizedQuery) ||
      s.shortDesc.toLowerCase().includes(normalizedQuery) ||
      s.materials.some((m) => m.toLowerCase().includes(normalizedQuery)) ||
      s.specs.some((sp) => sp.toLowerCase().includes(normalizedQuery))
  );

  const filteredClients = CLIENTS_DATA.filter(
    (c) =>
      c.name.toLowerCase().includes(normalizedQuery) ||
      c.category.toLowerCase().includes(normalizedQuery) ||
      c.relationship.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#020A19]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#040E24] rounded-3xl shadow-2xl border border-[#D5E0FF]/25 overflow-hidden text-[#D5E0FF] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#D5E0FF]/15 flex items-center justify-between">
          <div>
            <span className="hubtown-tag text-xs mb-1">
              [ SEARCH INDEX ]
            </span>
            <h3 className="text-xl font-bold tracking-tight uppercase text-[#D5E0FF] mt-1">
              What capability are you seeking?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#081636] text-[#D5E0FF]/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="px-6 py-4 bg-[#020A19] border-b border-[#D5E0FF]/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#7099FF]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stamping, progressive dies, ISO 9001, clients..."
            className="w-full bg-transparent border-none outline-none text-base sm:text-lg text-[#D5E0FF] placeholder:text-[#D5E0FF]/30 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs font-mono text-[#7099FF] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-3">
              Production Bays & Capabilities ({filteredServices.length})
            </h4>
            <div className="space-y-2">
              {filteredServices.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    onSelectService(s.id);
                    onClose();
                  }}
                  className="p-3.5 rounded-xl hover:bg-[#081636] border border-transparent hover:border-[#7099FF]/30 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7099FF]/15 border border-[#7099FF]/30 text-[#7099FF] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      {s.number}
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase text-[#D5E0FF] group-hover:text-white">
                        {s.title}
                      </div>
                      <div className="text-xs text-[#D5E0FF]/60 font-mono">{s.hallOrBay}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#7099FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* OEM Clients */}
          {filteredClients.length > 0 && (
            <div className="pt-4 border-t border-[#D5E0FF]/15">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-3">
                OEM Partner Ecosystem ({filteredClients.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredClients.map((c, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#020A19] border border-[#D5E0FF]/15 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-sm uppercase text-[#D5E0FF]">{c.name}</div>
                      <div className="text-[11px] text-[#D5E0FF]/60 font-mono">{c.category}</div>
                    </div>
                    <span className="hubtown-tag text-[9px]">
                      OEM
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
