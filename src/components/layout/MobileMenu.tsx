"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MarketStatus } from "@/lib/marketHours";
import { ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
  marketStatus: MarketStatus | null;
}

export function MobileMenu({ isOpen, onClose, links, marketStatus }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden"
        >
          {/* Top Session Telemetry */}
          {marketStatus && (
            <div className="border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`w-2 h-2 rounded-full ${
                    marketStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-500"
                  }`}
                />
                <span className="font-mono text-xs text-champagne tracking-widest uppercase">
                  {marketStatus.statusText}
                </span>
              </div>
              <p className="font-mono text-[11px] text-ivory-muted">
                {marketStatus.activeSession}
              </p>
            </div>
          )}

          {/* Links list with large editorial typography */}
          <nav className="flex flex-col space-y-6 my-auto" aria-label="Mobile Navigation">
            {links.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between text-3xl font-serif tracking-widest text-ivory hover:text-champagne transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Footer Info */}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-2">
            <p className="font-mono text-xs text-champagne tracking-widest">
              EMAN TRADES • INSTITUTIONAL FLOW
            </p>
            <p className="font-mono text-[10px] text-ivory-dim">
              Markets. Discipline. Precision.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
