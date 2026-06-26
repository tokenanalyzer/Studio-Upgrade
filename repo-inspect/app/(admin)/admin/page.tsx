import { createServerClient } from "@/lib/supabase/server";
import { Card } from "@/components/ui/Card";
import {
  FolderKanban, Users, FileText, Eye, ArrowUpRight, Plus, TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const supabase = await createServerClient();

  const { count: projectsCount } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  const { count: leadsCount } = await supabase
    .from("leads")
    .select("*", { count: "exact", head: true });

  const { count: blogCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true });

  const { count: testimonialsCount } = await supabase
    .from("testimonials")
    .select("*", { count: "exact", head: true });

  const stats = [
    { title: "Total Projects", value: projectsCount || 0, icon: FolderKanban, trend: "+12%", color: "text-accent-600" },
    { title: "New Leads", value: leadsCount || 0, icon: Users, trend: "+8%", color: "text-emerald-600" },
    { title: "Blog Posts", value: blogCount || 0, icon: FileText, trend: "+5%", color: "text-sky-600" },
    { title: "Testimonials", value: testimonialsCount || 0, icon: TrendingUp, trend: "+15%", color: "text-violet-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Welcome back to M.D Studio admin.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-500">{stat.title}</span>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-2">
              <ArrowUpRight className="w-3 h-3" />
              {stat.trend} from last month
            </p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h2>
          <p className="text-sm text-slate-500">
            Activity feed will appear here once connected to Supabase.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Link href="/admin/projects/new" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-accent-50 transition-colors text-sm font-medium text-slate-700">
              <Plus className="w-4 h-4 text-accent-600" />
              Add New Project
            </Link>
            <Link href="/admin/blog/new" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-accent-50 transition-colors text-sm font-medium text-slate-700">
              <Plus className="w-4 h-4 text-accent-600" />
              Add Blog Post
            </Link>
            <Link href="/admin/testimonials/new" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-accent-50 transition-colors text-sm font-medium text-slate-700">
              <Plus className="w-4 h-4 text-accent-600" />
              Add Testimonial
            </Link>
            <Link href="/admin/leads" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-accent-50 transition-colors text-sm font-medium text-slate-700">
              <Eye className="w-4 h-4 text-accent-600" />
              View Leads
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
