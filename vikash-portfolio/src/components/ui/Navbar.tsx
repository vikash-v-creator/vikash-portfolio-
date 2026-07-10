"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import MagneticButton from "./MagneticButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;

      // Scroll spy
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[500] w-[90%] max-w-3xl"
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <MagneticButton>
            <button
              id="logo-btn"
              onClick={() => handleNavClick("#home")}
              className="text-xl font-display font-black tracking-wider text-white"
            >
              VIK<span className="text-accent-orange">A</span>SH
            </button>
          </MagneticButton>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <MagneticButton>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                        isActive ? "text-white" : "text-text-muted hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-accent-orange/20 rounded-full border border-accent-orange/30"
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </MagneticButton>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <MagneticButton>
            <button
              onClick={() => handleNavClick("#contact")}
              data-cursor="button"
              className="hidden md:block bg-accent-orange text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-orange-500 transition-colors"
            >
              Hire Me
            </button>
          </MagneticButton>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[490] bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-4xl font-display font-bold text-white hover:text-accent-orange transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07 }}
              onClick={() => handleNavClick("#contact")}
              className="mt-4 bg-accent-orange text-white font-bold px-8 py-4 rounded-full text-lg"
            >
              Hire Me 🚀
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
