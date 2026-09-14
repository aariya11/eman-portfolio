"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";

export function EditorialIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const quoteOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, 0.9], [0, 1, 1, 0.2]);
  const quoteY = useTransform(scrollYProgress, [0.15, 0.4], [50, 0]);
  const subQuoteOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  return (
    <section
      id="editorial-intro"
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center py-32 px-6 md:px-12 border-y border-white/5 bg-obsidian-950/60"
      aria-label="Editorial Philosophy Statement"
    >
      {/* Background Micro Coordinates */}
      <div className="absolute top-10 left-8 md:left-16 font-mono text-[9px] text-ivory-dim tracking-widest uppercase select-none">
        01 // THE DOCTRINE OF PREPARATION
      </div>
      <div className="absolute bottom-10 right-8 md:right-16 font-mono text-[9px] text-ivory-dim tracking-widest uppercase select-none">
        40.7128° N, 74.0060° W // NY CME
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Large Statement */}
        <motion.div style={{ opacity: quoteOpacity, y: quoteY }} className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-ivory font-light tracking-wide">
            {profileData.editorialStatement.headlinePrimary}
            <br />
            <span className="text-champagne font-normal italic">
              {profileData.editorialStatement.headlineSecondary}
            </span>
          </h2>
        </motion.div>

        {/* Revealed Sub-Quote */}
        <motion.div
          style={{ opacity: subQuoteOpacity }}
          className="max-w-2xl mx-auto pt-6 border-t border-champagne/20"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory-muted leading-relaxed font-light italic">
            &ldquo;{profileData.editorialStatement.bodyQuote}&rdquo;
          </p>
          <p className="font-mono text-xs text-champagne tracking-widest uppercase mt-4">
            — Eman Trades
          </p>
        </motion.div>
      </div>
    </section>
  );
}
