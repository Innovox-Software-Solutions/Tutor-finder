import DashboardShell from '@/components/DashboardShell';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function TutorSchedulePage() {
  return (
    <DashboardShell role="tutor" title="Schedule" subtitle="View and manage your upcoming classes.">
       <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-10 text-primary">
             <CalendarIcon size={32} />
             <h3 className="text-xl font-bold">Upcoming Sessions</h3>
          </div>
          <div className="space-y-6">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-primary transition-all">
                  <div className="flex items-center gap-6">
                     <div className="bg-white w-16 h-16 rounded-xl flex flex-col items-center justify-center border border-slate-100 shadow-sm">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Apr</span>
                        <span className="text-xl font-black text-primary">2{i}</span>
                     </div>
                     <div>
                        <div className="font-bold text-primary">Advanced Mathematics</div>
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                           <Clock size={14} /> 04:00 PM - 05:00 PM
                        </div>
                     </div>
                  </div>
                  <button className="bg-white border border-slate-200 text-primary px-6 py-2 rounded-xl font-bold text-sm hover:border-primary transition-all shadow-sm">Reschedule</button>
               </div>
             ))}
          </div>
       </div>
    </DashboardShell>
  );
}
