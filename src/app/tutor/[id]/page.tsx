'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { mockTutors } from '@/data/mockTutors';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  Star, 
  MapPin, 
  BadgeCheck, 
  Clock, 
  BookOpen, 
  GraduationCap, 
  Languages, 
  Calendar,
  Share2,
  Heart,
  MessageCircle,
  AlertCircle,
  ChevronLeft
} from 'lucide-react';

export default function TutorProfile() {
  const { id } = useParams();
  const tutor = mockTutors.find(t => t.id === id) || mockTutors[0];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const router = useRouter();

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleBooking = (type: 'book' | 'demo') => {
    const session = localStorage.getItem('gharguru_session');
    if (!session) {
      alert('You need to login first to ' + (type === 'demo' ? 'request a demo.' : 'book a session.'));
      router.push('/auth');
      return;
    }
    
    // Process booking (demo logic)
    alert(type === 'demo' ? 'Demo request sent successfully!' : 'Redirecting to checkout...');
  };

  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white pb-20">
      {/* Profile Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-premium border border-slate-100 flex items-center justify-center text-primary hover:text-accent hover:scale-105 active:scale-95 transition-all pointer-events-auto"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>

          <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full shadow-premium border border-slate-100 flex items-center justify-center md:hidden pointer-events-auto">
             <Link href="/" className="text-sm font-black text-primary">
              Ghar<span className="text-accent">Guru</span>
            </Link>
          </div>

          <div className="hidden md:flex gap-3 pointer-events-auto">
            <button className="w-14 h-14 bg-white rounded-full shadow-premium border border-slate-100 flex items-center justify-center text-slate-400 hover:text-accent transition-all">
              <Share2 size={20} />
            </button>
            <button className="w-14 h-14 bg-white rounded-full shadow-premium border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-6 md:space-y-12">
            {/* Header Card */}
            <div className="bg-white rounded-[2.5rem] p-5 md:p-8 shadow-premium border border-slate-100/50 flex flex-col md:flex-row gap-6 md:gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative w-full md:w-72 h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg z-10 bg-slate-100">
                <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
              </div>
              <div className="flex-1 z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 md:mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                       <h1 className="text-2xl md:text-5xl font-black text-primary tracking-tight">{tutor.name}</h1>
                       {tutor.verified && (
                         <div className="bg-blue-50 p-1 rounded-lg border border-blue-100">
                           <BadgeCheck className="text-blue-500 w-4.5 h-4.5 md:w-6 md:h-6" />
                         </div>
                       )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-slate-500 font-bold">
                       <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                         <MapPin className="text-primary w-3.5 h-3.5 md:w-4.5 md:h-4.5" /> 
                         <span className="text-xs md:text-sm">{tutor.location}</span>
                       </div>
                       <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-100">
                          <Star className="fill-amber-400 text-amber-400 w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                          <span className="font-black text-xs md:text-sm">{tutor.rating}</span>
                          <span className="text-amber-500/60 font-bold text-[10px] md:text-xs">({tutor.reviews})</span>
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl border-2 border-slate-50 text-slate-400 hover:text-accent hover:border-accent/20 transition-all active:scale-90"><Share2 size={16} /></button>
                    <button className="p-2.5 rounded-xl border-2 border-slate-50 text-slate-400 hover:text-red-500 hover:border-red-100 transition-all active:scale-90"><Heart size={16} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6 border-y border-slate-100/50">
                   <StatItem icon={<BookOpen size={14} />} label="Subjects" value={tutor.subjects.slice(0, 2).join(', ')} />
                   <StatItem icon={<Clock size={14} />} label="Exp" value={`${tutor.experience} Yrs`} />
                   <StatItem icon={<GraduationCap size={14} />} label="Level" value="Grad" />
                   <StatItem icon={<Languages size={14} />} label="Langs" value="Eng, Hin" />
                </div>

                <div className="pt-6">
                   <h3 className="text-xs font-black text-primary mb-3 uppercase tracking-widest opacity-50">About Me</h3>
                   <p className="text-slate-600 leading-relaxed text-sm md:text-lg text-balance">{tutor.bio}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-premium border border-slate-100/50">
              <h3 className="text-xl md:text-2xl font-black text-primary mb-6 flex items-center gap-3">
                <div className="bg-accent/10 p-2.5 rounded-xl text-accent"><Calendar size={20} /></div>
                Weekly Availability
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className={`p-3 md:p-6 rounded-2xl md:rounded-3xl text-center border-2 transition-all duration-300 ${tutor.availability.includes(day) ? 'bg-primary border-primary text-white shadow-primary-glow' : 'bg-slate-50/50 text-slate-200 border-slate-50'}`}>
                    <div className="font-black text-[10px] md:text-sm uppercase mb-0.5 md:mb-1 tracking-widest">{day}</div>
                    <div className={`text-[8px] md:text-[10px] font-black uppercase tracking-tighter ${tutor.availability.includes(day) ? 'text-accent opacity-100' : 'opacity-40'}`}>
                      {tutor.availability.includes(day) ? 'On' : 'Off'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-premium border border-slate-100/50">
               <div className="flex justify-between items-center mb-8">
                 <h3 className="text-xl md:text-2xl font-black text-primary flex items-center gap-3">
                   <div className="bg-primary/5 p-2.5 rounded-xl text-primary"><MessageCircle size={20} /></div>
                   Reviews
                 </h3>
                 <button className="text-accent font-black text-xs uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="space-y-4 md:space-y-8">
                  {[1].map(i => (
                    <div key={i} className="p-5 md:p-8 bg-slate-50/50 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl premium-gradient flex items-center justify-center font-black text-white text-base shadow-lg shadow-primary/20">S</div>
                          <div>
                            <div className="font-black text-primary text-sm">Student {i}</div>
                            <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Verified</div>
                          </div>
                        </div>
                        <div className="flex gap-1 text-amber-400 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                          {[...Array(5)].map((_, j) => <Star key={j} size={10} className="fill-amber-400" />)}
                        </div>
                      </div>
                      <p className="text-slate-600 font-bold text-xs md:text-lg leading-relaxed italic">"Extremely patient and helpful. Unique teaching style."</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-28 space-y-4 md:space-y-6">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-premium border border-slate-100/50 space-y-6 md:space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-accent" />
                
                <div className="flex justify-between items-center">
                  <div className="bg-slate-50 px-3 py-1.5 rounded-lg text-slate-400 font-black uppercase text-[8px] md:text-[10px] tracking-widest border border-slate-100">Rate / HR</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-5xl font-black text-primary tracking-tighter">₹{tutor.hourlyRate}</span>
                    <span className="text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-widest">/hr</span>
                  </div>
                </div>

                {/* Booking Options */}
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Select Days</label>
                    <div className="flex flex-wrap gap-2">
                       {tutor.availability.map(day => (
                         <button 
                           key={day}
                           onClick={() => toggleDay(day)}
                           className={`px-3.5 py-2 rounded-lg text-[10px] font-black tracking-widest transition-all border-2 active:scale-95 ${selectedDays.includes(day) ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-500 border-transparent hover:border-slate-100'}`}
                         >
                           {day}
                         </button>
                       ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">Time Slot</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-transparent rounded-xl p-3.5 text-xs font-black text-primary focus:border-accent/20 focus:bg-white focus:ring-0 appearance-none transition-all cursor-pointer">
                         <option>Choose a slot</option>
                         <option>04:00 PM - 05:00 PM</option>
                         <option>05:00 PM - 06:00 PM</option>
                         <option>06:00 PM - 07:00 PM</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <Clock size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                   <button 
                     onClick={() => handleBooking('book')}
                     className="group w-full premium-gradient text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 active:scale-95"
                   >
                      <Calendar size={18} /> Book Now
                   </button>
                   <button 
                    onClick={() => handleBooking('demo')}
                    className="w-full bg-white text-primary border-2 border-primary/10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:border-primary transition-all active:scale-95"
                   >
                      Request Demo Class
                   </button>
                </div>

                <div className="bg-amber-50 p-3 rounded-xl border border-amber-100 text-center">
                  <p className="text-amber-700 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                    Free demo class included
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function StatItem({ icon, label, value }: any) {
  return (
    <div className="group">
      <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase mb-2 tracking-widest group-hover:text-accent transition-colors">
        <span className="text-accent">{icon}</span> {label}
      </div>
      <div className="text-primary font-black text-sm md:text-base group-hover:translate-x-1 transition-transform">{value}</div>
    </div>
  );
}
