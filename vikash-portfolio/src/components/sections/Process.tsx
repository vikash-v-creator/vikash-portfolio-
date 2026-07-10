"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="process" ref={containerRef} className="relative overflow-hidden py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-orange font-handwriting text-2xl mb-2">The Journey</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Working With <span className="text-accent-orange">Me</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            From first hello to final delivery — here&apos;s exactly what our collaboration looks like.
          </p>
        </div>

        {/* Subway map style timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-glass-border -translate-x-1/2" />

          {/* Scroll progress line overlay */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-accent-orange via-accent-pink to-accent-cyan origin-top -translate-x-1/2"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />

          <div className="space-y-8 md:space-y-0">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative flex items-center md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col text-center md:text-left`}
                >
                  {/* Content card — takes up 45% on desktop */}
                  <div className={`md:w-[45%] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-surface-2 border border-glass-border rounded-2xl p-6 inline-block w-full">
                      <div className="text-3xl mb-3">{step.icon}</div>
                      <h3 className="font-display font-black text-xl text-white mb-2">{step.label}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center station dot — 10% */}
                  <div className="relative md:w-[10%] flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center bg-bg font-display font-black text-xs z-10"
                      style={{ borderColor: step.color, color: step.color }}
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  {/* Spacer — 45% on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
