import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Eman Trades",
  description: "Official Refund and Cancellation Policy governing 1-on-1 trading mentorship programs and educational advisory services.",
};

export default function RefundPolicyPage() {
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
          Refund &amp; Cancellation Policy
        </h1>
        <p className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em]">
          Effective Date: January 1, 2026 • Last Reviewed: September 14, 2026
        </p>
      </header>

      <article className="space-y-10 text-white/80 style-copy-body text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            01. Scope &amp; Commitment
          </h2>
          <p>
            At <strong>Eman Trades</strong>, our 1-on-1 mentorship programs and analytical advisories are high-touch, customized educational engagements designed for dedicated operators. Because each mentorship place requires significant allocation of desk preparation, proprietary material access, and dedicated calendar time, this policy outlines the terms under which cancellations and refunds are administered.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            02. Cancellation &amp; Full Refund Window
          </h2>
          <div className="border border-white/20 p-5 bg-white/[0.02] space-y-2">
            <p className="font-semibold text-white">
              48-Hour Pre-Commencement Cancellation Window:
            </p>
            <p className="text-white/80 text-xs">
              You are entitled to a full 100% refund of fees paid if you request cancellation in writing within forty-eight (48) hours of your initial booking confirmation, provided that:
            </p>
            <ul className="list-disc pl-6 text-xs text-white/70 space-y-1">
              <li>Your first live 1-on-1 consultation session has not yet commenced.</li>
              <li>Proprietary trade playbooks, institutional frameworks, or recorded curriculum assets have not yet been distributed or accessed.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            03. Non-Refundable Circumstances
          </h2>
          <p>
            Fees paid become strictly <strong>non-refundable</strong> under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              <strong>Delivery of Digital Intellectual Property:</strong> Once proprietary trading playbooks, model blueprints, or customized strategy documents have been transmitted to your email or downloaded, the service is deemed digitally consumed.
            </li>
            <li>
              <strong>Commencement of Sessions:</strong> Once the first live 1-on-1 mentorship session has taken place, no refunds (partial or full) will be granted.
            </li>
            <li>
              <strong>Unexcused No-Shows:</strong> Failure to attend a scheduled 1-on-1 session without at least 24 hours prior written notice results in forfeiture of that session.
            </li>
            <li>
              <strong>Trading Performance:</strong> Because financial markets involve probabilistic uncertainty and individual execution discretion, refunds are never granted based on personal trading results, market volatility, or account performance.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            04. Rescheduling Policy
          </h2>
          <p>
            We recognize that unforeseen market commitments or personal emergencies occur. You may reschedule any confirmed 1-on-1 mentorship session without fee or penalty, provided you give at least <strong>twenty-four (24) hours advance written notice</strong> to our desk via email or verified WhatsApp.
          </p>
          <p>
            Rescheduled sessions must be completed within sixty (60) days of the original date, subject to desk calendar availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            05. Refund Processing Mechanics
          </h2>
          <p>
            Approved refunds are credited back to the original method of payment (bank transfer, institutional invoice, or clearing payment provider) within five (5) to ten (10) business days following written approval from our desk. We do not deduct arbitrary administrative processing fees for qualifying cancellations within the 48-hour window.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            06. How to Request Cancellation or Rescheduling
          </h2>
          <p>
            To initiate a formal cancellation or reschedule request, transmit your booking reference and details to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li>
              Email:{" "}
              <a href="mailto:desk@emantrades.com" className="text-white underline">
                desk@emantrades.com
              </a>
            </li>
            <li>
              Official Desk WhatsApp:{" "}
              <a href="https://wa.me/923156828906" className="text-white underline">
                +92 315 6828906
              </a>
            </li>
          </ul>
        </section>
      </article>

      <footer className="mt-16 pt-8 border-hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 style-meta-tag text-[9px] text-white/50">
        <Link href="/" className="hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
        </div>
      </footer>
    </main>
  );
}
