'use client';

import { useRouter } from 'next/navigation';
import { UserCircle, BookOpen, GraduationCap, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SelectRole() {
  const router = useRouter();

  const handleSelect = (role: 'tutor' | 'parent') => {
    localStorage.setItem('userRole', role);
    router.push(`/onboarding/${role === 'parent' ? 'student' : 'tutor'}`);
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd] flex flex-col items-center justify-center p-6 md:p-12 py-20 selection:bg-accent selection:text-white">
      <div className="max-w-4xl w-full text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-black text-xs md:text-sm mb-6 uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2 duration-500">
           Profile Setup
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight text-balance">Tell us about yourself</h1>
        <p className="text-lg md:text-xl text-slate-500 font-bold max-w-xl mx-auto leading-relaxed text-balance">
          We customize your experience based on your needs. Choose your role to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
        <RoleCard 
          title="I am a Tutor"
          description="I want to teach, manage my schedule, and earn 80% of my fees."
          icon={<GraduationCap size={44} />}
          onClick={() => handleSelect('tutor')}
          features={['Manage Sessions', 'Track Earnings', 'Showcase Skills']}
        />

        <RoleCard 
          title="Student / Parent"
          description="I want to find top-rated home tutors and book demo classes."
          icon={<UserCircle size={44} />}
          onClick={() => handleSelect('parent')}
          primary
          features={['Browse Tutors', 'Book Demos', 'Progress Tracking']}
        />
      </div>

      <div className="mt-16 md:mt-24 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-premium flex flex-col sm:flex-row items-center gap-6 max-w-2xl w-full">
         <div className="bg-accent/10 p-5 rounded-2xl text-accent shadow-accent/5"><Star size={32} className="fill-accent" /></div>
         <div className="text-center sm:text-left">
            <h4 className="font-black text-primary text-xl mb-1">Fair Commission Policy</h4>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">We only take 20% commission on teacher earnings. Both parents and tutors save money with TutorNest.</p>
         </div>
      </div>
    </main>
  );
}

function RoleCard({ title, description, icon, onClick, features, primary }: any) {
  return (
    <button 
      onClick={onClick}
      className={`group relative p-10 md:p-14 rounded-[3rem] text-left border-4 transition-all duration-500 hover:shadow-primary-glow hover:-translate-y-2 active:scale-[0.98] ${primary ? 'bg-primary border-primary text-white shadow-primary-glow' : 'bg-white border-transparent text-primary shadow-premium hover:border-accent/20'}`}
    >
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${primary ? 'bg-white/10 text-white shadow-xl' : 'bg-slate-50 text-accent'}`}>
        {icon}
      </div>
      
      <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{title}</h2>
      <p className={`text-base md:text-lg mb-10 font-bold leading-relaxed ${primary ? 'text-slate-300' : 'text-slate-500'}`}>{description}</p>
      
      <div className="space-y-4 mb-12">
        {features.map((f: string) => (
          <div key={f} className="flex items-center gap-4 font-bold text-sm md:text-base">
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${primary ? 'bg-white/10' : 'bg-slate-50'}`}>
              <CheckCircle2 size={16} className={primary ? 'text-accent' : 'text-accent'} />
            </div>
            <span className={primary ? 'text-white' : 'text-slate-800'}>{f}</span>
          </div>
        ))}
      </div>

      <div className={`inline-flex items-center gap-3 font-black text-lg transition-all ${primary ? 'text-accent hover:gap-5' : 'text-primary group-hover:text-accent group-hover:gap-5'}`}>
        Choose this profile <ArrowRight size={24} className="transition-all" />
      </div>

      {primary && (
        <div className="absolute top-8 right-8 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent/20">
          Popular
        </div>
      )}
    </button>
  );
}
