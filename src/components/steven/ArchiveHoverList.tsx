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
    <div className="w-full max-w-[1080px] mx-auto py-28 px-6 md:px-10 relative">
      <div className="mb-8">
        <span className="style-meta-uppercase text-white/50 block">
          Historical Ledger &amp; Selected Case Studies
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
        {/* Left: Numbered Archive Items */}
        <div className="lg:col-span-6 space-y-2.5">
          {entries.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectEntry && onSelectEntry(item)}
                className="cursor-pointer transition-opacity duration-200 py-1"
                data-cursor="explore"
              >
                <p
                  className={`style-copy-8px transition-colors duration-200 ${
                    isHovered ? "text-white opacity-100 font-medium" : "text-white/40"
                  }`}
                >
                  {item.number}. {item.title} {item.year}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right / Center: Floating Image Preview (Steven Mengin signature) */}
        <div className="hidden lg:block lg:col-span-6 sticky top-36 h-[340px] pointer-events-none">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full h-full border border-white/10 overflow-hidden bg-black shadow-2xl"
              >
                <Image
                  src={entries[hoveredIndex].image}
                  alt={entries[hoveredIndex].title}
                  fill
                  sizes="480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[8px] font-mono text-white/70 style-meta-uppercase">
                  <span>{entries[hoveredIndex].category}</span>
                  <span>{entries[hoveredIndex].year}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
