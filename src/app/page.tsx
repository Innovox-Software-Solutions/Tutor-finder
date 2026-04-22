'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorCard from '@/components/TutorCard';
import CommissionTable from '@/components/CommissionTable';
import { mockTutors } from '@/data/mockTutors';
import { 
  Users, 
  UserRoundCheck, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2,
  Calculator,
  Laptop,
  Atom,
  Languages,
  FlaskConical,
  Beaker,
  Dna,
  Code,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'parent' | 'tutor'>('parent');

  const subjects = [
    { name: 'Mathematics', icon: <Calculator size={32} />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Physics', icon: <Atom size={32} />, color: 'bg-purple-100 text-purple-600' },
    { name: 'English', icon: <Languages size={32} />, color: 'bg-green-100 text-green-600' },
    { name: 'Chemistry', icon: <FlaskConical size={32} />, color: 'bg-orange-100 text-orange-600' },
    { name: 'Biology', icon: <Dna size={32} />, color: 'bg-red-100 text-red-600' },
    { name: 'Hindi', icon: <Beaker size={32} />, color: 'bg-amber-100 text-amber-600' },
    { name: 'Coding', icon: <Code size={32} />, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Science', icon: <BookOpen size={32} />, color: 'bg-cyan-100 text-cyan-600' },
  ];

  const featuredTutors = mockTutors.slice(0, 6);

  return (
    <main className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-44 pb-20 md:pb-40 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-0 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center relative z-10 pt-10">
          <div className="inline-flex items-center gap-3 bg-white/50 backdrop-blur-md text-primary border border-primary/10 px-4 py-2 rounded-full font-black text-[9px] md:text-sm mb-8 animate-fade-in hover:border-primary/20 transition-all cursor-default uppercase">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            INDIA'S MOST FAIR TUTORING PLATFORM
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-primary leading-[1.05] mb-8 tracking-tighter text-balance">
            Update your skills <br /> 
            <span className="text-accent underline decoration-primary/5 uppercase italic">without limits</span>
          </h1>
          <p className="text-xs md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed text-balance font-medium px-4">
            Most platforms take 50% from teachers. We take only <span className="text-primary font-bold">20%</span>. Better pay for tutors, better rates for students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
            <Link href="/auth" className="group w-full sm:w-auto premium-gradient text-white px-10 md:px-14 py-4 md:py-8 rounded-full font-black text-base md:text-xl shadow-primary-glow hover:scale-105 transition-all flex items-center justify-center gap-4 active:scale-[0.98] cursor-pointer">
              GET STARTED NOW <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-24 mb-16 md:mb-40 relative z-20">
        <div className="bg-primary border border-white/10 rounded-[2.5rem] md:rounded-full p-6 md:p-14 shadow-2xl backdrop-blur-xl grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          <div className="text-center group">
            <div className="text-2xl md:text-6xl font-black text-white mb-1 tracking-tighter group-hover:text-accent transition-colors">500+</div>
            <div className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em]">EXPERT TUTORS</div>
          </div>
          <div className="text-center group border-l border-white/5 pl-2 md:pl-0">
            <div className="text-2xl md:text-6xl font-black text-white mb-1 tracking-tighter group-hover:text-accent transition-colors">2000+</div>
            <div className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em]">ACTIVE STUDENTS</div>
          </div>
          <div className="text-center group border-l border-white/5 pl-2 md:pl-0">
            <div className="text-2xl md:text-6xl font-black text-white mb-1 tracking-tighter group-hover:text-accent transition-colors">10+</div>
            <div className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em]">CORE SUBJECTS</div>
          </div>
          <div className="text-center group border-l border-white/5 pl-2 md:pl-0">
            <div className="text-2xl md:text-6xl font-black text-accent mb-1 tracking-tighter animate-pulse">20%</div>
            <div className="text-[8px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em]">LOW COMMISSION</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-primary mb-4 md:mb-6 leading-tight">Simple Steps to Success</h2>
            <p className="text-xs md:text-lg text-slate-500 max-w-xl mx-auto font-medium">Getting started is easier than you think. Choose your role and join the community.</p>
          </div>
          
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="bg-white p-1 rounded-xl md:rounded-2xl border border-slate-200 flex shadow-sm">
              <button 
                onClick={() => setActiveTab('parent')}
                className={`px-4 md:px-10 py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold transition-all text-xs md:text-base ${activeTab === 'parent' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                For Parents
              </button>
              <button 
                onClick={() => setActiveTab('tutor')}
                className={`px-4 md:px-10 py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold transition-all text-xs md:text-base ${activeTab === 'tutor' ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                For Tutors
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {activeTab === 'parent' ? (
              <>
                <Step 
                  number="01" 
                  title="Search & Filter" 
                  desc="Find top-rated tutors near you based on subject, grade, and budget." 
                  icon={<Users size={32} className="text-primary" />} 
                />
                <Step 
                  number="02" 
                  title="Free Demo Class" 
                  desc="Request a demo session with your preferred tutor to ensure the right fit." 
                  icon={<UserRoundCheck size={32} className="text-primary" />} 
                />
                <Step 
                  number="03" 
                  title="Start Learning" 
                  desc="Confirm the tutor and start your regular sessions. Pay only for classes taken." 
                  icon={<BookOpen size={32} className="text-primary" />} 
                />
              </>
            ) : (
              <>
                <Step 
                  number="01" 
                  title="Create Profile" 
                  desc="List your expertise, experience, and hourly rate on our platform." 
                  icon={<Laptop size={32} className="text-primary" />} 
                />
                <Step 
                  number="02" 
                  title="Get Requests" 
                  desc="Respond to demo requests from parents and students in your area." 
                  icon={<ArrowRight size={32} className="text-primary" />} 
                />
                <Step 
                  number="03" 
                  title="Earn Better" 
                  desc="Keep 80% of your earnings. We only take 20%, the lowest in India." 
                  icon={<Calculator size={32} className="text-primary" />} 
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Commission Comparison */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-4 md:mb-6 leading-[1.1]">
                Why Choose <span className="text-accent underline decoration-primary/20">GharGuru</span>?
              </h2>
              <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Most platforms charge up to 50% commission, forcing tutors to hike their prices and parents to pay more. We believe in a fair ecosystem where teachers get their due.
              </p>
              <div className="grid gap-3 md:gap-4 max-w-md mx-auto lg:mx-0 text-left">
                {[
                  "Transparent pricing - No hidden fees",
                  "Direct communication with parents",
                  "Lowest platform fee in the market"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group hover:border-green-100 hover:bg-green-50 transition-all">
                    <div className="bg-green-100 p-1 rounded-full group-hover:bg-green-200 transition-colors">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <span className="text-slate-900 font-bold text-xs md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <CommissionTable />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-primary mb-2">Subjects We Cover</h2>
            <p className="text-xs md:text-lg text-slate-500 font-medium">Expert tutors for school, college, and competitive exams</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {subjects.map((s, idx) => (
              <div key={idx} className="bg-white p-5 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-100 hover:border-accent hover:shadow-premium hover:-translate-y-1 transition-all text-center group cursor-pointer">
                <div className={`${s.color} w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <span className="font-bold text-slate-900 text-xs md:text-lg block capitalize">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Educators */}
      <section className="bg-secondary-bg py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl px-4">
              <h2 className="text-3xl md:text-6xl font-black text-primary mb-6 tracking-tighter uppercase">Featured Educators</h2>
              <p className="text-sm md:text-lg text-slate-600 font-medium leading-relaxed">
                Connect with highly-rated tutors verified by our community for results and reliability.
              </p>
            </div>
            <Link href="/find-tutor" className="group flex items-center gap-3 font-black text-primary hover:text-accent transition-colors uppercase tracking-widest text-xs md:text-base cursor-pointer px-4">
              View all tutors <div className="bg-primary group-hover:bg-accent p-2 md:p-3 rounded-full text-white transition-colors"><ArrowRight size={20} /></div>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Banner */}
      <section className="py-20 bg-background border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl md:text-3xl font-black text-slate-400 leading-tight tracking-tight uppercase">
            Learn from more than <span className="text-primary italic font-black">160 member educators</span> across the city
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-black text-white mb-10 md:mb-16 leading-tight">What Community Says</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
             <Testimonial 
                role="Parent" 
                name="Sanjay K." 
                quote="Found a great physics tutor within 2 days. The demo class feature is a lifesaver." 
             />
             <Testimonial 
                role="Tutor" 
                name="Amit P." 
                quote="I earn so much more here compared to other websites. 20% commission is very fair." 
             />
             <Testimonial 
                role="Student" 
                name="Riya M." 
                quote="My math grades improved from C to A! My tutor Rahul is simply amazing." 
             />
             <Testimonial 
                role="Parent" 
                name="Deepa R." 
                quote="The verification process gives me peace of mind when hiring someone for my kids." 
             />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-primary mb-2 md:mb-4 leading-tight">Frequently Asked Questions</h2>
            <p className="text-xs md:text-lg text-slate-500 font-medium">Everything you need to know about GharGuru</p>
          </div>
          <div className="space-y-3 md:space-y-6">
            <Accordion 
              q="Does GharGuru take a percentage from parents?" 
              a="No, we charge 0% commission from parents. You only pay the hourly rate listed by the tutor." 
            />
            <Accordion 
              q="How do I verify a tutor?" 
              a="Look for the green 'BadgeCheck' icon on tutor profiles. These tutors have undergone identity and qualification verification." 
            />
            <Accordion 
              q="What if I'm not happy with the demo class?" 
              a="You are under no obligation to continue. You can browse other tutors and request a new demo." 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Step({ number, title, desc, icon }: any) {
  return (
    <div className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 md:p-8 text-4xl md:text-6xl font-black text-slate-50 group-hover:text-primary/5 transition-colors -z-0">
        {number}
      </div>
      <div className="mb-6 md:mb-8 relative z-10">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 relative z-10">{title}</h3>
      <p className="text-xs md:text-base text-slate-500 leading-relaxed relative z-10">{desc}</p>
    </div>
  );
}

function Testimonial({ role, name, quote }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-left border border-white/10 h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
      </div>
      <p className="text-white text-lg mb-6 leading-relaxed italic">"{quote}"</p>
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-slate-400 text-sm">{role}</div>
      </div>
    </div>
  );
}

function Accordion({ q, a }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex justify-between items-center group hover:bg-slate-50 transition-all"
      >
        <span className="font-bold text-lg text-primary">{q}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : 'text-slate-400'}`}>+</span>
      </button>
      {isOpen && (
        <div className="px-8 pb-8 text-slate-500 leading-relaxed animate-in slide-in-from-top duration-300">
          {a}
        </div>
      )}
    </div>
  );
}
