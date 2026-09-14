"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "explore">("default");
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for silky trailing feel
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestAction = target.closest("[data-cursor]") as HTMLElement | null;
      if (closestAction) {
        const actionType = closestAction.getAttribute("data-cursor");
        if (actionType === "view") {
          setCursorType("view");
          setCursorText("VIEW");
          return;
        } else if (actionType === "explore") {
          setCursorType("explore");
          setCursorText("EXPLORE");
          return;
        }
      }

      const isClickable = target.closest("a, button, [role='button'], input, select, textarea, [data-clickable]");
      if (isClickable) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice) return null;

  const isExpanded = cursorType === "view" || cursorType === "explore";
  const isPointer = cursorType === "pointer";

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono tracking-widest text-[10px] font-semibold text-obsidian select-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        width: isExpanded ? 76 : isPointer ? 36 : 10,
        height: isExpanded ? 76 : isPointer ? 36 : 10,
        backgroundColor: isExpanded
          ? "#F5F2EB"
          : isPointer
          ? "rgba(201, 169, 110, 0.2)"
          : "#C9A96E",
        borderColor: isExpanded ? "transparent" : isPointer ? "#C9A96E" : "transparent",
        borderWidth: isPointer ? 1 : 0,
        backdropFilter: isExpanded ? "blur(4px)" : "none",
      }}
      transition={{ type: "spring", damping: 22, stiffness: 320 }}
    >
      {isExpanded && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-obsidian font-bold tracking-widest text-[10px]"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
