"use client";

import React, { useState, useEffect } from "react";
import { soundEngine } from "@/lib/audio";
import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(soundEngine.getIsPlaying());
  }, []);

  const handleToggle = async () => {
    if (isPlaying) {
      soundEngine.stop();
      setIsPlaying(false);
    } else {
      const started = await soundEngine.start();
      if (started) {
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-champagne/40 bg-obsidian-900/60 backdrop-blur-md transition-all duration-300 text-ivory-muted hover:text-ivory text-xs font-mono"
      aria-label={isPlaying ? "Mute ambient audio" : "Enable atmospheric audio experience"}
      title={isPlaying ? "Atmosphere: On" : "Atmosphere: Off"}
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 transition-colors duration-300 ${
            isPlaying ? "bg-champagne" : "bg-neutral-600"
          }`}
        />
      </span>

      <span className="hidden sm:inline-block text-[11px] tracking-wider uppercase">
        {isPlaying ? "SOUND ON" : "AMBIENT OFF"}
      </span>

      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-champagne group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-ivory-dim group-hover:text-ivory transition-colors" />
      )}
    </button>
  );
}
