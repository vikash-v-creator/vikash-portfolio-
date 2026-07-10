import prisma from "@/lib/prisma";
import SettingsClient from "./SettingsClient";
export default async function SettingsAdminPage() {
  const stats = await prisma.stat.findMany();
  const whyHireMe = await prisma.whyHireMe.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Settings &amp; Stats</h1><p className="text-text-muted mt-2">Manage your stats counters and &quot;Why Hire Me&quot; cards.</p></div><SettingsClient initialStats={stats} initialWhyHireMe={whyHireMe} /></div>);
}
