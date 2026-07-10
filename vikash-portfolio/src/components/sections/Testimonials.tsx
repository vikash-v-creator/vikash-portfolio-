"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@prisma/client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Star } from "lucide-react";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <SectionWrapper id="testimonials" className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-pink font-handwriting text-2xl mb-2">Social Proof</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            What Clients <span className="text-accent-pink">Say</span>
          </h2>
          <p className="text-text-muted max-w-lg mx-auto">
            Don&apos;t take my word for it. Here&apos;s what the people who hired me think.
          </p>
        </div>

        {/* Chat bubble testimonials */}
        <div className="space-y-6 mb-10">
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex gap-4 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-display font-black text-sm text-white"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>

                {/* Bubble */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 max-w-2xl p-5 rounded-2xl border border-glass-border relative ${
                    i % 2 === 0 ? "rounded-tl-sm bg-surface" : "rounded-tr-sm bg-surface-2"
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} size={14} className="text-accent-yellow fill-accent-yellow" />
                    ))}
                  </div>
                  <p className="text-white leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white text-sm">{t.name}</span>
                      <span className="text-text-muted text-xs block">{t.role}</span>
                    </div>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: t.avatarColor + "20", color: t.avatarColor }}
                    >
                      {t.service}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-2xl bg-surface border border-glass-border"
        >
          <p className="font-handwriting text-2xl text-accent-yellow mb-2">
            Want results like these?
          </p>
          <p className="text-text-muted mb-6">Join 20+ clients who&apos;ve already leveled up their brand.</p>
          <button
            data-cursor="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent-orange text-white font-bold px-8 py-4 rounded-full hover:bg-orange-500 transition-all hover:scale-105"
          >
            🚀 Start Your Project
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
