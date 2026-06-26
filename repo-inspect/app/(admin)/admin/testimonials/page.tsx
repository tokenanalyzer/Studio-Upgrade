import { createServerClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Pencil, Trash2 } from "lucide-react";

export default async function AdminTestimonialsPage() {
  const supabase = await createServerClient();
  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .order("order", { ascending: true });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Testimonials</h1>
          <p className="text-slate-500">Manage client testimonials and reviews.</p>
        </div>
        <Link href="/admin/testimonials/new" className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Author</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Company</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Quote</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Status</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials && testimonials.length > 0 ? (
                testimonials.map((t) => (
                  <tr key={t.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{t.author}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{t.company}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">{t.quote}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        t.published ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                      }`}>
                        {t.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/testimonials/${t.id}/edit`} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors">
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
                    No testimonials yet. <Link href="/admin/testimonials/new" className="text-accent-600 hover:underline">Create your first testimonial</Link>
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
