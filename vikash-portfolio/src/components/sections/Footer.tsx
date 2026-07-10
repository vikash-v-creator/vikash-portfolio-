"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SOCIAL_LINKS = [
  { icon: Mail, href: "mailto:hello@vikash.dev", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer
      className="relative bg-surface border-t border-glass-border overflow-hidden"
      onMouseEnter={() => setShowEgg(true)}
      onMouseLeave={() => setShowEgg(false)}
    >
      {/* Hidden Easter egg illustration */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: showEgg ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 text-center pointer-events-none pb-4"
      >
        <div className="font-handwriting text-text-muted text-lg">
          <pre className="text-xs text-text-muted/50 leading-tight font-mono">
{`  ✦ You found the secret footer! ✦
   Reward: A virtual high-five 🖐️
   and my eternal respect. `}
          </pre>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="font-display font-black text-2xl text-white mb-2">
              VIK<span className="text-accent-orange">A</span>SH
            </div>
            <p className="text-text-muted text-sm max-w-sm">
              Built with creativity, curiosity, and countless cups of coffee. ☕
            </p>
            <p className="text-text-muted/50 text-xs mt-1 font-handwriting">
              No boring templates were used here. Promise.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                title={label}
                className="w-10 h-10 bg-surface-2 border border-glass-border rounded-xl flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-colors"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 bg-accent-orange/10 border border-accent-orange/30 text-accent-orange font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-accent-orange/20 transition-all"
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </div>

        <div className="border-t border-glass-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>© 2026 Vikash. All rights reserved.</span>
          <span className="font-handwriting text-base text-text-muted/50">
            See you in the next project. ✦
          </span>
          <span>Graphic Design · Video Editing · Web Dev</span>
        </div>
      </div>
    </footer>
  );
}
