import prisma from "@/lib/prisma";
import TestimonialsClient from "./TestimonialsClient";

export default async function TestimonialsAdminPage() {
  const testimonials = await prisma.testimonial.findMany();
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-black text-white">Manage Testimonials</h1>
        <p className="text-text-muted mt-2">Add, edit, or remove client testimonials.</p>
      </div>
      <TestimonialsClient initialItems={testimonials} />
    </div>
  );
}
