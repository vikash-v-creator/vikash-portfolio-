"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveDeskItem, deleteDeskItem } from "@/app/actions/desk-items";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type D = { id: string; icon: string; label: string; x: number; y: number; info: string; detail: string };
const EMPTY: D = { id: "", icon: "📌", label: "", x: 50, y: 50, info: "", detail: "" };

export default function DeskItemsClient({ initialItems }: { initialItems: D[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<D | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (d: D) => { setEditing({ ...d }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; const id = isNew ? editing.label.toLowerCase().replace(/\s+/g, "-") : editing.id; await saveDeskItem({ ...editing, id, isNew }); close(); router.refresh(); };
  const handleDelete = async (id: string) => { if (!confirm("Delete?")) return; await deleteDeskItem(id); router.refresh(); };
  const set = (k: keyof D, v: any) => setEditing((e) => e ? { ...e, [k]: v } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 mb-6"><Plus size={18} /> Add Desk Item</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Icon</th><th className="px-6 py-4">Label</th><th className="px-6 py-4">X</th><th className="px-6 py-4">Y</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((d) => (
            <tr key={d.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 text-2xl">{d.icon}</td><td className="px-6 py-4 font-bold text-white">{d.label}</td>
              <td className="px-6 py-4 text-text-muted">{d.x}%</td><td className="px-6 py-4 text-text-muted">{d.y}%</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(d)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(d.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={5} className="px-6 py-12 text-center text-text-muted">No items yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Desk Item</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Icon (emoji)" value={editing.icon} onChange={(e) => set("icon", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input placeholder="Label" value={editing.label} onChange={(e) => set("label", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm text-text-muted mb-1 block">X Position (%)</label><input type="number" min={0} max={100} value={editing.x} onChange={(e) => set("x", parseFloat(e.target.value))} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" /></div>
                <div><label className="text-sm text-text-muted mb-1 block">Y Position (%)</label><input type="number" min={0} max={100} value={editing.y} onChange={(e) => set("y", parseFloat(e.target.value))} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" /></div>
              </div>
              <input placeholder="Info (short)" value={editing.info} onChange={(e) => set("info", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <textarea placeholder="Detail (long)" value={editing.detail} onChange={(e) => set("detail", e.target.value)} rows={3} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
