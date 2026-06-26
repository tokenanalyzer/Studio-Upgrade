import { createServerClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default async function AdminProjectsPage() {
  const supabase = await createServerClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-500">Manage your portfolio projects.</p>
        </div>
        <Link href="/admin/projects/new" className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Title</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Category</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Featured</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <tr key={project.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{project.title}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{project.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        project.published ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                      }`}>
                        {project.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        project.featured ? "bg-accent-50 text-accent-600" : "bg-slate-100 text-slate-500"
                      }`}>
                        {project.featured ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/projects/${project.id}/edit`} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors">
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No projects yet.{" "}
                    <Link href="/admin/projects/new" className="text-accent-600 hover:underline">Create your first project</Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
