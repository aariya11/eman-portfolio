"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { soundEngine } from "@/lib/audio";

interface StevenHUDProps {
  currentView: "work" | "info";
  onToggleView: () => void;
}

export function StevenHUD({ currentView, onToggleView }: StevenHUDProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
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

  // Hero fade: fades quickly between scroll 0 and 180px
  const heroOpacity = Math.max(0, 1 - scrollY / 160);
  const heroScale = Math.max(0.95, 1 - scrollY / 1200);

  // Top-left logo fades in after 120px scroll
  const topLeftOpacity = Math.min(1, Math.max(0, (scrollY - 110) / 80));

  return (
    <>
      {/* 1. Fixed Top-Left: "Eman Trades" Back to Top link */}
      <motion.div
        style={{ opacity: currentView === "info" ? 1 : topLeftOpacity }}
        className="fixed top-6 left-6 md:left-10 z-50 pointer-events-auto"
      >
        <button
          onClick={scrollToTop}
          className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity focus-visible:ring-1 focus-visible:ring-white outline-none"
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
          className="style-meta-tag flex items-center gap-2 px-3 py-1.5 bg-white !text-black font-bold tracking-[0.2em] text-[8.5px] sm:text-[9px] hover:bg-neutral-200 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none"
          data-cursor="pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" aria-hidden="true" />
          <span>GET MENTORSHIP</span>
        </a>

        <button
          onClick={onToggleView}
          className="style-meta-tag text-white hover:text-white/60 transition-colors py-1.5 px-2 tracking-[0.24em] text-[9.5px] sm:text-[10px] focus-visible:ring-1 focus-visible:ring-white outline-none"
          data-cursor="pointer"
        >
          {currentView === "work" ? "Info" : "Work"}
        </button>
      </div>

      {/* 4. Fixed Bottom-Right: Micro Specialization Details */}
      <div className="fixed bottom-7 right-6 md:right-10 z-40 max-w-[280px] text-right pointer-events-none hidden sm:block">
        <p className="style-copy-body text-white/45 text-[11px] leading-[17px]">
          Specialization: Foreign Exchange, Precious Metals, Equity Benchmarks, Macro Yield Curves &amp; Order Flow.
        </p>
      </div>

      {/* 5. Fixed Bottom-Left: Minimal Audio Toggle (Market open text removed) */}
      <div className="fixed bottom-7 left-6 md:left-10 z-40 flex items-center gap-3">
        <button
          onClick={handleAudioToggle}
          className="w-7 h-7 rounded-full border border-white/20 hover:border-white bg-black/70 backdrop-blur-sm flex items-center justify-center transition-all group focus-visible:ring-2 focus-visible:ring-white outline-none"
          title={isAudioPlaying ? "Mute atmospheric audio" : "Play atmospheric audio"}
          aria-label={isAudioPlaying ? "Mute audio" : "Play audio"}
          data-cursor="pointer"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              isAudioPlaying ? "bg-white animate-ping" : "bg-white/50 group-hover:bg-white"
            }`}
          />
        </button>
      </div>
    </>
  );
}
