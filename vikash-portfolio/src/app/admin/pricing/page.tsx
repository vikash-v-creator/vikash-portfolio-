import prisma from "@/lib/prisma";
import PricingClient from "./PricingClient";
export default async function PricingAdminPage() {
  const plans = await prisma.pricingPlan.findMany();
  return (<div><div className="mb-8"><h1 className="text-3xl font-display font-black text-white">Manage Pricing</h1><p className="text-text-muted mt-2">Edit your pricing plans across all service categories.</p></div><PricingClient initialItems={plans} /></div>);
}
