"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { journalData, JournalArticle } from "@/data/journal";
import { ArticleReaderModal } from "@/components/ui/ArticleReaderModal";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export function Journal() {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <>
      <section
        id="journal"
        className="relative py-32 px-6 md:px-12 bg-obsidian-950/80 border-t border-white/5"
        aria-label="Trading Journal & Editorial Articles"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase block mb-3">
                07 // EDITORIAL COMMENTARY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory tracking-tight font-normal">
                {journalData.sectionTitle}
              </h2>
            </div>
            <p className="font-mono text-xs text-ivory-dim tracking-widest uppercase max-w-xs">
              {journalData.sectionSubtitle}
            </p>
          </div>

          {/* Articles Grid: Luxury Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {journalData.articles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveArticle(article)}
                className="group cursor-pointer flex flex-col justify-between p-6 md:p-8 bg-obsidian-900/60 border border-white/10 rounded-sm hover:border-champagne/40 transition-all duration-500 relative"
                data-cursor="view"
              >
                <div>
                  {/* Article Thumbnail Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm mb-6 border border-white/5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[9px] tracking-widest text-champagne uppercase px-3 py-1 bg-obsidian-950/80 backdrop-blur-md border border-white/10 rounded-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center gap-3 font-mono text-[11px] text-ivory-dim mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-champagne" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-champagne" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory group-hover:text-champagne transition-colors duration-300 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  {/* Short Excerpt */}
                  <p className="font-sans text-sm text-ivory-muted leading-relaxed font-light line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Prompt Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-ivory-dim group-hover:text-champagne transition-colors">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      <ArticleReaderModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </>
  );
}
