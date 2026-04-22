'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorCard from '@/components/TutorCard';
import { mockTutors } from '@/data/mockTutors';
import { Search, Filter, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <main className="min-h-screen bg-[#fdfdfd] selection:bg-accent selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Search Header */}
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-premium border border-slate-100 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
              <input 
                type="text" 
                placeholder="Search by subject, skills, or tutor name..."
                className="w-full pl-14 pr-6 py-4 md:py-5 bg-slate-50/50 rounded-2xl border-2 border-transparent focus:border-accent/20 focus:bg-white focus:ring-0 transition-all text-base md:text-lg font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="w-full md:w-auto premium-gradient text-white px-10 py-4 md:py-5 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <Search size={24} /> Search
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 bg-white border-2 border-slate-100 py-4 rounded-2xl font-black text-primary sticky top-24 z-30 shadow-lg active:scale-95"
          >
            <SlidersHorizontal size={20} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filter Sidebar */}
          <aside className={`
            w-full lg:w-80 space-y-8 lg:block
            ${showFilters ? 'block' : 'hidden'}
            fixed lg:sticky top-0 lg:top-28 left-0 h-full lg:h-fit z-40 lg:z-0
            bg-white lg:bg-transparent p-6 lg:p-0 overflow-y-auto lg:overflow-visible
            transition-all duration-300
          `}>
            {/* Mobile Close Button */}
            <div className="flex lg:hidden justify-between items-center mb-8 pb-4 border-b">
              <h2 className="text-2xl font-black text-primary">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2 bg-slate-100 rounded-xl"><X size={24} /></button>
            </div>

            <div className="bg-white lg:p-8 rounded-3xl lg:border lg:border-slate-100 lg:shadow-premium space-y-8">
              <div className="hidden lg:flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
                <Filter size={20} className="text-accent" />
                <h2 className="text-xl font-bold text-primary tracking-tight">Filters</h2>
              </div>

              <div className="space-y-8">
                {/* Subject Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-5 flex items-center justify-between text-sm uppercase tracking-wider">
                    Subject 
                    <button className="text-accent text-xs font-bold hover:underline" onClick={() => setSearchTerm('')}>Clear</button>
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    {['Mathematics', 'Physics', 'Chemistry', 'English', 'Coding'].map(sub => (
                      <label key={sub} className="flex items-center gap-3 group cursor-pointer" onClick={() => setSearchTerm(sub)}>
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            checked={searchTerm === sub}
                            onChange={() => {}}
                            className="w-5 h-5 rounded-lg border-2 border-slate-200 text-accent focus:ring-accent transition-all cursor-pointer" 
                          />
                        </div>
                        <span className={`text-slate-600 group-hover:text-primary transition-colors font-bold text-sm md:text-base ${searchTerm === sub ? 'text-primary' : ''}`}>{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-wider">Price Range</h3>
                  <input 
                    type="range" 
                    min="200" 
                    max="2000" 
                    step="50"
                    className="w-full accent-accent h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer mb-4"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between text-sm font-black text-slate-400">
                    <span className="bg-slate-50 px-3 py-1 rounded-lg">₹200</span>
                    <span className="text-accent bg-accent/5 px-3 py-1 rounded-lg">Up to ₹{priceRange}</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-wider">Min. Rating</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[4, 3, 2, 1].map(r => (
                      <button key={r} className="py-2.5 rounded-xl border-2 border-slate-100 text-sm font-black hover:border-accent hover:text-accent transition-all">
                        {r}★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-black text-slate-900 mb-5 text-sm uppercase tracking-wider">City</h3>
                  <div className="relative">
                    <select className="w-full p-4 bg-slate-50/50 border-2 border-transparent rounded-2xl focus:border-accent/20 focus:bg-white focus:ring-0 text-slate-800 font-bold appearance-none transition-all cursor-pointer">
                      <option>All Cities</option>
                      <option>New Delhi</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <SlidersHorizontal size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowFilters(false)}
                className="w-full mt-6 bg-slate-900 text-white py-4 rounded-2xl font-black shadow-lg hover:bg-black transition-all active:scale-[0.98]"
              >
                Apply Filters
              </button>
            </div>

            {/* Promo Card */}
            <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden shadow-primary-glow group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 leading-tight group-hover:scale-105 transition-transform origin-left">Expert Verification</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">We manually verify background, experience & skills of our featured tutors.</p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                  Verified Trust
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/40 transition-colors" />
            </div>
          </aside>

          {/* Tutor Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h1 className="text-2xl md:text-3xl font-black text-primary">
                {filteredTutors.length} <span className="text-slate-400 font-bold">Tutors Found</span>
              </h1>
              <div className="flex items-center gap-3 text-slate-500 font-bold text-sm bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm">
                <SlidersHorizontal size={16} className="text-accent" />
                <span>Sort:</span>
                <select className="bg-transparent border-none focus:ring-0 text-primary cursor-pointer pr-8 font-black appearance-none">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            {filteredTutors.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 md:p-20 text-center border-2 border-dashed border-slate-100">
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                  <Search size={48} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">No tutors found</h3>
                <p className="text-slate-500 font-medium max-w-sm mx-auto">We couldn't find any tutors matching your current filter settings.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setPriceRange(2000); }}
                  className="mt-8 text-accent font-black hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <button className="p-3.5 rounded-2xl border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-90">
                  <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                  {[1, 2, 3, '...', 12].map((p, idx) => (
                    <button 
                      key={idx} 
                      className={`w-12 h-12 rounded-2xl font-black transition-all ${p === 1 ? 'premium-gradient text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50 border-2 border-transparent hover:border-slate-100'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <button className="p-3.5 rounded-2xl border-2 border-slate-100 text-slate-400 hover:text-primary hover:border-primary transition-all active:scale-90">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

            {/* Pagination */}
            <div className="mt-16 flex justify-center gap-4">
              <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {[1, 2, 3, '...', 12].map((p, idx) => (
                  <button key={idx} className={`w-12 h-12 rounded-xl font-bold transition-all ${p === 1 ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100 border border-transparent hover:border-slate-200'}`}>
                    {p}
                  </button>
                ))}
              </div>
              <button className="p-3 rounded-xl border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all">
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
