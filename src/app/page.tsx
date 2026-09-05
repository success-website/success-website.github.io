"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileOverlay from "@/components/MobileOverlay";
import SearchModal from "@/components/SearchModal";
import QuoteModal from "@/components/QuoteModal";
import BannerPreloader from "@/components/BannerPreloader";
import AboutSection from "@/components/AboutSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedBannerArrow from "@/components/FeaturedBannerArrow";
import MediaGallerySlider from "@/components/MediaGallerySlider";
import StackingCards from "@/components/StackingCards";
import BrandingMarquee from "@/components/BrandingMarquee";
import QualityAssurance from "@/components/QualityAssurance";
import ClientEcosystem from "@/components/ClientEcosystem";
import NewsCaseStudies from "@/components/NewsCaseStudies";
import Footer from "@/components/Footer";
import FloemaCursor from "@/components/FloemaCursor";
import FloemaLoader from "@/components/FloemaLoader";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState("");

  const handleOpenQuoteWithService = (serviceName: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleSelectServiceFromSearch = (serviceId: string) => {
    const el = document.getElementById(`service-${serviceId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020A19] text-[#D5E0FF] selection:bg-[#7099FF] selection:text-[#020A19] relative">
      {/* Floema Signature Top Progress Line & Curtain Reveal */}
      <FloemaLoader />

      {/* Floema Custom Magnetic Follower Cursor (Mouse devices) */}
      <FloemaCursor />

      {/* Floating Capsule Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => {
          setQuotePreselectedService("");
          setIsQuoteOpen(true);
        }}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Mobile Slide-in Menu */}
      <MobileOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => {
          setQuotePreselectedService("");
          setIsQuoteOpen(true);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={handleSelectServiceFromSearch}
      />

      {/* Request a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={quotePreselectedService}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Floema Hero: Staggered Line Reveal, Floating Tilt Cards & KPI Counters */}
        <BannerPreloader
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 2. Company Profile & Strategic Highlights */}
        <AboutSection
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 3. Core Capabilities: 5 Production Bays with Crossfade Previews */}
        <ServicesShowcase
          onOpenQuoteWithService={handleOpenQuoteWithService}
        />

        {/* 4. Plant Audit & Inspection Banner */}
        <FeaturedBannerArrow
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 5. Production Bay Slider & Lightbox Inspection */}
        <MediaGallerySlider />

        {/* 6. Sticky Stacking Cards (Architectural Pillars) */}
        <StackingCards
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 7. Dual-Track Infinite Running Typography Marquee */}
        <BrandingMarquee />

        {/* 8. ISO 9001:2015 & UCAS India Quality Section with Certificate Viewer */}
        <QualityAssurance />

        {/* 9. Trusted Client Ecosystem (Godrej, Johnson Lifts, Schwing, Rane TRW) */}
        <ClientEcosystem />

        {/* 10. Editorial Insights & Industry Bulletins */}
        <NewsCaseStudies />
      </main>

      {/* Floema Deep Stone Footer with Watermark Typography */}
      <Footer />
    </div>
  );
}
