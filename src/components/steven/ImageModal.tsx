"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
  image: string | null;
  title?: string;
  onClose: () => void;
}

export function ImageModal({ image, title, onClose }: ImageModalProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [image]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative max-w-6xl w-full aspect-[16/9] border border-white/15 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt={title || "Project visual"}
            fill
            sizes="1200px"
            className="object-contain"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white/80 hover:text-white transition-colors border border-white/20"
            aria-label="Close fullscreen view"
          >
            <X className="w-5 h-5" />
          </button>

          {title && (
            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white style-meta-uppercase text-[9px] border border-white/10">
              {title}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
