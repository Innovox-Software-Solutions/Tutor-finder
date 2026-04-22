'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-black text-primary tracking-tight transition-transform hover:scale-105 active:scale-95">
              Ghar<span className="text-accent underline decoration-primary/10">Guru</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#how-it-works">How It Works</NavLink>
            <NavLink href="/find-tutor">Find Tutor</NavLink>
            <NavLink href="/auth">Become a Tutor</NavLink>
            
            <div className="w-px h-6 bg-slate-200 mx-4" />
            
            <Link href="/auth" className="text-slate-600 hover:text-primary font-bold px-4 py-2 transition-colors">
              Login
            </Link>
            <Link href="/auth" className="premium-gradient text-white px-7 py-3 rounded-2xl font-bold hover:shadow-primary-glow transition-all active:scale-95">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-primary hover:bg-slate-100 rounded-xl transition-colors active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-4 pt-6 pb-10 space-y-2">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/#how-it-works" onClick={() => setIsOpen(false)}>How It Works</MobileNavLink>
          <MobileNavLink href="/find-tutor" onClick={() => setIsOpen(false)}>Find Tutor</MobileNavLink>
          <MobileNavLink href="/auth" onClick={() => setIsOpen(false)}>Become a Tutor</MobileNavLink>
          
          <div className="pt-8 grid grid-cols-2 gap-4">
            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="text-center py-4 text-primary font-black border-2 border-primary/10 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="text-center py-4 premium-gradient text-white font-black rounded-2xl shadow-lg shadow-primary/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-slate-500 hover:text-primary font-bold px-4 py-2 rounded-xl hover:bg-slate-50 transition-all text-sm lg:text-base underline-offset-8 hover:underline decoration-accent/30 decoration-2"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block py-4 text-slate-900 font-bold text-xl border-b border-slate-50 active:bg-slate-50 px-2 transition-colors"
    >
      {children}
    </Link>
  );
}

export default Navbar;
