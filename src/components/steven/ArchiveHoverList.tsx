"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface ArchiveEntry {
  number: string;
  title: string;
  year: string;
  category: string;
  image: string;
  detailSnippet?: string;
}

interface ArchiveHoverListProps {
  entries: ArchiveEntry[];
  onSelectEntry?: (entry: ArchiveEntry) => void;
}

export function ArchiveHoverList({ entries, onSelectEntry }: ArchiveHoverListProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[1080px] mx-auto py-20 sm:py-28 md:py-32 px-4 sm:px-8 md:px-10 relative">
      <div className="mb-8 sm:mb-10">
        <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.2em]">
          Historical Ledger &amp; Selected Case Studies
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left Column: Numbered Archive Items */}
        <div className="lg:col-span-6 space-y-3">
          {entries.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.number}
                tabIndex={0}
                role="button"
                aria-label={`View chart for ${item.title}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectEntry && onSelectEntry(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectEntry && onSelectEntry(item);
                  }
                }}
                className="cursor-pointer transition-opacity duration-200 py-1 focus-visible:ring-1 focus-visible:ring-white outline-none"
                data-cursor="explore"
              >
                <p
                  className={`style-copy-body transition-colors duration-200 text-[11px] sm:text-[12px] leading-[18px] ${
                    isHovered ? "text-white opacity-100 font-medium" : "text-white/45 hover:text-white/80"
                  }`}
                >
                  <span className="text-white/30 mr-1.5">{item.number}.</span> {item.title} <span className="text-white/30">({item.year})</span>
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Floating Image Preview */}
        <div className="hidden lg:block lg:col-span-6 sticky top-36 h-[330px] pointer-events-none">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="relative w-full h-full border border-white/10 overflow-hidden bg-black"
              >
                <Image
                  src={entries[hoveredIndex].image}
                  alt={entries[hoveredIndex].title}
                  fill
                  sizes="480px"
                  className="object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between style-meta-tag text-[7.5px] text-white/60">
                  <span>{entries[hoveredIndex].category}</span>
                  <span>{entries[hoveredIndex].year}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
