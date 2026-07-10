"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveStat, deleteStat, saveWhyHireMe, deleteWhyHireMe } from "@/app/actions/settings";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type Stat = { id: number; value: number; suffix: string; label: string };
type WHM = { id: number; icon: string; color: string; title: string; stat: string; description: string };
const EMPTY_STAT: Stat = { id: 0, value: 0, suffix: "+", label: "" };
const EMPTY_WHM: WHM = { id: 0, icon: "⚡", color: "#FF5C00", title: "", stat: "", description: "" };

export default function SettingsClient({ initialStats, initialWhyHireMe }: { initialStats: Stat[]; initialWhyHireMe: WHM[] }) {
  const router = useRouter();

  // Stats state
  const [editingStat, setEditingStat] = useState<Stat | null>(null);
  const [isNewStat, setIsNewStat] = useState(false);
  const openNewStat = () => { setEditingStat({ ...EMPTY_STAT }); setIsNewStat(true); };
  const openEditStat = (s: Stat) => { setEditingStat({ ...s }); setIsNewStat(false); };
  const closeStat = () => { setEditingStat(null); setIsNewStat(false); };
  const handleSaveStat = async () => { if (!editingStat) return; await saveStat({ ...editingStat, isNew: isNewStat }); closeStat(); router.refresh(); };
  const handleDeleteStat = async (id: number) => { if (!confirm("Delete?")) return; await deleteStat(id); router.refresh(); };
  const setStat = (k: keyof Stat, v: any) => setEditingStat((e) => e ? { ...e, [k]: v } : null);

  // WHM state
  const [editingWHM, setEditingWHM] = useState<WHM | null>(null);
  const [isNewWHM, setIsNewWHM] = useState(false);
  const openNewWHM = () => { setEditingWHM({ ...EMPTY_WHM }); setIsNewWHM(true); };
  const openEditWHM = (w: WHM) => { setEditingWHM({ ...w }); setIsNewWHM(false); };
  const closeWHM = () => { setEditingWHM(null); setIsNewWHM(false); };
  const handleSaveWHM = async () => { if (!editingWHM) return; await saveWhyHireMe({ ...editingWHM, isNew: isNewWHM }); closeWHM(); router.refresh(); };
  const handleDeleteWHM = async (id: number) => { if (!confirm("Delete?")) return; await deleteWhyHireMe(id); router.refresh(); };
  const setWHM = (k: keyof WHM, v: any) => setEditingWHM((e) => e ? { ...e, [k]: v } : null);

  return (
    <div className="space-y-12">
      {/* Stats Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-black text-white">📊 Stats Counters</h2>
          <button onClick={openNewStat} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-2 px-4 rounded-xl hover:opacity-90 text-sm"><Plus size={16} /> Add Stat</button>
        </div>
        <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
          <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
            <th className="px-6 py-4">Value</th><th className="px-6 py-4">Label</th><th className="px-6 py-4 text-right">Actions</th>
          </tr></thead><tbody>
            {initialStats.map((s) => (
              <tr key={s.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
                <td className="px-6 py-4 font-bold text-accent-cyan text-lg">{s.value}{s.suffix}</td>
                <td className="px-6 py-4 text-white">{s.label}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => openEditStat(s)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                  <button onClick={() => handleDeleteStat(s.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {initialStats.length === 0 && <tr><td colSpan={3} className="px-6 py-12 text-center text-text-muted">No stats yet.</td></tr>}
          </tbody></table>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display font-black text-white">🚀 Why Hire Me Cards</h2>
          <button onClick={openNewWHM} className="flex items-center gap-2 bg-accent-cyan text-bg font-bold py-2 px-4 rounded-xl hover:opacity-90 text-sm"><Plus size={16} /> Add Card</button>
        </div>
        <div className="bg-surface border border-glass-border rounded-2xl overflow-hidden">
          <table className="w-full text-left"><thead><tr className="border-b border-glass-border text-text-muted text-sm">
            <th className="px-6 py-4">Icon</th><th className="px-6 py-4">Title</th><th className="px-6 py-4">Stat</th><th className="px-6 py-4 text-right">Actions</th>
          </tr></thead><tbody>
            {initialWhyHireMe.map((w) => (
              <tr key={w.id} className="border-b border-glass-border/50 hover:bg-surface-2/50">
                <td className="px-6 py-4 text-2xl">{w.icon}</td><td className="px-6 py-4 font-bold text-white">{w.title}</td>
                <td className="px-6 py-4 text-accent-yellow">{w.stat}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => openEditWHM(w)} className="text-accent-cyan hover:bg-accent-cyan/10 p-2 rounded-lg"><Pencil size={16} /></button>
                  <button onClick={() => handleDeleteWHM(w.id)} className="text-accent-pink hover:bg-accent-pink/10 p-2 rounded-lg"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
            {initialWhyHireMe.length === 0 && <tr><td colSpan={4} className="px-6 py-12 text-center text-text-muted">No cards yet.</td></tr>}
          </tbody></table>
        </div>
      </section>

      {/* Stat Modal */}
      {editingStat && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={closeStat}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNewStat ? "Add" : "Edit"} Stat</h2><button onClick={closeStat} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm text-text-muted mb-1 block">Value</label><input type="number" value={editingStat.value} onChange={(e) => setStat("value", parseInt(e.target.value) || 0)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" /></div>
                <div><label className="text-sm text-text-muted mb-1 block">Suffix</label><input value={editingStat.suffix} onChange={(e) => setStat("suffix", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" /></div>
              </div>
              <input placeholder="Label" value={editingStat.label} onChange={(e) => setStat("label", e.target.value)} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
            </div>
            <button onClick={handleSaveStat} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}

      {/* WHM Modal */}
      {editingWHM && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={closeWHM}>
          <div className="bg-surface border border-glass-border rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-display font-black text-white">{isNewWHM ? "Add" : "Edit"} Card</h2><button onClick={closeWHM} className="text-text-muted hover:text-white"><X size={20} /></button></div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="Icon (emoji)" value={editingWHM.icon} onChange={(e) => setWHM("icon", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
                <input placeholder="Title" value={editingWHM.title} onChange={(e) => setWHM("title", e.target.value)} className="col-span-2 bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="color" value={editingWHM.color} onChange={(e) => setWHM("color", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-2 py-1 h-12 w-full" />
                <input placeholder="Stat highlight" value={editingWHM.stat} onChange={(e) => setWHM("stat", e.target.value)} className="bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan" />
              </div>
              <textarea placeholder="Description" value={editingWHM.description} onChange={(e) => setWHM("description", e.target.value)} rows={3} className="w-full bg-surface-2 border border-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-cyan resize-none" />
            </div>
            <button onClick={handleSaveWHM} className="mt-6 w-full flex items-center justify-center gap-2 bg-accent-cyan text-bg font-bold py-3 rounded-xl hover:opacity-90"><Save size={18} /> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
