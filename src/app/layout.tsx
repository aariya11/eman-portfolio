import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CustomCursor } from "@/components/common/CustomCursor";
import { CookieBanner } from "@/components/common/CookieBanner";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emantrades.com"),
  title: "Eman Trades — Market Analyst & Financial Strategist",
  description:
    "Institutional Order Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
  openGraph: {
    title: "Eman Trades — Market Analyst & Financial Strategist",
    description:
      "Institutional Order Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
    url: "https://emantrades.com",
    siteName: "Eman Trades",
    images: [{ url: "/images/trades/eman_trade_01.jpg", width: 1200, height: 800, alt: "Eman Trades S&P 500 E-mini Trade Execution Setup" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eman Trades — Market Analyst & Financial Strategist",
    description:
      "Institutional Order Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
    images: ["/images/trades/eman_trade_01.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} bg-black text-white`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}
