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
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-[#D2251F] selection:text-white">
      {/* Top Navbar */}
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

      {/* Fullsite Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={handleSelectServiceFromSearch}
      />

      {/* Interactive Request a Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={quotePreselectedService}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Kortrijk Xpo Signature Curtain Arrow Banner Preloader & Hero */}
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

        {/* 3. Core Capabilities & 5 Production Bays */}
        <ServicesShowcase
          onOpenQuoteWithService={handleOpenQuoteWithService}
        />

        {/* 4. Small Arrow Cutout Banner (Kortrijk Xpo c-banner-small-default) */}
        <FeaturedBannerArrow
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 5. Production Bay Slider & Lightbox (Kortrijk Xpo c-media-gallery + wiggle) */}
        <MediaGallerySlider />

        {/* 6. Sticky Stacking Cards (Kortrijk Xpo c-stacking-cards) */}
        <StackingCards
          onOpenQuote={() => {
            setQuotePreselectedService("");
            setIsQuoteOpen(true);
          }}
        />

        {/* 7. Infinite Running Typography Ticker (Kortrijk Xpo c-branding-element) */}
        <BrandingMarquee />

        {/* 8. ISO 9001:2015 & UCAS India Quality Section with Certificate Viewer */}
        <QualityAssurance />

        {/* 9. Trusted Client Ecosystem (Godrej, Johnson, Schwing, etc.) */}
        <ClientEcosystem />

        {/* 10. News & Insights (Kortrijk Xpo c-card-landscape) */}
        <NewsCaseStudies />
      </main>

      {/* Modern Kortrijk Xpo-inspired Footer */}
      <Footer />
    </div>
  );
}
