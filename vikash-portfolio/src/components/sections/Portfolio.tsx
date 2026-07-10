"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { X } from "lucide-react";

type Category = "All" | "Graphic Design" | "Video Editing" | "Web Development";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PORTFOLIO_PROJECTS)[0] | null>(null);

  const categories: Category[] = ["All", "Graphic Design", "Video Editing", "Web Development"];

  const filtered = activeCategory === "All"
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="portfolio" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent-pink font-handwriting text-2xl mb-2">My Work</p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-4">
            The <span className="text-accent-pink">Design Wall</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Real projects. Real results. Click any project to see the full story.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent-pink text-white border-accent-pink"
                  : "bg-transparent text-text-muted border-glass-border hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                data-cursor="project"
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-glass-border ${
                  project.size === "large" ? "md:col-span-2" : ""
                }`}
                style={{ minHeight: project.size === "large" ? 320 : 240 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project card background */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}20 0%, #151515 60%)`,
                  }}
                />
                <div className="absolute inset-0 bg-surface-2 opacity-60" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 min-h-[240px]">
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ backgroundColor: project.accentColor + "20", color: project.accentColor }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <span className="text-text-muted text-sm">{project.year}</span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-white mb-1 group-hover:text-accent-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm">{project.client}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-text-muted border border-glass-border px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/50">
                  <div className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm">
                    View Case Study →
                  </div>
                </div>

                {/* Accent border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
                  style={{ backgroundColor: project.accentColor }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[800] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
            onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-surface rounded-3xl max-w-3xl w-full my-8 overflow-hidden border border-glass-border"
            >
              {/* Modal header */}
              <div
                className="relative p-8 pb-6"
                style={{ background: `linear-gradient(135deg, ${selectedProject.accentColor}15 0%, transparent 60%)` }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-text-muted hover:text-white transition-colors bg-surface-2 p-2 rounded-full"
                >
                  <X size={20} />
                </button>
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ backgroundColor: selectedProject.accentColor + "20", color: selectedProject.accentColor }}
                >
                  {selectedProject.category}
                </span>
                <h2 className="font-display font-black text-3xl text-white mb-1">{selectedProject.title}</h2>
                <p className="text-text-muted">{selectedProject.client} · {selectedProject.year}</p>
              </div>

              {/* Modal content */}
              <div className="p-8 space-y-6">
                {[
                  { label: "🎯 The Challenge", content: selectedProject.challenge },
                  { label: "🔬 Process", content: selectedProject.process },
                  { label: "🛠️ Tools Used", content: selectedProject.tools.join(" · ") },
                  { label: "✨ Final Result", content: selectedProject.result },
                  { label: "📊 Impact", content: selectedProject.impact },
                  { label: "🏆 Client Outcome", content: selectedProject.outcome },
                ].map(({ label, content }) => (
                  <div key={label} className="border-b border-glass-border pb-5 last:border-0">
                    <h4 className="font-display font-bold text-sm text-text-muted mb-2 uppercase tracking-wide">{label}</h4>
                    <p className="text-white leading-relaxed">{content}</p>
                  </div>
                ))}

                <button
                  data-cursor="button"
                  onClick={() => { setSelectedProject(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="w-full py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 text-base"
                  style={{ backgroundColor: selectedProject.accentColor }}
                >
                  Start a Similar Project →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
