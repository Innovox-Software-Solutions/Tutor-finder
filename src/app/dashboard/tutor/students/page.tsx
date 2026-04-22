import DashboardShell from '@/components/DashboardShell';
import { mockStudents } from '@/data/mockStudents';

export default function TutorStudentsPage() {
  return (
    <DashboardShell role="tutor" title="My Students" subtitle="View and manage your active student list.">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockStudents.map(student => (
            <div key={student.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xl">{student.name[0]}</div>
                  <div>
                     <h3 className="font-bold text-primary">{student.name}</h3>
                     <p className="text-sm text-slate-400 font-bold uppercase">{student.grade}</p>
                  </div>
               </div>
               <div className="space-y-3 pt-6 border-t border-slate-50">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-400 font-bold">Subject</span>
                     <span className="text-primary font-black">{student.subject}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-400 font-bold">Next Class</span>
                     <span className="text-accent font-black">{student.nextSession}</span>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </DashboardShell>
  );
}
