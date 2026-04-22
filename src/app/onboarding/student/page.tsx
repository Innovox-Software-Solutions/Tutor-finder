'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  MapPin, 
  Home, 
  ArrowRight, 
  ArrowLeft,
  GraduationCap,
  School,
  Target,
  Search,
  Wallet,
  Clock,
  Calendar,
  Languages,
  CheckCircle2,
  FileText,
  UserCircle
} from 'lucide-react';
import Link from 'next/link';

export default function StudentOnboarding() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      handleFinish();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleFinish = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard/parent');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd] py-6 md:py-12 px-4 flex flex-col items-center selection:bg-accent selection:text-white">
      {/* Header */}
      <div className="max-w-3xl w-full mb-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-black text-primary">
          Tutor<span className="text-accent underline decoration-primary/10">Nest</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
          <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <span className="text-sm font-black text-primary">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-white rounded-[2rem] md:rounded-[3rem] shadow-premium p-6 md:p-12 border border-slate-100 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="mb-8 relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-primary mb-1 tracking-tight">Step {step} of {totalSteps}</h1>
            <p className="text-slate-500 font-bold text-xs md:text-base">
              {step === 1 && "Parent Information"}
              {step === 2 && "Student Details"}
              {step === 3 && "Tutor Preferences"}
            </p>
          </div>
          <div className="hidden sm:flex -space-x-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`w-10 h-10 rounded-full border-4 border-white flex items-center justify-center font-black text-xs transition-all ${s === step ? 'bg-accent text-white scale-110 z-10' : s < step ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}
              >
                {s < step ? <CheckCircle2 size={14} /> : s}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[350px]">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 font-black text-sm md:text-base transition-all ${step === 1 ? 'opacity-0' : 'text-slate-400 hover:text-primary'}`}
          >
            <ArrowLeft size={20} /> Back
          </button>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {step > 1 && (
               <button 
                onClick={handleFinish}
                className="text-slate-400 font-black text-xs md:text-base hover:text-primary px-6"
              >
                Finish Later
              </button>
            )}
            <button 
              onClick={nextStep}
              className="premium-gradient text-white px-10 py-4 rounded-2xl font-black text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              {step === totalSteps ? 'Complete Profile' : 'Next Step'} 
              {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <ArrowRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Step1() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<MapPin size={18} />} label="City" placeholder="Mumbai" />
        <OnboardingInput icon={<MapPin size={18} />} label="Area / Locality" placeholder="Bandra East" />
      </div>
      <OnboardingInput icon={<Home size={18} />} label="Full Address" placeholder="Flat No., Building, Street Name..." />
      <div className="space-y-2">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest transition-colors">Preferred Teaching Mode</label>
          <div className="grid grid-cols-3 gap-2">
             <button className="py-3 bg-accent text-white rounded-xl font-black text-[10px] shadow-lg shadow-accent/20">HOME</button>
             <button className="py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">ONLINE</button>
             <button className="py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">BOTH</button>
          </div>
      </div>
      <div className="space-y-2 group">
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">Profile Photo</label>
        <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 text-center hover:border-accent/20 transition-all cursor-pointer bg-slate-50/50">
          <Upload className="mx-auto text-slate-300 mb-1" size={20} />
          <p className="text-[10px] font-bold text-slate-400">Click to upload photo</p>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <OnboardingInput icon={<User size={18} />} label="Student Full Name" placeholder="Aryan Sharma" />
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<User size={18} />} label="Student Age" placeholder="e.g. 15" type="number" />
        <OnboardingInput icon={<UserCircle size={18} />} label="Student Gender" placeholder="Male / Female" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<School size={18} />} label="Current Class / Grade (1–12)" placeholder="Class 10" />
        <OnboardingInput icon={<Target size={18} />} label="Board (CBSE/ICSE/State)" placeholder="e.g. CBSE" />
      </div>
      <OnboardingInput icon={<Building size={18} />} label="School Name" placeholder="D.P.S Public School" />
      <div className="space-y-4">
        <OnboardingTextArea label="Subjects Needed" placeholder="e.g. Mathematics, Physics..." />
        <OnboardingTextArea label="Weak Areas / Special Focus" placeholder="What should the tutor focus on?" />
        <OnboardingTextArea label="Learning Goals" placeholder="What are the student's aims?" />
      </div>
    </div>
  );
}

function Step3() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<User size={18} />} label="Preferred Tutor Gender" placeholder="No preference" />
        <OnboardingInput icon={<Wallet size={18} />} label="Budget per Hour (₹)" placeholder="e.g. 500" type="number" />
      </div>
      <div>
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest mb-3 block">Preferred Days (Mon–Sun)</label>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {days.map(day => (
            <button key={day} className="py-2.5 rounded-lg border-2 border-slate-50 text-[10px] font-black transition-all hover:border-accent/20 bg-slate-50/50 text-slate-400">
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<Clock size={18} />} label="Preferred Time Slots" placeholder="Evening (4-7 PM)" />
        <OnboardingInput icon={<Languages size={18} />} label="Languages Preferred" placeholder="English, Hindi" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest transition-colors">Need Demo Class First?</label>
          <div className="flex gap-2">
             <button className="flex-1 py-3 bg-accent text-white rounded-xl font-black text-[10px] shadow-lg shadow-accent/20">YES</button>
             <button className="flex-1 py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">NO</button>
          </div>
        </div>
      </div>
      <OnboardingTextArea label="Any Special Requirements" placeholder="e.g. Needs help with competitive exams..." />
    </div>
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
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-3.5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary text-xs md:text-sm placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}

function OnboardingTextArea({ label, placeholder }: any) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">{label}</label>
      <textarea 
        placeholder={placeholder}
        className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary text-xs placeholder:text-slate-300 min-h-[80px]"
      />
    </div>
  );
}
