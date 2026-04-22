import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, BadgeCheck, Clock, ArrowRight } from 'lucide-react';
import { Tutor } from '@/data/mockTutors';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-5 md:p-6 shadow-premium border border-slate-100/50 hover:shadow-accent-glow hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
      <div className="relative h-56 md:h-64 w-full mb-5 md:mb-6 rounded-[2rem] md:rounded-[2rem] overflow-hidden shadow-inner bg-slate-100 flex-shrink-0">
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        
        {tutor.verified && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20">
            <BadgeCheck className="text-blue-500 w-5 h-5" />
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-accent px-4 py-1.5 rounded-full shadow-lg transition-transform duration-500">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="fill-white text-white" />
            <span className="text-xs font-black text-white">{tutor.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-black text-primary mb-2 group-hover:text-accent transition-colors leading-tight tracking-tight truncate">{tutor.name}</h3>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.slice(0, 2).map((sub, i) => (
              <span key={i} className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.15em] text-slate-400 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-100">
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-500 text-[10px] md:text-xs font-bold mb-auto">
          <div className="flex items-center gap-2">
            <Clock className="text-accent w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{tutor.experience}y Exp</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-accent w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="truncate max-w-[80px] md:max-w-[100px]">{tutor.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="pt-5 mt-6 border-t border-slate-100 flex justify-between items-center gap-2">
          <div className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-black text-primary tracking-tighter">₹{tutor.hourlyRate}</span>
            <span className="text-[10px] font-black text-slate-400 ml-0.5 uppercase tracking-widest">/hr</span>
          </div>
          <Link 
            href={`/tutor/${tutor.id}`}
            className="group/btn px-3 md:px-5 py-2.5 md:py-3 accent-gradient text-white rounded-full font-black text-[8px] md:text-[10px] hover:scale-105 transition-all shadow-accent-glow active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5 uppercase tracking-widest whitespace-nowrap">
              View Profile <ArrowRight className="group-hover/btn:translate-x-1 transition-transform w-3 h-3 md:w-3.5 md:h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
