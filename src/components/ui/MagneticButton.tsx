"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
  rel?: string;
  "data-cursor"?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
  target,
  rel,
  "data-cursor": dataCursor,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-ivory text-obsidian border border-ivory hover:bg-champagne hover:border-champagne hover:text-obsidian shadow-lg",
    secondary:
      "bg-obsidian-900/80 text-ivory border border-white/15 hover:border-champagne/60 hover:text-champagne backdrop-blur-md",
    ghost:
      "bg-transparent text-ivory-muted hover:text-ivory border-b border-transparent hover:border-champagne",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.2 }}
      className={`inline-flex items-center justify-center font-mono tracking-widest text-xs uppercase px-6 py-3.5 transition-colors duration-300 select-none ${variantStyles[variant]} ${className}`}
      data-cursor={dataCursor}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
