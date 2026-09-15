import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { profileData } from "@/data/profile";
import { generateWebPageSchema } from "@/lib/seo";
import StatsCounter from "@/components/ui/StatsCounter";

export const metadata: Metadata = {
  title: "About the Desk & Institutional Methodology",
  description:
    "Discover Eman's eight-year operational background in institutional order flow, auction market theory, macro yield differentials, and systematic capital preservation across London and Dubai.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Eman Trades | Institutional Trader & Market Analyst",
    description:
      "Eight years of continuous live execution across multiple macro cycles. Operating between London and Dubai with strict risk engineering standards.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [{ url: `${siteConfig.url}/api/og?title=About+Eman+Trades&subtitle=Institutional+Trader+%26+Market+Analyst` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Eman Trades | Institutional Trader & Market Analyst",
    description:
      "Eight years of continuous live execution across multiple macro cycles. Operating between London and Dubai with strict risk engineering standards.",
  },
};

export default function AboutPage() {
  const schema = generateWebPageSchema({
    title: "About Eman Trades | Institutional Trader & Market Analyst",
    description:
      "Discover Eman's eight-year operational background in institutional order flow, auction market theory, macro yield differentials, and systematic capital preservation across London and Dubai.",
    url: "/about",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Minimal Header */}
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
          <span className="text-white">About</span>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-16">
        {/* Editorial Opening */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Operational Profile &amp; Background
            </span>
          </div>

          {/* SINGLE H1 FOR SEO */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Operating at the Intersection of Price Structure &amp; Risk Engineering
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            Eman is a London &amp; Dubai–based Market Analyst and Institutional Trader exploring the continuous auction market mechanism, algorithmic order delivery, and disciplined capital preservation across global futures and foreign exchange.
          </p>
        </section>

        {/* The Operational Thesis */}
        <section className="border-hairline-t pt-10 space-y-6">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            01. The Analytical Methodology
          </h2>
          <div className="space-y-4 text-white/70 style-copy-body text-sm sm:text-base leading-relaxed">
            <p>
              Rejecting retail chart clichés and emotional indicators, Eman’s operational methodology is anchored in auction market theory, time-and-price relationships, and interbank liquidity delivery. Every trade begins with multi-timeframe scenario mapping: establishing invalidation thresholds before initiating capital exposure.
            </p>
            <p>
              By treating market speculation as probabilistic risk engineering rather than emotional prediction, the desk maintains unwavering equanimity during high-volatility regimes.
            </p>
          </div>
        </section>

        {/* Track Record Metrics */}
        <section className="border-hairline-t pt-10 space-y-6">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            02. Verified Operational Milestones
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {profileData.metrics.map((m) => (
              <div key={m.label} className="border border-white/15 p-4 bg-white/[0.02] space-y-1">
                <span className="style-meta-tag text-[8px] text-white/40 block">
                  {m.label}
                </span>
                <p className="font-editorial italic text-2xl sm:text-3xl font-light text-white">
                  {m.label === "YEARS IN MARKETS" ? (
                    <StatsCounter value={8} prefix="0" suffix="+" decimals={0} />
                  ) : m.label === "MARKETS MONITORED" ? (
                    <StatsCounter value={5} prefix="0" decimals={0} />
                  ) : (
                    m.value
                  )}
                </p>
                <p className="style-copy-body text-[8.5px] text-white/50 leading-tight">
                  {m.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Desks */}
        <section className="border-hairline-t pt-10 space-y-6">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            03. Desk Operations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-white/15 p-6 bg-white/[0.015] space-y-2">
              <span className="style-meta-tag text-[9px] text-white/40 block">LONDON DESK</span>
              <h3 className="text-lg font-bold text-white">European Session Execution</h3>
              <p className="style-copy-body text-xs text-white/60 leading-relaxed">
                Focused on the London Open expansion (07:00 – 11:00 UTC), interbank fixing flows, and sovereign interest rate differential mapping.
              </p>
            </div>
            <div className="border border-white/15 p-6 bg-white/[0.015] space-y-2">
              <span className="style-meta-tag text-[9px] text-white/40 block">DUBAI DESK</span>
              <h3 className="text-lg font-bold text-white">Global Macro &amp; Advisory</h3>
              <p className="style-copy-body text-xs text-white/60 leading-relaxed">
                Focused on US session cash open volatility (13:30 – 17:00 UTC), cross-asset liquidity rebalancing, and private institutional consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Hub-and-Spoke Internal Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Explore Further
          </span>
          <nav aria-label="Related internal pages" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/markets" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Monitored Markets
            </Link>
            <Link href="/trades" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Documented Executions
            </Link>
            <Link href="/performance" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Audited Performance
            </Link>
            <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Research Journal
            </Link>
            <Link href="/contact" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Contact Desk
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
