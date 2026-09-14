"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marketWatchData, MarketCategory } from "@/data/markets";
import { ArrowUpRight, BarChart3, Clock, Compass } from "lucide-react";

export function MarketWatch() {
  const [selectedId, setSelectedId] = useState<string>(marketWatchData.categories[0].id);

  const selectedCategory =
    marketWatchData.categories.find((c) => c.id === selectedId) || marketWatchData.categories[0];

  return (
    <section
      id="markets"
      className="relative py-32 px-6 md:px-12 bg-obsidian border-t border-white/5"
      aria-label="Market Specialization"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
              04 // COVERAGE & SCOPE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
              {marketWatchData.sectionTitle}
            </h2>
          </div>
          <p className="font-mono text-xs text-ivory-dim tracking-widest uppercase max-w-xs">
            {marketWatchData.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Layout: Categories on Left, Deep Dive Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Categories Selector List */}
          <div className="lg:col-span-6 divide-y divide-white/10 border-y border-white/10">
            {marketWatchData.categories.map((cat, idx) => {
              const isSelected = cat.id === selectedId;

              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  onMouseEnter={() => setSelectedId(cat.id)}
                  className={`py-8 px-6 cursor-pointer transition-all duration-300 group flex items-center justify-between ${
                    isSelected
                      ? "bg-white/[0.04] border-l-2 border-champagne"
                      : "hover:bg-white/[0.015]"
                  }`}
                  data-cursor="explore"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-ivory-dim">0{idx + 1}.</span>
                      <span className="font-mono text-[10px] tracking-widest text-champagne uppercase px-2 py-0.5 bg-champagne/10 rounded-sm">
                        {cat.tag}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-2xl sm:text-3xl transition-colors ${
                        isSelected ? "text-champagne font-medium" : "text-ivory group-hover:text-champagne"
                      }`}
                    >
                      {cat.name}
                    </h3>

                    <p className="font-mono text-xs text-ivory-muted tracking-wider">
                      {cat.tickerSnippet}
                    </p>
                  </div>

                  <div
                    className={`p-3 rounded-full border transition-all ${
                      isSelected
                        ? "border-champagne bg-champagne text-obsidian"
                        : "border-white/10 group-hover:border-champagne/50 text-ivory-muted group-hover:text-champagne"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Category Deep Dive Showcase */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-10 bg-obsidian-900 border border-white/10 rounded-sm space-y-6 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Ambient Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

                {/* Card Header */}
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-champagne tracking-widest uppercase mb-1">
                    <span>SPECIFICATION OVERVIEW</span>
                    <span>{selectedCategory.tag}</span>
                  </div>
                  <h4 className="font-serif text-3xl text-ivory">
                    {selectedCategory.name}
                  </h4>
                </div>

                {/* Session Hours Focus */}
                <div className="flex items-center gap-3 p-3 bg-obsidian-950 border border-white/5 rounded-sm text-xs font-mono text-ivory-muted">
                  <Clock className="w-4 h-4 text-champagne shrink-0" />
                  <span>{selectedCategory.sessionFocus}</span>
                </div>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-ivory/90 leading-relaxed font-light">
                  {selectedCategory.description}
                </p>

                {/* Analytical Approach */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-champagne tracking-widest uppercase">
                    <Compass className="w-3.5 h-3.5" />
                    <span>METHODOLOGY & EXECUTION</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ivory-muted leading-relaxed">
                    {selectedCategory.analyticalApproach}
                  </p>
                </div>

                {/* Key Drivers */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-[10px] text-ivory-dim tracking-widest uppercase block">
                    PRIMARY LIQUIDITY CATALYSTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.keyDrivers.map((driver, dIdx) => (
                      <span
                        key={dIdx}
                        className="font-mono text-[11px] text-ivory px-3 py-1 bg-obsidian-950 border border-white/10 rounded-sm"
                      >
                        {driver}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Macro Bias Note */}
                <div className="p-4 bg-obsidian-950/80 border-l-2 border-champagne text-xs font-mono text-ivory/80 flex items-start gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-champagne uppercase">Current Regime:</strong>{" "}
                    {selectedCategory.currentBiasNote}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
