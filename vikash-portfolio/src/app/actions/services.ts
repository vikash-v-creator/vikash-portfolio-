"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteService(id: string) {
  await prisma.service.delete({ where: { id } });
  revalidatePath("/"); revalidatePath("/admin/services");
}
export async function saveService(data: any) {
  const { isNew, ...rest } = data;
  if (isNew) { await prisma.service.create({ data: rest }); }
  else { const { id, ...fields } = rest; await prisma.service.update({ where: { id }, data: fields }); }
  revalidatePath("/"); revalidatePath("/admin/services");
}
