'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Auth Check
    const session = localStorage.getItem('gharguru_session');
    if (session) {
      setUser(JSON.parse(session));
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string, href: string, isButton?: boolean }[] = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/#how-it-works' },
    { name: 'Find Tutor', href: '/find-tutor' },
  ];

  const dashboardUrl = user?.role === 'tutor' ? '/dashboard/tutor' : '/dashboard/parent';

  const authLinks: { name: string, href: string, isButton?: boolean }[] = user ? [
    { name: 'Dashboard', href: dashboardUrl, isButton: true },
  ] : [
    { name: 'Become a Tutor', href: '/auth' },
    { name: 'Login', href: '/auth' },
    { name: 'Sign Up', href: '/auth', isButton: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-0 py-4 md:py-6 ${scrolled ? 'mt-0' : 'mt-2'}`}>
      <div className="max-w-5xl mx-auto flex justify-center">
        {/* Main Pill Navbar */}
        <div className="bg-primary/95 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-2 md:py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full">
          
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} active={pathname === link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Centered Logo */}
          <Link href="/" className="group flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center font-black text-white text-xs md:text-sm shadow-lg shadow-accent/20">
              GG
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
              Ghar<span className="text-accent underline decoration-white/20">Guru</span>
            </span>
          </Link>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-1">
            {authLinks.map((link) => (
              <NavLink 
                key={link.name} 
                href={link.href} 
                active={pathname === link.href}
                isButton={link.isButton}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:bg-white/10 rounded-full transition-all active:scale-90 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-4 right-4 mt-4 bg-primary/95 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-6 shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <div className="flex flex-col gap-2">
            {[...navLinks, ...authLinks].map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-4 px-6 rounded-full font-black text-center transition-all cursor-pointer ${link.isButton ? 'premium-gradient text-white shadow-lg' : pathname === link.href ? 'bg-accent text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

function NavLink({ href, children, active, isButton }: { href: string, children: React.ReactNode, active: boolean, isButton?: boolean }) {
  if (isButton) {
    return (
      <Link 
        href={href} 
        className="premium-gradient text-white px-6 py-2 rounded-full font-black text-xs shadow-md hover:shadow-accent-glow hover:scale-105 transition-all active:scale-95 ml-2 cursor-pointer uppercase tracking-widest"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`px-5 py-2.5 rounded-full font-black text-xs transition-all duration-300 cursor-pointer uppercase tracking-widest ${active ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
