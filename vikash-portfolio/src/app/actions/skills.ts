"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deleteSkillCategory(id: number) { await prisma.skillCategory.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/skills"); }
export async function saveSkillCategory(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.skillCategory.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.skillCategory.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/skills"); }
