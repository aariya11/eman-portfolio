export interface TradingQuote {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: "Capital Preservation" | "Patience & Conviction" | "Psychological Equanimity" | "Loss Mitigation" | "Resilience & Invalidation" | "Mathematical Asymmetry" | "Continuous Evolution" | "Market Objectivity";
  takeaway: string;
  tag: string;
}

export const tradingQuotes: TradingQuote[] = [
  {
    id: "quote-ptj",
    quote: "The most important rule of trading is to play great defense, not great offense. Every single day, I assume every position I have is wrong.",
    author: "Paul Tudor Jones",
    role: "Founder, Tudor Investment Corp & Macro Legend",
    category: "Capital Preservation",
    takeaway: "Protect capital first; outsized returns are a natural byproduct of survival.",
    tag: "DEFENSE OVER OFFENSE",
  },
  {
    id: "quote-livermore",
    quote: "It was never my thinking that made the big money for me. It also was my sitting. Got that? My sitting tight! Men who can both be right and sit tight are uncommon.",
    author: "Jesse Livermore",
    role: "Pioneer of Modern Price Speculation",
    category: "Patience & Conviction",
    takeaway: "The real money is extracted in the patience of the hold, not the frenzy of over-trading.",
    tag: "PATIENT CAPITAL",
  },
  {
    id: "quote-douglas",
    quote: "When you genuinely accept the risks, you will be at peace with any outcome. If you are at peace with any outcome, you will experience no fear, no hesitation, and no internal conflict.",
    author: "Mark Douglas",
    role: "Author of 'Trading in the Zone'",
    category: "Psychological Equanimity",
    takeaway: "Complete risk pre-acceptance neutralizes fear and unlocks flawless execution.",
    tag: "PSYCHOLOGICAL EQUILIBRIUM",
  },
  {
    id: "quote-seykota",
    quote: "The elements of good trading are: (1) Cutting losses, (2) Cutting losses, and (3) Cutting losses. If you can follow these three rules, you may have a chance.",
    author: "Ed Seykota",
    role: "Market Wizard & Trend Following Pioneer",
    category: "Loss Mitigation",
    takeaway: "A small, rapid loss is your greatest protection. Never negotiate with a stop.",
    tag: "RUTHLESS RISK DISCIPLINE",
  },
  {
    id: "quote-soros",
    quote: "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
    author: "George Soros",
    role: "Macro Strategist & Quantum Fund Founder",
    category: "Mathematical Asymmetry",
    takeaway: "Win rate is ego vanity. Asymmetry and mathematical expectancy are everything.",
    tag: "ASYMMETRIC EDGE",
  },
  {
    id: "quote-kovner",
    quote: "You have to be willing to make mistakes regularly; there is nothing wrong with it. Make your best judgment, be wrong, make your next best judgment, be wrong, make your third best judgment, then double your money.",
    author: "Bruce Kovner",
    role: "Founder, Caxton Associates ($14B AUM)",
    category: "Resilience & Invalidation",
    takeaway: "Execution errors and stop-outs are simply the statistical tuition of market asymmetry.",
    tag: "CALCULATED RESILIENCE",
  },
  {
    id: "quote-dalio",
    quote: "Pain plus reflection equals progress. If you can look at your bad trades objectively without ego, the market becomes your greatest teacher.",
    author: "Ray Dalio",
    role: "Founder, Bridgewater Associates",
    category: "Continuous Evolution",
    takeaway: "Ego is the enemy of equity. Treat every drawdown as raw empirical data.",
    tag: "EGO ANNIHILATION",
  },
  {
    id: "quote-eman",
    quote: "Price does not care about your conviction; it only respects liquidity. Trade the auction as it actually exists, not as your hope wishes it to be.",
    author: "Eman Trades",
    role: "Institutional Order Flow & Desk Strategist",
    category: "Market Objectivity",
    takeaway: "Surrender personal narrative to the order book. Liquidity sweeps reveal the institutional intent.",
    tag: "AUCTION OBJECTIVITY",
  },
];
