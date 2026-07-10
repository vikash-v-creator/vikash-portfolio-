"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveSkillCategory, deleteSkillCategory } from "@/app/actions/skills";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type SK = { id: number; category: string; color: string; tools: string };
const EMPTY: SK = { id: 0, category: "", color: "#FF5C00", tools: "[]" };

export default function SkillsClient({ initialItems }: { initialItems: SK[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<SK | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (s: SK) => { setEditing({ ...s }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; await saveSkillCategory({ ...editing, isNew }); close(); router.refresh(); };
  const handleDelete = async (id: number) => { if (!confirm("Delete?")) return; await deleteSkillCategory(id); router.refresh(); };
  const set = (k: keyof SK, v: any) => setEditing((e) => e ? { ...e, [k]: v } : null);
  const toolCount = (tools: string) => { try { return JSON.parse(tools).length; } catch { return 0; } };

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 mb-6"><Plus size={18} /> Add Category</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Category</th><th className="px-6 py-4">Color</th><th className="px-6 py-4">Tools</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((s) => (
            <tr key={s.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 font-bold text-white">{s.category}</td>
              <td className="px-6 py-4"><div className="w-6 h-6 rounded-full" style={{ backgroundColor: s.color }} /></td>
              <td className="px-6 py-4 text-text-muted">{toolCount(s.tools)} tools</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(s)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(s.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={4} className="px-6 py-12 text-center text-text-muted">No skill categories yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Skill Category</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <input placeholder="Category name" value={editing.category} onChange={(e) => set("category", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <input type="color" value={editing.color} onChange={(e) => set("color", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-2 py-1 h-12 w-24" />
              <div><label className="text-sm text-text-muted mb-1 block">Tools (JSON: [{`{name, icon}`}])</label>
                <textarea value={editing.tools} onChange={(e) => set("tools", e.target.value)} rows={6} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none font-mono text-sm" />
              </div>
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
