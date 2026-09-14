"use client";

import React from "react";
import { motion } from "framer-motion";
import { philosophyData } from "@/data/philosophy";
import { Shield } from "lucide-react";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 px-6 md:px-12 bg-obsidian-950/80 border-t border-white/5"
      aria-label="Trading Philosophy"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
            03 // CORE PHILOSOPHY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory tracking-tight font-normal leading-[1.05] mb-4">
            {philosophyData.sectionTitle}
          </h2>
          <p className="font-mono text-xs text-ivory-dim tracking-widest uppercase">
            {philosophyData.sectionSubtitle}
          </p>
        </div>

        {/* 4 Principles List with Large Numbers & Editorial Layout */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {philosophyData.principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/[0.015] transition-colors px-4 -mx-4 rounded-sm"
            >
              {/* Large Editorial Number */}
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-ivory/20 group-hover:text-champagne transition-colors duration-500">
                  {principle.number}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-champagne uppercase font-medium">
                  TENET
                </span>
              </div>

              {/* Principle Title & Subtitle */}
              <div className="lg:col-span-5 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                  {principle.title}
                </h3>
                <p className="font-sans text-sm text-champagne/90 italic font-light">
                  {principle.subtitle}
                </p>
              </div>

              {/* Elaboration & Non-Negotiable Rule */}
              <div className="lg:col-span-4 space-y-4">
                <p className="font-sans text-sm text-ivory-muted leading-relaxed font-light">
                  {principle.elaboration}
                </p>

                <div className="p-3 bg-obsidian-900 border-l-2 border-champagne text-xs font-mono text-ivory/90 flex items-start gap-2">
                  <Shield className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-champagne uppercase">Mandate:</strong>{" "}
                    {principle.actionRule}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
