'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mimicking authentication process
    setTimeout(() => {
      if (isLogin) {
        // Direct to dashboard if login
        // For simulation, we'll go to parent dashboard by default
        router.push('/dashboard/parent');
      } else {
        // Direct to role selection then profile creation if signup
        router.push('/select-role');
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
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <Link href="/" className="text-3xl font-black mb-16 block transition-transform hover:scale-105 active:scale-95 origin-left">
              Ghar<span className="text-accent underline decoration-white/10">Guru</span>
            </Link>
            <h1 className="text-5xl xl:text-6xl font-black leading-[1.1] mb-8 text-balance">
              {isLogin ? "Welcome Back to Fair Learning" : "Join the India's Fair Learning Move"}
            </h1>
            <p className="text-slate-300 text-lg xl:text-xl mb-12 leading-relaxed max-w-md text-balance">
              We empower educators and support parents by maintaining a transparent <span className="text-accent font-black">20% commission</span> model.
            </p>
            <div className="space-y-6">
              {[
                'Zero hidden fees',
                'Only 20% platform commission',
                'Verified tutor community',
                'Direct parent-tutor connection'
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
          <div className="relative z-10 pt-10 border-t border-white/10 italic text-slate-400 font-medium">
            Helping 500+ tutors reach 2000+ students across India.
          </div>
        </div>

        {/* Form Side */}
        <div className="p-6 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-xl font-black text-primary">
              Ghar<span className="text-accent underline decoration-primary/10">Guru</span>
            </Link>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="flex bg-slate-50 p-1 rounded-xl md:rounded-2xl mb-8 md:mb-16 border border-slate-100">
               <button 
                onClick={() => setIsLogin(true)}
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

            <div className="mb-8 group">
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-2 tracking-tight transition-all">
                {isLogin ? 'Login' : 'Create Account'}
              </h2>
              <p className="text-slate-500 font-bold text-xs md:text-base leading-relaxed">
                {isLogin ? 'Enter credentials to continue' : 'Join thousands of tutors and parents today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-5">
              {!isLogin && (
                <div className="grid grid-cols-1 gap-3.5 md:gap-5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <InputField icon={<User size={18} />} label="Full Name" placeholder="John Doe" />
                  <InputField icon={<Phone size={18} />} label="Phone Number" placeholder="+91 98765 43210" />
                </div>
              )}
              
              <InputField icon={<Mail size={18} />} label="Email Address" placeholder="name@example.com" type="email" />
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
                className="w-full premium-gradient text-white py-3.5 md:py-5 rounded-2xl font-black text-base md:text-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-6 md:mt-8"
              >
                {isLoading ? (
                   <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Continue <ArrowRight size={20} /></>
                )}
              </button>
            </form>

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

function InputField({ icon, label, placeholder, type = 'text' }: any) {
  return (
    <div className="space-y-2 group">
      <label className="text-[10px] md:text-xs font-black text-slate-500 ml-1 uppercase tracking-widest group-focus-within:text-accent transition-colors">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent transition-colors">{icon}</div>
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-3.5 md:py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all font-bold text-primary placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}
