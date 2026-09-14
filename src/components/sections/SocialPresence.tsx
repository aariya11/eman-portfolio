"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";

export function SocialPresence() {
  return (
    <section
      id="socials"
      className="relative py-28 px-6 md:px-12 bg-obsidian border-t border-white/5"
      aria-label="Social Presence"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
            08 // PUBLIC DISCOURSE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal mb-3">
            {socialsData.sectionTitle}
          </h2>
          <p className="font-mono text-xs text-ivory-dim tracking-widest uppercase">
            {socialsData.sectionSubtitle}
          </p>
        </div>

        {/* Channels Grid with Refined Luxury Hover States */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socialsData.channels.map((ch, idx) => (
            <motion.a
              key={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group p-6 bg-obsidian-900 border border-white/10 rounded-sm hover:border-champagne transition-all duration-300 flex flex-col justify-between min-h-[160px] relative overflow-hidden"
              data-cursor="pointer"
            >
              {/* Subtle hover backlight */}
              <div className="absolute inset-0 bg-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-widest text-ivory-dim uppercase group-hover:text-champagne transition-colors">
                  CHANNEL 0{idx + 1}
                </span>
                <div className="p-2 rounded-full border border-white/10 group-hover:border-champagne group-hover:bg-champagne group-hover:text-obsidian text-ivory-muted transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors">
                  {ch.name}
                </h3>
                <p className="font-mono text-[11px] text-champagne/90 tracking-wider mt-1">
                  {ch.handle}
                </p>
                <p className="font-sans text-xs text-ivory-muted leading-snug mt-2 line-clamp-2">
                  {ch.subtext}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
