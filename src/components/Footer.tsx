"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Check, Send } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/websiteData";

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
    <footer id="contact" className="bg-[#D2251F] text-white pt-20 pb-12 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Columns (Kortrijk Xpo footer-columns style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/20">
          {/* Left: Newsletter & Company Mission */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF604B]">
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Subscribe to Engineering Bulletins
              </h3>
              <p className="text-sm text-white/80 mt-2 max-w-md font-normal leading-relaxed">
                Receive quarterly metallurgical whitepapers, tooling optimization guides, and machinery expansion notices.
              </p>
            </div>

            {/* Newsletter Subscription Box */}
            <form onSubmit={handleSubscribe} className="max-w-md">
              <div className="flex items-center rounded-full bg-white p-1.5 shadow-xl border border-white/30">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full bg-transparent px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 font-medium outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#D2251F] hover:bg-[#B31C17] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Navigation Shortcuts */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF604B] mb-3">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <Link href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#aboutus" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Capabilities
                </Link>
                <Link href="#quality" className="text-white/80 hover:text-white transition-colors">
                  Quality & ISO
                </Link>
                <Link href="#clients" className="text-white/80 hover:text-white transition-colors">
                  Clients
                </Link>
                <Link href="#gallery" className="text-white/80 hover:text-white transition-colors">
                  Facility Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Contact Details & Brand Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl bg-white p-2 shadow-md flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/logo.png"
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
                <p className="text-xs text-[#FF604B] font-bold uppercase tracking-wider mt-0.5">
                  An ISO 9001:2015 Certified Company • Over 20 Years
                </p>
              </div>
            </div>

            {/* Contact list with icons */}
            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF604B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-xs tracking-wider">
                    Manufacturing Facility & Office:
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline leading-relaxed font-normal block mt-0.5"
                  >
                    DP-S-67, SIDCO Industrial Estate,<br />
                    Kakkalur, Tiruvallur - 602 003, Tamil Nadu, India.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF604B] flex-shrink-0" />
                <div>
                  <span className="font-bold text-white uppercase text-xs tracking-wider block">
                    Direct Helpline:
                  </span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline font-semibold">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#FF604B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase text-xs tracking-wider block">
                    Technical & Commercial Inquiries:
                  </span>
                  <div className="space-y-0.5 mt-0.5">
                    <a
                      href={`mailto:${COMPANY_INFO.emails[0]}`}
                      className="hover:underline block text-white font-medium"
                    >
                      {COMPANY_INFO.emails[0]}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.emails[1]}`}
                      className="hover:underline block text-white font-medium"
                    >
                      {COMPANY_INFO.emails[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Quality Badge footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/15">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/ISO_LOGO.png"
                  alt="ISO"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-xs text-white/80 leading-snug">
                <strong className="text-white">Certified by UCAS India Pvt. Ltd.</strong><br />
                Scope: Press tools, sheet metal stamping, structural welding & turnkey assemblies.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Kortrijk Xpo page-footer-bottom style) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            &copy; {new Date().getFullYear()} Success Engineering Enterprises. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">General Terms</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Quality Manual</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Safety Policy</span>
          </div>

          <div className="text-white/50 text-[11px]">
            Designed inspired by Kortrijk Xpo • Next.js for GitHub Pages
          </div>
        </div>
      </div>
    </footer>
  );
}
