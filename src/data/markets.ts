export interface MarketCategory {
  id: string;
  name: string;
  tickerSnippet: string;
  tag: string;
  sessionFocus: string;
  description: string;
  analyticalApproach: string;
  keyDrivers: string[];
  currentBiasNote: string;
}

export const marketWatchData = {
  sectionTitle: "THE MARKETS SHE WATCHES",
  sectionSubtitle: "SELECTIVE COVERAGE • FOCUSED SPECIALIZATION",
  categories: [
    {
      id: "forex",
      name: "FOREIGN EXCHANGE",
      tickerSnippet: "EUR/USD • GBP/USD • USD/JPY",
      tag: "INTERBANK FLOW",
      sessionFocus: "London Open & New York Overlap (07:00 – 16:00 UTC)",
      description:
        "Global sovereign currencies driven by central bank yield differentials, interbank settlement flows, and disciplined algorithmic order delivery.",
      analyticalApproach:
        "Time-and-price theory, London session liquidity runs, New York reversal sweeps, and interest rate differential tracking.",
      keyDrivers: ["ECB/Fed/BOE policy paths", "Overnight interbank swap rates", "London fixing flows"],
      currentBiasNote: "Selective dollar rotation following policy recalibration.",
    },
    {
      id: "gold",
      name: "PRECIOUS METALS",
      tickerSnippet: "XAU/USD • SILVER",
      tag: "SOVEREIGN RESERVE",
      sessionFocus: "NY AM Institutional Window (13:00 – 17:00 UTC)",
      description:
        "The ultimate macro barometer. High volatility institutional asset sensitive to real sovereign yields, central bank accumulation, and global monetary shifts.",
      analyticalApproach:
        "Daily bias dictated by US 10-Year Real Yields (TIPS) and DXY inverse correlation. Precision intraday liquidity sweeps around Asian session range highs/lows.",
      keyDrivers: ["US 10Y real yield movements", "Sovereign reserve buying", "Geopolitical risk premium"],
      currentBiasNote: "Structural accumulation at higher-timeframe discount levels.",
    },
    {
      id: "indices",
      name: "EQUITY BENCHMARKS",
      tickerSnippet: "NQ100 • ES500 • DOW30",
      tag: "GROWTH & CAPITAL FLOW",
      sessionFocus: "NYSE Cash Open (13:30 – 16:00 UTC)",
      description:
        "High-beta US indices driven by mega-cap corporate earnings concentration, liquidity injection, and systematic institutional rebalancing.",
      analyticalApproach:
        "Initial Balance (IB) range expansion analysis, fair value gap rebalancing, and volume profile value area migrations.",
      keyDrivers: ["Earnings concentration in Big Tech", "VIX volatility regime", "Treasury auction dynamics"],
      currentBiasNote: "Monitoring liquidity absorption at weekly supply inflection points.",
    },
    {
      id: "crypto",
      name: "DIGITAL ASSETS",
      tickerSnippet: "BTC • ETH",
      tag: "MACRO LIQUIDITY SENSOR",
      sessionFocus: "Global 24/7 (CME Futures Settlement Window)",
      description:
        "Pure continuous liquidity without circuit breakers. Functions as an unhedged real-time indicator of global fiat liquidity expansion and market sentiment.",
      analyticalApproach:
        "CME futures gap dynamics, perpetual funding rate equilibrium, spot ETF cumulative delta, and high-timeframe supply-demand reclamation.",
      keyDrivers: ["Global M2 money supply growth", "Institutional ETF net inflows", "Derivatives leverage liquidation cascades"],
      currentBiasNote: "Consolidation within quarterly macro expansion brackets.",
    },
    {
      id: "macro",
      name: "GLOBAL MACRO",
      tickerSnippet: "DXY • US10Y • BRENT",
      tag: "SYSTEMIC UNDERPINNINGS",
      sessionFocus: "Economic Release Windows (CPI, FOMC, NFP)",
      description:
        "The foundational architecture determining capital flows across all asset classes. Every trade begins with macro yield curve and currency strength mapping.",
      analyticalApproach:
        "Yield curve steepener/flattener tracking, balance sheet expansion indicators, and global commodity terms of trade.",
      keyDrivers: ["Federal Reserve balance sheet runoff", "Global energy corridors", "Sovereign debt refinancing schedule"],
      currentBiasNote: "Cross-asset regime shifting toward selective capital resilience.",
    },
  ] as MarketCategory[],
};
