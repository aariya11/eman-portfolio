"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tradingQuotes, TradingQuote } from "@/data/quotes";
import { ChevronLeft, ChevronRight, Quote, LayoutGrid, SlidersHorizontal } from "lucide-react";

export function QuotesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const activeQuote: TradingQuote = tradingQuotes[currentIndex];

  // Optional auto-rotation (pauses when user interacts or switches to grid)
  useEffect(() => {
    if (!isAutoPlay || viewMode !== "carousel") return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tradingQuotes.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isAutoPlay, viewMode]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? tradingQuotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % tradingQuotes.length);
  };

  const handleSelectQuote = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    if (viewMode === "grid") {
      setViewMode("carousel");
    }
  };

  return (
    <section
      aria-label="Trading Psychology & Motivating Quotes"
      className="w-full max-w-[1080px] mx-auto py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-10 border-hairline-t relative"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Operational Axioms &amp; Mindset
            </span>
          </div>
          <h2 className="style-project-title text-white break-words">
            The Psychology of Asymmetric Speculation &amp; Capital Defense
          </h2>
          <p className="style-copy-body text-white/60 text-xs sm:text-sm leading-relaxed pt-1">
            Elite trading is not about predicting price; it is about risk mitigation, ruthless emotional detachment, and mathematical expectancy. Curated tenets from market legends and desk operations.
          </p>
        </div>

        {/* View Mode Toggle: Interactive Carousel vs Full Ledger Grid */}
        <div className="flex items-center gap-2 border border-white/20 p-1 bg-black self-start md:self-end">
          <button
            onClick={() => setViewMode("carousel")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[9px] style-meta-tag tracking-[0.16em] uppercase transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white ${
              viewMode === "carousel" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
            }`}
            aria-label="View as interactive card"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Interactive</span>
          </button>
          <button
            onClick={() => {
              setViewMode("grid");
              setIsAutoPlay(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[9px] style-meta-tag tracking-[0.16em] uppercase transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white ${
              viewMode === "grid" ? "bg-white text-black font-bold" : "text-white/60 hover:text-white"
            }`}
            aria-label="View all quotes in grid"
          >
            <LayoutGrid className="w-3 h-3" />
            <span>Full Ledger</span>
          </button>
        </div>
      </div>

      {/* Mode A: Interactive Carousel Showcase */}
      {viewMode === "carousel" ? (
        <div
          className="border border-white/20 bg-white/[0.02] p-6 sm:p-10 md:p-14 relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlay(false)}
        >
          {/* Subtle background quote mark ornament */}
          <div
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/[0.04] pointer-events-none select-none"
            aria-hidden="true"
          >
            <Quote className="w-24 h-24 sm:w-36 sm:h-36 stroke-1" />
          </div>

          <div className="relative z-10 space-y-8">
            {/* Top Bar: Tag & Index Counter */}
            <div className="flex items-center justify-between border-hairline-b pb-4 text-white/50 text-[9px] style-meta-tag tracking-[0.2em]">
              <span className="text-white/80 font-mono">
                [ {activeQuote.tag} ]
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-white/70">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(tradingQuotes.length).padStart(2, "0")}
                </span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="hidden sm:inline text-white/40">{activeQuote.category}</span>
              </div>
            </div>

            {/* Main Quote Transition Area */}
            <div className="min-h-[160px] sm:min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <blockquote className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-white font-normal leading-relaxed break-words">
                    &ldquo;{activeQuote.quote}&rdquo;
                  </blockquote>

                  {/* Author Credentials */}
                  <div className="pt-2">
                    <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {activeQuote.author}
                    </p>
                    <p className="text-xs text-white/50 tracking-wider">
                      {activeQuote.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Actionable Takeaway Banner */}
            <div className="pt-6 border-hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <span className="style-meta-tag text-[8px] text-white/40 block tracking-[0.22em] uppercase">
                  Operator Takeaway
                </span>
                <p className="style-copy-body text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                  {activeQuote.takeaway}
                </p>
              </div>

              {/* Navigation Arrows & Jump Dots */}
              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {tradingQuotes.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => handleSelectQuote(idx)}
                      className={`h-1.5 transition-all outline-none ${
                        idx === currentIndex
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Jump to quote ${idx + 1}: ${q.author}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-9 h-9 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mode B: Full Ledger Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradingQuotes.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleSelectQuote(idx)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelectQuote(idx);
                }
              }}
              className="border border-white/15 p-6 sm:p-8 bg-white/[0.015] hover:bg-white/[0.04] hover:border-white/40 transition-all flex flex-col justify-between space-y-6 group cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[8.5px] style-meta-tag text-white/40">
                  <span className="font-mono text-white/70">
                    [ 0{idx + 1} • {item.tag} ]
                  </span>
                  <span>{item.category}</span>
                </div>

                <blockquote className="font-editorial italic text-lg sm:text-xl text-white/90 leading-relaxed break-words group-hover:text-white transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="space-y-3 pt-4 border-hairline-t">
                <div>
                  <p className="text-sm font-bold text-white">{item.author}</p>
                  <p className="text-[11px] text-white/50">{item.role}</p>
                </div>
                <div className="bg-black/60 p-2.5 border border-white/10">
                  <span className="style-meta-tag text-[7.5px] text-white/40 block tracking-[0.2em] uppercase">
                    Takeaway
                  </span>
                  <p className="style-copy-body text-[11.5px] text-white/70 leading-normal">
                    {item.takeaway}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
