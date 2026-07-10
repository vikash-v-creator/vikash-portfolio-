"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProject(id: string) {
  await prisma.project.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/projects");
}

export async function saveProject(data: any) {
  if (data.isNew) {
    await prisma.project.create({
      data: {
        id: data.id,
        title: data.title,
        category: data.category,
        tags: data.tags,
        accentColor: data.accentColor,
        size: data.size,
        year: data.year,
        client: data.client,
        challenge: data.challenge,
        process: data.process,
        tools: data.tools,
        result: data.result,
        impact: data.impact,
        outcome: data.outcome,
      },
    });
  } else {
    await prisma.project.update({
      where: { id: data.id },
      data: {
        title: data.title,
        category: data.category,
        tags: data.tags,
        accentColor: data.accentColor,
        size: data.size,
        year: data.year,
        client: data.client,
        challenge: data.challenge,
        process: data.process,
        tools: data.tools,
        result: data.result,
        impact: data.impact,
        outcome: data.outcome,
      },
    });
  }
  revalidatePath("/");
  revalidatePath("/admin/projects");
}
