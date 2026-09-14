export interface CaseStudy {
  id: string;
  code: string;
  asset: string;
  assetCategory: string;
  timeframe: string;
  marketCondition: string;
  direction: "LONG" | "SHORT";
  thesis: string;
  entry: string;
  invalidation: string;
  target: string;
  result: string;
  rrAchieved: string;
  executionDate: string;
  contextNarrative: string;
  confluences: string[];
  annotatedChartSvg: {
    type: "candlesticks";
    high: number;
    low: number;
    open: number;
    close: number;
    entryLevel: number;
    stopLevel: number;
    targetLevel: number;
  };
}

export const caseStudiesData = {
  sectionTitle: "SELECTED TRADES",
  sectionSubtitle: "HIGH-CONVICTION CASE STUDIES • ARCHIVE OF REASONED EXECUTION",
  trades: [
    {
      id: "trade-001",
      code: "TRADE 001",
      asset: "XAU/USD (GOLD)",
      assetCategory: "PRECIOUS METALS",
      timeframe: "4H Structural Bias • 15M Invalidation Entry",
      marketCondition: "London Low Liquidity Sweep into 4H Bullish Order Block",
      direction: "LONG",
      thesis:
        "Gold established a clean Asian session consolidation range. During the early London open, aggressive selling swept liquidity beneath the previous day's swing low directly into an unmitigated 4-hour bullish Fair Value Gap. Immediate delta divergence indicated aggressive institutional absorption.",
      entry: "2,638.40 USD",
      invalidation: "2,631.10 USD (Structural Low Breach)",
      target: "2,668.50 USD (Major External Buy-Side Liquidity)",
      result: "+4.12 R (+4.12% equity growth on 1% risk)",
      rrAchieved: "1 : 4.12",
      executionDate: "October 14, 2025",
      contextNarrative:
        "Following a release of cooler-than-expected US Producer Price Index data, real sovereign yields softened. Rather than chasing the initial headline spike, execution waited for the London session stop-hunt beneath Asian liquidity. The entry triggered on a 5-minute Market Structure Shift (MSS) candle closure.",
      confluences: [
        "4-Hour Institutional Fair Value Gap mitigation",
        "Asian Session low liquidity purge (sell stops absorbed)",
        "5-Minute Market Structure Shift with displaced body closure",
        "US 10-Year Treasury Yield intraday weakness confirmation",
      ],
      annotatedChartSvg: {
        type: "candlesticks",
        high: 2672.0,
        low: 2628.0,
        open: 2635.0,
        close: 2668.5,
        entryLevel: 2638.4,
        stopLevel: 2631.1,
        targetLevel: 2668.5,
      },
    },
    {
      id: "trade-002",
      code: "TRADE 002",
      asset: "EUR/USD",
      assetCategory: "FOREIGN EXCHANGE",
      timeframe: "Daily Trend Mapping • 1H Displaced MSS",
      marketCondition: "Bearish Premium Liquidity Run into Prior Week High",
      direction: "SHORT",
      thesis:
        "EUR/USD rallied into the weekly key resistance zone during Frankfurt open, completing an engineered buy-side liquidity run. Price created a swift rejection wick leaving an extensive imbalance, followed by an immediate displacement break below internal swing lows.",
      entry: "1.09450 EUR/USD",
      invalidation: "1.09720 EUR/USD (Above London Swing High)",
      target: "1.08580 EUR/USD (Internal Range Liquidity Pool)",
      result: "+3.22 R (+3.22% equity growth on 1% risk)",
      rrAchieved: "1 : 3.22",
      executionDate: "November 08, 2025",
      contextNarrative:
        "The European Central Bank maintained a dovish stance relative to sticky US core services inflation. The technical thesis was executed during the London-New York overlap, capitalising on institutional liquidation of late breakout buyers who had entered on premature headlines.",
      confluences: [
        "Prior week high sweep with immediate multi-timeframe divergence",
        "1-Hour bearish displacement leaving consecutive imbalance voids",
        "Premium pricing relative to monthly dealing range (above 50% equilibrium)",
        "Order flow book showing heavy limit sell blocks defense at 1.0950",
      ],
      annotatedChartSvg: {
        type: "candlesticks",
        high: 1.098,
        low: 1.085,
        open: 1.093,
        close: 1.0858,
        entryLevel: 1.0945,
        stopLevel: 1.0972,
        targetLevel: 1.0858,
      },
    },
    {
      id: "trade-003",
      code: "TRADE 003",
      asset: "NQ100 (E-MINI NASDAQ)",
      assetCategory: "EQUITY INDEX",
      timeframe: "1H Range Definition • 5M VWAP Invalidation",
      marketCondition: "NYSE Opening Drive with Volatility Absorption",
      direction: "LONG",
      thesis:
        "Nasdaq opened with high relative volume retesting the previous day's Volume Point of Control (VPOC). Strong absorption by institutional passive bids formed a pristine liquidity shelf. As price reclaimed the opening range VWAP, an asymmetric expansion setup activated.",
      entry: "20,410.00 pts",
      invalidation: "20,345.00 pts (Session Low Invalidation)",
      target: "20,680.00 pts (Untested Weekly Supply Crest)",
      result: "+4.15 R (+4.15% equity growth on 1% risk)",
      rrAchieved: "1 : 4.15",
      executionDate: "December 03, 2025",
      contextNarrative:
        "Semiconductor earnings beat estimates by wide margins while headline commentary remained skeptical of immediate margins. The divergence between resilient order book depth and negative sentiment provided institutional asymmetric risk.",
      confluences: [
        "Volume Point of Control (VPOC) backtest confirmation",
        "Reclaim of Session Volume Weighted Average Price (VWAP)",
        "Cumulative Volume Delta (CVD) divergence showing passive buying",
        "Clear path with minimal overhead structural friction to 20,680",
      ],
      annotatedChartSvg: {
        type: "candlesticks",
        high: 20720,
        low: 20330,
        open: 20380,
        close: 20680,
        entryLevel: 20410,
        stopLevel: 20345,
        targetLevel: 20680,
      },
    },
  ] as CaseStudy[],
};
