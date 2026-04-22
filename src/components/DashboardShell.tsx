'use client';

import Sidebar from '@/components/Sidebar';
import { Bell, Search } from 'lucide-react';

interface DashboardShellProps {
  children: React.ReactNode;
  role: 'tutor' | 'parent';
  title: string;
  subtitle?: string;
}

export default function DashboardShell({ children, role, title, subtitle }: DashboardShellProps) {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role={role} />
      
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-primary">{title}</h1>
            {subtitle && <p className="text-slate-500 font-bold">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-6">
             <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-white border-none rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent w-64 shadow-sm"
                />
             </div>
             <button className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-black text-white shadow-lg shadow-accent/20">
                {role === 'tutor' ? 'R' : 'S'}
             </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
