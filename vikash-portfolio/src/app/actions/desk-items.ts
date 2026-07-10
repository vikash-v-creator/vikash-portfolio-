"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deleteDeskItem(id: string) { await prisma.deskItem.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/desk-items"); }
export async function saveDeskItem(data: any) { const { isNew, ...rest } = data; if (isNew) { await prisma.deskItem.create({ data: rest }); } else { const { id, ...fields } = rest; await prisma.deskItem.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/desk-items"); }
