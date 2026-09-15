"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors for operational tracking
    console.error("Runtime Exception:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-12">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity"
        >
          ← Eman Trades
        </Link>
        <span className="style-meta-tag text-[9px] text-white/50 tracking-widest uppercase">
          System Recovery Mode
        </span>
      </header>

      <main className="max-w-md mx-auto py-16 text-center space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full border border-rose-500/30 flex items-center justify-center bg-rose-950/20 text-rose-400">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="style-meta-tag text-[10px] text-rose-400/80 tracking-widest uppercase block">
            Interface Exception Handled
          </span>
          <h1 className="style-hero-name text-3xl sm:text-4xl text-white">
            Execution Interrupted
          </h1>
          <p className="style-copy-body text-xs text-white/60 leading-relaxed max-w-sm mx-auto">
            A client-side runtime exception occurred during layout rendering. Your session data remains safe.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Interface</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white hover:border-white text-xs tracking-[0.18em] uppercase transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>

      <footer className="text-center style-meta-tag text-[8.5px] text-white/40">
        AUTOMATED CLIENT RESILIENCE • EMAN TRADES
      </footer>
    </div>
  );
}
