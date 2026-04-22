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
      router.push('/select-role');
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-4 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden min-h-[750px]">
        
        {/* Branding Side */}
        <div className="bg-primary p-16 text-white hidden lg:flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-black mb-12 block">
              Tutor<span className="text-accent">Nest</span>
            </Link>
            <h1 className="text-5xl font-black leading-tight mb-8">
              {isLogin ? "Welcome Back to Fair Learning" : "Join the India's Fair Learning Move"}
            </h1>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
              We empower educators and support parents by maintaining a transparent 20% commission model.
            </p>
            <div className="space-y-6">
              {[
                'Zero hidden fees',
                'Only 20% platform commission',
                'Verified tutor community',
                'Direct parent-tutor connection'
              ].map(item => (
                <div key={item} className="flex items-center gap-4 font-bold text-lg">
                  <div className="bg-accent rounded-full p-1"><CheckCircle2 className="text-white" size={20} /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        </div>

        {/* Form Side */}
        <div className="p-10 md:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-12">
               <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 rounded-xl font-black text-sm transition-all ${isLogin ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-primary'}`}
              >
                LOGIN
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 rounded-xl font-black text-sm transition-all ${!isLogin ? 'bg-white text-primary shadow-lg' : 'text-slate-400 hover:text-primary'}`}
              >
                SIGN UP
              </button>
            </div>

            <div className="mb-10">
              <h2 className="text-4xl font-black text-primary mb-2">
                {isLogin ? 'Login' : 'Create Account'}
              </h2>
              <p className="text-slate-500 font-bold">
                {isLogin ? 'Enter your credentials to continue' : 'Join thousands of tutors and parents today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="grid grid-cols-1 gap-5">
                  <InputField icon={<User size={20} />} label="Full Name" placeholder="John Doe" />
                  <InputField icon={<Phone size={20} />} label="Phone Number" placeholder="+91 98765 43210" />
                </div>
              )}
              
              <InputField icon={<Mail size={20} />} label="Email Address" placeholder="name@example.com" type="email" />
              <InputField icon={<Lock size={20} />} label="Password" placeholder="••••••••" type="password" />
              
              {!isLogin && (
                <InputField icon={<Lock size={20} />} label="Confirm Password" placeholder="••••••••" type="password" />
              )}

              {isLogin && (
                <div className="text-right">
                  <Link href="#" className="text-sm font-bold text-accent hover:underline">Forgot Password?</Link>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-8"
              >
                {isLoading ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Continue <ArrowRight size={22} /></>
                )}
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
               <p className="text-slate-400 font-bold text-sm">
                 TutorNest Fair Commission Guarantee: <span className="text-accent underline">Only 20%</span>
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
    <div className="space-y-2">
      <label className="text-xs font-black text-slate-700 ml-1 uppercase tracking-widest">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full pl-12 pr-6 py-4 bg-slate-100/50 rounded-2xl border-2 border-transparent focus:border-accent focus:bg-white focus:ring-0 transition-all font-bold text-primary"
        />
      </div>
    </div>
  );
}
