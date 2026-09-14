import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CustomCursor } from "@/components/common/CustomCursor";
import { GrainOverlay } from "@/components/common/GrainOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emantrades.com"),
  title: {
    default: "Eman Trades | Trader & Market Analyst",
    template: "%s | Eman Trades",
  },
  description:
    "Official portfolio and research archive of Eman Trades. Independent institutional trader and market analyst specializing in algorithmic liquidity, macro yield dynamics, and disciplined execution.",
  keywords: [
    "Eman Trades",
    "Female Trader",
    "Market Analyst",
    "Financial Strategist",
    "Price Action",
    "Liquidity Analysis",
    "Institutional Trading",
    "Macro Flow",
    "Gold Trading",
    "Foreign Exchange",
  ],
  authors: [{ name: "Eman Trades", url: "https://emantrades.com" }],
  creator: "Eman Trades",
  publisher: "Eman Trades",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eman Trades — Markets. Discipline. Precision.",
    description:
      "Institutional trader and market analyst focused on disciplined execution, market structure and high-conviction opportunities.",
    url: "https://emantrades.com",
    siteName: "Eman Trades",
    images: [
      {
        url: "/images/eman_hero.jpg",
        width: 1200,
        height: 1600,
        alt: "Eman Trades — Female Professional Trader & Market Analyst",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eman Trades | Trader & Market Analyst",
    description:
      "Independent institutional trader and market analyst. Markets. Discipline. Precision.",
    creator: "@EmanTrades",
    images: ["/images/eman_hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Eman Trades",
    jobTitle: "Professional Financial Trader & Market Analyst",
    description:
      "Independent trader and market analyst focused on disciplined execution, market structure, and institutional liquidity flows.",
    url: "https://emantrades.com",
    image: "https://emantrades.com/images/eman_hero.jpg",
    sameAs: [
      "https://x.com/EmanTrades",
      "https://instagram.com/emantrades",
      "https://youtube.com/@EmanTrades",
      "https://t.me/EmanTradesOfficial",
      "https://linkedin.com/in/emantrades",
    ],
    knowsAbout: [
      "Financial Markets",
      "Foreign Exchange",
      "Precious Metals",
      "Market Structure",
      "Risk Management",
      "Institutional Liquidity",
    ],
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="bg-obsidian text-ivory font-sans antialiased overflow-x-hidden selection:bg-champagne selection:text-obsidian">
        <SmoothScroll>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
