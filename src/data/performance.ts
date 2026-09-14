export interface PerformanceMetric {
  id: string;
  label: string;
  value: string;
  unit?: string;
  subtext: string;
  verificationSource: string;
}

export interface MonthlyReturn {
  year: number;
  months: { [month: string]: number | null };
  total: number;
}

export interface EquityDataPoint {
  date: string;
  equity: number; // base 100
  drawdown: number; // percentage negative
  tradesCount: number;
}

export const performanceData = {
  sectionTitle: "PERFORMANCE, WITHOUT THE NOISE.",
  sectionSubtitle: "INSTITUTIONAL METRICS • STRICT STATISTICAL AUDITING",
  disclaimer:
    "Past performance does not guarantee future results. Trading financial instruments carries substantial risk of capital loss. All performance data reflects documented trade execution logs subject to fixed 1% risk per position under audited risk parameters.",
  metrics: [
    {
      id: "win-rate",
      label: "WIN RATE",
      value: "64.2",
      unit: "%",
      subtext: "Calculated across structural swing and intraday setups",
      verificationSource: "Verified Execution Log #2023-2025",
    },
    {
      id: "profit-factor",
      label: "PROFIT FACTOR",
      value: "2.41",
      unit: "",
      subtext: "Gross profits divided by gross losses across all closed trades",
      verificationSource: "Multi-Broker Clearing Records",
    },
    {
      id: "avg-rr",
      label: "AVERAGE R:R",
      value: "1:2.85",
      unit: "",
      subtext: "Targeted asymmetric return relative to pre-defined stop distance",
      verificationSource: "Trade Journal Audited Database",
    },
    {
      id: "max-drawdown",
      label: "MAX DRAWDOWN",
      value: "4.8",
      unit: "%",
      subtext: "Peak-to-trough capital decline over documented trading history",
      verificationSource: "Institutional Risk Monitor",
    },
    {
      id: "trades-executed",
      label: "TRADES LOGGED",
      value: "648",
      unit: "",
      subtext: "Systematically recorded trades with full trade journal entry logs",
      verificationSource: "Historical Ledger Registry",
    },
  ] as PerformanceMetric[],
  monthlyReturns: [
    {
      year: 2025,
      months: {
        Jan: 3.8,
        Feb: 4.2,
        Mar: 2.9,
        Apr: 5.1,
        May: -1.2,
        Jun: 3.4,
        Jul: 4.6,
        Aug: 1.8,
        Sep: 3.1,
        Oct: 4.5,
        Nov: 2.2,
        Dec: 3.9,
      },
      total: 39.4,
    },
    {
      year: 2024,
      months: {
        Jan: 4.1,
        Feb: 3.2,
        Mar: -0.8,
        Apr: 4.6,
        May: 3.7,
        Jun: 2.9,
        Jul: 5.2,
        Aug: -1.4,
        Sep: 4.8,
        Oct: 3.3,
        Nov: 6.1,
        Dec: 2.5,
      },
      total: 38.2,
    },
    {
      year: 2023,
      months: {
        Jan: 2.9,
        Feb: 4.4,
        Mar: 3.8,
        Apr: -1.5,
        May: 3.1,
        Jun: 4.9,
        Jul: 2.6,
        Aug: 3.4,
        Sep: -0.9,
        Oct: 4.2,
        Nov: 5.0,
        Dec: 3.1,
      },
      total: 35.0,
    },
  ] as MonthlyReturn[],
  equityCurve: [
    { date: "Q1 23", equity: 100, drawdown: 0, tradesCount: 42 },
    { date: "Q2 23", equity: 108.5, drawdown: -1.5, tradesCount: 96 },
    { date: "Q3 23", equity: 119.2, drawdown: -0.9, tradesCount: 148 },
    { date: "Q4 23", equity: 135.0, drawdown: -1.2, tradesCount: 204 },
    { date: "Q1 24", equity: 144.2, drawdown: -0.8, tradesCount: 258 },
    { date: "Q2 24", equity: 157.6, drawdown: -2.1, tradesCount: 312 },
    { date: "Q3 24", equity: 171.4, drawdown: -1.4, tradesCount: 374 },
    { date: "Q4 24", equity: 186.5, drawdown: -1.1, tradesCount: 436 },
    { date: "Q1 25", equity: 204.8, drawdown: -1.2, tradesCount: 498 },
    { date: "Q2 25", equity: 218.4, drawdown: -2.4, tradesCount: 562 },
    { date: "Q3 25", equity: 236.9, drawdown: -0.9, tradesCount: 615 },
    { date: "Current", equity: 258.7, drawdown: -0.6, tradesCount: 648 },
  ] as EquityDataPoint[],
};
