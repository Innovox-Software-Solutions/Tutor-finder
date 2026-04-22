import DashboardShell from '@/components/DashboardShell';
import { Star, MessageCircle } from 'lucide-react';
import { mockParentTutors } from '@/data/mockStudents';

export default function ParentReviewsPage() {
  return (
    <DashboardShell role="parent" title="Leave Review" subtitle="Share your experience and help other parents.">
       <div className="grid lg:grid-cols-2 gap-8">
          {mockParentTutors.map(tutor => (
             <div key={tutor.id} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center font-black text-2xl text-accent">{tutor.name[0]}</div>
                   <div>
                      <h3 className="text-xl font-bold text-primary">{tutor.name}</h3>
                      <p className="text-sm font-bold text-slate-400 capitalize">{tutor.subject} Tutor</p>
                   </div>
                </div>
                
                <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-sm font-bold text-slate-500 mb-4">Rate your experience</p>
                    <div className="flex gap-2 mb-6">
                       {[1, 2, 3, 4, 5].map(s => (
                          <button key={s} className="hover:scale-110 transition-transform"><Star size={32} className="text-slate-200 hover:text-amber-400 fill-transparent hover:fill-amber-400 cursor-pointer" /></button>
                       ))}
                    </div>
                    <textarea 
                      placeholder="Write your feedback here..."
                      className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent outline-none font-medium text-sm"
                      rows={3}
                    />
                    <button className="w-full mt-4 bg-primary text-white py-4 rounded-xl font-black text-sm hover:shadow-lg transition-all">Submit Review</button>
                </div>
             </div>
          ))}
       </div>
    </DashboardShell>
  );
}
