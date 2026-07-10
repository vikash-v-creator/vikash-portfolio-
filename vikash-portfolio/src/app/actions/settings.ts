"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteStat(id: number) { await prisma.stat.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/settings"); }
export async function saveStat(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.stat.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.stat.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/settings"); }

export async function deleteWhyHireMe(id: number) { await prisma.whyHireMe.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/settings"); }
export async function saveWhyHireMe(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.whyHireMe.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.whyHireMe.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/settings"); }
