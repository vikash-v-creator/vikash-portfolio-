import prisma from "@/lib/prisma";
import PhilosophyClient from "./PhilosophyClient";
export default async function PhilosophyAdminPage() {
  const cards = await prisma.philosophyCard.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Philosophy</h1><p className="text-text-muted mt-2">Edit your creative philosophy cards.</p></div><PhilosophyClient initialItems={cards} /></div>);
}
