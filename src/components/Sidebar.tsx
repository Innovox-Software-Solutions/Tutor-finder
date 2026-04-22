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
    <aside className="w-80 bg-primary h-screen sticky top-0 flex flex-col p-8 text-white hidden lg:flex">
      <div className="mb-12">
        <Link href="/" className="text-2xl font-black">
          Tutor<span className="text-accent">Nest</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {menu.map((item) => (
          <Link 
            key={item.name} 
            href={item.path}
            className={`flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all ${pathname === item.path ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="pt-8 border-t border-white/10 space-y-2">
        <Link href="#" className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-white font-bold rounded-xl transition-all">
          <Bell size={22} /> Notifications
        </Link>
        <Link href="#" className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-white font-bold rounded-xl transition-all">
          <Settings size={22} /> Settings
        </Link>
        <Link href="/login" className="flex items-center gap-4 px-6 py-4 text-red-400 hover:text-red-300 font-bold rounded-xl transition-all mt-4">
          <LogOut size={22} /> Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
