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

export default function TutorDashboard() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role="tutor" />
      
      <main className="flex-1 p-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-primary">Overview</h1>
            <p className="text-slate-500 font-bold">Welcome back, Rahul! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-6">
             <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent" size={18} />
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="bg-white border-none rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-accent w-64 shadow-sm"
                />
             </div>
             <button className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-all">
                <Bell size={20} />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-black text-white shadow-lg shadow-accent/20">R</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           <StatCard label="Total Students" value="12" icon={<Users />} trend="+2 this month" />
           <StatCard label="Earnings (Jun)" value="₹8,000" icon={<Wallet />} trend="+15%" />
           <StatCard label="Pending Requests" value="3" icon={<ClipboardList />} />
           <StatCard label="Avg. Rating" value="4.8" icon={<Star />} />
        </div>

        {/* Middle Section: Chart & Active Students */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
           <div className="lg:col-span-2 bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                 <h3 className="text-xl font-bold text-primary">Earnings Performance</h3>
                 <select className="bg-slate-50 border-none rounded-lg px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-tighter cursor-pointer">
                    <last-6-months>Last 6 Months</last-6-months>
                 </select>
              </div>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockEarnings}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                      itemStyle={{fontWeight: 800, color: '#1e3a5f'}}
                    />
                    <Line type="monotone" dataKey="earnings" stroke="#f97316" strokeWidth={4} dot={{r: 6, fill: '#f97316', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8, fill: '#1e3a5f'}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                 <h3 className="text-xl font-bold text-primary">Active Students</h3>
                 <button className="text-accent text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                 {mockStudents.slice(0, 3).map(student => (
                   <div key={student.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-accent group transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-white uppercase">{student.name[0]}</div>
                         <div>
                            <div className="font-bold text-primary text-sm">{student.name}</div>
                            <div className="text-xs text-slate-400 font-medium">{student.grade} • {student.subject}</div>
                         </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-accent transition-all" />
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Bottom Section: Recent Requests Table */}
        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
           <h3 className="text-xl font-bold text-primary mb-8">Recent Demo Requests</h3>
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-6 px-4">Parent Name</th>
                       <th className="pb-6 px-4">Subject</th>
                       <th className="pb-6 px-4">Date</th>
                       <th className="pb-6 px-4">Status</th>
                       <th className="pb-6 px-4 text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockDemoRequests.map(req => (
                      <tr key={req.id} className="group hover:bg-slate-50 transition-colors">
                         <td className="py-6 px-4 font-bold text-primary">{req.parentName}</td>
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
                         <td className="py-6 px-4 text-right">
                            {req.status === 'Pending' && (
                              <div className="flex justify-end gap-2">
                                <button className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-green-700 transition-all shadow-md shadow-green-600/20">Accept</button>
                                <button className="bg-white border border-red-200 text-red-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-red-50 transition-all">Reject</button>
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
