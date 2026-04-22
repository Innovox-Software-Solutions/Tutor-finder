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
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-2xl p-10 md:p-16 border border-slate-100">
        <div className="text-center mb-12">
          <div className="bg-primary/5 text-primary p-4 rounded-2xl inline-block mb-6"><BookOpen size={40} /></div>
          <h1 className="text-4xl font-black text-primary mb-2">Tutor Profile Setup</h1>
          <p className="text-slate-500 font-bold">Showcase your skills to start getting requests</p>
        </div>

        <form onSubmit={handleFinish} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
             <OnboardingInput icon={<BookOpen size={20} />} label="Subjects" placeholder="e.g. Maths, Physics" />
             <OnboardingInput icon={<Clock size={20} />} label="Years of Experience" placeholder="e.g. 5 Years" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <OnboardingInput icon={<Wallet size={20} />} label="Hourly Rate (₹)" placeholder="e.g. 500" type="number" />
             <OnboardingInput icon={<Calendar size={20} />} label="Available Days" placeholder="e.g. Mon, Wed, Fri" />
          </div>

          <div className="space-y-2">
             <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest flex items-center gap-2">
                <FileText size={16} /> Short Bio
             </label>
             <textarea 
               required
               placeholder="Tell us about your teaching style and background..."
               rows={4}
               className="w-full p-6 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-all font-bold text-primary text-sm"
             />
          </div>

          <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 flex items-start gap-4">
             <div className="bg-accent text-white p-1 rounded-full"><ArrowRight size={16} /></div>
             <p className="text-sm font-bold text-slate-600 leading-relaxed">
               By completing your profile, you agree to our fair pricing policy. You will receive <span className="text-primary">80% of your earnings</span>, paid weekly.
             </p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-10"
          >
            Save & Go to Dashboard <ArrowRight size={22} />
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
