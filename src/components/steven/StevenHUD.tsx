"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getMarketStatus, MarketStatus } from "@/lib/marketHours";
import { soundEngine } from "@/lib/audio";

interface StevenHUDProps {
  currentView: "work" | "info";
  onToggleView: () => void;
}

export function StevenHUD({ currentView, onToggleView }: StevenHUDProps) {
  const [scrollY, setScrollY] = useState(0);
  const [marketStatus, setMarketStatus] = useState<MarketStatus | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    setMarketStatus(getMarketStatus());
    const interval = setInterval(() => setMarketStatus(getMarketStatus()), 30000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAudioToggle = async () => {
    if (isAudioPlaying) {
      soundEngine.stop();
      setIsAudioPlaying(false);
    } else {
      const started = await soundEngine.start();
      if (started) setIsAudioPlaying(true);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined" && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Hero fade: fades between scroll 0 and 260px
  const heroOpacity = Math.max(0, 1 - scrollY / 220);
  const heroScale = Math.max(0.94, 1 - scrollY / 1400);

  // Top-left logo fades in after 160px scroll
  const topLeftOpacity = Math.min(1, Math.max(0, (scrollY - 150) / 100));

  return (
    <>
      {/* 1. Fixed Top-Left: "Eman Trades" Back to Top link */}
      <motion.div
        style={{ opacity: currentView === "info" ? 1 : topLeftOpacity }}
        className="fixed top-6 left-6 md:left-10 z-50 pointer-events-auto"
      >
        <button
          onClick={scrollToTop}
          className="style-press-link text-sm tracking-wide text-white hover:text-white/60 transition-opacity"
        >
          Eman Trades
        </button>
      </motion.div>

      {/* 2. Fixed Top-Right: "Get Mentorship" + "Info" / "Work" Button */}
      <div className="fixed top-5 md:top-6 right-4 md:right-10 z-50 flex items-center gap-3 md:gap-4">
        <a
          href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20interested%20in%20your%201-on-1%20Trading%20Mentorship%20program."
          target="_blank"
          rel="noopener noreferrer"
          className="style-meta-tag flex items-center gap-2 px-2.5 sm:px-3 py-1.5 border border-white/25 hover:border-white bg-black/70 backdrop-blur-md text-white transition-all text-[8px] sm:text-[8.5px] tracking-[0.22em] group"
          data-cursor="pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform animate-pulse" />
          <span>GET MENTORSHIP</span>
        </a>

        <button
          onClick={onToggleView}
          className="style-meta-tag text-white hover:text-white/60 transition-colors py-1.5 px-2 tracking-[0.24em] text-[9.5px] sm:text-[10px]"
          data-cursor="pointer"
        >
          {currentView === "work" ? "Info" : "Work"}
        </button>
      </div>

      {/* 3. Fixed Screen Center: Hero Title (Fades smoothly on scroll) */}
      {currentView === "work" && (
        <div
          className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center z-30 transition-opacity duration-300"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
          }}
        >
          <h1 className="style-hero-name text-center text-white select-none">
            Eman Trades
          </h1>
          <p className="style-meta-tag text-center text-white/55 pt-3 tracking-[0.28em]">
            Market Analyst &amp; Financial Strategist
          </p>
        </div>
      )}

      {/* 4. Fixed Bottom-Right: Micro Specialization Details */}
      <div className="fixed bottom-7 right-6 md:right-10 z-40 max-w-[240px] text-right pointer-events-none hidden sm:block">
        <p className="style-copy-body text-white/35 text-[8px] leading-[13px]">
          Specialization includes Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Curves and Algorithmic Liquidity.
        </p>
      </div>

      {/* 5. Fixed Bottom-Left: Minimal Status / Audio Toggle */}
      <div className="fixed bottom-7 left-6 md:left-10 z-40 flex items-center gap-3">
        <button
          onClick={handleAudioToggle}
          className="w-6 h-6 rounded-full border border-white/15 hover:border-white/50 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all group"
          title={isAudioPlaying ? "Atmospheric audio: ON (Click to mute)" : "Atmospheric audio: OFF (Click to listen)"}
          data-cursor="pointer"
        >
          <span
            className={`w-1 h-1 rounded-full transition-all ${
              isAudioPlaying ? "bg-white animate-ping" : "bg-white/40 group-hover:bg-white"
            }`}
          />
        </button>

        {marketStatus && (
          <div className="hidden md:flex items-center gap-2">
            <span
              className={`w-1 h-1 rounded-full ${
                marketStatus.isOpen ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            <span className="style-meta-tag text-[7px] text-white/35 tracking-[0.2em]">
              {marketStatus.statusText} • {marketStatus.utcTime}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
