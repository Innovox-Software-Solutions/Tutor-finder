'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { mockTutors } from '@/data/mockTutors';
import Navbar from '@/components/Navbar';
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
  AlertCircle
} from 'lucide-react';

export default function TutorProfile() {
  const { id } = useParams();
  const tutor = mockTutors.find(t => t.id === id) || mockTutors[0];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <main className="min-h-screen bg-[#fdfdfd] selection:bg-accent selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-8 md:space-y-12">
            {/* Header Card */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-premium border border-slate-100/50 flex flex-col md:flex-row gap-8 md:gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative w-full md:w-72 h-72 md:h-80 rounded-3xl overflow-hidden shrink-0 shadow-xl z-10 bg-slate-100">
                <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
              </div>
              <div className="flex-1 z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                       <h1 className="text-3xl md:text-5xl font-black text-primary tracking-tight">{tutor.name}</h1>
                       {tutor.verified && (
                         <div className="bg-blue-50 p-1.5 rounded-xl border border-blue-100">
                           <BadgeCheck className="text-blue-500" size={24} />
                         </div>
                       )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-slate-500 font-bold">
                       <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                         <MapPin size={18} className="text-primary" /> 
                         <span className="text-sm">{tutor.location}</span>
                       </div>
                       <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-xl border border-amber-100">
                          <Star size={18} className="fill-amber-400 text-amber-400" />
                          <span className="font-black">{tutor.rating}</span>
                          <span className="text-amber-500/60 font-bold text-xs ml-1">({tutor.reviews} reviews)</span>
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3.5 rounded-2xl border-2 border-slate-50 text-slate-400 hover:text-accent hover:border-accent/20 transition-all active:scale-90"><Share2 size={20} /></button>
                    <button className="p-3.5 rounded-2xl border-2 border-slate-50 text-slate-400 hover:text-red-500 hover:border-red-100 transition-all active:scale-90"><Heart size={20} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-y border-slate-100/50">
                   <StatItem icon={<BookOpen size={18} />} label="Subjects" value={tutor.subjects.slice(0, 2).join(', ')} />
                   <StatItem icon={<Clock size={18} />} label="Exp" value={`${tutor.experience} Years`} />
                   <StatItem icon={<GraduationCap size={18} />} label="Level" value="Graduate" />
                   <StatItem icon={<Languages size={18} />} label="Languages" value="English, Hindi" />
                </div>

                <div className="pt-8">
                   <h3 className="text-xl font-black text-primary mb-4 uppercase tracking-widest text-xs">About Me</h3>
                   <p className="text-slate-600 leading-relaxed text-base md:text-lg text-balance">{tutor.bio}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-premium border border-slate-100/50">
              <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                <div className="bg-accent/10 p-3 rounded-2xl text-accent"><Calendar size={24} /></div>
                Weekly Availability
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className={`p-4 md:p-6 rounded-3xl text-center border-2 transition-all duration-300 ${tutor.availability.includes(day) ? 'bg-primary border-primary text-white shadow-primary-glow group' : 'bg-slate-50/50 text-slate-300 border-slate-50'}`}>
                    <div className="font-black text-sm uppercase mb-1 tracking-widest">{day}</div>
                    <div className={`text-[10px] font-black uppercase tracking-tighter ${tutor.availability.includes(day) ? 'text-accent opacity-100' : 'opacity-50'}`}>
                      {tutor.availability.includes(day) ? 'Available' : 'Off'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-premium border border-slate-100/50">
               <div className="flex justify-between items-center mb-10">
                 <h3 className="text-2xl font-black text-primary flex items-center gap-3">
                   <div className="bg-primary/5 p-3 rounded-2xl text-primary"><MessageCircle size={24} /></div>
                   Student Reviews
                 </h3>
                 <button className="text-accent font-black text-sm hover:underline">View All</button>
               </div>
               <div className="space-y-6 md:space-y-8">
                  {[1, 2].map(i => (
                    <div key={i} className="p-6 md:p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 last:border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl premium-gradient flex items-center justify-center font-black text-white text-xl shadow-lg shadow-primary/20">S</div>
                          <div>
                            <div className="font-black text-primary text-lg">Student {i}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verified Student</div>
                          </div>
                        </div>
                        <div className="flex gap-1 text-amber-400 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                          {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-amber-400" />)}
                        </div>
                      </div>
                      <p className="text-slate-600 font-medium leading-relaxed italic">"Extremely patient and helpful. Concepts that were difficult for me now seem very easy thanks to the unique teaching style."</p>
                      <div className="mt-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Posted 2 months ago</div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <aside className="w-full lg:w-96">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-premium border border-slate-100/50 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                
                <div className="flex justify-between items-center">
                  <div className="bg-slate-50 px-4 py-2 rounded-xl text-slate-400 font-black uppercase text-[10px] tracking-widest border border-slate-100">Hourly Rate</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black text-primary tracking-tighter">₹{tutor.hourlyRate}</span>
                    <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">/hr</span>
                  </div>
                </div>

                {/* Commission Breakdown Box */}
                <div className="bg-primary p-6 rounded-3xl border border-white/10 shadow-primary-glow">
                  <h4 className="text-xs font-black text-accent mb-4 flex items-center gap-2 uppercase tracking-widest">
                    <AlertCircle size={14} /> Fair Pricing Breakdown
                  </h4>
                  <div className="space-y-3 text-sm font-bold">
                    <div className="flex justify-between text-slate-400">
                      <span>Parent Pays</span>
                      <span className="text-white">₹{tutor.hourlyRate}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Platform (20%)</span>
                      <span className="text-white">- ₹{tutor.hourlyRate * 0.2}</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-white/10 flex justify-between text-accent font-black text-lg">
                      <span>Tutor Special</span>
                      <span>₹{tutor.hourlyRate * 0.8}</span>
                    </div>
                  </div>
                </div>

                {/* Booking Options */}
                <div className="space-y-6 pt-2">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block ml-1">Select Days</label>
                    <div className="flex flex-wrap gap-2">
                       {tutor.availability.map(day => (
                         <button 
                           key={day}
                           onClick={() => toggleDay(day)}
                           className={`px-4 py-2.5 rounded-xl text-xs font-black tracking-widest transition-all border-2 active:scale-95 ${selectedDays.includes(day) ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-500 border-transparent hover:border-slate-200'}`}
                         >
                           {day}
                         </button>
                       ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block ml-1">Preferred Time</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-sm font-black text-primary focus:border-accent/20 focus:bg-white focus:ring-0 appearance-none transition-all cursor-pointer">
                         <option>Choose a slot</option>
                         <option>04:00 PM - 05:00 PM</option>
                         <option>05:00 PM - 06:00 PM</option>
                         <option>06:00 PM - 07:00 PM</option>
                         <option>07:00 PM - 08:00 PM</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-black">
                        <Clock size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                   <button className="group w-full premium-gradient text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95">
                      <Calendar size={20} /> Book Now
                   </button>
                   <button className="w-full bg-white text-primary border-2 border-primary/10 py-5 rounded-2xl font-black text-lg hover:border-primary transition-all active:scale-95">
                      Request Demo Class
                   </button>
                </div>

                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-center">
                  <p className="text-amber-700 text-[10px] font-black uppercase tracking-widest">
                    Free demo class included for new students
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
