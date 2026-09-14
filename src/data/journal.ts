export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: "MARKET STRUCTURE" | "LIQUIDITY" | "RISK MANAGEMENT" | "TRADE PSYCHOLOGY" | "WEEKLY OUTLOOK";
  readTime: string;
  excerpt: string;
  image: string;
  content: {
    lead: string;
    sections: Array<{
      heading: string;
      body: string[];
      highlightQuote?: string;
    }>;
    keyTakeaways: string[];
  };
}

export const journalData = {
  sectionTitle: "FROM THE CHARTS",
  sectionSubtitle: "EDITORIAL COMMENTARY • INSTITUTIONAL RESEARCH & ESSAYS",
  articles: [
    {
      id: "journal-001",
      slug: "anatomy-of-liquidity-sweeps",
      title: "The Anatomy of Institutional Liquidity Sweeps",
      subtitle: "Why retail stop clusters serve as the primary fuel for algorithmic expansion.",
      date: "January 18, 2026",
      category: "LIQUIDITY",
      readTime: "6 MIN READ",
      excerpt:
        "Large market participants cannot simply enter positions with market orders without severe slippage. They require counterparty volume — precisely where retail traders park their stop-losses.",
      image: "/images/journal_market_structure.jpg",
      content: {
        lead: "In liquid financial markets, price does not move randomly; it travels from one concentration of liquidity to the next. Understanding this continuous auction mechanism separates the reactive participant from the deliberate operator.",
        sections: [
          {
            heading: "The Engineering of Liquidity",
            body: [
              "When retail technical analysis teaches millions to place their protective stops just beyond an obvious swing high or low, it creates an enormous resting pool of buy and sell orders.",
              "For an institutional desk seeking to accumulate a $150M position, these pools are not barriers — they are the necessary liquidity required to fill orders without driving price against themselves.",
            ],
            highlightQuote:
              "The market is an auction mechanism whose sole purpose is to pair buyers and sellers at maximum transaction volume.",
          },
          {
            heading: "Recognizing the Signature of Absorption",
            body: [
              "The critical distinction between a genuine breakout and a liquidity sweep lies in the velocity and delta profile immediately following the sweep.",
              "In a sweep, price pierces the level, triggers the cluster of resting stops, and is immediately met with passive limit orders absorbing every share or contract. The candle closes back inside the prior range, leaving an elongated wick that signals structural rejection.",
            ],
          },
        ],
        keyTakeaways: [
          "Stop-loss clusters are liquidity reservoirs, not impenetrable support or resistance.",
          "Look for displacement and candle closures back inside range boundaries before confirming a reversal.",
          "High volume accompanied by minimal price progression indicates heavy institutional absorption.",
        ],
      },
    },
    {
      id: "journal-002",
      slug: "mathematics-of-capital-preservation",
      title: "The Uncompromising Mathematics of Capital Preservation",
      subtitle: "Why asymmetric risk-to-reward makes win rate a secondary metric.",
      date: "February 04, 2026",
      category: "RISK MANAGEMENT",
      readTime: "8 MIN READ",
      excerpt:
        "A trader with a 40% win rate can significantly outperform one with an 80% win rate. The fatal trap of retail trading is mistaking predictive accuracy for financial edge.",
      image: "/images/cinematic_architecture.jpg",
      content: {
        lead: "Trading is not an exercise in prophetic foresight. It is a game of fractional expectancy over repeated probabilistic iterations. Survival precedes profitability.",
        sections: [
          {
            heading: "The Geometric Asymmetry of Losses",
            body: [
              "A 10% portfolio drawdown requires an 11.1% gain to recover. A 50% drawdown requires a staggering 100% gain simply to return to breakeven.",
              "By capping portfolio risk at 0.5% to 1.0% per trade, you make catastrophic ruin mathematically negligible. You can endure a 10-trade losing streak and still possess 90%+ of your operational war chest.",
            ],
            highlightQuote: "Take care of the downside with fanatical devotion; the upside will take care of itself.",
          },
          {
            heading: "The Power of Positive Expectancy",
            body: [
              "When your average winner yields 3R and your average loser is strictly 1R, your breakeven win rate is merely 25%. Any win rate above 30% yields consistent, compounding long-term capital expansion.",
            ],
          },
        ],
        keyTakeaways: [
          "Position sizing must always be calculated backwards from the structural invalidation price.",
          "Never adjust a stop-loss further away once a position is initiated.",
          "Win rate provides psychological comfort; expectancy provides financial longevity.",
        ],
      },
    },
    {
      id: "journal-003",
      slug: "emotional-neutrality-under-volatility",
      title: "Cultivating Stoic Detachment at the Trading Terminal",
      subtitle: "Deconstructing dopamine, fear, and cognitive bias during market execution.",
      date: "February 22, 2026",
      category: "TRADE PSYCHOLOGY",
      readTime: "5 MIN READ",
      excerpt:
        "The market is an emotional mirror. Every unresolved fear, greed, or impatience within the trader will be extracted and weaponized against their account balance.",
      image: "/images/eman_about.jpg",
      content: {
        lead: "The market does not know your name, does not care about your financial goals, and has zero malice towards you. The feeling of being targeted by price action is entirely a projection of unchecked ego.",
        sections: [
          {
            heading: "Decoupling Self-Worth from P&L",
            body: [
              "When an individual associates their intelligence with the green or red color of their terminal, every adverse tick becomes an existential attack.",
              "A disciplined professional views a stopped-out trade in the exact same light as an insurance company views a routine actuarial claim: an expected cost of doing business within an overarching positive system.",
            ],
            highlightQuote:
              "A professional trades the plan, records the data, and walks away. Excitement is the hallmark of an amateur.",
          },
        ],
        keyTakeaways: [
          "Define every parameter (entry, stop, partial targets) before clicking execute.",
          "Track execution quality metrics, not just monetary P&L.",
          "If you experience elevated heart rate while in a trade, your position sizing is too large.",
        ],
      },
    },
    {
      id: "journal-004",
      slug: "decoding-macro-order-flow",
      title: "Decoding Sovereign Yields & Currency Valuations",
      subtitle: "Connecting interbank interest rate expectations to intraday technical charts.",
      date: "March 02, 2026",
      category: "MARKET STRUCTURE",
      readTime: "7 MIN READ",
      excerpt:
        "Technical charts provide the timing; macro liquidity dictates the trajectory. How understanding bond yields and overnight index swaps transforms technical precision.",
      image: "/images/eman_hero.jpg",
      content: {
        lead: "Currencies are the balance sheets of sovereign nations. Attempting to trade foreign exchange solely off isolated chart patterns without understanding rate differentials is like navigating blindfolded.",
        sections: [
          {
            heading: "The Sovereign Yield Compass",
            body: [
              "Capital relentlessly seeks safety and yield. When the US 10-Year real yield expands relative to European bunds or Japanese government bonds, institutional capital flows into USD denominated assets.",
              "Aligning intraday price action models with the prevailing macro yield vector produces higher conviction and broader expansion targets.",
            ],
          },
        ],
        keyTakeaways: [
          "Always map key economic release timestamps before the trading week begins.",
          "Monitor the DXY and 10Y real yields as baseline directional filters.",
          "Trade in the direction of institutional rebalancing flows.",
        ],
      },
    },
  ] as JournalArticle[],
};
