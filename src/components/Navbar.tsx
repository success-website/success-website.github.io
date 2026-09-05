"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Phone, MapPin, Sparkles, Shield, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/websiteData";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuote: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({
  onOpenSearch,
  onOpenQuote,
  onToggleMobileMenu,
  isMobileMenuOpen,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md text-zinc-900 py-3"
          : "bg-[#D2251F] text-white py-4"
      }`}
    >
      {/* Top micro bar (when not scrolled) */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/15 pb-2.5 mb-2.5 text-xs text-white/85">
          <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-white/90" />
                <span>SIDCO Industrial Estate, Kakkalur, Tiruvallur - 602 003</span>
              </span>
              <span>•</span>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-white/90" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wider uppercase">
                ISO 9001:2015 CERTIFIED
              </span>
              <span className="text-white/40">|</span>
              <span className="font-medium text-white/90">UCAS India Certified</span>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-white shadow-sm p-1 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Success Engineering Enterprises Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black tracking-tight text-sm sm:text-base md:text-lg uppercase leading-tight ${
                isScrolled ? "text-zinc-900" : "text-white"
              }`}
            >
              Success Engineering
            </span>
            <span
              className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
                isScrolled ? "text-[#D2251F]" : "text-white/80"
              }`}
            >
              Enterprises • 20+ Years
            </span>
          </div>
        </Link>

        {/* Desktop Menu items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="#home"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            Home
          </Link>

          {/* Capabilities / Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href="#services"
              className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                isScrolled
                  ? "hover:bg-zinc-100 text-zinc-800"
                  : "hover:bg-white/15 text-white"
              }`}
            >
              <span>Capabilities</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </a>

            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-zinc-100 p-3 text-zinc-900 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider px-3 py-1.5">
                  Industrial Solutions
                </div>
                {SERVICES_DATA.map((srv) => (
                  <a
                    key={srv.id}
                    href={`#service-${srv.id}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-50 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-bold text-zinc-900 group-hover:text-[#D2251F] transition-colors">
                        {srv.title}
                      </div>
                      <div className="text-xs text-zinc-500 font-medium">
                        {srv.hallOrBay}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D2251F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#aboutus"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            About Us
          </Link>

          <Link
            href="#quality"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            Quality & ISO
          </Link>

          <Link
            href="#clients"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            Clients
          </Link>

          <Link
            href="#gallery"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            Facility Tour
          </Link>

          <Link
            href="#contact"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-800"
                : "hover:bg-white/15 text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right side Actions (Search + Quote CTA + Hamburger) */}
        <div className="flex items-center gap-3">
          {/* Search Trigger (Kortrijk Xpo Icon Style) */}
          <button
            onClick={onOpenSearch}
            aria-label="Open search dialog"
            className={`p-2.5 rounded-full transition-all ${
              isScrolled
                ? "hover:bg-zinc-100 text-zinc-700"
                : "hover:bg-white/20 text-white"
            }`}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Request a Quote CTA */}
          <button
            onClick={onOpenQuote}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
              isScrolled
                ? "bg-[#D2251F] hover:bg-[#B31C17] text-white"
                : "bg-white hover:bg-zinc-100 text-[#D2251F]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request a Quote</span>
          </button>

          {/* Kortrijk Xpo 4-Line Signature Animated Hamburger */}
          <button
            onClick={onToggleMobileMenu}
            aria-label="Toggle mobile menu"
            className={`p-2.5 rounded-full lg:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 ${
              isScrolled ? "text-zinc-900" : "text-white"
            }`}
          >
            <span
              className={`block w-5 h-[2px] bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
