"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openTool, setOpenTool] = useState<string | null>(null);

  const currentCat = SKILLS.find((c) => c.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-yellow font-handwriting text-2xl mb-2">My Toolkit</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            The <span className="text-accent-yellow">Toolbox</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Click a category to open the toolbox. Every tool has been battle-tested across real projects.
          </p>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SKILLS.map((cat) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all text-sm ${
                activeCategory === cat.category
                  ? "text-white border-opacity-60"
                  : "text-text-muted border-glass-border hover:text-white"
              }`}
              style={
                activeCategory === cat.category
                  ? { backgroundColor: cat.color + "20", borderColor: cat.color + "60", color: cat.color }
                  : {}
              }
            >
              <span>{cat.category}</span>
            </motion.button>
          ))}
        </div>

        {/* Floating bubbles grid */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory || "all"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {(activeCategory ? [currentCat!] : SKILLS).map((cat) =>
                cat.tools.map((tool, ti) => (
                  <motion.button
                    key={`${cat.category}-${tool.name}`}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -6, 0],
                      transition: {
                        opacity: { delay: ti * 0.05 },
                        scale: { delay: ti * 0.05, type: "spring", stiffness: 300 },
                        y: { delay: ti * 0.1, duration: 3 + (ti % 3), repeat: Infinity, ease: "easeInOut" },
                      },
                    }}
                    whileHover={{ scale: 1.15 }}
                    onClick={() => setOpenTool(openTool === `${cat.category}-${tool.name}` ? null : `${cat.category}-${tool.name}`)}
                    className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border transition-all ${
                      openTool === `${cat.category}-${tool.name}`
                        ? "border-opacity-60"
                        : "border-glass-border hover:border-white/20 bg-surface"
                    }`}
                    style={
                      openTool === `${cat.category}-${tool.name}`
                        ? { borderColor: cat.color + "80", backgroundColor: cat.color + "10" }
                        : {}
                    }
                  >
                    <span className="text-3xl">{tool.icon}</span>
                    <span className="text-xs font-medium text-text-muted">{tool.name}</span>
                  </motion.button>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* "I never stop learning" note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <span className="font-handwriting text-xl text-text-muted">
            ...and always learning new ones ✨
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
