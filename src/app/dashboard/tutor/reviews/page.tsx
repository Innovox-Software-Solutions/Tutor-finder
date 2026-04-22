import DashboardShell from '@/components/DashboardShell';
import { Star } from 'lucide-react';

export default function TutorReviewsPage() {
  return (
    <DashboardShell role="tutor" title="Reviews" subtitle="See what your students are saying about you.">
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
               <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="fill-amber-400 text-amber-400" />)}
               </div>
               <p className="text-slate-600 font-medium italic mb-6 leading-relaxed">
                 "Excellent teacher! Explains concepts very clearly and is always on time."
               </p>
               <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">S</div>
                  <div>
                    <div className="font-bold text-primary text-sm">Student {i}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Class 10</div>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </DashboardShell>
  );
}
