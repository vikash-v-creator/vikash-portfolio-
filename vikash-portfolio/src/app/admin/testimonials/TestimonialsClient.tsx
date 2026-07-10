"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveTestimonial, deleteTestimonial } from "@/app/actions/testimonials";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type T = { id: number; name: string; role: string; avatar: string; avatarColor: string; text: string; service: string; rating: number };
const EMPTY: T = { id: 0, name: "", role: "", avatar: "", avatarColor: "#FF5C00", text: "", service: "", rating: 5 };

export default function TestimonialsClient({ initialItems }: { initialItems: T[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<T | null>(null);
  const [isNew, setIsNew] = useState(false);
  const openNew = () => { setEditing({ ...EMPTY }); setIsNew(true); };
  const openEdit = (t: T) => { setEditing({ ...t }); setIsNew(false); };
  const close = () => { setEditing(null); setIsNew(false); };
  const handleSave = async () => { if (!editing) return; await saveTestimonial({ ...editing, isNew }); close(); router.refresh(); };
  const handleDelete = async (id: number) => { if (!confirm("Delete?")) return; await deleteTestimonial(id); router.refresh(); };
  const set = (k: keyof T, v: any) => setEditing((e) => e ? { ...e, [k]: v } : null);

  return (
    <>
      <button onClick={openNew} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity mb-6"><Plus size={18} /> Add Testimonial</button>
      <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
        <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
          <th className="px-6 py-4">Name</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Service</th><th className="px-6 py-4">Rating</th><th className="px-6 py-4 text-right">Actions</th>
        </tr></thead><tbody>
          {initialItems.map((t) => (
            <tr key={t.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
              <td className="px-6 py-4 font-bold text-white">{t.name}</td><td className="px-6 py-4 text-text-muted">{t.role}</td>
              <td className="px-6 py-4 text-text-muted">{t.service}</td><td className="px-6 py-4 text-accent-yellow">{"★".repeat(t.rating)}</td>
              <td className="px-6 py-4 text-right space-x-2">
                <button onClick={() => openEdit(t)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                <button onClick={() => handleDelete(t.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
              </td>
            </tr>
          ))}
          {initialItems.length === 0 && <tr><td colSpan={5} className="px-6 py-12 text-center text-text-muted">No testimonials yet.</td></tr>}
        </tbody></table>
      </div>
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={close}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNew ? "Add" : "Edit"} Testimonial</h2><button onClick={close} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <input placeholder="Name" value={editing.name} onChange={(e) => set("name", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <input placeholder="Role (e.g. CEO, StartupX)" value={editing.role} onChange={(e) => set("role", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Avatar (initials)" value={editing.avatar} onChange={(e) => set("avatar", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input type="color" value={editing.avatarColor} onChange={(e) => set("avatarColor", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-2 py-1 h-12 w-full" />
                <input placeholder="Service" value={editing.service} onChange={(e) => set("service", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <textarea placeholder="Testimonial text" value={editing.text} onChange={(e) => set("text", e.target.value)} rows={4} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
              <div><label className="text-sm text-text-muted mb-1 block">Rating</label>
                <select value={editing.rating} onChange={(e) => set("rating", parseInt(e.target.value))} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan">
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Star{n>1?"s":""}</option>)}
                </select>
              </div>
            </div>
            <button onClick={handleSave} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </>
  );
}
