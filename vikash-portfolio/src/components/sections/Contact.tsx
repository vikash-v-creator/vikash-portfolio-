"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const CONTACT_LINKS = [
  { icon: Mail, label: "Email", value: "hello@vikash.dev", href: "mailto:hello@vikash.dev", color: "#FF5C00" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 XXXXX XXXXX", href: "https://wa.me/91XXXXXXXXXX", color: "#25D366" },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/vikash", href: "https://linkedin.com", color: "#0077B5" },
  { icon: FaInstagram, label: "Instagram", value: "@vikash.creates", href: "https://instagram.com", color: "#E1306C" },
  { icon: FaGithub, label: "GitHub", value: "github.com/vikash", href: "https://github.com", color: "#FFFFFF" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((res) => setTimeout(res, 1500));
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent-orange/10 border border-accent-orange/30 rounded-full px-5 py-2.5 text-sm font-medium text-accent-orange mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
            ⚡ Currently accepting projects for August 2026 — 2 spots remaining
          </div>
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-4 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-accent-orange">Amazing</span>{" "}
            Together.
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Start with a free 15-minute consultation. No commitment. Just a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact links */}
          <div className="space-y-6">
            {/* Free consultation highlight */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-accent-orange/10 border border-accent-orange/30 rounded-2xl p-6"
            >
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-display font-black text-xl text-white mb-2">
                Free 15-Min Creative Consultation
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Let&apos;s talk about your project for 15 minutes — completely free. I&apos;ll give you honest
                feedback, creative direction, and a rough scope before any commitment.
              </p>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="inline-flex items-center gap-2 bg-accent-orange text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-orange-500 transition-all hover:scale-105"
              >
                <MessageCircle size={16} />
                Book Free Call on WhatsApp
              </a>
            </motion.div>

            {/* Contact links */}
            <div className="space-y-3">
              {CONTACT_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 5, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 bg-surface border border-glass-border rounded-xl hover:border-white/20 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: link.color + "15" }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">{link.label}</div>
                    <div className="text-white font-medium text-sm group-hover:text-accent-orange transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-glass-border rounded-2xl p-8"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <h3 className="font-display font-black text-xl text-white mb-6">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block font-medium">Your Name *</label>
                      <input
                        {...register("name", { required: true })}
                        placeholder="John Doe"
                        className={`w-full bg-surface-2 border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent-orange transition-colors placeholder:text-text-muted/50 ${errors.name ? "border-red-500" : "border-glass-border"}`}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block font-medium">Email *</label>
                      <input
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="john@company.com"
                        className={`w-full bg-surface-2 border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent-orange transition-colors placeholder:text-text-muted/50 ${errors.email ? "border-red-500" : "border-glass-border"}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block font-medium">Service Needed</label>
                      <select
                        {...register("service")}
                        className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent-orange transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="web-development">Web Development</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-text-muted mb-1.5 block font-medium">Budget Range</label>
                      <select
                        {...register("budget")}
                        className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent-orange transition-colors"
                      >
                        <option value="">Select budget</option>
                        <option value="under-5k">Under ₹5,000</option>
                        <option value="5k-15k">₹5,000 – ₹15,000</option>
                        <option value="15k-30k">₹15,000 – ₹30,000</option>
                        <option value="30k+">₹30,000+</option>
                        <option value="custom">Let&apos;s discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-text-muted mb-1.5 block font-medium">Tell me about your project *</label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={4}
                      placeholder="What are you working on? What's your goal? What do you need?"
                      className={`w-full bg-surface-2 border rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent-orange transition-colors placeholder:text-text-muted/50 resize-none ${errors.message ? "border-red-500" : "border-glass-border"}`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="button"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-accent-orange text-white font-bold py-4 rounded-xl hover:bg-orange-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message 🚀
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle size={64} className="text-accent-lime mx-auto" />
                  </motion.div>
                  <h3 className="font-display font-black text-2xl text-white">Message Sent! 🎉</h3>
                  <p className="text-text-muted max-w-xs">
                    I&apos;ll get back to you within 2 hours. Looking forward to working together!
                  </p>
                  <div className="font-handwriting text-xl text-accent-orange">— Vikash</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
