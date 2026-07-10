"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveFaq, deleteFaq } from "@/app/actions/faqs";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type F = { id: number; q: string; a: string };
const EMPTY: F = { id: 0, q: "", a: "" };

export default function FaqsClient({ initialItems }: { initialItems: F[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<F | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (f: F) => { setEditing({ ...f }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; await saveFaq({ ...editing, isNew }); close(); router.refresh(); };
  const handleDelete = async (id: number) => { if (!confirm("Delete?")) return; await deleteFaq(id); router.refresh(); };
  const set = (k: keyof F, v: string) => setEditing((e) => e ? { ...e, [k]: v } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 mb-6"><Plus size={18} /> Add FAQ</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Question</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((f) => (
            <tr key={f.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 text-white">{f.q.length > 60 ? f.q.slice(0, 60) + "..." : f.q}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(f)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(f.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={2} className="px-6 py-12 text-center text-text-muted">No FAQs yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} FAQ</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <input placeholder="Question" value={editing.q} onChange={(e) => set("q", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <textarea placeholder="Answer" value={editing.a} onChange={(e) => set("a", e.target.value)} rows={5} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
