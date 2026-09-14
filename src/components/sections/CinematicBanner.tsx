"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function CinematicBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[75vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center border-y border-white/10"
      aria-label="Cinematic Visual Narrative"
    >
      {/* Parallax Image Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
      >
        <Image
          src="/images/trades/eman_trade_03.jpg"
          alt="Eman Trades Market Structure Analysis Setup"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover filter brightness-[0.45] contrast-[1.15]"
        />
      </motion.div>

      {/* Cinematic Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian opacity-80 pointer-events-none" />

      {/* Center Statement Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs md:text-sm tracking-[0.35em] text-champagne uppercase block font-medium"
        >
          SYSTEMIC EXTRACTION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-light tracking-wide leading-tight"
        >
          READ THE NOISE.
          <br />
          <span className="text-champagne font-normal italic">FIND THE SIGNAL.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs text-ivory-muted tracking-widest uppercase pt-2"
        >
          Global Macro Inefficiency • Algorithmic Liquidity Convergence
        </motion.p>
      </div>

      {/* Subtle Bottom Right Coordinate */}
      <div className="absolute bottom-6 right-8 font-mono text-[9px] text-ivory-dim tracking-widest uppercase select-none hidden md:block">
        LONDON 51.5074° N // TOKYO 35.6762° N // NYC 40.7128° N
      </div>
    </section>
  );
}
