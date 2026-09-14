"use client";

import React, { useState } from "react";
import { StevenHUD } from "@/components/steven/StevenHUD";
import { ProjectShowcase } from "@/components/steven/ProjectShowcase";
import { ArchiveHoverList } from "@/components/steven/ArchiveHoverList";
import { InfoView } from "@/components/steven/InfoView";
import { ImageModal } from "@/components/steven/ImageModal";
import { stevenProjects, stevenArchiveEntries } from "@/data/stevenProjects";

export default function Home() {
  const [currentView, setCurrentView] = useState<"work" | "info">("work");
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [expandedTitle, setExpandedTitle] = useState<string>("");

  const handleToggleView = () => {
    setCurrentView((prev) => (prev === "work" ? "info" : "work"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExpandSlide = (image: string, title: string) => {
    setExpandedImage(image);
    setExpandedTitle(title);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Steven Mengin Fixed HUD (Header, Centered Hero Fade, Info/Work Toggle, Corner Details) */}
      <StevenHUD
        currentView={currentView}
        onToggleView={handleToggleView}
      />

      {/* Main View Transition */}
      {currentView === "work" ? (
        <main className="relative z-20">
          {/* Hero Opening Spacer (Allows the centered fixed hero to command the viewport upon entry) */}
          <div className="h-[80vh] min-h-[500px] w-full flex items-end justify-center pb-12 pointer-events-none">
            <span className="style-meta-tag text-white/30 text-[8.5px] tracking-[0.25em] animate-pulse">
              ↓ Scroll to inspect projects
            </span>
          </div>

          {/* Project Showcases (Dual-column: Left year/title/narrative, Right large interactive slideshow) */}
          <section aria-label="Selected Projects">
            {stevenProjects.map((project) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                onExpandSlide={handleExpandSlide}
              />
            ))}
          </section>

          {/* Numbered Historical Ledger & Selected Case Studies with Floating Hover Image Previews */}
          <section aria-label="Archive & Selected Case Studies">
            <ArchiveHoverList
              entries={stevenArchiveEntries}
              onSelectEntry={(entry) => handleExpandSlide(entry.image, entry.title)}
            />
          </section>

          {/* Minimalist Steven Mengin Style Footer */}
          <footer className="w-full max-w-[1080px] mx-auto py-16 px-6 md:px-10 border-hairline-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white/40">
            <p className="style-meta-tag text-[7.5px]">
              © {new Date().getFullYear()} EMAN TRADES. ALL RIGHTS RESERVED.
            </p>
            <p className="style-meta-tag text-[7.5px]">
              MARKETS. DISCIPLINE. PRECISION.
            </p>
          </footer>
        </main>
      ) : (
        <main className="relative z-20">
          <InfoView onBackToWork={() => setCurrentView("work")} />
        </main>
      )}

      {/* Fullscreen Image Lightbox Modal */}
      <ImageModal
        image={expandedImage}
        title={expandedTitle}
        onClose={() => setExpandedImage(null)}
      />
    </div>
  );
}
