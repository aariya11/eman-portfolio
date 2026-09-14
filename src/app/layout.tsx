import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CustomCursor } from "@/components/common/CustomCursor";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["italic", "normal"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600"],
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
  title: "Eman Trades — Market Analyst & Financial Strategist",
  description:
    "Institutional Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
  openGraph: {
    title: "Eman Trades — Market Analyst & Financial Strategist",
    description:
      "Institutional Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
    url: "https://emantrades.com",
    siteName: "Eman Trades",
    images: [{ url: "/images/eman_hero.jpg", width: 1200, height: 1600 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eman Trades — Market Analyst & Financial Strategist",
    description:
      "Institutional Flow, Foreign Exchange, Precious Metals, US Equity Benchmarks, Macro Yield Dynamics.",
    images: ["/images/eman_hero.jpg"],
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
      className={`${bodoni.variable} ${cormorant.variable} ${jakarta.variable} ${jetbrainsMono.variable} bg-black`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden selection:bg-white selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
