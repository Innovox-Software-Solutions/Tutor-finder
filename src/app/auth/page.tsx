'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  GraduationCap,
  Users
} from 'lucide-react';

type Role = 'tutor' | 'parent' | null;

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<Role>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (isLogin) {
        // Automatically route to dashboard based on simulated account role
        // For demo: if email contains 'tutor', go to tutor dashboard
        const emailInput = (e.target as any).email?.value || '';
        if (emailInput.includes('tutor')) {
          router.push('/dashboard/tutor');
        } else {
          router.push('/dashboard/parent');
        }
      } else {
        // Signup: Go to specific role dashboard
        router.push(role === 'tutor' ? '/dashboard/tutor' : '/dashboard/parent');
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fdfdfd] p-3 md:p-8 py-4 md:py-20 selection:bg-accent selection:text-white">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[2rem] md:rounded-[3rem] shadow-premium overflow-hidden border border-slate-100/50">
        
        {/* Branding Side */}
        <div className="bg-primary p-12 md:p-16 text-white hidden lg:flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary-light to-blue-900 opacity-90 -z-10" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />

          <div className="relative z-10">
            <Link href="/" className="text-3xl font-black mb-16 block transition-transform hover:scale-105 active:scale-95 origin-left">
              Ghar<span className="text-accent underline decoration-white/10">Guru</span>
            </Link>
            <h1 className="text-5xl xl:text-6xl font-black leading-[1.1] mb-8 text-balance">
              {isLogin ? "Welcome Back to Fair Learning" : "Join the India's Fair Learning Move"}
            </h1>
            <p className="text-slate-300 text-lg xl:text-xl mb-12 leading-relaxed max-w-md text-balance">
              Supporting {isLogin ? 'your journey' : 'a community'} with a transparent <span className="text-accent font-black">20% commission</span> model.
            </p>
            <div className="space-y-6">
              {[
                'Zero hidden fees',
                'Only 20% platform commission',
                'Verified tutor community',
                'Secure & Fast Redirection'
              ].map(item => (
                <div key={item} className="flex items-center gap-4 font-bold text-lg group cursor-default">
                  <div className="bg-accent/20 backdrop-blur-md rounded-xl p-2 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <CheckCircle2 className="text-accent group-hover:text-white transition-colors" size={20} />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-6 md:p-16 lg:p-20 flex flex-col justify-center bg-white min-h-[600px]">
          <div className="lg:hidden mb-12">
            <Link href="/" className="text-xl font-black text-primary">
              Ghar<span className="text-accent underline decoration-primary/10">Guru</span>
            </Link>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="flex bg-slate-50 p-1 rounded-xl md:rounded-2xl mb-8 md:mb-12 border border-slate-100">
               <button 
                onClick={() => { setIsLogin(true); setRole(null); }}
                className={`flex-1 py-3 md:py-4 rounded-lg md:rounded-xl font-black text-xs md:text-sm transition-all ${isLogin ? 'bg-white text-primary shadow-lg ring-1 ring-slate-100' : 'text-slate-400 hover:text-primary'}`}
              >
                LOGIN
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 md:py-4 rounded-lg md:rounded-xl font-black text-xs md:text-sm transition-all ${!isLogin ? 'bg-white text-primary shadow-lg ring-1 ring-slate-100' : 'text-slate-400 hover:text-primary'}`}
              >
                SIGN UP
              </button>
            </div>

            {!isLogin && !role ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-4xl font-black text-primary mb-2 tracking-tight">I am a...</h2>
                  <p className="text-slate-500 font-bold text-xs md:text-base">Choose your role to continue</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <RoleCard 
                    icon={<GraduationCap size={44} />} 
                    label="👨‍🏫 TUTOR" 
                    onClick={() => setRole('tutor')} 
                  />
                  <RoleCard 
                    icon={<Users size={44} />} 
                    label="👨‍👩‍👧 PARENT" 
                    onClick={() => setRole('parent')} 
                  />
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="mb-8 group">
                  <h2 className="text-2xl md:text-4xl font-black text-primary mb-2 tracking-tight transition-all">
                    {isLogin ? 'Login' : `Sign up as ${role === 'tutor' ? 'Tutor' : 'Parent'}`}
                  </h2>
                  <p className="text-slate-500 font-bold text-xs md:text-base leading-relaxed">
                    {isLogin ? 'Enter credentials to continue' : 'Join thousands of tutors and parents today'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-4">
                  {!isLogin && (
                    <div className="space-y-3 md:space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <InputField icon={<User size={18} />} label="Full Name" placeholder="John Doe" />
                      <div className="relative">
                        <InputField icon={<Phone size={18} />} label="Phone Number" placeholder="+91 98765 43210" name="phone" />
                        <button 
                          type="button"
                          onClick={() => setShowOtp(true)}
                          className="absolute right-3 top-[34px] md:top-[38px] text-[10px] md:text-xs font-black text-accent hover:underline decoration-2"
                        >
                          {showOtp ? 'RESEND OTP' : 'SEND OTP'}
                        </button>
                      </div>
                      {showOtp && (
                        <div className="animate-in zoom-in duration-300">
                           <InputField icon={<ShieldCheck size={18} />} label="Enter 6-digit OTP" placeholder="_ _ _ _ _ _" />
                        </div>
                      )}
                    </div>
                  )}
                  
                  <InputField icon={<Mail size={18} />} label="Email Address" placeholder="name@example.com" type="email" name="email" />
                  <InputField icon={<Lock size={18} />} label="Password" placeholder="••••••••" type="password" />
                  
                  {!isLogin && (
                    <InputField icon={<Lock size={18} />} label="Confirm Password" placeholder="••••••••" type="password" />
                  )}

                  {isLogin && (
                    <div className="text-right pt-1">
                      <Link href="#" className="text-[10px] md:text-sm font-black text-accent hover:underline decoration-2">Forgot Password?</Link>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full premium-gradient text-white py-3.5 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-6 md:mt-8"
                  >
                    {isLoading ? (
                       <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>{isLogin ? 'Login' : 'Create Account'} <ArrowRight size={20} /></>
                    )}
                  </button>
                  
                  {!isLogin && (
                    <button 
                      type="button"
                      onClick={() => setRole(null)}
                      className="w-full text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors mt-2"
                    >
                      Change Role
                    </button>
                  )}
                </form>
              </div>
            )}

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100 text-center">
               <p className="text-slate-400 font-black text-[10px] md:text-sm uppercase tracking-wider">
                 Fair commission: <span className="text-accent underline decoration-2">Only 20%</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function RoleCard({ icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-3xl border-2 border-transparent hover:border-accent hover:bg-white hover:shadow-premium group transition-all"
    >
      <div className="text-slate-300 group-hover:text-accent group-hover:scale-110 transition-all mb-4">
        {icon}
      </div>
      <span className="font-black text-xs md:text-sm text-slate-400 group-hover:text-primary uppercase tracking-wider">{label}</span>
    </button>
  );
}

function InputField({ icon, label, placeholder, type = 'text', name }: any) {
  return (
    <div className="space-y-1.5 md:space-y-2 group">
      <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors">{icon}</div>
        <input 
          type={type} 
          name={name}
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-3 md:py-3.5 bg-slate-50 rounded-xl md:rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary placeholder:text-slate-300 text-sm md:text-base"
        />
      </div>
    </div>
  );
}
