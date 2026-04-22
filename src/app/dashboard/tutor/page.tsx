'use client';

import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import { 
  Users, 
  Wallet, 
  ClipboardList, 
  Star, 
  ChevronRight, 
  Search, 
  Bell
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { mockEarnings } from '@/data/mockEarnings';
import { mockDemoRequests } from '@/data/mockRequests';
import { mockStudents } from '@/data/mockStudents';
import CompleteProfileBanner from '@/components/CompleteProfileBanner';

export default function TutorDashboard() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role="tutor" />
      
      <main className="flex-1 p-4 md:p-12 relative pb-32">
        <CompleteProfileBanner role="tutor" completionPercentage={40} />
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-primary tracking-tight">Overview</h1>
            <p className="text-slate-500 font-bold text-xs md:text-base">Welcome back, Rahul! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto">
             <div className="relative group flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent" size={16} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-white border border-slate-100 rounded-xl pl-9 pr-4 py-2.5 text-xs font-bold focus:ring-2 focus:ring-accent w-full md:w-64 shadow-sm"
                />
             </div>
             <button className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-all border border-slate-100">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-black text-white shadow-lg shadow-accent/20 shrink-0">R</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
           <StatCard label="Students" value="12" icon={<Users size={20} />} trend="+2" />
           <StatCard label="Earnings" value="₹8k" icon={<Wallet size={20} />} trend="+15%" />
           <StatCard label="Pending" value="3" icon={<ClipboardList size={20} />} />
           <StatCard label="Rating" value="4.8" icon={<Star size={20} />} />
        </div>

        {/* Middle Section: Chart & Active Students */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
           <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium">
              <div className="flex justify-between items-center mb-6 md:mb-10">
                 <h3 className="text-lg md:text-xl font-black text-primary uppercase tracking-widest text-[10px] md:text-xs">Earnings Performance</h3>
                 <select className="bg-slate-50 border-none rounded-lg px-3 py-1.5 text-[10px] font-black text-slate-500 uppercase tracking-tighter cursor-pointer">
                    <option>Last 6 Months</option>
                 </select>
              </div>
              <div className="h-64 md:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockEarnings}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                      itemStyle={{fontWeight: 800, color: '#1e3a5f'}}
                    />
                    <Line type="monotone" dataKey="earnings" stroke="#f97316" strokeWidth={4} dot={{r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6, fill: '#1e3a5f'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
           </div>

           <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium">
              <div className="flex justify-between items-center mb-6 md:mb-10">
                 <h3 className="text-lg md:text-xl font-black text-primary uppercase tracking-widest text-[10px] md:text-xs">Active Students</h3>
                 <button className="text-accent text-[10px] font-black uppercase hover:underline">View All</button>
              </div>
              <div className="space-y-4 md:space-y-6">
                 {mockStudents.slice(0, 3).map(student => (
                   <div key={student.id} className="flex items-center justify-between p-3 md:p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-accent group transition-all cursor-pointer">
                      <div className="flex items-center gap-3 md:gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center font-black text-white uppercase text-xs md:text-base">{student.name[0]}</div>
                         <div>
                            <div className="font-black text-primary text-xs md:text-sm">{student.name}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{student.grade} • {student.subject}</div>
                         </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-accent transition-all" />
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Section: Recent Requests Table */}
        <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-premium overflow-hidden">
           <h3 className="text-lg md:text-xl font-black text-primary mb-6 md:mb-8 uppercase tracking-widest text-[10px] md:text-xs">Recent Requests</h3>
           <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[500px]">
                 <thead>
                    <tr className="text-left text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-4 px-2">Parent</th>
                       <th className="pb-4 px-2">Subject</th>
                       <th className="pb-4 px-2">Date</th>
                       <th className="pb-4 px-2">Status</th>
                       <th className="pb-4 px-2 text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockDemoRequests.map(req => (
                      <tr key={req.id} className="group hover:bg-slate-50 transition-colors">
                         <td className="py-4 px-2 font-black text-primary text-sm">{req.parentName}</td>
                         <td className="py-4 px-2 text-slate-500 font-bold text-xs">{req.subject}</td>
                         <td className="py-4 px-2 text-slate-400 font-bold text-[10px]">{req.date}</td>
                         <td className="py-4 px-2">
                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                              req.status === 'Accepted' ? 'bg-green-50 text-green-600 border border-green-100' : 
                              req.status === 'Rejected' ? 'bg-red-50 text-red-600 border border-red-100' : 
                              'bg-amber-50 text-amber-600 border border-amber-100'
                            }`}>
                               {req.status}
                            </span>
                         </td>
                         <td className="py-4 px-2 text-right">
                            {req.status === 'Pending' && (
                              <div className="flex justify-end gap-2">
                                <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-black hover:bg-green-700 transition-all shadow-md shadow-green-600/20 active:scale-95">Accept</button>
                                <button className="bg-white border border-red-200 text-red-600 px-3 py-1.5 rounded-lg text-xs font-black hover:bg-red-50 transition-all active:scale-95">Reject</button>
                              </div>
                            )}
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
