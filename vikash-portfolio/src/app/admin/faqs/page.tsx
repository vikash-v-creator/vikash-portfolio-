import prisma from "@/lib/prisma";
import FaqsClient from "./FaqsClient";
export default async function FaqsAdminPage() {
  const faqs = await prisma.faq.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage FAQs</h1><p className="text-text-muted mt-2">Add, edit, or remove frequently asked questions.</p></div><FaqsClient initialItems={faqs} /></div>);
}
