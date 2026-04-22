'use client';

import { useRouter } from 'next/navigation';
import { BookOpen, Clock, Wallet, FileText, Calendar, ArrowRight } from 'lucide-react';

export default function TutorOnboarding() {
  const router = useRouter();

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/tutor');
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd] py-6 md:py-20 px-4 flex items-center justify-center selection:bg-accent selection:text-white">
      <div className="max-w-3xl w-full bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-premium p-6 md:p-16 border border-slate-100/50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />

        <div className="text-center mb-8 relative z-10">
          <div className="bg-primary/5 text-primary p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] inline-block mb-4 md:mb-6 shadow-primary/5 transition-transform hover:scale-105 active:scale-95 cursor-default">
            <BookOpen size={32} className="fill-primary/20" />
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-primary mb-1 tracking-tight">Tutor Profile Setup</h1>
          <p className="text-slate-500 font-bold text-[10px] md:text-base">Showcase your skills to start getting requests</p>
        </div>

        <form onSubmit={handleFinish} className="space-y-4 md:space-y-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
             <OnboardingInput icon={<BookOpen size={18} />} label="Subjects" placeholder="e.g. Maths, Physics" />
             <OnboardingInput icon={<Clock size={18} />} label="Experience" placeholder="e.g. 5 Years" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
             <OnboardingInput icon={<Wallet size={18} />} label="Rate (₹)" placeholder="e.g. 500" type="number" />
             <OnboardingInput icon={<Calendar size={18} />} label="Available Days" placeholder="e.g. Mon, Wed, Fri" />
          </div>

          <div className="space-y-2 group">
             <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest flex items-center gap-2 group-focus-within:text-accent transition-colors">
                <FileText size={14} /> Short Bio
             </label>
             <textarea 
               required
               placeholder="Tell us about your teaching style and background..."
               rows={3}
               className="w-full p-4 md:p-6 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary text-xs md:text-base placeholder:text-slate-300"
             />
          </div>

          <div className="bg-slate-50/50 p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-dashed border-slate-100 group hover:border-accent/20 transition-colors flex items-start gap-4">
             <div className="bg-accent text-white p-1 rounded-lg md:rounded-xl shadow-lg shadow-accent/20 shrink-0"><ArrowRight size={14} /></div>
             <p className="text-[10px] md:text-sm font-bold text-slate-400 leading-relaxed">
               By completing your profile, you agree to our fair pricing policy. You will receive <span className="text-primary font-black uppercase tracking-widest">80% of your earnings</span>, paid weekly.
             </p>
          </div>

          <button 
            type="submit" 
            className="group w-full premium-gradient text-white py-3.5 md:py-5 rounded-2xl font-black text-base md:text-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-6 md:mt-8"
          >
            Save & Finalize <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
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
