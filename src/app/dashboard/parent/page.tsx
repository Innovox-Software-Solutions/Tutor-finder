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
      
      <main className="flex-1 p-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-primary">Parent Dashboard</h1>
            <p className="text-slate-500 font-bold">Monitor your child's progress and manage tutors.</p>
          </div>
          <div className="flex items-center gap-6">
             <Link href="/find-tutor" className="bg-accent text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 shadow-lg shadow-accent/20 flex items-center gap-2">
                <Search size={18} /> Find New Tutor
             </Link>
             <button className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center font-black text-white">S</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           <StatCard label="Active Tutors" value="2" icon={<Users />} />
           <StatCard label="Upcoming Sessions" value="4" icon={<Calendar />} trend="This week" />
           <StatCard label="Total Spent" value="₹12,400" icon={<Wallet />} />
           <StatCard label="Completed Sessions" value="28" icon={<Star />} trend="+4/week" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
           {/* Sessions Chart */}
           <div className="lg:col-span-2 bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-10">Learning Hours</h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                    />
                    <Bar dataKey="sessions" fill="#1e3a5f" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>

           {/* Active Tutors List */}
           <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-10">Your Tutors</h3>
              <div className="space-y-6">
                 {mockParentTutors.map(tutor => (
                   <div key={tutor.id} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-bold text-white uppercase">{tutor.name[0]}</div>
                            <div>
                               <div className="font-bold text-primary text-sm">{tutor.name}</div>
                               <div className="text-xs text-slate-400 font-medium">{tutor.subject}</div>
                            </div>
                         </div>
                         <button className="text-primary hover:text-accent transition-colors"><MessageCircle size={20} /></button>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold bg-white p-3 rounded-xl border border-slate-100">
                         <Clock size={16} className="text-accent" />
                         Next: {tutor.nextSession}
                      </div>
                   </div>
                 ))}
                 <Link href="/find-tutor" className="flex items-center justify-center gap-2 text-sm font-black text-accent w-full py-4 rounded-xl border-2 border-dashed border-accent/20 hover:bg-accent/5 transition-all">
                    Add New Tutor <ArrowRight size={18} />
                 </Link>
              </div>
           </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
           <h3 className="text-xl font-bold text-primary mb-8">My Demo Requests</h3>
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-6 px-4">Tutor Name</th>
                       <th className="pb-6 px-4">Subject</th>
                       <th className="pb-6 px-4">Request Date</th>
                       <th className="pb-6 px-4">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockParentRequests.map(req => (
                      <tr key={req.id}>
                         <td className="py-6 px-4 font-bold text-primary">{req.tutorName}</td>
                         <td className="py-6 px-4 text-slate-500 font-medium">{req.subject}</td>
                         <td className="py-6 px-4 text-slate-500 font-medium">{req.date}</td>
                         <td className="py-6 px-4">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-black ${
                              req.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
                              req.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                              'bg-amber-100 text-amber-700'
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
