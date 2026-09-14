"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("eman_cookie_consent");
      if (!consent) {
        // Small delay for smooth entry
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may be unavailable in private browsing
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("eman_cookie_consent", "accepted");
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("eman_cookie_consent", "necessary_only");
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie & Privacy Preferences"
          className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-[420px] z-50 bg-[#0a0a0a] border border-white/20 p-5 shadow-2xl backdrop-blur-md"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="style-meta-tag text-[8px] text-white/50 tracking-[0.2em]">
                Privacy &amp; Data Notice
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            </div>

            <p className="style-copy-body text-white/80 text-[12.5px] leading-[19px]">
              This site strictly uses essential session and functional tokens. We do not use third-party tracking, advertising, or profiling cookies. Review our{" "}
              <Link
                href="/cookies"
                className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors focus-visible:ring-1 focus-visible:ring-white outline-none"
              >
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors focus-visible:ring-1 focus-visible:ring-white outline-none"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAccept}
                className="flex-1 py-2.5 px-4 bg-white text-black font-semibold text-[9.5px] tracking-[0.2em] uppercase hover:bg-neutral-200 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none cursor-pointer"
                data-cursor="pointer"
              >
                Accept Necessary
              </button>
              <button
                type="button"
                onClick={handleDecline}
                className="py-2.5 px-3 border border-white/20 hover:border-white/60 text-white/70 hover:text-white text-[9.5px] tracking-[0.2em] uppercase transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black outline-none cursor-pointer"
                data-cursor="pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
