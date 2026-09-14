import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Eman Trades",
  description: "Transparent disclosure of our essential functional cookies and local storage tokens under the EU ePrivacy Directive and UK PECR.",
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="style-meta-tag text-white/40 text-[9px] tracking-[0.2em]">
          Effective Date: January 1, 2026 • Last Reviewed: September 14, 2026
        </p>
      </header>

      <article className="space-y-10 text-white/80 style-copy-body text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            01. Purpose &amp; Overview
          </h2>
          <p>
            This Cookie Policy explains how <strong>Eman Trades</strong> uses cookies, client-side web storage (localStorage), and similar technologies when you visit our website.
          </p>
          <p>
            Our core philosophy prioritizes privacy and performance. We believe in high-integrity digital craftsmanship without invasive surveillance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            02. Clear Declaration: Zero Third-Party Tracking Cookies
          </h2>
          <div className="border border-white/20 p-5 bg-white/[0.02]">
            <p className="font-semibold text-white">
              We do not use advertising cookies, social media tracking pixels, cross-site behavioral tracking scripts, or commercial data-harvesting tools.
            </p>
          </div>
          <p>
            You will not encounter third-party trackers (such as Google Remarketing, Meta Pixel, or TikTok Ads) on this website. We respect your digital sovereignty.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            03. Inventory of Tokens &amp; Storage Used
          </h2>
          <p>
            Under the EU ePrivacy Directive (Directive 2002/58/EC) and UK PECR, the only tokens utilized by our site are <strong>Strictly Necessary Functional Items</strong> required for interface operation:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border border-white/10 text-xs">
              <thead className="bg-white/5 style-meta-tag text-[9px] text-white/70">
                <tr>
                  <th className="p-3 border-hairline-b">Identifier</th>
                  <th className="p-3 border-hairline-b">Type</th>
                  <th className="p-3 border-hairline-b">Duration</th>
                  <th className="p-3 border-hairline-b">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/75">
                <tr>
                  <td className="p-3 font-mono text-white">eman_cookie_consent</td>
                  <td className="p-3">localStorage</td>
                  <td className="p-3">Persistent (1 year)</td>
                  <td className="p-3">Remembers your acknowledgement of our privacy &amp; cookie notice.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            04. How to Control or Delete Cookies
          </h2>
          <p>
            Because we only use strictly necessary functional tokens, the site operates without storing personal profile data. However, you can manage, block, or clear cookies and local storage tokens directly through your web browser settings at any time:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-white/70">
            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies.</li>
            <li><strong>Apple Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
            <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="style-meta-tag text-white text-xs tracking-[0.2em]">
            05. Contact Regarding Cookies
          </h2>
          <p>
            If you have questions about our privacy-preserving infrastructure, contact our desk via email at{" "}
            <a href="mailto:desk@emantrades.com" className="text-white underline">
              desk@emantrades.com
            </a>
            .
          </p>
        </section>
      </article>

      <footer className="mt-16 pt-8 border-hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 style-meta-tag text-[9px] text-white/50">
        <Link href="/" className="hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="/refund" className="hover:text-white">Refund Policy</Link>
        </div>
      </footer>
    </main>
  );
}
