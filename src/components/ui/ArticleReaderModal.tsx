"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JournalArticle } from "@/data/journal";
import Image from "next/image";
import { X, Clock, Calendar, Bookmark, CheckCircle2 } from "lucide-react";

interface ArticleReaderModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export function ArticleReaderModal({ article, onClose }: ArticleReaderModalProps) {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [article]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-8 bg-obsidian-950/95 backdrop-blur-2xl overflow-y-auto">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl bg-obsidian-900 border border-white/10 rounded-sm shadow-2xl my-auto overflow-hidden text-ivory"
        >
          {/* Close Action Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-obsidian-900/90 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-widest text-champagne uppercase px-2.5 py-1 border border-champagne/30 rounded-sm">
                {article.category}
              </span>
              <span className="font-mono text-xs text-ivory-dim flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-ivory-muted hover:text-ivory hover:bg-white/5 rounded-full transition-colors flex items-center gap-1 text-xs font-mono"
              aria-label="Close article reader"
            >
              <span>ESC</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-12 max-h-[85vh] overflow-y-auto space-y-8">
            {/* Meta & Title */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-ivory-dim mb-3">
                <Calendar className="w-3.5 h-3.5 text-champagne" />
                <span>{article.date}</span>
                <span>•</span>
                <span>BY EMAN TRADES</span>
              </div>

              <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight font-medium mb-4">
                {article.title}
              </h2>

              <p className="font-serif italic text-lg md:text-xl text-champagne/90 leading-relaxed border-l-2 border-champagne pl-4">
                {article.subtitle}
              </p>
            </div>

            {/* Article Image Banner */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-sm border border-white/10">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Lead Paragraph */}
            <p className="font-sans text-base md:text-lg text-ivory/90 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-champagne first-letter:mr-2 first-letter:float-left">
              {article.content.lead}
            </p>

            {/* Content Sections */}
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h3 className="font-serif text-2xl text-ivory font-medium tracking-wide">
                  {section.heading}
                </h3>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} className="font-sans text-sm md:text-base text-ivory-muted leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.highlightQuote && (
                  <blockquote className="my-6 p-6 bg-obsidian-950 border-l-2 border-champagne rounded-r-sm">
                    <p className="font-serif italic text-lg text-ivory leading-snug">
                      &ldquo;{section.highlightQuote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            ))}

            {/* Key Takeaways Box */}
            <div className="p-6 md:p-8 bg-obsidian-950 border border-white/10 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="w-4 h-4 text-champagne" />
                <h4 className="font-mono text-xs tracking-widest text-champagne uppercase">
                  OPERATIONAL TAKEAWAYS
                </h4>
              </div>
              <ul className="space-y-3">
                {article.content.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-sm text-ivory-muted">
                    <CheckCircle2 className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </AnimatePresence>
  );
}
