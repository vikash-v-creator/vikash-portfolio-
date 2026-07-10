"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// UI
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";

// Sections
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import CreativePhilosophy from "@/components/sections/CreativePhilosophy";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// ── Easter Egg: Konami code ────────────────────────────────────────────────
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

// ── Easter Egg: "hello" keyword ───────────────────────────────────────────
const HELLO_WORD = "hello";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // ── Konami + hello easter eggs ──────────────────────────────────────────
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [typedChars, setTypedChars] = useState("");
  const [showHello, setShowHello] = useState(false);
  const [showDoubleClickMsg, setShowDoubleClickMsg] = useState(false);

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    // Konami
    setKonamiSequence((prev) => {
      const next = [...prev, e.key].slice(-KONAMI.length);
      if (next.join(",") === KONAMI.join(",")) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
        return [];
      }
      return next;
    });

    // "hello" keyword
    if (e.key.length === 1) {
      setTypedChars((prev) => {
        const next = (prev + e.key).slice(-HELLO_WORD.length);
        if (next === HELLO_WORD) {
          setShowHello(true);
          setTimeout(() => setShowHello(false), 3000);
          return "";
        }
        return next;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  // Double-click logo easter egg — handled via logo button click in navbar
  useEffect(() => {
    const logoBtns = document.querySelectorAll("#logo-btn");
    const handler = () => {
      setShowDoubleClickMsg(true);
      setTimeout(() => setShowDoubleClickMsg(false), 3000);
    };
    logoBtns.forEach((btn) => btn.addEventListener("dblclick", handler));
    return () => logoBtns.forEach((btn) => btn.removeEventListener("dblclick", handler));
  }, [loaded]);

  return (
    <>
      {/* ── Loader ─────────────────────────────────────────────────────── */}
      <AnimatePresence>{!loaded && <Loader onComplete={() => setLoaded(true)} />}</AnimatePresence>

      {/* ── Main content ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <CreativePhilosophy />
          <Skills />
          <Process />
          <Testimonials />
          <Pricing />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
      </motion.div>

      {/* ── Easter Egg: Konami Confetti ──────────────────────────────────── */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] pointer-events-none flex items-center justify-center"
          >
            {/* Confetti particles */}
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ["#FF5C00","#FF2D87","#00F0FF","#BFFF00","#FFE600","#FFFFFF"][i % 6],
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                }}
                animate={{
                  y: ["0vh", "110vh"],
                  x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
                  rotate: [0, Math.random() * 720],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 2.5 + Math.random() * 1.5, delay: Math.random() * 0.8, ease: "linear" }}
              />
            ))}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="bg-surface border border-glass-border rounded-2xl px-8 py-6 text-center"
            >
              <div className="text-4xl mb-2">🎉</div>
              <div className="font-display font-black text-white text-xl">You found the secret!</div>
              <div className="text-text-muted text-sm mt-1">Konami Code master unlocked.</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Easter Egg: "hello" toast ────────────────────────────────────── */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-8 right-8 z-[2000] bg-surface border border-accent-cyan/40 text-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl pointer-events-none"
          >
            <span className="text-2xl">👋</span>
            <div>
              <div className="font-bold text-white">Hey there!</div>
              <div className="text-text-muted text-sm">Nice to meet you. 😄</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Easter Egg: Double-click logo ────────────────────────────────── */}
      <AnimatePresence>
        {showDoubleClickMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[1500] flex items-center justify-center pointer-events-none"
          >
            <div className="bg-surface border border-accent-pink/40 rounded-3xl px-10 py-8 text-center max-w-sm">
              <div className="text-4xl mb-3">👀</div>
              <div className="font-display font-black text-xl text-white mb-2">
                Hey, I see you&apos;re curious.
              </div>
              <div className="text-text-muted">
                That&apos;s a good sign. Curious people make great clients. 😉
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
