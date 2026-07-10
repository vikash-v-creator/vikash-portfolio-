"use client";

import { motion } from "framer-motion";
import { WHY_HIRE_ME } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function WhyHireMe() {
  return (
    <SectionWrapper id="why" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent-orange font-handwriting text-2xl mb-2">Real Reasons</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Real Results, Not Just{" "}
            <span className="text-accent-orange">Pretty Work</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Pretty is great. Pretty + results is the goal.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_HIRE_ME.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative bg-surface border border-glass-border rounded-2xl p-7 overflow-hidden transition-all"
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full blur-[60px] opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
              />

              {/* Icon */}
              <div
                className="text-4xl mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                style={{ backgroundColor: item.color + "15" }}
              >
                {item.icon}
              </div>

              {/* Stat */}
              <div className="font-display font-black text-2xl mb-1" style={{ color: item.color }}>
                {item.stat}
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
