"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTestimonial(id: number) {
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/"); revalidatePath("/admin/testimonials");
}

export async function saveTestimonial(data: any) {
  const { isNew, ...rest } = data;
  if (isNew) { await prisma.testimonial.create({ data: rest }); }
  else { const { id, ...fields } = rest; await prisma.testimonial.update({ where: { id }, data: fields }); }
  revalidatePath("/"); revalidatePath("/admin/testimonials");
}
