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
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10">
              <div className="relative w-full md:w-64 h-64 rounded-2xl overflow-hidden shrink-0">
                <Image src={tutor.image} alt={tutor.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <h1 className="text-4xl font-black text-primary">{tutor.name}</h1>
                       {tutor.verified && <BadgeCheck className="text-blue-500" size={28} />}
                    </div>
                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                       <div className="flex items-center gap-1"><MapPin size={18} /> {tutor.location}</div>
                       <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-lg border border-amber-100">
                          <Star size={16} className="fill-amber-400 text-amber-400" />
                          <span className="font-bold">{tutor.rating}</span>
                          <span className="text-slate-400 ml-1">({tutor.reviews} reviews)</span>
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-accent transition-all"><Share2 size={20} /></button>
                    <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-red-500 transition-all"><Heart size={20} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-y border-slate-50">
                   <StatItem icon={<BookOpen />} label="Subjects" value={tutor.subjects.join(', ')} />
                   <StatItem icon={<Clock />} label="Exp" value={`${tutor.experience} Years`} />
                   <StatItem icon={<GraduationCap />} label="Level" value="Graduate" />
                   <StatItem icon={<Languages />} label="Languages" value="English, Hindi" />
                </div>

                <div className="pt-8">
                   <h3 className="text-xl font-bold text-primary mb-4">About Me</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">{tutor.bio}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-primary mb-10 flex items-center gap-3">
                <Calendar className="text-accent" /> Available Days
              </h3>
              <div className="grid grid-cols-7 gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className={`p-4 rounded-2xl text-center border transition-all ${tutor.availability.includes(day) ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-300 border-slate-100'}`}>
                    <div className="font-bold text-sm uppercase mb-1">{day}</div>
                    <div className="text-xs font-medium">{tutor.availability.includes(day) ? 'Available' : 'Off'}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Placeholder */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
               <h3 className="text-2xl font-bold text-primary mb-10">Student Reviews</h3>
               <div className="space-y-8">
                  {[1, 2].map(i => (
                    <div key={i} className="pb-8 border-b border-slate-50 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">S</div>
                          <div>
                            <div className="font-bold text-primary">Student {i}</div>
                            <div className="text-xs text-slate-400">2 months ago</div>
                          </div>
                        </div>
                        <div className="flex text-amber-400"><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /></div>
                      </div>
                      <p className="text-slate-600">Extremely patient and helpful. Concepts that were difficult for me now seem very easy.</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <aside className="w-full lg:w-96 space-y-8">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-8">
                <div className="flex justify-between items-center">
                  <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Hourly Rate</div>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-black text-primary">₹{tutor.hourlyRate}</span>
                    <span className="text-slate-400 font-medium ml-1">/hr</span>
                  </div>
                </div>

                {/* Commission Breakdown Box */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                  <h4 className="text-sm font-black text-primary mb-4 flex items-center gap-2">
                    <AlertCircle size={16} /> Fair Pricing Breakdown
                  </h4>
                  <div className="space-y-3 text-sm font-medium">
                    <div className="flex justify-between text-slate-500">
                      <span>You pay</span>
                      <span className="text-primary font-bold">₹{tutor.hourlyRate}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Platform fee (20%)</span>
                      <span className="text-primary font-bold">- ₹{tutor.hourlyRate * 0.2}</span>
                    </div>
                    <div className="pt-3 border-t border-primary/10 flex justify-between text-accent font-black">
                      <span>Tutor earns</span>
                      <span>₹{tutor.hourlyRate * 0.8}</span>
                    </div>
                  </div>
                </div>

                {/* Booking Options */}
                <div className="space-y-6 pt-4 border-t border-slate-100">
                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 block">Select Your Days</label>
                    <div className="flex flex-wrap gap-2">
                       {tutor.availability.map(day => (
                         <button 
                           key={day}
                           onClick={() => toggleDay(day)}
                           className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${selectedDays.includes(day) ? 'bg-primary text-white border-primary shadow-md shadow-primary/20' : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-slate-300'}`}
                         >
                           {day}
                         </button>
                       ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 block">Preferred Time Slot</label>
                    <select className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm font-bold text-slate-600 focus:ring-2 focus:ring-accent appearance-none">
                       <option>Select a time</option>
                       <option>04:00 PM - 05:00 PM</option>
                       <option>05:00 PM - 06:00 PM</option>
                       <option>06:00 PM - 07:00 PM</option>
                       <option>07:00 PM - 08:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                   <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                      <Calendar size={20} /> Book Tutor
                   </button>
                   <button className="w-full bg-white text-primary border-2 border-primary py-5 rounded-2xl font-black text-lg hover:bg-primary/5 transition-all">
                      Request Demo Class
                   </button>
                </div>

                <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-tighter">
                   Free demo class included for new students
                </p>
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
    <div>
      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase mb-2">
        <span className="text-accent">{icon}</span> {label}
      </div>
      <div className="text-primary font-black">{value}</div>
    </div>
  );
}
