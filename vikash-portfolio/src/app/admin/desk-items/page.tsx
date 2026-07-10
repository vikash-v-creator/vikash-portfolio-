import prisma from "@/lib/prisma";
import DeskItemsClient from "./DeskItemsClient";

export const dynamic = "force-dynamic";

export default async function DeskItemsPage() {
  const items = await prisma.deskItem.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Desk Items</h1><p className="text-text-muted mt-2">Edit the interactive desk in the About section.</p></div><DeskItemsClient initialItems={items} /></div>);
}
