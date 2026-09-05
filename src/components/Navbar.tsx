"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowUpRight, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";
import { getAssetPath } from "@/lib/basePath";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        {/* Floating Capsule Bar (Floema Style) */}
        <div className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-[#F2EFEA]/90 backdrop-blur-md shadow-lg border border-[#241F21]/10 shadow-[#241F21]/5"
            : "bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#241F21]/8 shadow-sm"
        }`}>
          {/* Brand Logo & Editorial Title */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full bg-white p-1 border border-[#241F21]/10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image
                src={getAssetPath("/images/logo.png")}
                alt="Success Engineering Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight uppercase text-[#241F21] leading-none">
                Success®
              </span>
              <span className="text-[10px] font-mono font-medium text-[#7A716D] uppercase tracking-wider mt-0.5">
                Engineering Enterprises
              </span>
            </div>
          </Link>

          {/* Floema Desktop Pill Menu */}
          <nav className="hidden lg:flex items-center gap-1.5 font-medium text-xs uppercase tracking-wider text-[#241F21]/80">
            <Link
              href="#about"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Company
            </Link>
            <Link
              href="#services"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Capabilities
            </Link>
            <Link
              href="#gallery"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Facility Tour
            </Link>
            <Link
              href="#quality"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Quality & ISO
            </Link>
            <Link
              href="#clients"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Clients
            </Link>
            <Link
              href="#contact"
              className="px-3.5 py-2 rounded-full hover:text-[#241F21] hover:bg-[#241F21]/5 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            {/* Search Capsule Trigger */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#241F21]/10 hover:border-[#241F21]/30 text-xs text-[#7A716D] hover:text-[#241F21] transition-all bg-[#F2EFEA]/50"
              title="Search Capabilities"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Search</span>
            </button>

            {/* Floema Signature Magnetic CTA Button */}
            <button
              onClick={onOpenQuote}
              data-cursor="QUOTE"
              className="floema-btn floema-btn-dark text-xs py-2.5 px-4 sm:px-5 group flex items-center gap-2 shadow-md"
            >
              <span>Get a Quote</span>
              <span className="w-5 h-5 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 rounded-full hover:bg-[#241F21]/5 text-[#241F21] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
