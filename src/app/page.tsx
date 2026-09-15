"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StevenHUD } from "@/components/steven/StevenHUD";
import { ProjectShowcase } from "@/components/steven/ProjectShowcase";
import { QuotesSection } from "@/components/steven/QuotesSection";
import { ArchiveHoverList } from "@/components/steven/ArchiveHoverList";
import { InfoView } from "@/components/steven/InfoView";
import { ImageModal } from "@/components/steven/ImageModal";
import { stevenProjects, stevenArchiveEntries } from "@/data/stevenProjects";
import StatsCounter from "@/components/ui/StatsCounter";
import { LiquidMetalButton } from "@/components/ui/LiquidMetal";

export default function Home() {
  const [currentView, setCurrentView] = useState<"work" | "info">("work");
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedTitle, setExpandedTitle] = useState<string>("");

  const handleToggleView = () => {
    setCurrentView((prev) => (prev === "work" ? "info" : "work"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExpandSlide = (image: string, title: string) => {
    setExpandedImage(image);
    setExpandedTitle(title);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Steven Mengin Fixed HUD (Header, Back to Top, Info/Work Toggle, Scroll Progress) */}
      <StevenHUD
        currentView={currentView}
        onToggleView={handleToggleView}
      />

      {/* Main View Transition */}
      {currentView === "work" ? (
        <main className="relative z-20 pt-20">
          {/* Hero Section with Staggered Motion and Mobile Scroll Prompt */}
          <section
            aria-label="Hero"
            className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-20 relative max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="style-meta-tag text-white/50 text-[10px] tracking-[0.3em] block"
              >
                Independent Trading Desk &amp; Strategy
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="style-hero-name text-white"
              >
                Eman Trades
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="style-meta-tag text-white/70 tracking-[0.25em] text-xs sm:text-sm"
              >
                Market Analyst &amp; Financial Strategist
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="style-copy-body text-white/60 max-w-xl mx-auto pt-2 text-sm sm:text-base leading-relaxed"
              >
                Institutional Order Flow, Liquidity Architecture &amp; Probabilistic Risk Engineering across Global Futures and Foreign Exchange.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-16 sm:pt-20 flex flex-col items-center"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="style-meta-tag text-white/40 text-[9px] tracking-[0.25em] block"
              >
                ↓ Scroll to examine documented executions
              </motion.span>
            </motion.div>
          </section>

          {/* Project Showcases with Dual-Column Layout and Mobile Swipe Gestures */}
          <section aria-label="Selected Projects">
            {stevenProjects.map((project) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                onExpandSlide={handleExpandSlide}
              />
            ))}
          </section>

          {/* Inspiring Trading Psychology & Motivating Quotes */}
          <QuotesSection />

          {/* Numbered Historical Ledger & Selected Case Studies with Floating Hover Previews */}
          <section aria-label="Archive & Selected Case Studies">
            <ArchiveHoverList
              entries={stevenArchiveEntries}
              onSelectEntry={(entry) => handleExpandSlide(entry.image, entry.title)}
            />
          </section>

          {/* Institutional Audited Ledger Summary with Animated StatsCounter */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Audited Performance Summary"
            className="w-full max-w-[1080px] mx-auto py-16 sm:py-20 px-4 sm:px-8 md:px-10 border-hairline-t"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
              <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.22em] uppercase">
                Audited Performance Summary • 2023–2025 Ledger
              </span>
              <Link
                href="/performance"
                className="style-meta-tag text-[9px] text-white/40 hover:text-white transition-colors tracking-wider underline decoration-white/30 underline-offset-4"
              >
                Inspect Complete Statistical Ledger →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="space-y-1 border border-white/10 p-4 bg-white/[0.02]">
                <span className="style-meta-tag text-[7.5px] block text-white/35 uppercase">WIN RATE</span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  <StatsCounter value={64.2} suffix="%" decimals={1} />
                </p>
                <p className="style-copy-body text-[8px] text-white/40">Verified Execution Log</p>
              </div>
              <div className="space-y-1 border border-white/10 p-4 bg-white/[0.02]">
                <span className="style-meta-tag text-[7.5px] block text-white/35 uppercase">PROFIT FACTOR</span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  <StatsCounter value={2.41} decimals={2} />
                </p>
                <p className="style-copy-body text-[8px] text-white/40">Multi-Broker Clearing</p>
              </div>
              <div className="space-y-1 border border-white/10 p-4 bg-white/[0.02]">
                <span className="style-meta-tag text-[7.5px] block text-white/35 uppercase">AVERAGE R:R</span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  <StatsCounter value={2.85} prefix="1:" decimals={2} />
                </p>
                <p className="style-copy-body text-[8px] text-white/40">Asymmetric Payoff Horizon</p>
              </div>
              <div className="space-y-1 border border-white/10 p-4 bg-white/[0.02]">
                <span className="style-meta-tag text-[7.5px] block text-white/35 uppercase">MAX DRAWDOWN</span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  <StatsCounter value={4.8} suffix="%" decimals={1} />
                </p>
                <p className="style-copy-body text-[8px] text-white/40">Fixed 1.0% Allocation</p>
              </div>
              <div className="space-y-1 border border-white/10 p-4 bg-white/[0.02] col-span-2 sm:col-span-1">
                <span className="style-meta-tag text-[7.5px] block text-white/35 uppercase">TRADES LOGGED</span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  <StatsCounter value={648} suffix="+" decimals={0} />
                </p>
                <p className="style-copy-body text-[8px] text-white/40">Audited Historical Ledger</p>
              </div>
            </div>
          </motion.section>

          {/* Private Mentorship CTA Section with Scroll Reveal */}
          <motion.section
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            aria-label="1-on-1 Mentorship"
            className="w-full max-w-[1080px] mx-auto py-16 sm:py-24 px-4 sm:px-8 md:px-10 border-hairline-t"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.22em]">
                  Private Mentorship &amp; Advisory
                </span>
                <h2 className="style-project-title text-white break-words">
                  Master institutional order flow &amp; risk engineering with 1-on-1 private guidance.
                </h2>
                <p className="style-copy-body max-w-xl text-white/70 text-sm leading-relaxed">
                  Direct access to live trade preparation, session playbooks, risk mitigation protocols, and psychological discipline frameworks. Limited to committed operators. Direct desk WhatsApp: +92 315 6828906.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right pt-2 lg:pt-0">
                <a
                  href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20interested%20in%20your%201-on-1%20Trading%20Mentorship%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  aria-label="Get Mentorship via WhatsApp at +92 315 6828906"
                  data-cursor="pointer"
                >
                  <LiquidMetalButton
                    size="lg"
                    icon={<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse block" />}
                  >
                    GET MENTORSHIP →
                  </LiquidMetalButton>
                </a>
              </div>
            </div>
          </motion.section>

          {/* Fully Compliant Legal & Business Details Footer with Scroll Entrance */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1080px] mx-auto py-12 sm:py-16 px-4 sm:px-8 md:px-10 border-hairline-t space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-white/60">
              <div className="md:col-span-4 space-y-2">
                <span className="style-meta-tag text-white/80 block text-[9.5px]">
                  Eman Trades • Market Analysis &amp; Strategy
                </span>
                <p className="style-copy-body text-white/50 text-[12px] leading-relaxed">
                  Trading desk operations based in London, UK and Dubai, UAE. Dedicated to institutional auction theory, macro yield mapping, and capital preservation.
                </p>
                <p className="style-copy-body text-white/50 text-[12px]">
                  Direct Inquiries:{" "}
                  <a href="mailto:desk@emantrades.com" className="text-white hover:underline">
                    desk@emantrades.com
                  </a>{" "}
                  • WhatsApp:{" "}
                  <a href="https://wa.me/923156828906" className="text-white hover:underline">
                    +92 315 6828906
                  </a>
                </p>
              </div>

              {/* Primary Desk Directory */}
              <div className="md:col-span-4 space-y-2">
                <span className="style-meta-tag text-white/80 block text-[9.5px]">
                  Institutional Directory
                </span>
                <nav aria-label="Desk navigation" className="grid grid-cols-2 gap-2 text-[11px] style-meta-tag tracking-[0.15em]">
                  <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                    About Desk
                  </Link>
                  <Link href="/markets" className="text-white/60 hover:text-white transition-colors">
                    Markets
                  </Link>
                  <Link href="/trades" className="text-white/60 hover:text-white transition-colors">
                    Executions
                  </Link>
                  <Link href="/performance" className="text-white/60 hover:text-white transition-colors">
                    Performance
                  </Link>
                  <Link href="/journal" className="text-white/60 hover:text-white transition-colors">
                    Research Journal
                  </Link>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                    Contact / Advisory
                  </Link>
                </nav>
              </div>

              {/* Legal & Regulatory Navigation */}
              <div className="md:col-span-4 md:text-right space-y-2">
                <span className="style-meta-tag text-white/80 block text-[9.5px]">
                  Legal &amp; Regulatory Disclosures
                </span>
                <nav aria-label="Legal navigation" className="flex flex-wrap md:justify-end gap-3 text-[11px] style-meta-tag tracking-[0.16em]">
                  <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                  <Link href="/cookies" className="text-white/60 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                  <Link href="/refund" className="text-white/60 hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </nav>
              </div>
            </div>

            {/* Mandatory Regulatory Risk Warning */}
            <div className="pt-6 border-hairline-t">
              <p className="style-copy-body text-white/40 text-[10.5px] leading-[16px]">
                <strong>Statutory Risk Warning:</strong> Trading foreign exchange, equity index futures, and commodities on margin involves substantial risk of capital loss and is not suitable for all investors. High leverage can work against you as well as for you. Before deciding to trade financial markets, carefully consider your investment objectives, level of experience, and risk appetite. Past performance is not indicative of future results. All content provided on this website is for educational and analytical purposes only and does not constitute investment advice, financial planning, or an offer to solicit capital.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 style-meta-tag text-[8.5px] text-white/40">
                <span>© {new Date().getFullYear()} EMAN TRADES. ALL RIGHTS RESERVED.</span>
                <span>DISCIPLINE • SYSTEMATICS • OBJECTIVITY</span>
              </div>
            </div>
          </motion.footer>
        </main>
      ) : (
        <main className="relative z-20">
          <InfoView onBackToWork={() => setCurrentView("work")} />
        </main>
      )}

      {/* Fullscreen Image Lightbox Modal */}
      <ImageModal
        image={expandedImage}
        title={expandedTitle}
        onClose={() => setExpandedImage(null)}
      />
    </div>
  );
}
