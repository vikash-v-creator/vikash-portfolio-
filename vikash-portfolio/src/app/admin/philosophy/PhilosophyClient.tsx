"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { savePhilosophyCard, deletePhilosophyCard } from "@/app/actions/philosophy";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type PC = { id: number; icon: string; color: string; title: string; description: string; annotation: string | null };
const EMPTY: PC = { id: 0, icon: "🎯", color: "#FF5C00", title: "", description: "", annotation: "" };

export default function PhilosophyClient({ initialItems }: { initialItems: PC[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<PC | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (c: PC) => { setEditing({ ...c }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; await savePhilosophyCard({ ...editing, isNew }); close(); router.refresh(); };
  const handleDelete = async (id: number) => { if (!confirm("Delete?")) return; await deletePhilosophyCard(id); router.refresh(); };
  const set = (k: keyof PC, v: any) => setEditing((e) => e ? { ...e, [k]: v } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 mb-6"><Plus size={18} /> Add Card</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Icon</th><th className="px-6 py-4">Title</th><th className="px-6 py-4">Annotation</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((c) => (
            <tr key={c.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 text-2xl">{c.icon}</td><td className="px-6 py-4 font-bold text-white">{c.title}</td>
              <td className="px-6 py-4 text-text-muted font-handwriting">{c.annotation || "—"}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(c)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(c.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={4} className="px-6 py-12 text-center text-text-muted">No cards yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Card</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Icon (emoji)" value={editing.icon} onChange={(e) => set("icon", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input placeholder="Title" value={editing.title} onChange={(e) => set("title", e.target.value)} className="col-span-2 bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <input type="color" value={editing.color} onChange={(e) => set("color", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-2 py-1 h-12 w-24" />
              <textarea placeholder="Description" value={editing.description} onChange={(e) => set("description", e.target.value)} rows={3} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <input placeholder="Annotation (optional handwritten note)" value={editing.annotation || ""} onChange={(e) => set("annotation", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
