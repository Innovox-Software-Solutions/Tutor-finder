import DashboardShell from '@/components/DashboardShell';
import { mockParentTutors } from '@/data/mockStudents';
import { MessageCircle, Star, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export default function ParentTutorsPage() {
  return (
    <DashboardShell role="parent" title="My Tutors" subtitle="Manage your child's current educators.">
       <div className="grid md:grid-cols-2 gap-8">
          {mockParentTutors.map(tutor => (
             <div key={tutor.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-3xl bg-slate-100 overflow-hidden relative shrink-0">
                   <div className="absolute inset-0 flex items-center justify-center font-black text-4xl text-slate-300 uppercase">{tutor.name[0]}</div>
                </div>
                <div className="flex-1 w-full">
                   <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                         <h3 className="text-xl font-black text-primary">{tutor.name}</h3>
                         <BadgeCheck className="text-blue-500" size={20} />
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-amber-700">4.9</span>
                      </div>
                   </div>
                   <p className="text-slate-500 font-bold mb-6">{tutor.subject} Specialist</p>
                   
                   <div className="flex gap-3">
                      <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                        <MessageCircle size={18} /> Chat
                      </button>
                      <button className="flex-1 bg-slate-50 text-primary py-3 rounded-xl font-bold border border-slate-100 hover:bg-white transiton-all">
                        View Schedule
                      </button>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </DashboardShell>
  );
}
