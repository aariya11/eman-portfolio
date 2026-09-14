"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
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
    <div className="w-full max-w-[1080px] mx-auto py-24 px-6 md:px-10 border-b border-white/10 last:border-b-0">
      {/* Upper Section: Year, Title, and Slideshow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: Year & Title */}
        <div className="lg:col-span-4 space-y-2">
          <span className="style-meta-uppercase text-white block">
            {project.year}
          </span>
          <h2 className="style-title-large text-white">
            {project.title}
          </h2>
        </div>

        {/* Right: Interactive Slideshow Viewer (754px equivalent) */}
        <div className="lg:col-span-8 relative">
          <div
            onClick={handleSlideClick}
            className="relative w-full aspect-[16/9] bg-black overflow-hidden group cursor-pointer border border-white/10"
            data-cursor="pointer"
          >
            {/* Slide Images with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={project.slides[currentSlide].image}
                  alt={`${project.title} slide ${currentSlide + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 754px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Slide Counter Overlay */}
            <div className="absolute bottom-3 right-4 z-20 style-meta-uppercase text-[9px] text-white/80 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-none pointer-events-none">
              {currentSlide + 1} / {project.slides.length}
            </div>

            {/* Expand Fullscreen Button */}
            {onExpandSlide && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandSlide(project.slides[currentSlide].image, project.title);
                }}
                className="absolute top-3 right-3 z-20 p-1.5 bg-black/60 hover:bg-black text-white/70 hover:text-white transition-colors"
                title="Expand image"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Subtle Click Direction Hint */}
            <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-start pl-2 opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none">
              <ChevronLeft className="w-5 h-5 text-white drop-shadow" />
            </div>
            <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-end pr-2 opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none">
              <ChevronRight className="w-5 h-5 text-white drop-shadow" />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section: Role, Narrative, and Confluences (Steven Mengin 3-column metadata) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
        {/* Col 1: Category & Role */}
        <div className="md:col-span-3 space-y-1">
          <p className="style-meta-uppercase text-white/50">
            {project.category}
          </p>
          <p className="style-meta-uppercase text-white">
            ☻ {project.role}
          </p>
        </div>

        {/* Col 2: In-Depth Narrative */}
        <div className="md:col-span-6 space-y-3">
          {project.narrative.map((p, pIdx) => (
            <p key={pIdx} className="style-copy-8px text-white/75 text-justify">
              {p}
            </p>
          ))}
        </div>

        {/* Col 3: Confluences / Press Links */}
        <div className="md:col-span-3 space-y-2">
          <p className="style-meta-uppercase text-white/50">
            Confluences / Execution
          </p>
          <div className="space-y-1">
            {project.links.map((link, lIdx) => (
              <div key={lIdx}>
                <a
                  href={link.url || "#"}
                  className="style-link-press block truncate"
                >
                  &gt; {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
