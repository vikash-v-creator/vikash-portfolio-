"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { logoutAction } from "@/app/actions/auth";
import {
  LayoutDashboard,
  Briefcase,
  Layers,
  MessageSquare,
  HelpCircle,
  MousePointer2,
  ListOrdered,
  Cpu,
  DollarSign,
  Lightbulb,
  LogOut,
  Settings
} from "lucide-react";

const NAV_LINKS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: Briefcase },
  { href: "/admin/services", label: "Services", icon: Layers },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/admin/desk-items", label: "Desk Items", icon: MousePointer2 },
  { href: "/admin/process", label: "Process Steps", icon: ListOrdered },
  { href: "/admin/skills", label: "Skills", icon: Cpu },
  { href: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { href: "/admin/philosophy", label: "Philosophy", icon: Lightbulb },
  { href: "/admin/settings", label: "Settings & Stats", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await logoutAction();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-bg flex font-sans text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-glass-border hidden md:flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-glass-border">
          <Link href="/admin" className="font-display font-black text-2xl tracking-tighter text-white hover:text-accent-cyan transition-colors">
            PORTFOLIO<span className="text-accent-cyan">.ADMIN</span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_LINKS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "bg-accent-cyan/10 text-accent-cyan font-bold"
                    : "text-text-muted hover:bg-surface-2 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-glass-border">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-accent-pink hover:bg-accent-pink/10 transition-colors"
          >
            <LogOut size={18} />
            <span className="text-sm font-bold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen bg-bg">
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
