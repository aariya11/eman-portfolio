import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { stevenProjects } from "@/data/stevenProjects";
import { generateWebPageSchema } from "@/lib/seo";
import { NotchNavbar } from "@/components/layout/NotchNavbar";

export const metadata: Metadata = {
  title: "Documented Trade Executions & Case Studies",
  description:
    "Review institutional trade executions on S&P 500 E-mini futures (ES), detailing liquidity sweeps, demand block defenses, risk-reward ratios, and mathematical invalidation rules.",
  alternates: {
    canonical: `${siteConfig.url}/trades`,
  },
  openGraph: {
    title: "Documented Trade Executions & Case Studies | Eman Trades",
    description:
      "Systematically documented trade journals with fixed capital allocation, structural invalidation, and asymmetric expectancy.",
    url: `${siteConfig.url}/trades`,
    type: "website",
    images: [{ url: `${siteConfig.url}/api/og?title=Documented+Trades&subtitle=Institutional+Executions+%26+Case+Studies` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documented Trade Executions & Case Studies | Eman Trades",
    description:
      "Systematically documented trade journals with fixed capital allocation, structural invalidation, and asymmetric expectancy.",
  },
};

export default function TradesPage() {
  const schema = generateWebPageSchema({
    title: "Documented Trade Executions & Case Studies | Eman Trades",
    description:
      "Review institutional trade executions on S&P 500 E-mini futures (ES), detailing liquidity sweeps, demand block defenses, and mathematical invalidation rules.",
    url: "/trades",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Trades", url: "/trades" },
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
              Audited Case Studies &amp; Execution Ledger
            </span>
          </div>

          {/* SINGLE H1 */}
          <h1 className="style-hero-name text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
            Institutional Trade Execution Ledger &amp; Historical Case Studies
          </h1>

          <p className="style-copy-body text-white/70 text-base sm:text-lg leading-relaxed pt-2">
            Every trade setup is pre-scripted with fixed risk allocation, structural invalidation criteria, and objective liquidity targets. Below are documented executions from live market operations.
          </p>
        </section>

        {/* Case Studies List */}
        <section className="space-y-12">
          {stevenProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-white/15 p-6 sm:p-8 bg-white/[0.015] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-hairline-b pb-4">
                <div>
                  <span className="style-meta-tag text-[8.5px] text-white/40 block">
                    CASE STUDY 0{idx + 1} • {project.year}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {project.title}
                  </h2>
                </div>
                <span className="style-meta-tag text-[9px] px-2.5 py-1 border border-white/20 self-start sm:self-auto text-white/70">
                  {project.category}
                </span>
              </div>

              {/* Chart Image */}
              <div className="relative w-full aspect-[16/9] bg-neutral-950 border border-white/10 overflow-hidden">
                <Image
                  src={project.slides[0].image}
                  alt={`${project.title} - Trade execution chart showing price levels and risk parameters`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Narrative Breakdown */}
              <div className="space-y-3">
                <h3 className="style-meta-tag text-white/50 text-[9px] tracking-[0.2em] uppercase">
                  Execution Thesis &amp; Management
                </h3>
                {project.narrative.map((p, pIdx) => (
                  <p key={pIdx} className="style-copy-body text-xs sm:text-sm text-white/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Confluences */}
              <div className="pt-2 border-hairline-t flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <span
                    key={link.label}
                    className="style-meta-tag text-[8px] px-2.5 py-1 bg-black border border-white/10 text-white/60"
                  >
                    &gt; {link.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Hub-and-Spoke Internal Links */}
        <section className="border-hairline-t pt-10 space-y-4">
          <span className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em] block uppercase">
            Correlated Research &amp; Operations
          </span>
          <nav aria-label="Internal links" className="flex flex-wrap gap-4 text-xs style-meta-tag">
            <Link href="/performance" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Review Audited Performance Ledger
            </Link>
            <Link href="/journal" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Read Journal on Liquidity Sweeps
            </Link>
            <Link href="/markets" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; Asset Coverage Details
            </Link>
            <Link href="/contact" className="text-white hover:text-white/60 transition-colors underline decoration-white/30 underline-offset-4">
              &gt; 1-on-1 Mentorship Inquiry
            </Link>
          </nav>
        </section>
      </main>
    </div>
  );
}
