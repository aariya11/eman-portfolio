import React from "react";
import Link from "next/link";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Comprehensive Privacy Policy detailing our data collection, processing, and protection practices under GDPR, UK GDPR, and UAE Data Protection Law.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Eman Trades",
    description: "Data collection, processing, and protection practices under GDPR and UAE Data Protection Law.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em]">
          Effective Date: January 1, 2026 • Last Reviewed: September 14, 2026
        </p>
      </header>

      <article className="space-y-10 text-white/80 style-copy-body text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            01. Data Controller Identification
          </h2>
          <p>
            This Privacy Policy applies to personal data collected and processed by <strong>Eman Trades</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operating private market analysis, educational strategy, and mentorship services from London, United Kingdom, and Dubai, United Arab Emirates.
          </p>
          <p>
            For all inquiries relating to this policy or your personal data rights, you may contact our designated desk administrator directly at{" "}
            <a href="mailto:desk@emantrades.com" className="text-white underline hover:text-white/80">
              desk@emantrades.com
            </a>{" "}
            or via our verified desk WhatsApp at{" "}
            <a href="https://wa.me/923156828906" className="text-white underline hover:text-white/80">
              +92 315 6828906
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            02. Principle of Data Minimization &amp; Scope
          </h2>
          <p>
            We strictly enforce the principle of data minimization under Article 5(1)(c) of the General Data Protection Regulation (EU/UK GDPR) and UAE Federal Decree-Law No. 45/2021. We do not collect passive user tracking dossiers, biometric identifiers, or broad browsing histories.
          </p>
          <p>The only categories of personal information we process include:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              <strong>Direct Consultation Submissions:</strong> Full name/entity title, professional email address, subject matter, and message brief transmitted voluntarily through our dossier contact form.
            </li>
            <li>
              <strong>Direct Messaging Communications:</strong> Mobile phone number, display handle, and communication history initiated voluntarily by you via WhatsApp or email.
            </li>
            <li>
              <strong>Essential Session Tokens:</strong> Strictly necessary client-side local storage entries storing interface state (such as cookie banner consent acknowledgement).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            03. Legal Bases for Processing
          </h2>
          <p>We process your personal information strictly on the following lawful grounds:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              <strong>Consent (GDPR Art. 6(1)(a)):</strong> Provided explicitly when you check our consent checkbox prior to transmitting an inquiry form or when you initiate a message via WhatsApp.
            </li>
            <li>
              <strong>Pre-Contractual &amp; Contractual Performance (GDPR Art. 6(1)(b)):</strong> Necessary to evaluate consultation eligibility, schedule 1-on-1 mentorship sessions, and administer agreed advisory services.
            </li>
            <li>
              <strong>Legal Compliance (GDPR Art. 6(1)(c)):</strong> Fulfilling our statutory tax, accounting, and anti-fraud recordkeeping obligations in applicable jurisdictions.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            04. Third-Party Disclosures &amp; International Transfers
          </h2>
          <p>
            <strong>We do not sell, rent, monetize, or trade your personal data to any third party or marketing network under any circumstance.</strong>
          </p>
          <p>
            Data is only processed through secure infrastructure providers necessary for operational communication:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              <strong>Cloud Hosting &amp; Edge Infrastructure:</strong> Vercel Inc. and secure distributed content delivery networks utilizing TLS 1.3 encryption.
            </li>
            <li>
              <strong>Direct Messaging Infrastructure:</strong> WhatsApp (Meta Platforms Ireland Ltd.) when you elect to message our desk directly.
            </li>
          </ul>
          <p>
            Where cross-border transfers occur between the UK, European Economic Area (EEA), and the United Arab Emirates, they are governed by Standard Contractual Clauses (SCCs) and equivalent adequacy safeguards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            05. Retention Period
          </h2>
          <p>
            General inquiry briefs that do not lead to an active mentorship arrangement are purged from our active operational records within twelve (12) months. Records related to active 1-on-1 mentorship agreements and invoices are retained for up to six (6) years to comply with statutory UK and UAE financial recordkeeping mandates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            06. Your Statutory Rights
          </h2>
          <p>Under applicable international privacy frameworks, you hold the following rights:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Right of Access:</strong> Request confirmation and copies of all personal data held about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate deletion of your data where lawful retention grounds no longer apply.</li>
            <li><strong>Right to Restriction:</strong> Limit the scope of data processing under disputed circumstances.</li>
            <li><strong>Right to Data Portability:</strong> Obtain your data in a structured, machine-readable format.</li>
            <li><strong>Right to Withdraw Consent:</strong> Revoke consent at any time without affecting prior lawful processing.</li>
          </ul>
          <p>
            To exercise any of these rights, email your request to{" "}
            <a href="mailto:desk@emantrades.com" className="text-white underline">
              desk@emantrades.com
            </a>
            . We respond to verified requests within thirty (30) calendar days. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) or the UAE Data Office.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            07. Security Architecture
          </h2>
          <p>
            All network communication with this website is enforced via Hypertext Transfer Protocol Secure (HTTPS) with modern TLS encryption suites. We implement strict access controls, multi-factor authentication, and segmented operational boundaries to protect submitted communications against unauthorized access, loss, or alteration.
          </p>
        </section>
      </article>

      <footer className="mt-16 pt-8 border-hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 style-meta-tag text-[9px] text-white/50">
        <Link href="/" className="hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          <Link href="/refund" className="hover:text-white">Refund Policy</Link>
        </div>
      </footer>
    </main>
  );
}
