import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { performanceData } from "@/data/performance";
import { generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Audited Performance & Risk Statistics",
  description:
    "Review Eman Trades' audited statistical ledger: Sharpe ratio, profit factor, maximum drawdown mitigation, and mathematical risk management metrics across live market cycles.",
  alternates: {
    canonical: `${siteConfig.url}/performance`,
  },
  openGraph: {
    title: "Audited Performance & Risk Statistics | Eman Trades",
    description:
      "Mathematical expectancy, asymmetric risk-to-reward ratios, and audited performance metrics.",
    url: `${siteConfig.url}/performance`,
    type: "website",
    images: [{ url: `${siteConfig.url}/api/og?title=Audited+Performance&subtitle=Statistical+Expectancy+%26+Risk+Metrics` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audited Performance & Risk Statistics | Eman Trades",
    description:
      "Mathematical expectancy, asymmetric risk-to-reward ratios, and audited performance metrics.",
  },
};

export default function PerformancePage() {
  const schema = generateWebPageSchema({
    title: "Audited Performance & Risk Statistics | Eman Trades",
    description:
      "Review Eman Trades' audited statistical ledger: Sharpe ratio, profit factor, maximum drawdown mitigation, and mathematical risk management metrics across live market cycles.",
    url: "/performance",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Performance", url: "/performance" },
    ],
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-hairline-b px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity"
        >
          ← Eman Trades
        </Link>
        <nav aria-label="Breadcrumb navigation" className="style-meta-tag text-[9px] text-white/50 space-x-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white">Performance</span>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-16">
        {/* Title Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Statistical Ledger &amp; Risk Metrics
            </span>
          </div>

          {/* SINGLE H1 */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Audited Statistical Ledger &amp; Capital Preservation Metrics
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            Trading performance is not measured by single-trade euphoria, but by fractional expectancy, drawdown containment, and long-term geometric compounding.
          </p>
        </section>

        {/* Statistical Metrics Grid */}
        <section className="space-y-6">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            Audited Ledger Summary (2023 – 2025)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {performanceData.metrics.map((m) => (
              <div key={m.id} className="border border-white/15 p-5 bg-white/[0.02] space-y-2">
                <span className="style-meta-tag text-[8px] text-white/40 block">
                  {m.label}
                </span>
                <p className="font-editorial italic text-3xl font-light text-white">
                  {m.value}{m.unit || ""}
                </p>
                <p className="style-copy-body text-[8.5px] text-white/50">
                  {m.verificationSource}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Governance Framework */}
        <section className="border-hairline-t pt-10 space-y-6">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            Non-Negotiable Risk Parameters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-white/10 p-6 bg-white/[0.015] space-y-2">
              <span className="style-meta-tag text-[8.5px] text-white/40 block uppercase">
                Fixed Fractional Allocation
              </span>
              <h3 className="text-base font-bold text-white">Strict 0.5% – 1.0% Risk Cap</h3>
              <p className="style-copy-body text-xs text-white/65 leading-relaxed">
                Risk is strictly pre-allocated backwards from structural invalidation price. Position size is calculated mathematically to ensure no single adverse event threatens operational longevity.
              </p>
            </div>
            <div className="border border-white/10 p-6 bg-white/[0.015] space-y-2">
              <span className="style-meta-tag text-[8.5px] text-white/40 block uppercase">
                Asymmetric Payoff Horizon
              </span>
              <h3 className="text-base font-bold text-white">Minimum 2.5R – 4.0R Expectancy</h3>
              <p className="style-copy-body text-xs text-white/65 leading-relaxed">
                Setups are only triggered when the liquidity pathway offers at least 2.5x to 4.0x return relative to the defined risk boundary, rendering high win-rates mathematically non-essential.
              </p>
            </div>
          </div>
        </section>

        {/* Mandatory Statutory Risk Warning */}
        <div className="p-4 border border-white/15 bg-black/60">
          <p className="style-copy-body text-white/45 text-[10px] leading-relaxed">
            <strong>Regulatory Disclosure:</strong> Past performance is not indicative of future results. All figures reflect systematic documented journals with fixed 1.0% capital allocation under institutional clearing accounts. Trading financial instruments carries substantial risk of capital loss.
          </p>
        </div>

        {/* Hub-and-Spoke Internal Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Related Operational Sections
          </span>
          <nav aria-label="Internal links" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/trades" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Review Documented Trades
            </Link>
            <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Read Mathematics of Capital Preservation
            </Link>
            <Link href="/about" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; About the Desk
            </Link>
            <Link href="/contact" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Private Consultation
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
