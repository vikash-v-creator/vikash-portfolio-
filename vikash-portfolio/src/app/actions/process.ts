"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deleteProcessStep(id: string) { await prisma.processStep.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/process"); }
export async function saveProcessStep(data: any) { const { isNew, ...rest } = data; if (isNew) { await prisma.processStep.create({ data: rest }); } else { const { id, ...fields } = rest; await prisma.processStep.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/process"); }
