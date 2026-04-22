'use client';

import { useRouter } from 'next/navigation';
import { UserCircle, BookOpen, GraduationCap, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function SelectRole() {
  const router = useRouter();

  const handleSelect = (role: 'tutor' | 'parent') => {
    localStorage.setItem('userRole', role);
    // In a real app, check if user is new or returning
    // For this static demo, let's assume it leads to onboarding
    router.push(`/onboarding/${role === 'parent' ? 'student' : 'tutor'}`);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-5xl font-black text-primary mb-6">Tell us about yourself</h1>
        <p className="text-xl text-slate-500 font-bold max-w-xl mx-auto">
          We customize your experience based on your needs. Choose your role to get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        <RoleCard 
          title="I am a Tutor"
          description="I want to teach, manage my schedule, and earn 80% of my fees."
          icon={<GraduationCap size={48} />}
          onClick={() => handleSelect('tutor')}
          features={['Manage Sessions', 'Track Earnings', 'Showcase Skills']}
        />

        <RoleCard 
          title="I am a Student / Parent"
          description="I want to find top-rated home tutors and book demo classes."
          icon={<UserCircle size={48} />}
          onClick={() => handleSelect('parent')}
          primary
          features={['Browse Tutors', 'Book Demos', 'Progress Tracking']}
        />
      </div>

      <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 max-w-2xl">
         <div className="bg-accent/10 p-4 rounded-2xl text-accent"><Star size={32} /></div>
         <div>
            <h4 className="font-black text-primary text-lg">Fair Commission Policy</h4>
            <p className="text-slate-500 font-medium text-sm">We only take 20% commission on teacher earnings. Both parents and tutors save money with TutorNest.</p>
         </div>
      </div>
    </main>
  );
}

function RoleCard({ title, description, icon, onClick, features, primary }: any) {
  return (
    <button 
      onClick={onClick}
      className={`group relative p-12 rounded-[40px] text-left border-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${primary ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-white border-transparent text-primary shadow-lg shadow-slate-200/50 hover:border-accent'}`}
    >
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${primary ? 'bg-white/10 text-white' : 'bg-slate-50 text-accent'}`}>
        {icon}
      </div>
      
      <h2 className="text-3xl font-black mb-4">{title}</h2>
      <p className={`text-lg mb-10 font-bold ${primary ? 'text-slate-300' : 'text-slate-500'}`}>{description}</p>
      
      <ul className="space-y-4 mb-12">
        {features.map((f: string) => (
          <li key={f} className="flex items-center gap-3 font-bold text-sm">
            <ArrowRight size={16} className={primary ? 'text-accent' : 'text-accent'} /> {f}
          </li>
        ))}
      </ul>

      <div className={`inline-flex items-center gap-2 font-black text-lg ${primary ? 'text-accent' : 'text-primary group-hover:text-accent'}`}>
        Choose this profile <ArrowRight size={20} />
      </div>
    </button>
  );
}
