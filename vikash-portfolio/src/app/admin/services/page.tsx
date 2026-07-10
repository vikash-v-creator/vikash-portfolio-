import prisma from "@/lib/prisma";
import ServicesClient from "./ServicesClient";
export default async function ServicesAdminPage() {
  const services = await prisma.service.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Services</h1><p className="text-text-muted mt-2">Edit your service offerings.</p></div><ServicesClient initialItems={services} /></div>);
}
