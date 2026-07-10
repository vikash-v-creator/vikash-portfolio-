import prisma from "@/lib/prisma";
import ProcessClient from "./ProcessClient";
export default async function ProcessAdminPage() {
  const steps = await prisma.processStep.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Process Steps</h1><p className="text-text-muted mt-2">Edit your creative workflow steps.</p></div><ProcessClient initialItems={steps} /></div>);
}
