export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    role: string;
    bases: string[];
    email: string;
    phone: string;
    whatsappUrl: string;
  };
  social: {
    twitter: string;
    twitterHandle: string;
    instagram: string;
    telegram: string;
    youtube: string;
    tradingView: string;
  };
  verification: {
    google: string; // Configured via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    bing: string;
  };
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "Eman Trades",
  shortName: "Eman",
  title: "Eman Trades — Market Analyst & Financial Strategist",
  description:
    "Institutional Order Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, and Macro Yield Dynamics by independent trader and strategist Eman.",
  url: "https://emantrades.com",
  ogImage: "https://emantrades.com/api/og",
  author: {
    name: "Eman Trades",
    role: "Institutional Market Analyst & Financial Strategist",
    bases: ["London, United Kingdom", "Dubai, United Arab Emirates"],
    email: "desk@emantrades.com",
    phone: "+92 315 6828906",
    whatsappUrl:
      "https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20interested%20in%20your%201-on-1%20Trading%20Mentorship%20program.",
  },
  social: {
    twitter: "https://twitter.com/emantrades",
    twitterHandle: "@emantrades",
    instagram: "https://instagram.com/emantrades",
    telegram: "https://t.me/emantradesdesk",
    youtube: "https://youtube.com/@emantrades",
    tradingView: "https://www.tradingview.com/u/emantrades",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
  keywords: [
    "Eman Trades",
    "institutional order flow",
    "market analyst",
    "financial strategist",
    "forex trading strategy",
    "equity index futures",
    "precious metals macro analysis",
    "liquidity sweeps",
    "market structure",
    "risk management",
    "capital preservation",
    "trading psychology",
    "S&P 500 futures",
    "EUR/USD order flow",
    "London fixing",
    "auction market theory",
  ],
};
