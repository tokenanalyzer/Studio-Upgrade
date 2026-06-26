import { createServerClient } from "@/lib/supabase/server";
import { Mail, Calendar } from "lucide-react";

export default async function AdminLeadsPage() {
  const supabase = await createServerClient();
  const { data: leads } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  const statusColors: Record<string, string> = {
    new: "bg-accent-50 text-accent-600",
    contacted: "bg-yellow-50 text-yellow-600",
    qualified: "bg-emerald-50 text-emerald-600",
    converted: "bg-emerald-100 text-emerald-700",
    archived: "bg-slate-100 text-slate-500",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
        <p className="text-slate-500">Manage incoming project inquiries.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Name</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Email</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Service</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads && leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{lead.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-accent-600">
                        <Mail className="w-3.5 h-3.5" />
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{lead.service}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[lead.status] || "bg-slate-100 text-slate-500"}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(lead.created_at).toLocaleDateString()}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No leads yet. Leads will appear here when someone submits the contact form.
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
