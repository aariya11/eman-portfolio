"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaseStudy } from "@/data/caseStudies";
import { X, ZoomIn, Info } from "lucide-react";

interface ChartModalProps {
  trade: CaseStudy | null;
  onClose: () => void;
}

export function ChartModal({ trade, onClose }: ChartModalProps) {
  useEffect(() => {
    if (trade) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [trade]);

  if (!trade) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-obsidian-950/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-obsidian-900 border border-white/15 rounded-sm p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs text-champagne tracking-widest uppercase">
                  {trade.code} • {trade.asset}
                </span>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono tracking-widest ${
                    trade.direction === "LONG"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                  }`}
                >
                  {trade.direction} POSITION
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory">
                {trade.marketCondition}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-ivory-muted hover:text-ivory hover:bg-white/5 rounded-full transition-colors"
              aria-label="Close chart modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Institutional Technical Chart SVG Graphic */}
          <div className="bg-obsidian-950 border border-white/10 rounded-sm p-6 mb-8 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-ivory-dim mb-4 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-champagne" />
                <span>TECHNICAL RESOLUTION: {trade.timeframe}</span>
              </span>
              <span>RESULT: <strong className="text-champagne">{trade.result}</strong></span>
            </div>

            {/* Custom SVG Institutional Candlestick & Invalidation Diagram */}
            <div className="w-full h-72 md:h-96 relative flex items-center justify-center">
              <svg
                viewBox="0 0 800 360"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="bullGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2EC4B6" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="bearGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E71D36" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E71D36" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subtle Gridlines */}
                <line x1="40" y1="60" x2="760" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <line x1="40" y1="130" x2="760" y2="130" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <line x1="40" y1="200" x2="760" y2="200" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                <line x1="40" y1="270" x2="760" y2="270" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

                {/* Key Price Levels */}
                {/* Take Profit Target Line */}
                <line x1="80" y1="70" x2="740" y2="70" stroke="#2EC4B6" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="745" y="74" fill="#2EC4B6" fontSize="10" fontFamily="monospace">TARGET: {trade.target}</text>

                {/* Entry Price Level */}
                <line x1="80" y1="190" x2="740" y2="190" stroke="#C9A96E" strokeWidth="1.5" />
                <text x="745" y="194" fill="#C9A96E" fontSize="10" fontFamily="monospace">ENTRY: {trade.entry}</text>

                {/* Invalidation Stop-Loss Level */}
                <line x1="80" y1="280" x2="740" y2="280" stroke="#E71D36" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="745" y="284" fill="#E71D36" fontSize="10" fontFamily="monospace">STOP: {trade.invalidation}</text>

                {/* Shaded Profit Target Projection Area */}
                <rect x="380" y="70" width="300" height="120" fill="url(#bullGradient)" />
                {/* Shaded Invalidation Area */}
                <rect x="380" y="190" width="300" height="90" fill="url(#bearGradient)" />

                {/* Candlestick Wave Pattern */}
                {/* 1: Asian Consolidation */}
                <rect x="100" y="170" width="16" height="25" fill="#555" rx="1" />
                <line x1="108" y1="160" x2="108" y2="205" stroke="#555" strokeWidth="1.5" />

                <rect x="130" y="175" width="16" height="18" fill="#777" rx="1" />
                <line x1="138" y1="168" x2="138" y2="200" stroke="#777" strokeWidth="1.5" />

                <rect x="160" y="165" width="16" height="30" fill="#555" rx="1" />
                <line x1="168" y1="158" x2="168" y2="210" stroke="#555" strokeWidth="1.5" />

                {/* 2: The Liquidity Sweep Wick (Deep down-wick) */}
                <rect x="220" y="195" width="18" height="40" fill="#E71D36" rx="1" />
                <line x1="229" y1="180" x2="229" y2="295" stroke="#E71D36" strokeWidth="2" />
                {/* Annotation arrow pointing at the sweep wick */}
                <text x="210" y="325" fill="#E71D36" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  LIQUIDITY PURGE (STOPS SWEPT)
                </text>
                <line x1="229" y1="312" x2="229" y2="300" stroke="#E71D36" strokeWidth="1" markerEnd="url(#arrow)" />

                {/* 3: Reversal Displacement Candle */}
                <rect x="270" y="175" width="20" height="50" fill="#2EC4B6" rx="1" />
                <line x1="280" y1="165" x2="280" y2="235" stroke="#2EC4B6" strokeWidth="2" />

                {/* 4: Market Structure Shift (MSS) Reclaim */}
                <line x1="240" y1="165" x2="340" y2="165" stroke="#F5F2EB" strokeWidth="1" strokeDasharray="2 2" />
                <text x="290" y="155" fill="#F5F2EB" fontSize="9" fontFamily="monospace">MSS RECLAIM</text>

                {/* 5: Retest at Entry (380x) */}
                <circle cx="380" cy="190" r="5" fill="#C9A96E" />
                <circle cx="380" cy="190" r="10" stroke="#C9A96E" fill="none" strokeWidth="1.5" className="animate-ping" />
                <text x="380" y="175" fill="#C9A96E" fontSize="10" fontFamily="monospace" textAnchor="middle">ENTRY EXECUTION</text>

                {/* 6: Expansion Wave to Target */}
                <rect x="420" y="160" width="18" height="35" fill="#2EC4B6" rx="1" />
                <line x1="429" y1="150" x2="429" y2="200" stroke="#2EC4B6" strokeWidth="1.5" />

                <rect x="460" y="130" width="20" height="40" fill="#2EC4B6" rx="1" />
                <line x1="470" y1="120" x2="470" y2="175" stroke="#2EC4B6" strokeWidth="1.5" />

                <rect x="500" y="105" width="22" height="35" fill="#2EC4B6" rx="1" />
                <line x1="511" y1="95" x2="511" y2="145" stroke="#2EC4B6" strokeWidth="1.5" />

                <rect x="550" y="70" width="24" height="40" fill="#2EC4B6" rx="1" />
                <line x1="562" y1="65" x2="562" y2="115" stroke="#2EC4B6" strokeWidth="2" />

                {/* Target Hit Flag */}
                <circle cx="562" cy="70" r="6" fill="#2EC4B6" />
                <text x="562" y="52" fill="#2EC4B6" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  TARGET MITIGATED (+{trade.rrAchieved} R)
                </text>
              </svg>
            </div>
          </div>

          {/* Deep-dive Narrative & Confluence Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs tracking-widest text-champagne uppercase mb-3 flex items-center gap-2">
                <Info className="w-3.5 h-3.5" />
                <span>EXECUTIVE THESIS</span>
              </h4>
              <p className="font-sans text-sm text-ivory-muted leading-relaxed mb-4">
                {trade.thesis}
              </p>
              <p className="font-sans text-sm text-ivory/80 leading-relaxed">
                {trade.contextNarrative}
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-widest text-champagne uppercase mb-3">
                INSTITUTIONAL CONFLUENCE FACTORS
              </h4>
              <ul className="space-y-2">
                {trade.confluences.map((conf, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 font-sans text-xs text-ivory-muted"
                  >
                    <span className="text-champagne font-mono font-semibold">0{idx + 1}.</span>
                    <span>{conf}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-obsidian-950/80 border border-white/5 rounded-sm">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-ivory-dim">RISK ALLOCATION:</span>
                  <span className="text-ivory">1.0% NAV CAPPED</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono mt-1">
                  <span className="text-ivory-dim">NET R-MULTIPLE:</span>
                  <span className="text-champagne font-bold">{trade.rrAchieved}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
