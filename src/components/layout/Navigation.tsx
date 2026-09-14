"use client";

import React, { useState, useEffect } from "react";
import { getMarketStatus, MarketStatus } from "@/lib/marketHours";
import { SoundToggle } from "@/components/common/SoundToggle";
import { MobileMenu } from "./MobileMenu";
import { Menu, X, Activity } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [marketStatus, setMarketStatus] = useState<MarketStatus | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial status calculation
    setMarketStatus(getMarketStatus());

    // Update market status every 30 seconds
    const interval = setInterval(() => {
      setMarketStatus(getMarketStatus());
    }, 30000);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "WORK", href: "#case-studies" },
    { label: "ABOUT", href: "#about" },
    { label: "PHILOSOPHY", href: "#philosophy" },
    { label: "MARKETS", href: "#markets" },
    { label: "PERFORMANCE", href: "#performance" },
    { label: "JOURNAL", href: "#journal" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian-950/85 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl"
            : "bg-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Moniker */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Eman Trades Home"
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-medium text-ivory group-hover:text-champagne transition-colors duration-300">
              EMAN TRADES
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-ivory-muted uppercase">
              Financial Strategy
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[11px] tracking-[0.25em] text-ivory-muted hover:text-champagne transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: Market Status + Sound Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Market Hours Status Pill */}
            {marketStatus && (
              <div
                className="group relative hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-obsidian-900/60 backdrop-blur-md cursor-help"
                title={`${marketStatus.activeSession} (${marketStatus.utcTime})`}
              >
                <span className="relative flex h-2 w-2">
                  {marketStatus.isOpen && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      marketStatus.isOpen ? "bg-emerald-400" : "bg-amber-500/80"
                    }`}
                  />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-ivory/90 uppercase font-medium">
                  {marketStatus.statusText}
                </span>

                {/* Micro tooltip detailing current session */}
                <div className="pointer-events-none absolute top-full right-0 mt-2 w-64 p-3 bg-obsidian-900/95 border border-white/15 rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-left z-50">
                  <div className="flex items-center gap-1.5 text-champagne text-[10px] font-mono tracking-wider mb-1">
                    <Activity className="w-3 h-3" />
                    <span>SESSION TELEMETRY</span>
                  </div>
                  <p className="font-mono text-[11px] text-ivory leading-tight mb-1">
                    {marketStatus.activeSession}
                  </p>
                  <p className="font-mono text-[9px] text-ivory-muted">
                    Time: {marketStatus.utcTime}
                  </p>
                </div>
              </div>
            )}

            {/* Ambient Soundscape Toggle */}
            <SoundToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-ivory hover:text-champagne transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
        marketStatus={marketStatus}
      />
    </>
  );
}
