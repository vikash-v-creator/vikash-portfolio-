"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deletePhilosophyCard(id: number) { await prisma.philosophyCard.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/philosophy"); }
export async function savePhilosophyCard(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.philosophyCard.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.philosophyCard.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/philosophy"); }
