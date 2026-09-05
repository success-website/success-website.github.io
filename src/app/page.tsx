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
import SmoothScroll from "@/components/SmoothScroll";
import KineticScrollText from "@/components/KineticScrollText";
import SideScrollNav from "@/components/SideScrollNav";

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
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#020A19] text-[#D5E0FF] selection:bg-[#7099FF] selection:text-[#020A19] relative">
        {/* Hubtown Luminescent Follower Cursor (Mouse devices) */}
        <FloemaCursor />

        {/* Hubtown Fixed Side Scroll Tracker Rail (Single Page Navigation) */}
        <SideScrollNav />

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
          {/* 1. Hero: Parallax Monolith Cards & Telemetry Strip */}
          <BannerPreloader
            onOpenQuote={() => {
              setQuotePreselectedService("");
              setIsQuoteOpen(true);
            }}
          />

          {/* 2. Company Profile with Parallax Facility Media */}
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

          {/* 4. Plant Audit & Inspection Banner with Parallax Plates */}
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

          {/* 11. Kinetic Scroll Convergence: SUCCESS + ENGINEERING Joining Together */}
          <KineticScrollText
            onOpenQuote={() => {
              setQuotePreselectedService("");
              setIsQuoteOpen(true);
            }}
          />
        </main>

        {/* Hubtown Deep Obsidian Footer with Watermark Typography */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
