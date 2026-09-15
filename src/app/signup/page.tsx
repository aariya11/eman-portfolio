import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { UserCheck, Shield, CheckCircle2 } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/LiquidMetal";

export const metadata: Metadata = {
  title: "Mentorship Application & Registration | Eman Trades",
  description: "Apply for 1-on-1 private trading mentorship with Eman. Limited onboarding allocations for serious market operators.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-12">
      <header className="flex items-center justify-between">
        <Link href="/" className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity">
          ← Eman Trades
        </Link>
        <span className="style-meta-tag text-[9px] text-white/50 tracking-widest uppercase">
          Private Onboarding Application
        </span>
      </header>

      <main className="max-w-lg w-full mx-auto py-12 space-y-8">
        <div className="space-y-3 text-center">
          <div className="w-10 h-10 mx-auto rounded-full border border-white/20 flex items-center justify-center bg-white/[0.03]">
            <UserCheck className="w-4 h-4 text-white/80" />
          </div>
          <h1 className="style-hero-name text-2xl sm:text-3xl text-white">Private Mentorship Application</h1>
          <p className="style-copy-body text-xs text-white/60 max-w-sm mx-auto">
            Direct 1-on-1 guidance covering institutional order flow, auction market theory, and probabilistic risk caps.
          </p>
        </div>

        <div className="border border-white/15 p-6 bg-white/[0.02] space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="style-copy-body text-xs text-white/80 leading-relaxed">
              <strong>Direct Desk Access:</strong> Daily preparation, live session market review, and continuous thesis validation.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="style-copy-body text-xs text-white/80 leading-relaxed">
              <strong>Mathematical Risk Protocols:</strong> Strictly capped 0.5%–1.0% fractional risk models for long-term capital defense.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="style-copy-body text-xs text-white/80 leading-relaxed">
              <strong>Confidential Onboarding:</strong> Direct consultation on WhatsApp at +92 315 6828906.
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <a
            href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20am%20applying%20for%20your%201-on-1%20Private%20Trading%20Mentorship%20program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <LiquidMetalButton size="lg">
              Initiate Mentorship Application via WhatsApp →
            </LiquidMetalButton>
          </a>
        </div>

        <div className="pt-4 text-center">
          <Link
            href="/login"
            className="style-meta-tag text-[10px] text-white/50 hover:text-white transition-colors tracking-wider uppercase"
          >
            Already an active advisory client? Sign In →
          </Link>
        </div>
      </main>

      <footer className="text-center style-meta-tag text-[8.5px] text-white/40">
        EMAN TRADES • LONDON &amp; DUBAI DESKS • STRICT COMPLIANCE
      </footer>
    </div>
  );
}
