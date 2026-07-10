"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DESK_ITEMS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const selectedItem = DESK_ITEMS.find((i) => i.id === activeItem);

  return (
    <SectionWrapper id="about" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-cyan font-handwriting text-2xl mb-2">Who You&apos;re Hiring</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            The Creative <span className="text-accent-cyan">Desk</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Click anything on the desk to learn more. This is where the magic happens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive desk */}
          <div>
            <div
              className="relative w-full rounded-2xl bg-surface-2 border border-glass-border overflow-hidden"
              style={{ paddingBottom: "75%" }}
            >
              <div className="absolute inset-0 p-6">
                {/* Desk background texture */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,92,0,0.05)_0%,transparent_70%)]" />

                {/* Desk items */}
                {DESK_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.15 }}
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    className={`absolute flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                      activeItem === item.id
                        ? "bg-accent-orange/20 border border-accent-orange/50"
                        : "hover:bg-surface border border-transparent"
                    }`}
                    style={{ left: `${item.x}%`, top: `${item.y}%` }}
                    title={item.label}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-xs text-text-muted font-medium">{item.label}</span>
                  </motion.button>
                ))}

                {/* Desk surface line */}
                <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>

            {/* Item info panel */}
            <AnimatePresence mode="wait">
              {selectedItem && (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-5 rounded-xl bg-surface border border-glass-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{selectedItem.icon}</span>
                    <h4 className="font-display font-bold text-white">{selectedItem.label}</h4>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{selectedItem.detail}</p>
                </motion.div>
              )}
              {!selectedItem && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-5 rounded-xl bg-surface/50 border border-dashed border-glass-border text-center text-text-muted text-sm"
                >
                  👆 Click any item to learn more
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: About content */}
          <div className="space-y-8">
            {/* Sticky note style intro */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-accent-yellow/10 border border-accent-yellow/30 rounded-xl p-6"
            >
              <p className="font-handwriting text-2xl text-accent-yellow mb-3">Hey, I&apos;m Vikash 👋</p>
              <p className="text-text-muted leading-relaxed">
                I&apos;m a creative freelancer who believes design should do more than look good — it should{" "}
                <span className="text-white font-semibold">work hard for your business</span>. Whether it&apos;s
                a logo that makes you unforgettable, a video that keeps people watching, or a website that
                converts visitors into clients — I&apos;m obsessed with results.
              </p>
            </motion.div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "☕", label: "Coffee Today", value: "3 cups", color: "#FF5C00" },
                { icon: "⚡", label: "Creative Energy", value: "100%", color: "#BFFF00" },
                { icon: "📚", label: "Years Learning", value: "3+", color: "#00F0FF" },
                { icon: "🚀", label: "Projects Done", value: "50+", color: "#FF2D87" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-surface border border-glass-border rounded-xl p-4"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display font-black text-xl" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Favorite tools */}
            <div>
              <h4 className="text-sm text-text-muted uppercase tracking-widest mb-3 font-semibold">Favorite Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Premiere Pro", "Photoshop", "Next.js", "After Effects", "Midjourney", "ChatGPT"].map((tool) => (
                  <span key={tool} className="text-sm text-white bg-surface-2 border border-glass-border px-3 py-1.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              data-cursor="button"
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-bold py-4 rounded-xl hover:bg-accent-cyan/20 transition-all"
            >
              Let&apos;s Work Together →
            </motion.button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
