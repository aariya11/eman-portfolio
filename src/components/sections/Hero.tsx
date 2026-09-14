"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, ShieldCheck, TrendingUp } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  const words = profileData.heroHeadline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12"
      aria-label="Hero Section"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-charcoal/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Grid: Asymmetric Editorial Split */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Editorial Typography & Positioning */}
        <motion.div
          style={{ y: textY, opacity }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          {/* Tagline / Sub-header */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-champagne" />
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-champagne uppercase font-medium">
              {profileData.tagline}
            </span>
          </div>

          {/* Large Hero Headline: "She reads the market differently." */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ivory font-normal">
            {words.map((word, i) => (
              <span key={i} className="inline-block mr-[0.3em] overflow-hidden">
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-base sm:text-lg md:text-xl text-ivory-muted max-w-xl leading-relaxed font-light"
          >
            {profileData.heroSupportingCopy}
          </motion.p>

          {/* Verified Institutional Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-ivory-dim"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-champagne" />
              <span>STRICT RISK MANAGEMENT</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-champagne" />
              <span>ASYMMETRIC LIQUIDITY FLOWS</span>
            </div>
          </motion.div>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <MagneticButton href="#case-studies" variant="primary" data-cursor="explore">
              EXPLORE THE JOURNEY
            </MagneticButton>

            <MagneticButton href="#performance" variant="secondary" data-cursor="view">
              VIEW PERFORMANCE
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column: High-Fashion / Institutional Editorial Portrait */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-sm border border-white/10 group shadow-2xl"
            data-cursor="view"
          >
            {/* Portrait Image with slow scale */}
            <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
              <Image
                src="/images/trades/eman_trade_01.jpg"
                alt="Eman Trades — Professional Institutional Trader and Market Analyst"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover object-top filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-50" />

            {/* Micro Editorial Badge on Portrait */}
            <div className="absolute bottom-5 left-5 right-5 p-4 bg-obsidian-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-champagne uppercase block">
                  PORTFOLIO LEAD
                </span>
                <span className="font-serif text-sm tracking-wider text-ivory">
                  EMAN TRADES
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-widest text-ivory-dim border border-white/10 px-2 py-1 uppercase">
                EST. 2018
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.a
        href="#editorial-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer text-ivory-dim hover:text-champagne transition-colors"
        aria-label="Scroll to introduction"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-champagne" />
        </motion.div>
      </motion.a>
    </section>
  );
}
