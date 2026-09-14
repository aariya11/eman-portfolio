"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudiesData, CaseStudy } from "@/data/caseStudies";
import { ChartModal } from "@/components/ui/ChartModal";
import { ArrowUpRight, Maximize2, Target, ShieldAlert, Crosshair, Sparkles } from "lucide-react";

export function CaseStudies() {
  const [activeTradeIndex, setActiveTradeIndex] = useState(0);
  const [selectedTradeForModal, setSelectedTradeForModal] = useState<CaseStudy | null>(null);

  const activeTrade = caseStudiesData.trades[activeTradeIndex];

  return (
    <>
      <section
        id="case-studies"
        className="relative py-32 px-6 md:px-12 bg-obsidian border-t border-white/5"
        aria-label="Selected Trades Case Studies"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
                06 // ARCHIVE OF REASONED EXECUTION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
                {caseStudiesData.sectionTitle}
              </h2>
            </div>

            {/* Case Study Switcher Tabs */}
            <div className="flex items-center gap-2 border border-white/10 p-1 rounded-sm bg-obsidian-950">
              {caseStudiesData.trades.map((trade, idx) => (
                <button
                  key={trade.id}
                  onClick={() => setActiveTradeIndex(idx)}
                  className={`px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 ${
                    activeTradeIndex === idx
                      ? "bg-champagne text-obsidian font-bold shadow-md"
                      : "text-ivory-muted hover:text-ivory"
                  }`}
                  data-cursor="pointer"
                >
                  {trade.code}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study Presentation Layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrade.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Trade Specifications & Thesis Narrative */}
              <div className="lg:col-span-6 space-y-8 p-8 md:p-10 bg-obsidian-900 border border-white/10 rounded-sm shadow-xl">
                {/* Micro Header */}
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between text-xs font-mono text-champagne tracking-widest uppercase mb-1">
                    <span>{activeTrade.code} // {activeTrade.assetCategory}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] ${
                        activeTrade.direction === "LONG"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      }`}
                    >
                      {activeTrade.direction}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory">
                    {activeTrade.asset}
                  </h3>
                  <p className="font-sans text-sm text-champagne/90 italic mt-1">
                    {activeTrade.marketCondition}
                  </p>
                </div>

                {/* Thesis Text */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block">
                    ANALYTICAL THESIS
                  </span>
                  <p className="font-sans text-sm md:text-base text-ivory/90 leading-relaxed font-light">
                    {activeTrade.thesis}
                  </p>
                </div>

                {/* Technical Execution Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-obsidian-950 border border-white/5 rounded-sm">
                    <span className="font-mono text-[9px] text-ivory-dim tracking-widest uppercase block flex items-center gap-1.5 mb-1">
                      <Crosshair className="w-3 h-3 text-champagne" />
                      <span>ENTRY LEVEL</span>
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-ivory font-medium">
                      {activeTrade.entry}
                    </span>
                  </div>

                  <div className="p-3 bg-obsidian-950 border border-white/5 rounded-sm">
                    <span className="font-mono text-[9px] text-ivory-dim tracking-widest uppercase block flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-3 h-3 text-rose-400" />
                      <span>INVALIDATION STOP</span>
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-rose-400 font-medium">
                      {activeTrade.invalidation}
                    </span>
                  </div>

                  <div className="p-3 bg-obsidian-950 border border-white/5 rounded-sm">
                    <span className="font-mono text-[9px] text-ivory-dim tracking-widest uppercase block flex items-center gap-1.5 mb-1">
                      <Target className="w-3 h-3 text-emerald-400" />
                      <span>TAKE-PROFIT TARGET</span>
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-emerald-400 font-medium">
                      {activeTrade.target}
                    </span>
                  </div>

                  <div className="p-3 bg-obsidian-950 border border-champagne/30 rounded-sm bg-champagne/5">
                    <span className="font-mono text-[9px] text-champagne tracking-widest uppercase block flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3 text-champagne" />
                      <span>RESULT (R-RETURN)</span>
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-champagne font-bold">
                      {activeTrade.result}
                    </span>
                  </div>
                </div>

                {/* Timeframe & Execution Date */}
                <div className="flex items-center justify-between text-xs font-mono text-ivory-dim pt-2 border-t border-white/5">
                  <span>TF: {activeTrade.timeframe}</span>
                  <span>LOGGED: {activeTrade.executionDate}</span>
                </div>
              </div>

              {/* Right Column: Zoomable Annotated Chart Artwork */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  onClick={() => setSelectedTradeForModal(activeTrade)}
                  className="relative group p-6 bg-obsidian-950 border border-white/15 rounded-sm cursor-pointer overflow-hidden shadow-2xl transition-all duration-500 hover:border-champagne/60"
                  data-cursor="explore"
                >
                  {/* Micro Top Bar */}
                  <div className="flex items-center justify-between font-mono text-xs text-ivory-dim mb-4">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
                      <span>ANNOTATED FLOW DIAGRAM</span>
                    </span>
                    <span className="flex items-center gap-1 text-champagne text-[11px] group-hover:underline">
                      <span>EXPAND VIEW</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Chart Graphic Preview */}
                  <div className="w-full h-72 md:h-80 relative flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                    <svg
                      viewBox="0 0 600 300"
                      className="w-full h-full"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Gridlines */}
                      <line x1="20" y1="50" x2="580" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                      <line x1="20" y1="120" x2="580" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                      <line x1="20" y1="190" x2="580" y2="190" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                      <line x1="20" y1="260" x2="580" y2="260" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                      {/* Target line */}
                      <line x1="50" y1="60" x2="550" y2="60" stroke="#2EC4B6" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="550" y="55" fill="#2EC4B6" fontSize="9" fontFamily="monospace" textAnchor="end">TARGET</text>

                      {/* Entry line */}
                      <line x1="50" y1="160" x2="550" y2="160" stroke="#C9A96E" strokeWidth="1.5" />
                      <text x="550" y="155" fill="#C9A96E" fontSize="9" fontFamily="monospace" textAnchor="end">ENTRY</text>

                      {/* Invalidation line */}
                      <line x1="50" y1="240" x2="550" y2="240" stroke="#E71D36" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="550" y="235" fill="#E71D36" fontSize="9" fontFamily="monospace" textAnchor="end">STOP</text>

                      {/* Candles sequence */}
                      <rect x="100" y="140" width="14" height="30" fill="#444" rx="1" />
                      <line x1="107" y1="130" x2="107" y2="180" stroke="#444" strokeWidth="1.5" />

                      <rect x="140" y="150" width="14" height="25" fill="#555" rx="1" />
                      <line x1="147" y1="140" x2="147" y2="185" stroke="#555" strokeWidth="1.5" />

                      {/* Sweep wick */}
                      <rect x="190" y="170" width="16" height="40" fill="#E71D36" rx="1" />
                      <line x1="198" y1="160" x2="198" y2="255" stroke="#E71D36" strokeWidth="2" />
                      <text x="198" y="275" fill="#E71D36" fontSize="8" fontFamily="monospace" textAnchor="middle">SWEEP</text>

                      {/* Displacement */}
                      <rect x="240" y="150" width="18" height="45" fill="#2EC4B6" rx="1" />
                      <line x1="249" y1="140" x2="249" y2="205" stroke="#2EC4B6" strokeWidth="2" />

                      {/* Entry Trigger Point */}
                      <circle cx="340" cy="160" r="5" fill="#C9A96E" />
                      <text x="340" y="145" fill="#C9A96E" fontSize="9" fontFamily="monospace" textAnchor="middle">ENTRY</text>

                      {/* Expansion */}
                      <rect x="380" y="130" width="16" height="35" fill="#2EC4B6" rx="1" />
                      <line x1="388" y1="120" x2="388" y2="175" stroke="#2EC4B6" strokeWidth="1.5" />

                      <rect x="420" y="100" width="18" height="40" fill="#2EC4B6" rx="1" />
                      <line x1="429" y1="90" x2="429" y2="150" stroke="#2EC4B6" strokeWidth="1.5" />

                      <rect x="460" y="60" width="20" height="45" fill="#2EC4B6" rx="1" />
                      <line x1="470" y1="55" x2="470" y2="115" stroke="#2EC4B6" strokeWidth="2" />

                      {/* Hit target marker */}
                      <circle cx="470" cy="60" r="6" fill="#2EC4B6" />
                    </svg>
                  </div>

                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-obsidian-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 px-5 py-2.5 bg-champagne text-obsidian font-mono text-xs font-bold rounded-sm shadow-xl">
                      <span>CLICK TO INSPECT FULL-SCREEN</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Confluences Checklist */}
                <div className="p-5 bg-obsidian-900 border border-white/10 rounded-sm">
                  <span className="font-mono text-[10px] tracking-widest text-champagne uppercase block mb-3">
                    CONFLUENCE AUDIT
                  </span>
                  <ul className="space-y-2">
                    {activeTrade.confluences.slice(0, 3).map((conf, cIdx) => (
                      <li key={cIdx} className="font-sans text-xs text-ivory-muted flex items-start gap-2">
                        <span className="text-champagne font-mono">0{cIdx + 1}.</span>
                        <span>{conf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* High-Resolution Modal */}
      <ChartModal
        trade={selectedTradeForModal}
        onClose={() => setSelectedTradeForModal(null)}
      />
    </>
  );
}
