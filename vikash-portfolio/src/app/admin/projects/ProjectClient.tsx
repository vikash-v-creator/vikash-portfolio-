"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveProject, deleteProject } from "@/app/actions/projects";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type Project = {
  id: string; title: string; category: string; tags: string; accentColor: string;
  size: string; year: string; client: string; challenge: string; process: string;
  tools: string; result: string; impact: string; outcome: string;
};

const EMPTY: Project = {
  id: "", title: "", category: "Graphic Design", tags: "", accentColor: "#FF5C00",
  size: "medium", year: "2025", client: "", challenge: "", process: "",
  tools: "", result: "", impact: "", outcome: "",
};

export default function ProjectClient({ initialProjects }: { initialProjects: Project[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<Project | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (p: Project) => { setEditing({ ...p }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };

  const handleSave = async () => {
    if (!editing) return;
    const id = isNew ? editing.title.toLowerCase().replace(/\s+/g, "-") : editing.id;
    await saveProject({ ...editing, id, isNew });
    close();
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    await deleteProject(id);
    router.refresh();
  };

  const set = (key: keyof Project, val: string) => setEditing((e) => e ? { ...e, [key]: val } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity mb-6">
        <Plus size={18} /> Add Project
      </button>

      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead><tr className="border-b border-glass-border text-text-muted text-sm">
            <th className="px-6 py-4">Title</th><th className="px-6 py-4">Category</th><th className="px-6 py-4">Year</th><th className="px-6 py-4">Client</th><th className="px-6 py-4 text-right">Actions</th>
          </tr></thead>
          <tbody>
            {initialProjects.map((p) => (
              <tr key={p.id} className="border-b border-glass-border/50 hover:bg-surface-2/50 transition-colors">
                <td className="px-6 py-4 font-bold text-white">{p.title}</td>
                <td className="px-6 py-4 text-text-muted">{p.category}</td>
                <td className="px-6 py-4 text-text-muted">{p.year}</td>
                <td className="px-6 py-4 text-text-muted">{p.client}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => openEdit(p)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(p.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {initialProjects.length === 0 && <tr><td colSpan={5} className="px-6 py-12 text-center text-text-muted">No projects yet. Add your first one!</td></tr>}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Project</h2>
              <button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <input placeholder="Title" value={editing.title} onChange={(e) => set("title", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <div className="grid grid-cols-2 gap-4">
                <select value={editing.category} onChange={(e) => set("category", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan">
                  <option>Graphic Design</option><option>Video Editing</option><option>Web Development</option>
                </select>
                <select value={editing.size} onChange={(e) => set("size", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan">
                  <option value="large">Large</option><option value="medium">Medium</option><option value="small">Small</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Year" value={editing.year} onChange={(e) => set("year", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input placeholder="Client" value={editing.client} onChange={(e) => set("client", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input type="color" value={editing.accentColor} onChange={(e) => set("accentColor", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-2 py-1 h-12 w-full" />
              </div>
              <input placeholder="Tags (comma separated)" value={editing.tags} onChange={(e) => set("tags", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <input placeholder="Tools (comma separated)" value={editing.tools} onChange={(e) => set("tools", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <textarea placeholder="Challenge" value={editing.challenge} onChange={(e) => set("challenge", e.target.value)} rows={2} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <textarea placeholder="Process" value={editing.process} onChange={(e) => set("process", e.target.value)} rows={2} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <textarea placeholder="Result" value={editing.result} onChange={(e) => set("result", e.target.value)} rows={2} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <textarea placeholder="Impact" value={editing.impact} onChange={(e) => set("impact", e.target.value)} rows={2} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <textarea placeholder="Outcome" value={editing.outcome} onChange={(e) => set("outcome", e.target.value)} rows={2} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">
              <Save size={18} /> Save Project
            </button>
          </div>
        </div>
      )}
    </>
  );
}
