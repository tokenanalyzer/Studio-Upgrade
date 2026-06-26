"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // TODO: Implement actual save
    setTimeout(() => {
      setSaving(false);
      router.push("/admin/projects");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/projects" className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">New Project</h1>
          <p className="text-slate-500">Add a new portfolio project.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Title</label>
          <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" placeholder="Project title" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug</label>
          <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" placeholder="project-slug" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Category</label>
          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500">
            <option>SaaS</option>
            <option>E-Commerce</option>
            <option>Web App</option>
            <option>Brand Identity</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
          <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500 resize-none" placeholder="Project description..." />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-accent-600 focus:ring-accent-500" />
            <span className="text-sm text-slate-700">Published</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-accent-600 focus:ring-accent-500" />
            <span className="text-sm text-slate-700">Featured</span>
          </label>
        </div>
        <div className="flex gap-3">
          <button type="submit" disabled={saving} className="btn-primary">
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Project"}
          </button>
          <Link href="/admin/projects" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
