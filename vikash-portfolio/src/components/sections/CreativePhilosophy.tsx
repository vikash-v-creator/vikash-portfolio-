"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_CARDS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CreativePhilosophy() {
  return (
    <SectionWrapper id="philosophy" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-lime font-handwriting text-2xl mb-2">How I Think</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            My Creative <span className="text-accent-lime">Philosophy</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            The principles that guide every project I take on. People hire people — so here&apos;s how I think.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PHILOSOPHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-surface-2 border border-glass-border rounded-2xl p-8 overflow-hidden group"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: card.color }}
              />

              <div className="relative z-10">
                <div
                  className="text-4xl mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: card.color + "15" }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display font-black text-xl text-white mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">{card.description}</p>

                {/* Handwritten annotation */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-px" style={{ backgroundColor: card.color }} />
                  <span className="font-handwriting text-lg" style={{ color: card.color }}>
                    {card.annotation}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-surface-2 border border-glass-border rounded-3xl p-8"
        >
          <div className="md:col-span-2">
            <h3 className="font-display font-black text-2xl text-white mb-4">My Story</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              I started as someone who just loved making things look beautiful. Then I realized something important:
              beautiful things that don&apos;t perform aren&apos;t actually that beautiful. Every project since then
              has been about finding that intersection — work that&apos;s visually stunning AND drives real results.
            </p>
            <p className="text-text-muted leading-relaxed">
              Today, I work with startups, creators, and businesses across India and beyond. My clients don&apos;t just
              get deliverables — they get a creative partner who&apos;s invested in their success from day one.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-bg rounded-xl p-4 border border-glass-border text-center">
              <div className="text-3xl font-display font-black text-accent-orange">50+</div>
              <div className="text-xs text-text-muted mt-1">Projects completed</div>
            </div>
            <div className="bg-bg rounded-xl p-4 border border-glass-border text-center">
              <div className="text-3xl font-display font-black text-accent-lime">100%</div>
              <div className="text-xs text-text-muted mt-1">Client satisfaction</div>
            </div>
            <div className="bg-bg rounded-xl p-4 border border-glass-border text-center">
              <div className="font-handwriting text-lg text-accent-cyan">
                &quot;Results over pretty&quot;
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
