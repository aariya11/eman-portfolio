"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { performanceData, EquityDataPoint } from "@/data/performance";
import { AlertCircle, CheckCircle2, TrendingUp, BarChart2 } from "lucide-react";

export function Performance() {
  const [hoveredPoint, setHoveredPoint] = useState<EquityDataPoint | null>(null);

  // SVG dimensions for equity curve
  const svgWidth = 800;
  const svgHeight = 240;
  const paddingX = 40;
  const paddingY = 30;

  const minEquity = 90;
  const maxEquity = 280;

  const points = performanceData.equityCurve.map((pt, idx) => {
    const x =
      paddingX +
      (idx / (performanceData.equityCurve.length - 1)) * (svgWidth - 2 * paddingX);
    const y =
      svgHeight -
      paddingY -
      ((pt.equity - minEquity) / (maxEquity - minEquity)) * (svgHeight - 2 * paddingY);
    return { ...pt, x, y };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x},${pt.y}`;
    const prev = points[idx - 1];
    const cp1x = prev.x + (pt.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (pt.x - prev.x) / 2;
    const cp2y = pt.y;
    return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${pt.x},${pt.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x},${svgHeight - paddingY} L ${points[0].x},${
    svgHeight - paddingY
  } Z`;

  return (
    <section
      id="performance"
      className="relative py-32 px-6 md:px-12 bg-obsidian-950/80 border-t border-white/5"
      aria-label="Trading Performance"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
              05 // AUDITED EXECUTION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
              {performanceData.sectionTitle}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-ivory-dim">
            <CheckCircle2 className="w-4 h-4 text-champagne" />
            <span>AUDITED STATISTICAL LEDGER</span>
          </div>
        </div>

        {/* 5 Verified Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {performanceData.metrics.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 bg-obsidian-900/80 border border-white/10 rounded-sm hover:border-champagne/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase block mb-2">
                  {m.label}
                </span>
                <div className="font-serif text-4xl text-ivory mb-2 flex items-baseline">
                  <span>{m.value}</span>
                  {m.unit && <span className="text-xl text-champagne ml-1">{m.unit}</span>}
                </div>
                <p className="font-sans text-xs text-ivory-muted leading-relaxed">
                  {m.subtext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="font-mono text-[9px] text-champagne/80 tracking-wider block truncate">
                  SOURCE: {m.verificationSource}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Institutional Equity Curve Chart */}
        <div className="p-6 md:p-10 bg-obsidian-900 border border-white/10 rounded-sm space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-champagne tracking-widest uppercase mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>CUMULATIVE RETURN TRAJECTORY (BASE 100)</span>
              </div>
              <h3 className="font-serif text-2xl text-ivory">
                Institutional Risk-Adjusted Growth
              </h3>
            </div>

            {/* Hover Data Inspection Readout */}
            <div className="font-mono text-xs text-right">
              {hoveredPoint ? (
                <div>
                  <span className="text-ivory-dim mr-2">{hoveredPoint.date}:</span>
                  <strong className="text-champagne text-sm">
                    {hoveredPoint.equity.toFixed(1)} NAV
                  </strong>
                  <span className="text-ivory-dim ml-2">
                    (DD: {hoveredPoint.drawdown}%)
                  </span>
                </div>
              ) : (
                <span className="text-ivory-dim">Hover points to inspect period details</span>
              )}
            </div>
          </div>

          {/* SVG Canvas for Equity Curve */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[650px] relative">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-auto overflow-visible"
              >
                <defs>
                  <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal reference grid lines */}
                {[100, 150, 200, 250].map((val) => {
                  const y =
                    svgHeight -
                    paddingY -
                    ((val - minEquity) / (maxEquity - minEquity)) * (svgHeight - 2 * paddingY);
                  return (
                    <g key={val}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={svgWidth - paddingX}
                        y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={paddingX - 10}
                        y={y + 4}
                        fill="rgba(245,242,235,0.3)"
                        fontSize="9"
                        fontFamily="monospace"
                        textAnchor="end"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Shaded Area */}
                <path d={areaD} fill="url(#equityGradient)" />

                {/* Main Curve Line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#C9A96E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Interactive Data Points */}
                {points.map((pt, idx) => (
                  <g key={idx} className="cursor-pointer">
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={hoveredPoint?.date === pt.date ? 6 : 3.5}
                      fill={hoveredPoint?.date === pt.date ? "#F5F2EB" : "#C9A96E"}
                      stroke="#070708"
                      strokeWidth="2"
                      onMouseEnter={() => setHoveredPoint(pt)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    <text
                      x={pt.x}
                      y={svgHeight - 8}
                      fill="rgba(245,242,235,0.4)"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {pt.date}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Monthly Returns Matrix */}
        <div className="p-6 md:p-10 bg-obsidian-900 border border-white/10 rounded-sm space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-champagne tracking-widest uppercase">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>MONTHLY COMPOUNDING RECORD (%)</span>
            </div>
            <span className="font-mono text-[10px] text-ivory-dim uppercase">
              AUDITED 1% FIXED ALLOCATION
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-white/10 text-ivory-dim text-[10px]">
                  <th className="py-2.5 px-3">YEAR</th>
                  {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map(
                    (m) => (
                      <th key={m} className="py-2.5 px-2 text-center">
                        {m}
                      </th>
                    )
                  )}
                  <th className="py-2.5 px-3 text-right text-champagne">YTD TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {performanceData.monthlyReturns.map((row) => (
                  <tr key={row.year} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-3 font-semibold text-ivory">{row.year}</td>
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                      (m) => {
                        const val = row.months[m];
                        return (
                          <td
                            key={m}
                            className={`py-3 px-2 text-center text-[11px] ${
                              val === null
                                ? "text-ivory-dim"
                                : val > 0
                                ? "text-emerald-400"
                                : "text-rose-400"
                            }`}
                          >
                            {val === null ? "—" : `${val > 0 ? "+" : ""}${val.toFixed(1)}%`}
                          </td>
                        );
                      }
                    )}
                    <td className="py-3 px-3 text-right font-bold text-champagne">
                      +{row.total.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory & Institutional Risk Notice */}
        <div className="p-6 bg-obsidian-950 border border-white/10 rounded-sm flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs tracking-widest text-champagne uppercase">
              STATUTORY PERFORMANCE NOTICE
            </h4>
            <p className="font-sans text-xs text-ivory-muted leading-relaxed">
              {performanceData.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
