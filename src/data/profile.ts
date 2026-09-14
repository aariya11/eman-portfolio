export interface ProfileData {
  name: string;
  moniker: string;
  role: string;
  subRole: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingCopy: string;
  editorialStatement: {
    headlinePrimary: string;
    headlineSecondary: string;
    bodyQuote: string;
  };
  biography: {
    sectionHeadline: string;
    sectionSubheadline: string;
    lead: string;
    paragraphs: string[];
  };
  metrics: Array<{
    label: string;
    value: string;
    caption: string;
    verified: boolean;
  }>;
}

export const profileData: ProfileData = {
  name: "Eman",
  moniker: "EMAN TRADES",
  role: "Market Analyst & Financial Strategist",
  subRole: "Independent Institutional Flow Specialist",
  tagline: "MARKETS. DISCIPLINE. PRECISION.",
  heroHeadline: "She reads the market differently.",
  heroSupportingCopy:
    "Independent trader and market analyst focused on disciplined execution, market structure, and high-conviction institutional liquidity models.",
  editorialStatement: {
    headlinePrimary: "TRADING IS NOT ABOUT PREDICTION.",
    headlineSecondary: "IT IS ABOUT PREPARATION.",
    bodyQuote:
      "Every position begins with a thesis. Every thesis begins with research. Every trade ends with a lesson.",
  },
  biography: {
    sectionHeadline: "THE WOMAN",
    sectionSubheadline: "BEHIND THE CHARTS.",
    lead: "Operating at the intersection of quantitative price structure and rigorous psychological discipline.",
    paragraphs: [
      "Eman has spent the past eight years dissecting auction market theory, interbank liquidity delivery, and macroeconomic order flow. Rejecting retail hype and noise, her methodology is anchored in probability distribution and asymmetric capital preservation.",
      "She treats trading not as speculation, but as high-stakes risk engineering. Positions are only established when multi-timeframe structural confluence aligns with strict institutional execution thresholds.",
      "Beyond the terminal, Eman authors institutional market commentaries, deconstructs algorithmic liquidity cycles, and advocates for unwavering emotional neutrality in high-volatility financial environments.",
    ],
  },
  metrics: [
    {
      label: "YEARS IN MARKETS",
      value: "08+",
      caption: "Continuous live market execution across multiple macro cycles",
      verified: true,
    },
    {
      label: "MARKETS MONITORED",
      value: "05",
      caption: "FX Majors, Precious Metals, US Equities, Macro Indices, Sovereign Debt",
      verified: true,
    },
    {
      label: "EXECUTION FRAMEWORK",
      value: "PRICE ACTION",
      caption: "Algorithmic liquidity sweeps & market structure shifts",
      verified: true,
    },
    {
      label: "PRIMARY TIMEFRAMES",
      value: "4H • DAILY",
      caption: "Macro thesis mapped to 15M / 5M structural entry execution",
      verified: true,
    },
  ],
};
