import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-12">
      {/* Top Bar */}
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity"
        >
          ← Eman Trades
        </Link>
        <span className="style-meta-tag text-[9px] text-white/50 tracking-widest uppercase">
          Status Code // 404
        </span>
      </header>

      {/* Center Content */}
      <main className="max-w-xl mx-auto py-16 text-center space-y-8">
        <div className="w-14 h-14 mx-auto rounded-full border border-white/20 flex items-center justify-center bg-white/[0.03]">
          <Compass className="w-6 h-6 text-white/80 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="space-y-4">
          <span className="style-meta-tag text-xs tracking-[0.3em] text-white/40 uppercase block">
            Liquidity Void // Out of Range
          </span>
          <h1 className="style-hero-name text-4xl sm:text-6xl text-white tracking-tight">
            Invalidation Encountered
          </h1>
          <p className="style-copy-body text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed">
            The requested market dossier, monograph, or execution archive does not exist at this coordinate. The route may have been re-indexed or decommissioned.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors shadow-xl focus-visible:ring-2 focus-visible:ring-white outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Flagship Terminal</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 border border-white/20 text-white hover:border-white text-xs tracking-[0.18em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
          >
            Report Missing Route
          </Link>
        </div>

        {/* Directory Links */}
        <div className="pt-10 border-hairline-t space-y-3">
          <span className="style-meta-tag text-[9px] text-white/40 tracking-wider block uppercase">
            Active Institutional Directory
          </span>
          <nav aria-label="Directory navigation" className="flex flex-wrap justify-center gap-4 text-xs style-meta-tag">
            <Link href="/about" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              About Desk
            </Link>
            <Link href="/markets" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Markets
            </Link>
            <Link href="/trades" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Executions
            </Link>
            <Link href="/performance" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Performance
            </Link>
            <Link href="/journal" className="text-white/60 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Journal
            </Link>
          </nav>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center style-meta-tag text-[8.5px] text-white/40">
        EMAN TRADES • SYSTEMATIC ORDER FLOW &amp; RISK ENGINEERING
      </footer>
    </div>
  );
}
