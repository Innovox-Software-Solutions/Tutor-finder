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
    <div className="flex bg-[#fdfdfd] min-h-screen">
      <Sidebar role={role} />
      
      <main className="flex-1 overflow-x-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex justify-between items-center px-4 md:px-12 h-20 md:h-24">
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <Link href="/" className="text-xl font-black text-primary">
                T<span className="text-accent">N</span>
              </Link>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-black text-primary tracking-tight">{title}</h1>
              {subtitle && <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
             <div className="relative group hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search anything..." 
                  className="bg-slate-50 border-none rounded-2xl pl-10 pr-4 py-2.5 text-sm font-bold focus:ring-2 focus:ring-accent/20 w-48 lg:w-64 transition-all"
                />
             </div>
             <button className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-premium border border-slate-50 text-slate-400 hover:text-primary transition-colors">
                <Bell size={20} />
                <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white" />
             </button>
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl premium-gradient flex items-center justify-center font-black text-white shadow-lg shadow-primary/20 cursor-pointer hover:scale-105 transition-transform active:scale-95">
                {role === 'tutor' ? 'R' : 'S'}
             </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 md:p-12 pb-24 md:pb-12 max-w-7xl mx-auto">
          {children}
        </div>

        {/* Mobile Bottom Nav (Visible only on small screens) */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 bg-primary/95 backdrop-blur-md rounded-3xl z-50 flex items-center justify-around px-2 shadow-2xl border border-white/10">
          <MobileNavItem Icon={Home} href={role === 'tutor' ? '/dashboard/tutor' : '/dashboard/parent'} />
          <MobileNavItem Icon={role === 'tutor' ? Users : Search} href={role === 'tutor' ? '/dashboard/tutor/students' : '/find-tutor'} />
          <MobileNavItem Icon={ClipboardList} href={role === 'tutor' ? '/dashboard/tutor/requests' : '/dashboard/parent/requests'} />
          <MobileNavItem Icon={Wallet} href={role === 'tutor' ? '/dashboard/tutor/earnings' : '/dashboard/parent/payments'} />
          <MobileNavItem Icon={User} href={role === 'tutor' ? '/dashboard/tutor/profile' : '/dashboard/parent/tutors'} />
        </div>
      </main>
    </div>
  );
}

function MobileNavItem({ Icon, href }: { Icon: any, href: string }) {
  return (
    <Link href={href} className="p-3 text-slate-400 hover:text-accent transition-colors active:scale-90">
      <Icon size={24} />
    </Link>
  );
}
