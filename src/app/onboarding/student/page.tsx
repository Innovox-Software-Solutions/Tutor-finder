'use client';

import { useRouter } from 'next/navigation';
import { GraduationCap, MapPin, BookOpen, UserCircle, ArrowRight } from 'lucide-react';

export default function StudentOnboarding() {
  const router = useRouter();

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/parent');
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl p-12 md:p-16 border border-slate-100">
        <div className="text-center mb-12">
          <div className="bg-accent/10 text-accent p-5 rounded-3xl inline-block mb-6"><UserCircle size={48} /></div>
          <h1 className="text-4xl font-black text-primary mb-3">Student Profile</h1>
           <p className="text-slate-500 font-bold">Help us find the best matches for your needs</p>
        </div>

        <form onSubmit={handleFinish} className="space-y-8">
           <OnboardingInput icon={<GraduationCap size={20} />} label="Child's Grade/Class" placeholder="e.g. 10th Standard / Class 12" />
           <OnboardingInput icon={<BookOpen size={20} />} label="Subject Needed" placeholder="e.g. Mathematics, Science" />
           <OnboardingInput icon={<MapPin size={20} />} label="Your City" placeholder="e.g. Mumbai, Bangalore" />

           <div className="pt-4">
              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200">
                 <h4 className="font-black text-primary mb-2 flex items-center gap-2">
                    <ArrowRight size={18} className="text-accent" /> Why this info?
                 </h4>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed">
                   We use these details to show you tutors who specialize in these grades and are available in your location.
                 </p>
              </div>
           </div>

           <button 
             type="submit" 
             className="w-full bg-accent text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-accent/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-10"
           >
             Start Finding Tutors <ArrowRight size={22} />
           </button>
        </form>
      </div>
    </main>
  );
}

function OnboardingInput({ icon, label, placeholder, type = 'text' }: any) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
        <input 
          type={type} 
          required
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-all font-bold text-primary text-sm"
        />
      </div>
    </div>
  );
}
