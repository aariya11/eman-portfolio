import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { marketWatchData } from "@/data/markets";
import { generateWebPageSchema } from "@/lib/seo";
import { NotchNavbar } from "@/components/layout/NotchNavbar";

export const metadata: Metadata = {
  title: "Markets Monitored | Foreign Exchange, Indices & Commodities",
  description:
    "Explore Eman Trades' institutional market coverage across Foreign Exchange (EUR/USD, GBP/USD), Precious Metals (XAU/USD), US Equity Benchmarks (ES500, NQ100), and Sovereign Yields.",
  alternates: {
    canonical: `${siteConfig.url}/markets`,
  },
  openGraph: {
    title: "Markets Monitored | Foreign Exchange, Indices & Commodities | Eman Trades",
    description:
      "Selective institutional coverage of FX interbank flows, precious metals reserve buying, and equity index auction theory.",
    url: `${siteConfig.url}/markets`,
    type: "website",
    images: [{ url: `${siteConfig.url}/api/og?title=Markets+Monitored&subtitle=Forex%2C+Equities+%26+Precious+Metals` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markets Monitored | Foreign Exchange, Indices & Commodities | Eman Trades",
    description:
      "Selective institutional coverage of FX interbank flows, precious metals reserve buying, and equity index auction theory.",
  },
};

export default function MarketsPage() {
  const schema = generateWebPageSchema({
    title: "Markets Monitored | Foreign Exchange, Indices & Commodities | Eman Trades",
    description:
      "Explore Eman Trades' institutional market coverage across Foreign Exchange, Precious Metals, US Equity Benchmarks, and Sovereign Yields.",
    url: "/markets",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Markets", url: "/markets" },
    ],
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Responsive Notched Header */}
      <NotchNavbar />

      <main className="max-w-4xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-16">
        {/* Title Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Selective Coverage &amp; Specialization
            </span>
          </div>

          {/* SINGLE H1 */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Selective Market Coverage &amp; Institutional Auction Dynamics
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            The desk focuses exclusively on high-liquidity asset classes with transparent institutional participation, central bank yield drivers, and established auction theory characteristics.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="space-y-8">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            Primary Asset Classes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketWatchData.categories.map((cat) => (
              <div
                key={cat.id}
                className="border border-white/15 p-6 sm:p-8 bg-white/[0.015] hover:border-white/40 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between text-[9px] style-meta-tag text-white/40">
                  <span className="font-mono text-white/80">[ {cat.tag} ]</span>
                  <span>{cat.tickerSnippet}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cat.name}
                </h3>

                <p className="style-copy-body text-xs sm:text-sm text-white/70 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2 pt-4 border-hairline-t text-[11px] style-copy-body">
                  <p className="text-white/60">
                    <strong className="text-white font-sans">Session Window:</strong> {cat.sessionFocus}
                  </p>
                  <p className="text-white/60">
                    <strong className="text-white font-sans">Analytical Approach:</strong> {cat.analyticalApproach}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="style-meta-tag text-[8px] text-white/40 block mb-1 uppercase">
                    Key Market Drivers
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.keyDrivers.map((driver) => (
                      <span
                        key={driver}
                        className="style-meta-tag text-[8px] px-2 py-0.5 border border-white/10 bg-black text-white/70"
                      >
                        {driver}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hub-and-Spoke Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Explore Correlated Assets
          </span>
          <nav aria-label="Internal links" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/trades" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Review Executed Trade Setups
            </Link>
            <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Read Market Structure Essays
            </Link>
            <Link href="/about" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Operational Methodology
            </Link>
            <Link href="/contact" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Inquire for Consultation
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
