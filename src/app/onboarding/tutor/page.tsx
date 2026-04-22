'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  Clock, 
  Wallet, 
  FileText, 
  Calendar, 
  ArrowRight, 
  ArrowLeft,
  User,
  GraduationCap,
  Building,
  Upload,
  CheckCircle2,
  CreditCard,
  MapPin,
  Languages,
  ShieldCheck,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function TutorOnboarding() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const totalSteps = 5;

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
      router.push('/dashboard/tutor');
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
              {step === 1 && "Basic Information"}
              {step === 2 && "Teaching Details"}
              {step === 3 && "Qualifications"}
              {step === 4 && "Weekly Availability"}
              {step === 5 && "Payout Details"}
            </p>
          </div>
          <div className="hidden sm:flex -space-x-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div 
                key={s} 
                className={`w-10 h-10 rounded-full border-4 border-white flex items-center justify-center font-black text-xs transition-all ${s === step ? 'bg-accent text-white scale-110 z-10' : s < step ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}
              >
                {s < step ? <CheckCircle2 size={14} /> : s}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[400px]">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
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
              {step === totalSteps ? 'Complete Setup' : 'Next Step'} 
              {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <ArrowRight size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
        Fair Pricing: You keep <span className="text-primary font-black">80% of your earnings</span>. Weekly Payouts.
      </p>
    </main>
  );
}

function Step1() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<User size={18} />} label="Gender" placeholder="Male / Female / Other" />
        <OnboardingInput icon={<Calendar size={18} />} label="Date of Birth" placeholder="DD/MM/YYYY" type="date" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<MapPin size={18} />} label="City" placeholder="Mumbai" />
        <OnboardingInput icon={<MapPin size={18} />} label="Area / Locality" placeholder="Andheri West" />
      </div>
      <OnboardingInput icon={<Languages size={18} />} label="Languages Spoken" placeholder="English, Hindi, Marathi" />
      <div className="space-y-2 group">
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">Profile Photo</label>
        <div className="border-2 border-dashed border-slate-100 rounded-[1.5rem] p-6 md:p-10 text-center hover:border-accent/20 transition-all cursor-pointer bg-slate-50/50">
          <Upload className="mx-auto text-slate-300 mb-2" size={24} />
          <p className="text-[10px] font-bold text-slate-400">Upload your profile photo (Professional preferred)</p>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<BookOpen size={18} />} label="Subjects You Teach" placeholder="Mathematics, Science" />
        <OnboardingInput icon={<GraduationCap size={18} />} label="Classes / Grades" placeholder="1-12, Degree" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest transition-colors">Teaching Mode</label>
          <div className="grid grid-cols-3 gap-2">
             <button className="py-3 bg-accent text-white rounded-xl font-black text-[10px] shadow-lg shadow-accent/20">HOME</button>
             <button className="py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">ONLINE</button>
             <button className="py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">BOTH</button>
          </div>
        </div>
        <OnboardingInput icon={<Clock size={18} />} label="Experience (Years)" placeholder="e.g. 5" type="number" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<Wallet size={18} />} label="Hourly Rate (₹)" placeholder="e.g. 800" type="number" />
        <div className="space-y-2">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest transition-colors">Demo Class Free?</label>
          <div className="flex gap-2">
             <button className="flex-1 py-3 bg-accent text-white rounded-xl font-black text-[10px] shadow-lg shadow-accent/20">YES</button>
             <button className="flex-1 py-3 bg-slate-50 text-slate-400 rounded-xl font-black text-[10px] border border-slate-100">NO</button>
          </div>
        </div>
      </div>
      <OnboardingInput icon={<User size={18} />} label="Preferred Student Gender" placeholder="Any" />
      <div className="space-y-2 group">
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">Teaching Bio / About Yourself</label>
        <textarea 
          placeholder="Tell us about your teaching style and background..."
          className="w-full p-4 md:p-5 bg-slate-50 rounded-[1.5rem] border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary text-xs md:text-sm placeholder:text-slate-300 min-h-[100px]"
        />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <OnboardingInput icon={<GraduationCap size={18} />} label="Highest Qualification" placeholder="M.Sc. Physics" />
      <OnboardingInput icon={<BookOpen size={18} />} label="Degree Name" placeholder="B.Ed / Specialized Degree" />
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<Building size={18} />} label="College / University" placeholder="University of Mumbai" />
        <OnboardingInput icon={<Calendar size={18} />} label="Passing Year" placeholder="2020" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
         <div className="space-y-2 group">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">Upload Degree Certificate</label>
          <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 text-center hover:border-accent/20 transition-all cursor-pointer bg-slate-50/50">
            <Upload className="mx-auto text-slate-300 mb-1" size={20} />
            <p className="text-[9px] font-bold text-slate-400">PDF, JPG (Max 5MB)</p>
          </div>
        </div>
        <div className="space-y-2 group">
          <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">Upload Aadhar / ID Proof</label>
          <div className="border-2 border-dashed border-slate-100 rounded-xl p-4 text-center hover:border-accent/20 transition-all cursor-pointer bg-slate-50/50">
            <Upload className="mx-auto text-slate-300 mb-1" size={20} />
            <p className="text-[9px] font-bold text-slate-400">Front & Back (Max 5MB)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const slots = ['Morning', 'Afternoon', 'Evening'];
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div>
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest mb-3 block">Available Days (Mon–Sun)</label>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
          {days.map(day => (
            <button key={day} className="py-2.5 rounded-lg border-2 border-slate-50 text-[10px] font-black transition-all hover:border-accent/20 bg-slate-50/50 text-slate-400">
              {day}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest mb-3 block">Available Time Slots</label>
        <div className="grid grid-cols-3 gap-2">
          {slots.map(slot => (
            <button key={slot} className="py-3 rounded-lg border-2 border-slate-50 text-[10px] font-black transition-all hover:border-accent/20 bg-slate-50/50 text-slate-400">
              {slot}
            </button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<MapPin size={18} />} label="Can Travel Up To (km)" placeholder="e.g. 10" type="number" />
        <OnboardingInput icon={<Users size={18} />} label="Max Students at a Time" placeholder="e.g. 1 (Individual)" />
      </div>
    </div>
  );
}

function Step5() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <OnboardingInput icon={<User size={18} />} label="Account Holder Name" placeholder="Full Name as per Bank" />
      <OnboardingInput icon={<Building size={18} />} label="Bank Name" placeholder="e.g. HDFC Bank" />
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <OnboardingInput icon={<CreditCard size={18} />} label="Account Number" placeholder="XXXXXXXXXXXX" type="password" />
        <OnboardingInput icon={<CreditCard size={18} />} label="IFSC Code" placeholder="HDFC0001234" />
      </div>
      <OnboardingInput icon={<Wallet size={18} />} label="UPI ID" placeholder="name@upi" />
      <div className="bg-primary/5 p-5 md:p-6 rounded-[1.5rem] border border-primary/5">
        <h4 className="text-primary font-black text-sm mb-2 flex items-center gap-2">
          <ShieldCheck size={18} className="text-accent" /> Why bank details?
        </h4>
        <p className="text-slate-500 text-[10px] md:text-xs font-medium leading-relaxed">
          To automatically transfer your weekly earnings. TutorNest uses bank-grade encryption to secure your financial information.
        </p>
      </div>
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
