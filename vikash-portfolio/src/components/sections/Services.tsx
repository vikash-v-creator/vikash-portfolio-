"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Services() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <SectionWrapper id="services" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent-orange font-handwriting text-2xl mb-2">What I Do</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            What I Can Do <span className="text-accent-orange">For You</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Not just services — solutions that move your business forward.
          </p>
        </motion.div>

        {/* Flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="perspective-1000 h-[480px]"
              style={{ perspective: "1000px" }}
              onHoverStart={() => setFlipped(service.id)}
              onHoverEnd={() => setFlipped(null)}
              onClick={() => setFlipped(flipped === service.id ? null : service.id)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flipped === service.id ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl p-8 flex flex-col justify-between bg-surface border border-glass-border"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <div
                      className="text-5xl mb-6 w-16 h-16 flex items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${service.accentColor}20` }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="font-display font-black text-2xl text-white mb-3">{service.title}</h3>
                    <p className="text-text-muted leading-relaxed">{service.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: service.accentColor }}>
                    <span>See what&apos;s included</span>
                    <span className="text-lg">→</span>
                  </div>
                  {/* Accent glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{ backgroundColor: service.accentColor }}
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl p-8 flex flex-col bg-surface-2 border"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderColor: service.accentColor + "40" }}
                >
                  <h3 className="font-display font-black text-xl text-white mb-5">{service.title}</h3>
                  <ul className="flex-1 space-y-3">
                    {service.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-text-muted">
                        <span style={{ color: service.accentColor }} className="mt-0.5 shrink-0">{f.icon}</span>
                        <div>
                          <span className="text-white font-medium">{f.text}</span>
                          <br />
                          <span className="text-xs text-text-muted">{f.outcome}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    data-cursor="button"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-5 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: service.accentColor }}
                  >
                    Start This Project →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
