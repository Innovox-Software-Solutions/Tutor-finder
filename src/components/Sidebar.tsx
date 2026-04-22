'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  ClipboardList, 
  Users, 
  Wallet, 
  Calendar, 
  Star, 
  Bell, 
  Settings,
  LogOut,
  Search
} from 'lucide-react';

interface SidebarProps {
  role: 'tutor' | 'parent';
}

const Sidebar = ({ role }: SidebarProps) => {
  const pathname = usePathname();

  const tutorMenu = [
    { name: 'Overview', icon: <Home size={22} />, path: '/dashboard/tutor' },
    { name: 'My Profile', icon: <User size={22} />, path: '/dashboard/tutor/profile' },
    { name: 'Demo Requests', icon: <ClipboardList size={22} />, path: '/dashboard/tutor/requests' },
    { name: 'My Students', icon: <Users size={22} />, path: '/dashboard/tutor/students' },
    { name: 'Earnings', icon: <Wallet size={22} />, path: '/dashboard/tutor/earnings' },
    { name: 'Schedule', icon: <Calendar size={22} />, path: '/dashboard/tutor/schedule' },
    { name: 'Reviews', icon: <Star size={22} />, path: '/dashboard/tutor/reviews' },
  ];

  const parentMenu = [
    { name: 'Overview', icon: <Home size={22} />, path: '/dashboard/parent' },
    { name: 'Find Tutor', icon: <Search size={22} />, path: '/find-tutor' },
    { name: 'My Requests', icon: <ClipboardList size={22} />, path: '/dashboard/parent/requests' },
    { name: 'My Tutors', icon: <Users size={22} />, path: '/dashboard/parent/tutors' },
    { name: 'Sessions', icon: <Calendar size={22} />, path: '/dashboard/parent/sessions' },
    { name: 'Payments', icon: <Wallet size={22} />, path: '/dashboard/parent/payments' },
    { name: 'Leave Review', icon: <Star size={22} />, path: '/dashboard/parent/reviews' },
  ];

  const menu = role === 'tutor' ? tutorMenu : parentMenu;

  return (
    <aside className="w-80 bg-primary h-screen sticky top-0 flex flex-col p-8 text-white hidden lg:flex shadow-2xl border-r border-white/5">
      <div className="mb-12 px-4 flex items-center gap-3">
        <div className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-primary/20">
          GG
        </div>
        <Link href="/" className="text-2xl font-black tracking-tight">
          Ghar<span className="text-accent underline decoration-white/20">Guru</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1">
        {menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`group flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all relative overflow-hidden ${isActive ? 'bg-accent text-white shadow-accent-glow' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </div>
              <span className="relative z-10">{item.name}</span>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-white rounded-r-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-white/10 space-y-1">
        <Link href="#" className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-white font-bold rounded-2xl transition-all hover:bg-white/5">
          <Bell size={22} /> Notifications
        </Link>
        <Link href="#" className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-white font-bold rounded-2xl transition-all hover:bg-white/5">
          <Settings size={22} /> Settings
        </Link>
        <Link href="/login" className="flex items-center gap-4 px-6 py-4 text-red-100/60 hover:text-red-400 font-bold rounded-2xl transition-all mt-4 hover:bg-red-500/10">
          <LogOut size={22} /> Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
