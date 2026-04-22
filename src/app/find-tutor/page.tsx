'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorCard from '@/components/TutorCard';
import { mockTutors } from '@/data/mockTutors';
import { Search, Filter, SlidersHorizontal, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function FindTutor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(2000);
  const [showFilters, setShowFilters] = useState(false);

  // In-memory filtering for static prototype
  const filteredTutors = mockTutors.filter(tutor => 
    (tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    tutor.hourlyRate <= priceRange
  );

  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-20">
        {/* Search Header */}
        <div className="bg-primary rounded-[3rem] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 mb-10 md:mb-20 relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-0" />
          <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-center relative z-10">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-slate-500 w-[18px] h-[18px] md:w-6 md:h-6" />
              <input 
                type="text" 
                placeholder="Search subject or tutor..."
                className="w-full pl-14 md:pl-18 pr-6 md:pr-8 py-4 md:py-5 bg-white/5 border-2 border-white/5 rounded-full focus:border-accent/30 focus:bg-white/10 focus:ring-0 transition-all text-sm md:text-lg font-bold text-white placeholder:text-slate-500 shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="w-full md:w-auto premium-gradient text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-black text-xs md:text-sm shadow-accent-glow hover:scale-105 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest">
              <Search className="w-5 h-5 md:w-6 md:h-6" /> SEARCH
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 relative">
          {/* Mobile Filter FAB */}
          <div className="lg:hidden fixed bottom-8 left-0 w-full flex justify-center z-50 px-6">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-3 bg-primary/90 backdrop-blur-xl text-white px-8 py-4 rounded-full font-black text-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/20 active:scale-95 transition-all w-full max-w-[280px] uppercase tracking-widest"
            >
              <Filter size={18} className="text-accent" />
              {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
            </button>
          </div>


          {/* Filter Sidebar */}
          <aside className={`
            w-full lg:w-80 space-y-6 lg:block
            ${showFilters ? 'block' : 'hidden'}
            fixed lg:sticky top-0 lg:top-28 left-0 h-full lg:h-fit z-40 lg:z-0
            bg-white lg:bg-transparent p-5 lg:p-0 overflow-y-auto lg:overflow-visible
            transition-all duration-300
          `}>
            {/* Mobile Close Button */}
            <div className="flex lg:hidden justify-between items-center mb-6 pb-4 border-b">
              <h2 className="text-xl font-black text-primary uppercase tracking-tight">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2 bg-slate-100 rounded-lg"><X size={20} /></button>
            </div>

            <div className="bg-white lg:p-8 rounded-2xl md:rounded-3xl lg:border lg:border-slate-100 lg:shadow-premium space-y-6 md:space-y-8">
              <div className="hidden lg:flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
                <Filter size={20} className="text-accent" />
                <h2 className="text-xl font-bold text-primary tracking-tight">Filters</h2>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Subject Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-4 flex items-center justify-between text-[10px] md:text-sm uppercase tracking-widest">
                    Subject 
                    <button className="text-accent text-[10px] font-black hover:underline" onClick={() => setSearchTerm('')}>CLEAR</button>
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {['Mathematics', 'Physics', 'Chemistry', 'English', 'Coding'].map(sub => (
                      <label key={sub} className="flex items-center gap-3 group cursor-pointer" onClick={() => setSearchTerm(sub)}>
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            checked={searchTerm === sub}
                            onChange={() => {}}
                            className="w-4 h-4 md:w-5 md:h-5 rounded-md md:rounded-lg border-2 border-slate-200 text-accent focus:ring-accent transition-all cursor-pointer" 
                          />
                        </div>
                        <span className={`text-slate-600 group-hover:text-primary transition-colors font-bold text-xs md:text-base ${searchTerm === sub ? 'text-primary' : ''}`}>{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-black text-slate-900 mb-4 text-[10px] md:text-sm uppercase tracking-widest">Price / Hour</h3>
                  <input 
                    type="range" 
                    min="200" 
                    max="2000" 
                    step="50"
                    className="w-full accent-accent h-1.5 md:h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer mb-3"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-[10px] md:text-sm font-black text-slate-400">
                    <span className="bg-slate-50 px-2 py-1 rounded-md">₹200</span>
                    <span className="text-accent bg-accent/5 px-2 py-1 rounded-md">Up to ₹{priceRange}</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-4 text-[10px] md:text-sm uppercase tracking-widest">Ratings</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[4, 3, 2, 1].map(r => (
                      <button key={r} className="py-2 rounded-xl border-2 border-slate-50 text-[10px] md:text-sm font-black hover:border-accent hover:text-accent transition-all bg-slate-50/50">
                        {r}★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-4 text-[10px] md:text-sm uppercase tracking-widest">City</h3>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-3 bg-slate-50/50 border-2 border-transparent rounded-xl focus:border-accent/20 focus:bg-white focus:ring-0 text-slate-800 font-bold text-xs md:text-sm appearance-none transition-all cursor-pointer">
                      <option>All Cities</option>
                      <option>New Delhi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <SlidersHorizontal size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowFilters(false)}
                className="w-full mt-4 lg:mt-6 premium-gradient text-white py-3.5 md:py-4 rounded-xl font-black text-xs md:text-sm shadow-lg hover:shadow-primary/40 transition-all active:scale-[0.98]"
              >
                APPLY FILTERS
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-primary p-6 md:p-8 rounded-2xl md:rounded-3xl text-white relative overflow-hidden shadow-primary-glow group hidden md:block">
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-black mb-3 leading-tight group-hover:scale-105 transition-transform origin-left">Expert Verified</h4>
                <p className="text-slate-300 text-[10px] md:text-sm mb-5 leading-relaxed">We manually verify background, experience & skills of our featured tutors.</p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[8px] md:text-xs font-black uppercase tracking-widest">
                  Verified Trust
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-colors" />
            </div>
          </aside>

          {/* Tutor Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
              <h1 className="text-xl md:text-3xl font-black text-primary tracking-tight">
                {filteredTutors.length} <span className="text-slate-400 font-bold">results</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-500 font-black text-[10px] md:text-sm bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
                <SlidersHorizontal size={14} className="text-accent" />
                <span className="uppercase tracking-widest">Sort:</span>
                <select className="bg-transparent border-none focus:ring-0 text-primary cursor-pointer pr-4 font-black appearance-none">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {filteredTutors.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-20 text-center border-2 border-dashed border-slate-100">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-slate-300">
                  <Search className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <h3 className="text-lg md:text-2xl font-black text-primary mb-1 md:mb-2 text-balance">No tutors found</h3>
                <p className="text-xs md:text-base text-slate-500 font-bold max-w-sm mx-auto text-balance">Try clearing filters or search for another subject.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setPriceRange(2000); }}
                  className="mt-6 text-accent font-black text-sm uppercase tracking-widest hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-16 md:mt-24 flex items-center justify-center gap-4">
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-90 flex items-center justify-center shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2.5">
                 {[1, 2, 3].map((p, idx) => (
                   <button 
                     key={idx} 
                     className={`w-12 h-12 md:w-14 md:h-14 rounded-full font-black text-xs md:text-sm transition-all ${p === 1 ? 'premium-gradient text-white shadow-accent-glow' : 'text-slate-400 hover:bg-slate-50 border-2 border-transparent hover:border-slate-100'}`}
                   >
                     {p}
                   </button>
                 ))}
                 <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-slate-300 font-bold">...</div>
                 <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-100 text-slate-400 font-black text-xs md:text-sm hover:border-primary transition-all">12</button>
              </div>
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-90 flex items-center justify-center shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
