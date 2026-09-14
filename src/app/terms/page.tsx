import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions & Risk Disclaimers",
  description: "Terms and conditions, statutory financial risk disclosures, intellectual property rights, and limitation of liability for Eman Trades.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions & Risk Disclaimers | Eman Trades",
    description: "Terms and conditions, statutory financial risk disclosures, and IP rights for Eman Trades.",
    url: `${siteConfig.url}/terms`,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-32 px-6 md:px-12 max-w-[960px] mx-auto">
      <header className="mb-12 border-hairline-b pb-8 space-y-3">
        <Link
          href="/"
          className="style-meta-tag text-white/50 hover:text-white transition-colors text-[10px] inline-flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-white outline-none"
        >
          ← Return to Portfolio
        </Link>
        <h1 className="style-project-title text-3xl sm:text-4xl md:text-5xl font-bold text-white pt-2">
          Terms &amp; Conditions
        </h1>
        <p className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em]">
          Effective Date: January 1, 2026 • Last Reviewed: September 14, 2026
        </p>
      </header>

      {/* Mandatory Statutory Highlight Box */}
      <div className="border border-white/20 p-6 md:p-8 bg-white/[0.02] mb-10 space-y-4">
        <span className="style-meta-tag text-white/80 block text-[9.5px]">
          CRITICAL REGULATORY &amp; FINANCIAL RISK NOTICE
        </span>
        <p className="style-copy-body text-white/90 text-sm leading-relaxed">
          <strong>CFTC RULE 4.41 / FCA UK / UAE SCA MANDATORY DISCLOSURE:</strong> Hypothetical or simulated performance results have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not actually been executed, the results may have under- or over-compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
        </p>
        <p className="style-copy-body text-white/70 text-xs leading-relaxed">
          Trading foreign exchange (Forex), equity index futures, commodities, and derivatives on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you.
        </p>
      </div>

      <article className="space-y-10 text-white/80 style-copy-body text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            01. Agreement to Terms
          </h2>
          <p>
            By accessing this website, engaging with our market analysis, submitting inquiry dossiers, or enrolling in our private 1-on-1 mentorship sessions, you (&quot;Client,&quot; &quot;User,&quot; or &quot;You&quot;) agree to be legally bound by these Terms and Conditions. If you do not agree with any provision herein, you must immediately cease use of this website and all related services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            02. Nature of Services: Educational &amp; Analytical Only
          </h2>
          <p>
            <strong>Eman Trades operates strictly as an independent educational publisher, trading journal compiler, and private market strategy consultancy.</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              <strong>No Investment Advisory Status:</strong> Eman Trades is not registered as an Investment Adviser with the UK Financial Conduct Authority (FCA), the US Commodity Futures Trading Commission (CFTC), the US Securities and Exchange Commission (SEC), or the UAE Securities and Commodities Authority (SCA).
            </li>
            <li>
              <strong>No Financial Advice:</strong> Content on this website, during 1-on-1 mentorship sessions, or across communications does not constitute investment advice, financial planning, tax guidance, or a recommendation to buy, sell, or hold any financial instrument.
            </li>
            <li>
              <strong>No Brokerage or Discretionary Asset Management:</strong> We do not hold client funds, manage pooled trading accounts, accept capital for investment, or execute orders on behalf of third parties.
            </li>
            <li>
              <strong>Sole Responsibility:</strong> You assume 100% personal responsibility for any financial trades, orders, or capital allocations you make. You should consult a licensed independent financial advisor before risking capital.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            03. Intellectual Property Rights &amp; Restrictions
          </h2>
          <p>
            All content appearing on this website—including but not limited to proprietary trade execution charts, order flow frameworks, risk engineering models, written case studies, journal articles, interface layouts, and mentorship curriculum materials—is the exclusive intellectual property of Eman Trades, protected under international copyright, trademark, and trade secret laws.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              You are granted a limited, personal, non-exclusive, non-transferable revocable license to view website content for individual, non-commercial education.
            </li>
            <li>
              <strong>Prohibited Actions:</strong> You may not copy, republish, screen-record, redistribute, sublicense, commercially exploit, reverse-engineer, or create derivative works from our proprietary trading models or course materials without explicit written consent.
            </li>
            <li>
              Any unauthorized distribution of mentorship materials will trigger immediate termination of access without refund and may result in statutory legal claims for copyright infringement and trade secret misappropriation.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            04. 1-on-1 Mentorship Parameters &amp; Scheduling
          </h2>
          <p>
            Private mentorship availability is limited and subject to preliminary screening. Enrollment is only confirmed upon execution of an individualized engagement scope and receipt of applicable fees. Mentorship bookings are subject to our formal <Link href="/refund" className="text-white underline">Refund Policy</Link>.
          </p>
          <p>
            Sessions are delivered via secure remote video conferencing or direct desk channels. Clients must provide at least 24 hours advance written notice to reschedule a confirmed session.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            05. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Eman Trades, its founders, analysts, or contractors be liable for any direct, indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of trading capital, profits, goodwill, data, or other intangible losses arising out of or relating to the use of or inability to use this website or educational services.
          </p>
          <p>
            Under no circumstance will our total aggregate liability under any legal theory exceed the actual monetary amount paid by you to Eman Trades for the specific service giving rise to the claim in the preceding three (3) months, or £100 GBP if no fee was paid.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            06. Indemnification
          </h2>
          <p>
            You agree to defend, indemnify, and hold harmless Eman Trades and its representatives from and against any and all claims, damages, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from your use of the website, your trading execution decisions, or your breach of these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            07. Governing Law &amp; Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of England &amp; Wales, without regard to conflict of law principles. Any dispute arising from these terms or our services shall be resolved first through good-faith negotiation. If unresolved within thirty (30) days, disputes shall be submitted to the exclusive jurisdiction of the competent courts in London, United Kingdom, or mutually agreed international arbitration under the London Court of International Arbitration (LCIA) rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            08. Severability &amp; Modifications
          </h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect. We reserve the right to revise these terms at any time with immediate effect upon posting.
          </p>
        </section>
      </article>

      <footer className="mt-16 pt-8 border-hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 style-meta-tag text-[9px] text-white/50">
        <Link href="/" className="hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          <Link href="/refund" className="hover:text-white">Refund Policy</Link>
        </div>
      </footer>
    </main>
  );
}
