import React from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { AboutEman } from "@/components/sections/AboutEman";
import { Philosophy } from "@/components/sections/Philosophy";
import { MarketWatch } from "@/components/sections/MarketWatch";
import { Performance } from "@/components/sections/Performance";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CinematicBanner } from "@/components/sections/CinematicBanner";
import { Journal } from "@/components/sections/Journal";
import { SocialPresence } from "@/components/sections/SocialPresence";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian text-ivory selection:bg-champagne selection:text-obsidian">
      {/* Fixed Luxury Navigation */}
      <Navigation />

      <main id="main-content">
        {/* 1. Hero Experience */}
        <Hero />

        {/* 2. Editorial Transition */}
        <EditorialIntro />

        {/* 3. About Eman */}
        <AboutEman />

        {/* 4. Trading Philosophy */}
        <Philosophy />

        {/* 5. Market Specialization */}
        <MarketWatch />

        {/* 6. Performance Section */}
        <Performance />

        {/* 7. Selected Trade Case Studies */}
        <CaseStudies />

        {/* 8. Cinematic Market Parallax Visual */}
        <CinematicBanner />

        {/* 9. Trading Journal */}
        <Journal />

        {/* 10. Social Presence */}
        <SocialPresence />

        {/* 11. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* 12. Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}
