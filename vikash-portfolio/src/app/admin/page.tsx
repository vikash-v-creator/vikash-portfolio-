import prisma from "@/lib/prisma";
import Link from "next/link";
import { Briefcase, Layers, MessageSquare, ListOrdered, Settings } from "lucide-react";

export default async function AdminDashboard() {
  const [projectCount, serviceCount, testimonialCount] = await Promise.all([
    prisma.project.count(),
    prisma.service.count(),
    prisma.testimonial.count(),
  ]);

  const cards = [
    { title: "Projects", count: projectCount, icon: Briefcase, href: "/admin/projects", color: "bg-accent-orange/10 text-accent-orange" },
    { title: "Services", count: serviceCount, icon: Layers, href: "/admin/services", color: "bg-accent-cyan/10 text-accent-cyan" },
    { title: "Testimonials", count: testimonialCount, icon: MessageSquare, href: "/admin/testimonials", color: "bg-accent-yellow/10 text-accent-yellow" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-display font-black text-white">Dashboard Overview</h1>
          <p className="text-text-muted mt-2">Welcome to your portfolio control center.</p>
        </div>
        <Link href="/" target="_blank" className="bg-surface-2 border border-glass-border px-4 py-2 rounded-xl text-sm hover:bg-surface transition-colors">
          View Live Site ↗
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} href={card.href} className="bg-surface border border-glass-border p-6 rounded-2xl hover:bg-surface-2 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${card.color}`}>
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-black font-display text-white">{card.count}</div>
              </div>
              <h3 className="text-text-muted group-hover:text-white transition-colors">{card.title}</h3>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 bg-surface border border-glass-border rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-white/5 rounded-xl">
            <Settings size={24} className="text-text-muted" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Next Steps</h2>
            <p className="text-text-muted text-sm">Select an item from the sidebar to start editing.</p>
          </div>
        </div>
        <div className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Everything on your live website is now connected to this database. Any changes you make in these panels will reflect instantly on the frontend. Remember to use high-quality images and concise text for the best user experience!
        </div>
      </div>
    </div>
  );
}
