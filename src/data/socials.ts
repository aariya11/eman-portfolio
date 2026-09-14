export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  subtext: string;
}

export const socialsData = {
  sectionTitle: "FOLLOW THE PROCESS.",
  sectionSubtitle: "SELECTIVE PUBLIC DISCOURSE & MARKET UPDATES",
  channels: [
    {
      id: "x",
      name: "X (TWITTER)",
      handle: "@EmanTrades",
      url: "https://x.com/EmanTrades",
      subtext: "Intraday macro commentary & technical chart annotations",
    },
    {
      id: "instagram",
      name: "INSTAGRAM",
      handle: "@emantrades",
      url: "https://instagram.com/emantrades",
      subtext: "Behind the desk, lifestyle discipline & visual trade recaps",
    },
    {
      id: "telegram",
      name: "TELEGRAM",
      handle: "EmanTradesOfficial",
      url: "https://t.me/EmanTradesOfficial",
      subtext: "Official broadcast channel for market session outlooks",
    },
    {
      id: "youtube",
      name: "YOUTUBE",
      handle: "@EmanTrades",
      url: "https://youtube.com/@EmanTrades",
      subtext: "In-depth market structure case study breakdowns",
    },
    {
      id: "linkedin",
      name: "LINKEDIN",
      handle: "Eman Trades",
      url: "https://linkedin.com/in/emantrades",
      subtext: "Institutional partnerships & strategic advisory",
    },
  ] as SocialLink[],
  contact: {
    sectionTitle: "LET'S TALK MARKETS.",
    headline: "Institutional inquiries, advisory, and keynote engagements.",
    subtext:
      "For collaborations, media appearances, sovereign/fund consultations, or high-conviction partnerships. Serious inquiries only.",
    responseExpectation: "Inquiries reviewed within 24–48 business hours.",
    location: "London • Dubai • New York",
    inquiryTypes: [
      "Institutional Advisory / Consulting",
      "Media & Keynote Speaking",
      "Private Allocation / Collaboration",
      "Research & Strategy Subscription",
      "General Professional Inquiry",
    ],
  },
};
