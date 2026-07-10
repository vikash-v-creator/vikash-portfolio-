"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Search, Play, Rocket } from "lucide-react";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<"default" | "button" | "project" | "video" | "link">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Use MotionValues to avoid React re-renders on every mouse move
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 30, stiffness: 400, mass: 0.8 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        setCursorState(cursorTarget.getAttribute("data-cursor") as any);
      } else if (target.closest("a") || target.closest("button")) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorState === "default" ? 1 : 0,
          opacity: cursorState === "default" && isVisible ? 1 : 0,
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 64,
          height: 64,
        }}
        animate={{
          scale: cursorState !== "default" ? 1 : 0,
          opacity: cursorState !== "default" && isVisible ? 1 : 0,
          backgroundColor: cursorState === "button" ? "rgba(255, 92, 0, 0.8)" : 
                           cursorState === "project" ? "rgba(255, 255, 255, 0.9)" :
                           cursorState === "video" ? "rgba(255, 45, 135, 0.9)" : 
                           cursorState === "link" ? "rgba(255, 255, 255, 0.2)" : "transparent",
        }}
      >
        {cursorState === "button" && <Rocket className="w-6 h-6 text-white" />}
        {cursorState === "project" && <Search className="w-6 h-6 text-black" />}
        {cursorState === "video" && <Play className="w-6 h-6 text-white fill-white ml-1" />}
      </motion.div>
    </>
  );
}
