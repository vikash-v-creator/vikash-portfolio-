import prisma from "@/lib/prisma";
import ProjectClient from "./ProjectClient";

export default async function ProjectsAdminPage() {
  const projects = await prisma.project.findMany();
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-black text-white">Manage Projects</h1>
        <p className="text-text-muted mt-2">Add, edit, or remove your portfolio case studies.</p>
      </div>

      <ProjectClient initialProjects={projects} />
    </div>
  );
}
