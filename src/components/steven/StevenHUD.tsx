"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

interface StevenHUDProps {
  currentView: "work" | "info";
  onToggleView: () => void;
}

export function StevenHUD({ currentView, onToggleView }: StevenHUDProps) {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Top-left logo fades in after 110px scroll
  const topLeftOpacity = Math.min(1, Math.max(0, (scrollY - 110) / 80));

  return (
    <>
      {/* 1. Fixed Top-Left: "Eman Trades" Back to Top link */}
      <motion.div
        style={{ opacity: currentView === "info" ? 1 : topLeftOpacity }}
        className="fixed top-5 md:top-6 left-4 md:left-10 z-50 pointer-events-auto"
      >
        <button
          onClick={scrollToTop}
          className="style-meta-tag text-[10px] sm:text-xs tracking-wider text-white hover:text-white/60 transition-opacity focus-visible:ring-1 focus-visible:ring-white outline-none"
        >
          Eman Trades
        </button>
      </motion.div>

      {/* 2. Fixed Top-Right: Semantic Nav + "Get Mentorship" + "Info" / "Work" Button */}
      <div className="fixed top-5 md:top-6 right-3 sm:right-4 md:right-10 z-50 flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Desktop Semantic Directory Links for Search Crawlers & Explorers */}
        <nav aria-label="Desktop primary navigation" className="hidden lg:flex items-center gap-4 style-meta-tag text-[9px] tracking-[0.16em] text-white/50">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
          <Link href="/trades" className="hover:text-white transition-colors">Trades</Link>
          <Link href="/performance" className="hover:text-white transition-colors">Performance</Link>
          <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20interested%20in%20your%201-on-1%20Trading%20Mentorship%20program."
          target="_blank"
          rel="noopener noreferrer"
          className="style-meta-tag flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-white !text-black font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[8px] sm:text-[9px] hover:bg-neutral-200 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none"
          data-cursor="pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
          <span>GET MENTORSHIP</span>
        </a>

        <button
          onClick={onToggleView}
          className="style-meta-tag text-white hover:text-white/60 transition-colors py-1.5 px-2 tracking-[0.24em] text-[9px] sm:text-[10px] focus-visible:ring-1 focus-visible:ring-white outline-none"
          data-cursor="pointer"
        >
          {currentView === "work" ? "Info" : "Work"}
        </button>
      </div>
      </div>

      {/* 4. Fixed Bottom-Right: Micro Specialization Details (Strictly Work view at top of desktop page only) */}
      {currentView === "work" && scrollY < 100 && (
        <div className="fixed bottom-7 right-6 md:right-10 z-30 max-w-[260px] text-right pointer-events-none hidden xl:block transition-opacity duration-300">
          <p className="style-copy-body text-white/40 text-[10.5px] leading-[16px]">
            Specialization: Foreign Exchange, Precious Metals, Equity Benchmarks, Macro Yield Curves &amp; Order Flow.
          </p>
        </div>
      )}

      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 via-white to-white/80 origin-left z-[70] pointer-events-none"
      />
    </>
  );
}
