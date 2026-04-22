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
    <main className="min-h-screen bg-[#fdfdfd] py-10 md:py-20 px-4 flex items-center justify-center selection:bg-accent selection:text-white">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-premium p-8 md:p-16 border border-slate-100/50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />

        <div className="text-center mb-12 relative z-10">
          <div className="bg-accent/10 text-accent p-6 rounded-[2rem] inline-block mb-6 shadow-accent/5 transition-transform hover:scale-105 active:scale-95 cursor-default">
            <UserCircle size={44} className="fill-accent/20" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary mb-3 tracking-tight">Student Profile</h1>
           <p className="text-slate-500 font-bold text-sm md:text-base">Help us find the best matches for your needs</p>
        </div>

        <form onSubmit={handleFinish} className="space-y-6 relative z-10">
           <OnboardingInput icon={<GraduationCap size={20} />} label="Child's Grade/Class" placeholder="e.g. 10th Standard / Class 12" />
           <OnboardingInput icon={<BookOpen size={20} />} label="Subject Needed" placeholder="e.g. Mathematics, Science" />
           <OnboardingInput icon={<MapPin size={20} />} label="Your City" placeholder="e.g. Mumbai, Bangalore" />

           <div className="pt-4">
              <div className="bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-slate-100 group hover:border-accent/20 transition-colors">
                 <h4 className="font-black text-primary mb-3 flex items-center gap-2">
                    <div className="bg-accent rounded-lg p-1 animate-pulse">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                    <span className="text-sm md:text-base">Why this information?</span>
                 </h4>
                 <p className="text-xs md:text-sm font-bold text-slate-400 leading-relaxed">
                   We use these details to show you tutors who specialize in these grades and are available in your location.
                 </p>
              </div>
           </div>

           <button 
             type="submit" 
             className="group w-full premium-gradient text-white py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-8"
           >
             Start Finding Tutors <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </form>
      </div>
    </main>
  );
}

function OnboardingInput({ icon, label, placeholder, type = 'text' }: any) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors">{icon}</div>
        <input 
          type={type} 
          required
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary text-sm md:text-base placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}
