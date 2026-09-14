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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Centered Hero fade calculation: fades out between scroll 0 and 320px
  const heroOpacity = Math.max(0, 1 - scrollY / 240);
  const heroScale = Math.max(0.92, 1 - scrollY / 1200);

  // Top-left logo fades in after scrollY > 200px
  const topLeftOpacity = Math.min(1, Math.max(0, (scrollY - 180) / 120));

  return (
    <>
      {/* 1. Fixed Top-Left: "Eman Trades" Back to Top link */}
      <motion.div
        style={{ opacity: currentView === "info" ? 1 : topLeftOpacity }}
        className="fixed top-5 left-6 md:left-9 z-50 pointer-events-auto"
      >
        <button
          onClick={scrollToTop}
          className="font-serif italic text-sm tracking-wide text-white hover:text-white/70 transition-opacity"
        >
          Eman Trades
        </button>
      </motion.div>

      {/* 2. Fixed Top-Right: "Info" / "Work" Button */}
      <div className="fixed top-4 right-6 md:right-9 z-50">
        <button
          onClick={onToggleView}
          className="style-meta-uppercase text-white hover:text-white/70 transition-colors py-2 px-3 tracking-widest text-[11px]"
          data-cursor="pointer"
        >
          {currentView === "work" ? "Info" : "Work"}
        </button>
      </div>

      {/* 3. Fixed Screen Center: Hero Title (Only in Work view, fades on scroll) */}
      {currentView === "work" && (
        <div
          className="fixed inset-0 pointer-events-none flex flex-col items-center justify-center z-30 transition-opacity"
          style={{
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
          }}
        >
          <h1 className="style-hero-title text-center text-white tracking-normal select-none">
            Eman Trades
          </h1>
          <p className="style-meta-uppercase text-center text-white/70 pt-2 tracking-[0.25em]">
            Market Analyst &amp; Financial Strategist
          </p>
        </div>
      )}

      {/* 4. Fixed Bottom-Right: Micro Specialization Copy */}
      <div className="fixed bottom-6 right-6 md:right-9 z-40 max-w-[250px] text-right pointer-events-none hidden sm:block">
        <p className="style-copy-8px text-white/45">
          Specialization includes Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Curves and Algorithmic Liquidity.
        </p>
      </div>

      {/* 5. Fixed Bottom-Left: Minimal Status / Audio Toggle Dot */}
      <div className="fixed bottom-6 left-6 md:left-9 z-40 flex items-center gap-3">
        <button
          onClick={handleAudioToggle}
          className="w-7 h-7 rounded-full border border-white/20 hover:border-white/60 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all group"
          title={isAudioPlaying ? "Atmospheric sound: ON (Click to mute)" : "Atmospheric sound: OFF (Click to listen)"}
          data-cursor="pointer"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              isAudioPlaying ? "bg-white animate-ping" : "bg-white/40 group-hover:bg-white"
            }`}
          />
        </button>

        {marketStatus && (
          <div className="hidden md:flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                marketStatus.isOpen ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            <span className="style-meta-uppercase text-[7.5px] text-white/40">
              {marketStatus.statusText} • {marketStatus.utcTime}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
