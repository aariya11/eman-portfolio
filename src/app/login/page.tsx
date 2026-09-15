import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/LiquidMetal";

export const metadata: Metadata = {
  title: "Desk Member Access | Eman Trades",
  description: "Secure institutional portal for Eman Trades private advisory clients and verified mentorship operators.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between p-6 sm:p-12">
      <header className="flex items-center justify-between">
        <Link href="/" className="style-meta-tag text-xs tracking-wider text-white hover:text-white/60 transition-opacity">
          ← Eman Trades
        </Link>
        <span className="style-meta-tag text-[9px] text-white/50 tracking-widest uppercase">
          Desk Authentication
        </span>
      </header>

      <main className="max-w-md w-full mx-auto py-16 space-y-8">
        <div className="space-y-3 text-center">
          <div className="w-10 h-10 mx-auto rounded-full border border-white/20 flex items-center justify-center bg-white/[0.03]">
            <Lock className="w-4 h-4 text-white/80" />
          </div>
          <h1 className="style-hero-name text-2xl sm:text-3xl text-white">Client Portal Access</h1>
          <p className="style-copy-body text-xs text-white/60 max-w-sm mx-auto">
            Restricted to active 1-on-1 private advisory clients and institutional prop firm operators.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="style-meta-tag text-[9px] block text-white/50 tracking-wider">
              AUTHORIZED DESK EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="operator@institution.com"
              className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="style-meta-tag text-[9px] block text-white/50 tracking-wider">
              CLIENT ACCESS KEY / PIN
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full bg-white/[0.04] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-white transition-colors tracking-widest"
            />
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/923156828906?text=Hello%20Eman,%20I%20need%20assistance%20accessing%20the%20Desk%20Portal."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <LiquidMetalButton size="md" className="w-full justify-center">
                Authenticate Access Key →
              </LiquidMetalButton>
            </a>
          </div>
        </form>

        <div className="pt-6 border-hairline-t text-center space-y-2">
          <p className="style-copy-body text-[11px] text-white/50">
            Do not possess an active desk access key?
          </p>
          <Link
            href="/signup"
            className="style-meta-tag text-[10px] text-white hover:underline underline-offset-4 tracking-wider uppercase block"
          >
            Apply for Private Mentorship Registration →
          </Link>
        </div>
      </main>

      <footer className="text-center style-meta-tag text-[8.5px] text-white/40">
        CONFIDENTIAL &amp; PROPRIETARY • SYSTEMATIC EXECUTION DESK
      </footer>
    </div>
  );
}
