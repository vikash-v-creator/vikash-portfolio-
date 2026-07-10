import prisma from "@/lib/prisma";
import SkillsClient from "./SkillsClient";
export default async function SkillsAdminPage() {
  const skills = await prisma.skillCategory.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Skills</h1><p className="text-text-muted mt-2">Edit your skill categories and tools.</p></div><SkillsClient initialItems={skills} /></div>);
}
