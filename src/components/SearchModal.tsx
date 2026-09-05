"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, ShieldCheck, Wrench, Building2, MapPin } from "lucide-react";
import { SERVICES_DATA, CLIENTS_DATA, COMPANY_INFO } from "@/data/websiteData";

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
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden text-zinc-900 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header with Kortrijk style title */}
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D2251F]">
              Search Entire Website
            </span>
            <h3 className="text-xl font-black tracking-tight text-zinc-900 mt-0.5">
              What engineering solution are you seeking?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input box */}
        <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fabrication, metal stamping, dies, ISO 9001, clients..."
            className="w-full bg-transparent border-none outline-none text-base sm:text-lg text-zinc-900 placeholder:text-zinc-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-zinc-400 hover:text-zinc-600 font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick suggestions if empty */}
        {!query && (
          <div className="p-6">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
              Popular Manufacturing Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Precision Stamping",
                "ISO 9001:2015",
                "Progressive Tooling",
                "Stainless Steel SS304",
                "Heavy Fabrication",
                "Automotive Brackets",
                "SIDCO Kakkalur",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 hover:bg-[#D2251F] hover:text-white transition-all text-zinc-700"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="p-6 max-h-96 overflow-y-auto space-y-6">
            {/* Capabilities Matches */}
            {filteredServices.length > 0 && (
              <div>
                <div className="text-xs font-bold text-[#D2251F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Capabilities & Bays ({filteredServices.length})</span>
                </div>
                <div className="space-y-2">
                  {filteredServices.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => {
                        onSelectService(srv.id);
                        onClose();
                      }}
                      className="w-full text-left p-3 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-bold text-sm text-zinc-900 group-hover:text-[#D2251F] transition-colors">
                          {srv.title}
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                          {srv.shortDesc}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#D2251F] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Clients Matches */}
            {filteredClients.length > 0 && (
              <div>
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Client Partners ({filteredClients.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filteredClients.map((client) => (
                    <a
                      key={client.name}
                      href="#clients"
                      onClick={onClose}
                      className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-xs">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900">
                          {client.name}
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          {client.category}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {filteredServices.length === 0 && filteredClients.length === 0 && (
              <div className="text-center py-8 text-zinc-500">
                <p className="font-medium text-sm">
                  No matching services or documents found for &quot;{query}&quot;.
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Contact our engineering team directly at {COMPANY_INFO.phoneDisplay}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer info in search */}
        <div className="px-6 py-3.5 bg-zinc-50 border-t border-zinc-100 text-xs text-zinc-500 flex justify-between items-center">
          <span>Success Engineering Enterprises • SIDCO Kakkalur</span>
          <span className="font-semibold text-[#D2251F]">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
