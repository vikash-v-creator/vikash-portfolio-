"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 50 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: smoothMouseX, y: smoothMouseY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-orange/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-pink/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent-cyan/8 blur-[100px]" />
      </motion.div>

      {/* Floating orbs parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: useTransform(smoothMouseX, (v) => v * 0.5), y: useTransform(smoothMouseY, (v) => v * 0.5) }}
      >
        {[
          { size: 6, x: "15%", y: "20%", color: "bg-accent-orange", delay: 0 },
          { size: 4, x: "80%", y: "15%", color: "bg-accent-cyan", delay: 0.5 },
          { size: 8, x: "70%", y: "75%", color: "bg-accent-pink", delay: 1 },
          { size: 5, x: "25%", y: "80%", color: "bg-accent-lime", delay: 1.5 },
          { size: 3, x: "50%", y: "10%", color: "bg-accent-yellow", delay: 0.8 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute ${orb.color} rounded-full opacity-60`}
            style={{ width: orb.size * 4, height: orb.size * 4, left: orb.x, top: orb.y }}
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-surface glass-panel rounded-full px-4 py-2 mb-8 text-sm text-text-muted"
        >
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-white mb-6"
        >
          <span className="block">Create.</span>
          <span className="block text-accent-orange">Edit.</span>
          <span className="block">Build.</span>
        </motion.h1>

        {/* Cycling role text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-muted mb-4 font-body h-9 flex items-center justify-center"
        >
          <span className="mr-2">I&apos;m a</span>
          <TypeAnimation
            sequence={[
              "Graphic Designer", 2000,
              "Video Editor", 2000,
              "Website Developer", 2000,
              "Creative Freelancer", 2000,
              "Creative Problem Solver", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent-orange font-semibold"
          />
        </motion.div>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I help businesses, creators, and startups stand out through bold design,
          engaging videos, and modern websites that leave a lasting impression.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton>
            <button
              data-cursor="button"
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 bg-accent-orange text-white font-bold px-8 py-4 rounded-full text-base hover:bg-orange-500 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,92,0,0.4)]"
            >
              🚀 Start a Project
            </button>
          </MagneticButton>
          <MagneticButton>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="flex items-center gap-2 bg-surface glass-panel text-white font-bold px-8 py-4 rounded-full text-base hover:border-white/30 transition-all hover:scale-105"
            >
              View My Work ↓
            </button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [1, 0, 1], transformOrigin: "top" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
