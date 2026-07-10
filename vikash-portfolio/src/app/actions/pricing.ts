"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deletePricingPlan(id: number) { await prisma.pricingPlan.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/pricing"); }
export async function savePricingPlan(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.pricingPlan.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.pricingPlan.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/pricing"); }
