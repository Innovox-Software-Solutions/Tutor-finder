'use client';

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import { 
  Users, 
  Calendar, 
  Wallet, 
  Star, 
  Search, 
  Bell,
  MessageCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { mockParentRequests } from '@/data/mockRequests';
import { mockParentTutors } from '@/data/mockStudents';
import Link from 'next/link';
import CompleteProfileBanner from '@/components/CompleteProfileBanner';

export default function ParentDashboard() {
  const chartData = [
    { day: 'Mon', sessions: 2 },
    { day: 'Tue', sessions: 1 },
    { day: 'Wed', sessions: 3 },
    { day: 'Thu', sessions: 0 },
    { day: 'Fri', sessions: 2 },
    { day: 'Sat', sessions: 4 },
    { day: 'Sun', sessions: 1 },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role="parent" />
      
      <main className="flex-1 p-4 md:p-12 relative pb-32">
        <CompleteProfileBanner role="parent" completionPercentage={33} />
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-primary tracking-tight">Parent Dashboard</h1>
            <p className="text-slate-500 font-bold text-xs md:text-base">Monitor your child's progress and manage tutors.</p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto">
             <Link href="/find-tutor" className="flex-1 md:flex-none justify-center bg-accent text-white px-6 py-3 rounded-xl font-black text-xs md:text-sm hover:opacity-90 shadow-lg shadow-accent/20 flex items-center gap-2">
                <Search size={18} /> Find Tutor
             </Link>
             <button className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400 border border-slate-100">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-black text-white shrink-0">S</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
           <StatCard label="Active" value="2" icon={<Users size={20} />} />
           <StatCard label="Upcoming" value="4" icon={<Calendar size={20} />} trend="+4" />
           <StatCard label="Spent" value="₹12.4k" icon={<Wallet size={20} />} />
           <StatCard label="Total" value="28" icon={<Star size={20} />} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
           {/* Sessions Chart */}
           <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium">
              <h3 className="text-lg md:text-xl font-black text-primary mb-6 md:mb-10 uppercase tracking-widest text-[10px] md:text-xs">Learning Hours</h3>
              <div className="h-64 md:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                    />
                    <Bar dataKey="sessions" fill="#1e3a5f" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>

           {/* Active Tutors List */}
           <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium">
              <h3 className="text-lg md:text-xl font-black text-primary mb-6 md:mb-10 uppercase tracking-widest text-[10px] md:text-xs">Your Tutors</h3>
              <div className="space-y-4 md:space-y-6">
                 {mockParentTutors.map(tutor => (
                   <div key={tutor.id} className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center font-black text-white uppercase text-xs md:text-base">{tutor.name[0]}</div>
                            <div>
                               <div className="font-black text-primary text-xs md:text-sm">{tutor.name}</div>
                               <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{tutor.subject}</div>
                            </div>
                         </div>
                         <button className="text-primary hover:text-accent transition-colors active:scale-90"><MessageCircle size={18} /></button>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-black bg-white p-2.5 rounded-xl border border-slate-100">
                         <Clock size={14} className="text-accent" />
                         Next: {tutor.nextSession}
                      </div>
                   </div>
                 ))}
                 <Link href="/find-tutor" className="flex items-center justify-center gap-2 text-xs font-black text-accent w-full py-4 rounded-xl border-2 border-dashed border-accent/20 hover:bg-accent/5 transition-all">
                    Add Tutor <ArrowRight size={16} />
                 </Link>
              </div>
           </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium overflow-hidden">
           <h3 className="text-lg md:text-xl font-black text-primary mb-6 md:mb-8 uppercase tracking-widest text-[10px] md:text-xs">Demo Requests</h3>
           <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[500px]">
                 <thead>
                    <tr className="text-left text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-4 px-2">Tutor</th>
                       <th className="pb-4 px-2">Subject</th>
                       <th className="pb-4 px-2">Date</th>
                       <th className="pb-4 px-2 text-right">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockParentRequests.map(req => (
                      <tr key={req.id} className="group hover:bg-slate-50/50 transition-colors">
                         <td className="py-4 px-2 font-black text-primary text-sm">{req.tutorName}</td>
                         <td className="py-4 px-2 text-slate-500 font-bold text-xs">{req.subject}</td>
                         <td className="py-4 px-2 text-slate-400 font-bold text-[10px]">{req.date}</td>
                         <td className="py-4 px-2 text-right">
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                              req.status === 'Accepted' ? 'bg-green-50 text-green-600 border border-green-100' : 
                              req.status === 'Rejected' ? 'bg-red-50 text-red-600 border border-red-100' : 
                              'bg-amber-50 text-amber-600 border border-amber-100'
                            }`}>
                               {req.status}
                            </span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
}
