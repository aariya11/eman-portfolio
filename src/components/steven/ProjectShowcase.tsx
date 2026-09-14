"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

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

  return (
    <article className="w-full max-w-[1080px] mx-auto py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-10 border-hairline-b">
      {/* Top Row: Year, Title, and Slideshow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
        {/* Left Column: Year & Title */}
        <div className="lg:col-span-4 space-y-3">
          <span className="style-meta-tag block text-white/50 text-[9px] tracking-[0.2em]">
            {project.year}
          </span>
          <h2 className="style-project-title break-words">
            {project.title}
          </h2>
        </div>

        {/* Right Column: Interactive Slideshow (754px equivalent) */}
        <div className="lg:col-span-8 relative">
          <div
            tabIndex={0}
            role="region"
            aria-label={`${project.title} trading chart slideshow. Use left and right arrow keys to navigate slides.`}
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
            className="relative w-full aspect-[16/9] bg-black overflow-hidden group cursor-pointer border border-white/15 select-none focus-visible:ring-2 focus-visible:ring-white outline-none"
            data-cursor="pointer"
          >
            {/* Slide Images with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={project.slides[currentSlide].image}
                  alt={`${project.title} - Trade execution chart slide ${currentSlide + 1} of ${project.slides.length}`}
                  fill
                  priority={project.id === "es-liquidity-sweep-2025" && currentSlide === 0}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 754px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

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

            {/* Subtle Directional Hover Indicators */}
            <div
              className={`absolute bottom-3 left-4 z-20 style-meta-tag text-[7.5px] text-white/50 bg-black/60 px-2 py-0.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity`}
            >
              {cursorSide === "left" ? "← PREV SLIDE" : "NEXT SLIDE →"}
            </div>
          </div>
        </div>
      </div>

      {/* Metadata Row: Category/Role, Narrative, Confluences */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
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
      </div>
    </article>
  );
}
