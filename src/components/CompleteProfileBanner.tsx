'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

interface CompleteProfileBannerProps {
  role: 'tutor' | 'parent';
  completionPercentage: number;
}

export default function CompleteProfileBanner({ role, completionPercentage }: CompleteProfileBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || completionPercentage === 100) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-primary p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-accent/20 p-3 rounded-xl text-accent hidden md:block">
              <AlertCircle size={24} />
            </div>
            <div>
              <h4 className="text-white font-black text-sm md:text-lg mb-1 flex items-center gap-2">
                Complete Your Profile <span className="text-accent underline decoration-2">{completionPercentage}% Done</span>
              </h4>
              <p className="text-slate-400 text-[10px] md:text-sm font-bold">
                Finish all steps to get verified and start receiving {role === 'tutor' ? 'student requests' : 'tutor demos'}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex-1 md:w-48 h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-1000 ease-out" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <Link 
              href={`/onboarding/${role === 'tutor' ? 'tutor' : 'student'}`}
              className="bg-white text-primary px-6 py-2.5 rounded-xl font-black text-xs md:text-sm whitespace-nowrap hover:bg-accent hover:text-white transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-black/20"
            >
              Continue <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
