"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

export interface ShowcaseProject {
  id: string;
  year: string;
  title: string;
  category: string;
  role: string;
  narrative: string[];
  links: Array<{ label: string; url?: string }>;
  slides: Array<{
    image: string;
    caption?: string;
  }>;
}

interface ProjectShowcaseProps {
  project: ShowcaseProject;
  onExpandSlide?: (image: string, title: string) => void;
}

export function ProjectShowcase({ project, onExpandSlide }: ProjectShowcaseProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorSide, setCursorSide] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorSide(x > rect.width / 2 ? "right" : "left");
  };

  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  // Mobile swipe gesture handler
  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 35;
    const velocityThreshold = 250;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      prevSlide();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[1080px] mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-10 border-hairline-b"
    >
      {/* Top Row: Year, Title, and Slideshow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
        {/* Left Column: Year & Title */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-4 space-y-3"
        >
          <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.2em]">
            {project.year}
          </span>
          <h2 className="style-project-title break-words">
            {project.title}
          </h2>
        </motion.div>

        {/* Right Column: Interactive Slideshow */}
        <div className="lg:col-span-8 relative">
          <motion.div
            tabIndex={0}
            role="region"
            aria-label={`${project.title} trading chart slideshow. Use left and right arrow keys or swipe to navigate slides.`}
            onClick={handleSlideClick}
            onMouseMove={handleMouseMove}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                nextSlide();
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                prevSlide();
              }
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full aspect-[16/9] bg-black overflow-hidden group cursor-pointer border border-white/15 select-none focus-visible:ring-2 focus-visible:ring-white outline-none"
            data-cursor="pointer"
          >
            {/* Slide Images with animated crossfade and mobile touch drag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full touch-pan-y"
              >
                <Image
                  src={project.slides[currentSlide].image}
                  alt={`${project.title} - Trade execution chart slide ${currentSlide + 1} of ${project.slides.length}`}
                  fill
                  priority={project.id === "es-liquidity-sweep-2025" && currentSlide === 0}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 754px"
                  className="object-cover pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Slide Progress Fill Line at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15 z-20 pointer-events-none">
              <motion.div
                className="h-full bg-white origin-left"
                initial={false}
                animate={{
                  width: `${((currentSlide + 1) / project.slides.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Slide Counter Overlay */}
            <div className="absolute bottom-3 right-4 z-20 style-meta-tag text-[9px] text-white/90 bg-black/75 px-2.5 py-1 tracking-[0.2em] pointer-events-none">
              {currentSlide + 1} / {project.slides.length}
            </div>

            {/* Expand Fullscreen Button */}
            {onExpandSlide && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandSlide(project.slides[currentSlide].image, project.title);
                }}
                className="absolute top-3 right-3 z-20 p-2 bg-black/70 hover:bg-black text-white/70 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
                title="Expand fullscreen view"
                aria-label="Expand fullscreen view"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}

            {/* Subtle Directional Hover Indicators on Desktop */}
            <div
              className="hidden sm:block absolute bottom-3 left-4 z-20 style-meta-tag text-[7.5px] text-white/50 bg-black/60 px-2 py-0.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {cursorSide === "left" ? "← PREV SLIDE" : "NEXT SLIDE →"}
            </div>
          </motion.div>

          {/* Mobile Slide Navigation Buttons & Swipe Indicator */}
          <div className="flex sm:hidden items-center justify-between pt-2.5 px-1">
            <span className="style-meta-tag text-[8px] text-white/40 tracking-wider">
              ← Swipe to view slides →
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="p-1 border border-white/20 text-white/70 hover:text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="p-1 border border-white/20 text-white/70 hover:text-white"
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata Row: Category/Role, Narrative, Confluences */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2"
      >
        {/* Col 1: Category & Role */}
        <div className="md:col-span-3 space-y-1.5">
          <p className="style-meta-tag text-white/40">
            {project.category}
          </p>
          <p className="style-meta-tag text-white/80">
            ☻ {project.role}
          </p>
        </div>

        {/* Col 2: In-Depth Narrative */}
        <div className="md:col-span-6 space-y-3.5">
          {project.narrative.map((paragraph, idx) => (
            <p key={idx} className="style-copy-body leading-[15px]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Col 3: Confluences / Press Links */}
        <div className="md:col-span-3 space-y-2">
          <p className="style-meta-tag text-white/40">
            Confluences / Execution
          </p>
          <div className="space-y-1 pt-1">
            {project.links.map((link, idx) => (
              <div key={idx}>
                <span className="style-press-link block truncate cursor-default">
                  &gt; {link.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
