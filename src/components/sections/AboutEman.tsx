"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { CheckCircle2 } from "lucide-react";

export function AboutEman() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 bg-obsidian"
      aria-label="About Eman Trades"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
            02 // BIOGRAPHY & PEDIGREE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-tight">
            {profileData.biography.sectionHeadline}{" "}
            <span className="text-champagne italic font-normal">
              {profileData.biography.sectionSubheadline}
            </span>
          </h2>
        </div>

        {/* Dual Column Layout: Portrait on one side, Biography & Stats on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 group shadow-2xl"
              data-cursor="view"
            >
              <Image
                src="/images/trades/eman_trade_02.jpg"
                alt="Eman — Market Analyst and Financial Strategist"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                className="object-cover object-center filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />

              {/* Inset Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-obsidian-950/80 backdrop-blur-md border border-white/10">
                <p className="font-mono text-[10px] text-champagne tracking-widest uppercase">
                  OPERATOR PROFILE
                </p>
                <p className="font-serif text-base text-ivory">
                  Eman • Market Structure & Asymmetric Flow
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Biography & Statistics */}
          <div className="lg:col-span-7 space-y-10">
            {/* Lead Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl sm:text-3xl text-ivory leading-relaxed font-light"
            >
              {profileData.biography.lead}
            </motion.p>

            {/* Paragraphs */}
            <div className="space-y-6 text-sm sm:text-base text-ivory-muted leading-relaxed font-light">
              {profileData.biography.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* 4 Statistics / Specification Cards */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileData.metrics.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="p-5 bg-obsidian-900/60 border border-white/10 rounded-sm hover:border-champagne/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase">
                        {metric.label}
                      </span>
                      {metric.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne/80" />
                      )}
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl text-ivory group-hover:text-champagne transition-colors mb-1">
                      {metric.value}
                    </div>
                    <p className="font-mono text-[11px] text-ivory-muted leading-snug">
                      {metric.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
