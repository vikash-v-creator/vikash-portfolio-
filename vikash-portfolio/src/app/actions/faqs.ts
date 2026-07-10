"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function deleteFaq(id: number) { await prisma.faq.delete({ where: { id } }); revalidatePath("/"); revalidatePath("/admin/faqs"); }
export async function saveFaq(data: any) { const { isNew, ...rest } = data; if (isNew) { const { id, ...fields } = rest; await prisma.faq.create({ data: fields }); } else { const { id, ...fields } = rest; await prisma.faq.update({ where: { id }, data: fields }); } revalidatePath("/"); revalidatePath("/admin/faqs"); }
