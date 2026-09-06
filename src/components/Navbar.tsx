"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

interface NavbarProps {
  onOpenQuote: () => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({
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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-12 pt-3 sm:pt-4 pointer-events-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
        {/* Hubtown Floating Glass Bar */}
        <div className={`w-full flex items-center justify-between px-3.5 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "bg-[#020A19]/85 backdrop-blur-2xl border-[#D5E0FF]/20 shadow-2xl shadow-black/80"
            : "bg-[#020A19]/60 backdrop-blur-xl border-[#D5E0FF]/10 shadow-lg"
        }`}>
          {/* Brand Logo & Editorial Title */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white p-1 border border-[#D5E0FF]/30 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-md shadow-[#D5E0FF]/10 flex-shrink-0">
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
              <span className="text-xs sm:text-base font-bold tracking-tight uppercase text-white font-['Space_Grotesk'] leading-none">
                Success Engineering
              </span>
              <span className="hidden sm:block text-[10px] font-mono text-[#D5E0FF]/70 uppercase tracking-widest mt-0.5">
                Precision Manufacturing // Kakkalur
              </span>
            </div>
          </Link>

          {/* Hubtown Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#D5E0FF]/75">
            <Link
              href="#about"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              Enterprise
            </Link>
            <Link
              href="#services"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              Capabilities
            </Link>
            <Link
              href="#gallery"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              Toolroom Tour
            </Link>
            <Link
              href="#quality"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              ISO 9001:2015
            </Link>
            <Link
              href="#clients"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              Partners
            </Link>
            <Link
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-[#D5E0FF]/10 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hubtown Solid Light Button */}
            <button
              onClick={onOpenQuote}
              data-cursor="RFQ"
              className="hidden sm:inline-flex hubtown-btn-solid text-xs py-2 px-4 sm:px-5 group"
            >
              <span>Request RFQ</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-[#D5E0FF] hover:bg-[#D5E0FF]/10 transition-colors"
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
