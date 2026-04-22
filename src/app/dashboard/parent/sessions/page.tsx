import DashboardShell from '@/components/DashboardShell';
import { Calendar, Clock } from 'lucide-react';

export default function ParentSessionsPage() {
  return (
    <DashboardShell role="parent" title="Learning Sessions" subtitle="Upcoming classes and learning history.">
       <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-10 text-accent">
             <Calendar size={32} />
             <h3 className="text-xl font-bold text-primary">This Week's Schedule</h3>
          </div>
          <div className="space-y-6">
             {[1, 2].map(i => (
               <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-accent group transition-all">
                  <div className="flex items-center gap-6">
                     <div className="bg-white w-16 h-16 rounded-xl flex flex-col items-center justify-center border border-slate-100 shadow-sm">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Apr</span>
                        <span className="text-xl font-black text-accent">2{i}</span>
                     </div>
                     <div>
                        <div className="font-bold text-primary">Physics with Dr. Verma</div>
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                           <Clock size={14} /> 05:00 PM - 06:15 PM
                        </div>
                     </div>
                  </div>
                  <button className="bg-white border border-slate-200 text-primary px-6 py-2 rounded-xl font-bold text-sm hover:border-accent hover:text-accent transition-all shadow-sm">Reschedule</button>
               </div>
             ))}
          </div>
       </div>
    </DashboardShell>
  );
}
