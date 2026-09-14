"use client";

import React from "react";
import { socialsData } from "@/data/socials";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "WORK", href: "#case-studies" },
    { label: "ABOUT", href: "#about" },
    { label: "PHILOSOPHY", href: "#philosophy" },
    { label: "MARKETS", href: "#markets" },
    { label: "PERFORMANCE", href: "#performance" },
    { label: "JOURNAL", href: "#journal" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-obsidian-950 border-t border-white/5 pt-20 pb-12 px-6 md:px-12 text-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-ivory block mb-2">
                EMAN TRADES
              </span>
              <p className="font-mono text-xs tracking-[0.3em] text-champagne uppercase mb-6">
                Markets. Discipline. Precision.
              </p>
              <p className="font-sans text-sm text-ivory-muted max-w-sm leading-relaxed">
                Institutional market analysis and disciplined execution. Operating at the frontier of market structure and probabilistic capital preservation.
              </p>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[10px] tracking-widest text-ivory-dim block uppercase mb-1">
                CURRENT BASE OF OPERATIONS
              </span>
              <span className="font-mono text-xs text-ivory tracking-wider">
                London • Dubai • New York
              </span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] tracking-[0.25em] text-champagne uppercase mb-6">
              INDEX
            </h4>
            <ul className="space-y-3" aria-label="Footer Links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-mono text-xs tracking-wider text-ivory-muted hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.25em] text-champagne uppercase mb-6">
                CHANNELS
              </h4>
              <ul className="space-y-3">
                {socialsData.channels.map((ch) => (
                  <li key={ch.id}>
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs tracking-wider text-ivory-muted hover:text-champagne flex items-center justify-between group"
                    >
                      <span>{ch.name}</span>
                      <span className="text-[10px] text-ivory-dim group-hover:text-champagne transition-colors">
                        {ch.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 font-mono text-xs text-ivory-muted hover:text-champagne transition-colors"
                aria-label="Scroll back to top of page"
              >
                <span>RETURN TO TOP</span>
                <span className="p-2 rounded-full border border-white/10 group-hover:border-champagne/40 transition-colors">
                  <ArrowUp className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory Risk Disclaimer & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] text-ivory-dim leading-relaxed">
              <strong className="text-ivory-muted font-medium">RISK DISCLOSURE:</strong> Trading financial markets involves substantial risk of loss and is not suitable for every investor. Nothing on this website constitutes financial advice, investment recommendation, or solicitation of funds. Past performance is not indicative of future results. All content is strictly educational and analytical research.
            </p>
          </div>

          <div className="font-mono text-[10px] text-ivory-dim tracking-wider whitespace-nowrap">
            © {new Date().getFullYear()} EMAN TRADES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
