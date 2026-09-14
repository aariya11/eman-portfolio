import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { journalData } from "@/data/journal";
import { generateWebPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trading Journal & Institutional Market Essays",
  description:
    "Explore institutional research essays on auction market theory, liquidity sweeps, sovereign bond yields, asymmetric risk engineering, and trading psychology authored by Eman.",
  alternates: {
    canonical: `${siteConfig.url}/journal`,
  },
  openGraph: {
    title: "Trading Journal & Institutional Market Essays | Eman Trades",
    description:
      "Institutional research essays on auction market theory, liquidity sweeps, sovereign bond yields, and trading psychology.",
    url: `${siteConfig.url}/journal`,
    type: "website",
    images: [{ url: `${siteConfig.url}/api/og?title=Research+Journal&subtitle=Institutional+Essays+%26+Auction+Theory` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Journal & Institutional Market Essays | Eman Trades",
    description:
      "Institutional research essays on auction market theory, liquidity sweeps, sovereign bond yields, and trading psychology.",
  },
};

export default function JournalIndexPage() {
  const schema = generateWebPageSchema({
    title: "Trading Journal & Institutional Market Essays | Eman Trades",
    description:
      "Explore institutional research essays on auction market theory, liquidity sweeps, sovereign bond yields, asymmetric risk engineering, and trading psychology authored by Eman.",
    url: "/journal",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Journal", url: "/journal" },
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
          <span className="text-white">Journal</span>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto pt-32 sm:pt-36 pb-24 px-4 sm:px-8 space-y-16">
        {/* Title Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="style-meta-tag text-white/50 text-[9px] tracking-[0.24em] uppercase">
              Editorial Commentary &amp; Essays
            </span>
          </div>

          {/* SINGLE H1 */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Institutional Research &amp; Market Structure Essays
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            Deconstructing interbank order delivery, sovereign rate differentials, and the mathematical principles of capital survival across global macro cycles.
          </p>
        </section>

        {/* Articles List */}
        <section className="space-y-10">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em] uppercase">
            Published Monographs
          </h2>

          <div className="space-y-8">
            {journalData.articles.map((article) => (
              <article
                key={article.id}
                className="border border-white/15 p-6 sm:p-8 bg-white/[0.015] hover:border-white/40 transition-colors space-y-4 group"
              >
                <div className="flex items-center justify-between text-[9px] style-meta-tag text-white/40 border-hairline-b pb-3">
                  <span className="text-white/80 font-mono">[ {article.category} ]</span>
                  <div className="space-x-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Link href={`/journal/${article.slug}`} className="block space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="style-copy-body text-sm text-white/60 leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="style-meta-tag text-xs text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    Read Full Monograph →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Hub-and-Spoke Internal Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Correlated Resources
          </span>
          <nav aria-label="Internal links" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/trades" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Review Documented Executions
            </Link>
            <Link href="/markets" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Monitored Markets
            </Link>
            <Link href="/about" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Operator Biography
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
