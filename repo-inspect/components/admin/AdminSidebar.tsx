"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import {
  LayoutDashboard, FolderKanban, Users, FileText, Settings, Home,
  MessageSquare, Briefcase, Globe, Sparkles, Palette,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Hero CMS", href: "/admin/hero", icon: Sparkles },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "Projects", href: "/admin/projects", icon: FolderKanban },
  { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col z-40">
      <div className="p-6 border-b border-slate-200">
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="text-lg font-bold text-accent-600">M</span>
          <span className="text-lg font-bold text-accent-600">D</span>
          <span className="text-lg font-bold text-slate-900 ml-1">Studio</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
              pathname === item.href || pathname.startsWith(item.href + "/")
                ? "bg-accent-50 text-accent-600"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors">
          <Home className="w-4 h-4" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}
