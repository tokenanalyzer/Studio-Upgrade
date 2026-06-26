"use client";

import { User } from "@supabase/supabase-js";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function AdminHeader({ user }: { user: User }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-slate-50"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-4 ml-auto">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-slate-900">{user.email}</p>
          <p className="text-xs text-slate-500">Administrator</p>
        </div>
        <form action="/api/auth/signout" method="post">
          <button type="submit" className="p-2 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </form>
      </div>
    </header>
  );
}
