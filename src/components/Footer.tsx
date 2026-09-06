"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Check } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-[#010712] text-[#D5E0FF] pt-16 pb-10 sm:pt-24 sm:pb-12 relative overflow-hidden select-none border-t border-[#D5E0FF]/15">
      {/* Subtle Background Architectural Brand Mark */}
      <div className="absolute -bottom-10 right-0 pointer-events-none opacity-5 font-black text-7xl sm:text-9xl tracking-tighter text-[#D5E0FF]">
        SUCCESS
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-20 border-b border-[#D5E0FF]/15">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <span className="hubtown-tag text-[10px] sm:text-xs mb-2 sm:mb-3">
                [ STAY CONNECTED ]
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#D5E0FF] mt-2">
                Subscribe to Manufacturing Bulletins.
              </h3>
              <p className="text-xs sm:text-sm text-[#D5E0FF]/70 mt-2 max-w-md leading-relaxed">
                Receive quarterly metallurgical whitepapers, tooling optimization guides, and machinery expansion notices directly in your inbox.
              </p>
            </div>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="flex items-center rounded-full bg-[#040E24] p-1.5 border border-[#D5E0FF]/20 focus-within:border-[#7099FF] transition-colors">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full bg-transparent px-3.5 sm:px-4 py-2 text-base sm:text-sm text-[#D5E0FF] placeholder:text-[#D5E0FF]/40 outline-none font-medium"
                />
                <button
                  type="submit"
                  className="hubtown-btn-solid text-xs py-2 px-4 sm:px-5 flex-shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Joined</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Quick Links */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7099FF] mb-4">
                Directory
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono uppercase tracking-wider text-[#D5E0FF]/70">
                <Link href="#home" className="hover:text-[#7099FF] transition-colors">
                  Home
                </Link>
                <Link href="#about" className="hover:text-[#7099FF] transition-colors">
                  Company
                </Link>
                <Link href="#services" className="hover:text-[#7099FF] transition-colors">
                  Capabilities
                </Link>
                <Link href="#gallery" className="hover:text-[#7099FF] transition-colors">
                  Facility Tour
                </Link>
                <Link href="#quality" className="hover:text-[#7099FF] transition-colors">
                  Quality & ISO
                </Link>
                <Link href="#clients" className="hover:text-[#7099FF] transition-colors">
                  OEM Clients
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Plant Logistics */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center flex-shrink-0">
                <Image
                  src={getAssetPath("/images/logo.png")}
                  alt="Success Engineering Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#D5E0FF]">
                  Success Engineering Enterprises
                </h4>
                <p className="text-xs text-[#7099FF] font-mono font-bold uppercase tracking-wider mt-0.5">
                  An ISO 9001:2015 Certified Company • Over 20 Years
                </p>
              </div>
            </div>

            {/* Physical Logistics */}
            <div className="space-y-4 text-sm text-[#D5E0FF]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7099FF] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs font-bold uppercase text-[#D5E0FF] tracking-wider">
                    Manufacturing Facility & Head Office:
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7099FF] transition-colors leading-relaxed block mt-0.5"
                  >
                    DP-S-67, SIDCO Industrial Estate,
                    <br />
                    Kakkalur, Tiruvallur - 602 003, Tamil Nadu, India.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7099FF] flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#D5E0FF] tracking-wider block">
                    Direct Helpline:
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-[#7099FF] font-mono font-semibold transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#7099FF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-[#D5E0FF] tracking-wider block">
                    Technical & Commercial Inquiries:
                  </span>
                  <div className="space-y-0.5 mt-0.5 font-mono text-xs">
                    <a
                      href={`mailto:${COMPANY_INFO.emails[0]}`}
                      className="hover:text-[#7099FF] block transition-colors"
                    >
                      {COMPANY_INFO.emails[0]}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emails[1]}`}
                      className="hover:text-[#7099FF] block transition-colors"
                    >
                      {COMPANY_INFO.emails[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Badge Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#D5E0FF]/15">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0 shadow">
                <Image
                  src={getAssetPath("/images/ISO_LOGO.png")}
                  alt="ISO"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-xs text-[#D5E0FF]/70 leading-snug">
                <strong className="text-[#D5E0FF]">Certified by UCAS India Pvt. Ltd.</strong>
                <br />
                Scope: Press tools, sheet metal stamping, structural welding & turnkey assemblies.
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D5E0FF]/60">
          <div>
            © {new Date().getFullYear()} Success Engineering Enterprises. All Rights Reserved.
          </div>
          <div className="text-[11px] text-[#7099FF]">
            Design inspired by Hubtown (Unseen Studio Awwwards SOTD) • Built with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
