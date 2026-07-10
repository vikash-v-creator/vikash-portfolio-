"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { savePricingPlan, deletePricingPlan } from "@/app/actions/pricing";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type PP = { id: number; category: string; name: string; price: string; popular: boolean; description: string; features: string };
const EMPTY: PP = { id: 0, category: "design", name: "", price: "", popular: false, description: "", features: "[]" };

export default function PricingClient({ initialItems }: { initialItems: PP[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<PP | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (p: PP) => { setEditing({ ...p, features: (() => { try { return JSON.parse(p.features).join("\n"); } catch { return p.features; } })() }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; const featuresList = editing.features.split("\n").filter(Boolean); await savePricingPlan({ ...editing, features: JSON.stringify(featuresList), isNew }); close(); router.refresh(); };
  const handleDelete = async (id: number) => { if (!confirm("Delete?")) return; await deletePricingPlan(id); router.refresh(); };
  const set = (k: keyof PP, v: any) => setEditing((e) => e ? { ...e, [k]: v } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 mb-6"><Plus size={18} /> Add Plan</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Category</th><th className="px-6 py-4">Name</th><th className="px-6 py-4">Price</th><th className="px-6 py-4">Popular</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((p) => (
            <tr key={p.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 text-text-muted capitalize">{p.category}</td><td className="px-6 py-4 font-bold text-white">{p.name}</td>
              <td className="px-6 py-4 text-accent-cyan font-bold">{p.price}</td>
              <td className="px-6 py-4">{p.popular ? <span className="bg-accent-yellow/20 text-accent-yellow text-xs px-2 py-1 rounded-full">Popular</span> : <span className="text-text-muted text-xs">—</span>}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(p)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(p.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={5} className="px-6 py-12 text-center text-text-muted">No plans yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Plan</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <select value={editing.category} onChange={(e) => set("category", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan">
                  <option value="design">Design</option><option value="video">Video</option><option value="web">Web</option>
                </select>
                <input placeholder="Plan Name" value={editing.name} onChange={(e) => set("name", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Price (e.g. ₹1,499)" value={editing.price} onChange={(e) => set("price", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <label className="flex items-center gap-3 bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white cursor-pointer">
                  <input type="checkbox" checked={editing.popular} onChange={(e) => set("popular", e.target.checked)} className="accent-accent-cyan w-5 h-5" /> Popular
                </label>
              </div>
              <input placeholder="Description" value={editing.description} onChange={(e) => set("description", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <div><label className="text-sm text-text-muted mb-1 block">Features (one per line)</label>
                <textarea value={editing.features} onChange={(e) => set("features", e.target.value)} rows={6} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              </div>
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
