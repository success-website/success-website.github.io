"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Check } from "lucide-react";
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
    <footer id="contact" className="bg-[#241F21] text-[#F2EFEA] pt-24 pb-12 relative overflow-hidden select-none">
      {/* Subtle Background Architectural Brand Mark */}
      <div className="absolute -bottom-10 right-0 pointer-events-none opacity-5 font-black text-9xl tracking-tighter text-white">
        SUCCESS
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="floema-pill floema-pill-fluor text-xs mb-3">
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-2">
                Subscribe to Manufacturing Bulletins.
              </h3>
              <p className="text-sm text-[#D2CDC4] mt-2 max-w-md leading-relaxed">
                Receive quarterly metallurgical whitepapers, tooling optimization guides, and machinery expansion notices directly in your inbox.
              </p>
            </div>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="flex items-center rounded-full bg-white/10 p-1.5 border border-white/15 focus-within:border-[#E9E778] transition-colors">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-[#988F8B] outline-none font-medium"
                />
                <button
                  type="submit"
                  className="floema-btn floema-btn-fluor text-xs py-2 px-5 group flex-shrink-0"
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
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#988F8B] mb-4">
                Directory
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono uppercase tracking-wider text-[#D2CDC4]">
                <Link href="#home" className="hover:text-[#E9E778] transition-colors">
                  Home
                </Link>
                <Link href="#about" className="hover:text-[#E9E778] transition-colors">
                  Company
                </Link>
                <Link href="#services" className="hover:text-[#E9E778] transition-colors">
                  Capabilities
                </Link>
                <Link href="#gallery" className="hover:text-[#E9E778] transition-colors">
                  Facility Tour
                </Link>
                <Link href="#quality" className="hover:text-[#E9E778] transition-colors">
                  Quality & ISO
                </Link>
                <Link href="#clients" className="hover:text-[#E9E778] transition-colors">
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
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                  Success Engineering Enterprises
                </h4>
                <p className="text-xs text-[#E9E778] font-mono font-bold uppercase tracking-wider mt-0.5">
                  An ISO 9001:2015 Certified Company • Over 20 Years
                </p>
              </div>
            </div>

            {/* Physical Logistics */}
            <div className="space-y-4 text-sm text-[#D2CDC4]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E9E778] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono text-xs font-bold uppercase text-white tracking-wider">
                    Manufacturing Facility & Head Office:
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E9E778] transition-colors leading-relaxed block mt-0.5"
                  >
                    DP-S-67, SIDCO Industrial Estate,
                    <br />
                    Kakkalur, Tiruvallur - 602 003, Tamil Nadu, India.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E9E778] flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-white tracking-wider block">
                    Direct Helpline:
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-[#E9E778] font-mono font-semibold transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E9E778] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-white tracking-wider block">
                    Technical & Commercial Inquiries:
                  </span>
                  <div className="space-y-0.5 mt-0.5 font-mono text-xs">
                    <a
                      href={`mailto:${COMPANY_INFO.emails[0]}`}
                      className="hover:text-[#E9E778] block transition-colors"
                    >
                      {COMPANY_INFO.emails[0]}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emails[1]}`}
                      className="hover:text-[#E9E778] block transition-colors"
                    >
                      {COMPANY_INFO.emails[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Badge Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0">
                <Image
                  src={getAssetPath("/images/ISO_LOGO.png")}
                  alt="ISO"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-xs text-[#988F8B] leading-snug">
                <strong className="text-white">Certified by UCAS India Pvt. Ltd.</strong>
                <br />
                Scope: Press tools, sheet metal stamping, structural welding & turnkey assemblies.
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#988F8B]">
          <div>
            © {new Date().getFullYear()} Success Engineering Enterprises. All Rights Reserved.
          </div>
          <div className="text-[11px] text-[#7A716D]">
            Design inspired by Floema® (Bürocratik Awwwards SOTM) • Built with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
