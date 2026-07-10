"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRICING } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Check } from "lucide-react";

type Tab = "design" | "video" | "web";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("design");

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: "design", label: "Graphic Design", emoji: "🎨" },
    { id: "video", label: "Video Editing", emoji: "🎬" },
    { id: "web", label: "Web Development", emoji: "💻" },
  ];

  const plans = PRICING[activeTab];

  return (
    <SectionWrapper id="pricing" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-lime font-handwriting text-2xl mb-2">Transparent Pricing</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            Simple, <span className="text-accent-lime">Clear</span> Pricing
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            No hidden fees. No surprises. Just great work at a fair price.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-surface-2 border border-glass-border rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-accent-lime text-black"
                    : "text-text-muted hover:text-white"
                }`}
              >
                {tab.emoji} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.popular
                    ? "bg-accent-lime/5 border-accent-lime/40 scale-105 shadow-[0_0_40px_rgba(191,255,0,0.1)]"
                    : "bg-surface-2 border-glass-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-lime text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-black text-xl text-white mb-1">{plan.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                  <div className="font-display font-black text-4xl text-white">
                    {plan.price}
                    <span className="text-text-muted text-base font-normal ml-1">onwards</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.popular ? "text-accent-lime" : "text-accent-orange"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  data-cursor="button"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-accent-lime text-black hover:bg-lime-400"
                      : "bg-surface border border-glass-border text-white hover:border-white/30"
                  }`}
                >
                  Get Started →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm mt-8"
        >
          Got a custom project in mind?{" "}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-accent-orange hover:underline font-medium"
          >
            Let&apos;s talk →
          </button>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
