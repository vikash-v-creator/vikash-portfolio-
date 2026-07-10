"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (value / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-display font-black text-white">
      {count}{suffix}
    </span>
  );
}

const MARQUEE_BRANDS = ["Adobe", "Figma", "Next.js", "Premiere Pro", "After Effects", "Tailwind", "React", "GSAP", "Canva", "DaVinci Resolve", "Framer", "Photoshop"];

export default function TrustStrip() {
  return (
    <section className="py-24 bg-surface border-y border-glass-border relative overflow-hidden">
      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-text-muted text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
            <span key={i} className="text-text-muted/40 text-lg font-display font-semibold tracking-wider uppercase shrink-0">
              {brand} <span className="text-accent-orange/40 mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
