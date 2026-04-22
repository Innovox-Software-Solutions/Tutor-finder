import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, BadgeCheck, Clock, ArrowRight } from 'lucide-react';
import { Tutor } from '@/data/mockTutors';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-5 md:p-6 shadow-premium border border-slate-100/50 hover:shadow-accent-glow hover:-translate-y-2 transition-all duration-500 group">
      <div className="relative h-48 md:h-64 w-full mb-5 md:mb-6 rounded-[2rem] md:rounded-[2rem] overflow-hidden shadow-inner bg-slate-100">
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

      <div className="space-y-4 md:space-y-5">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-primary mb-2 group-hover:text-accent transition-colors leading-tight tracking-tight">{tutor.name}</h3>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.slice(0, 2).map((sub, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-500 text-xs font-bold">
          <div className="flex items-center gap-2">
            <Clock className="text-accent w-4 h-4" />
            <span>{tutor.experience}y Exp</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-accent w-4 h-4" />
            <span className="truncate max-w-[100px]">{tutor.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
          <div>
            <span className="text-2xl md:text-3xl font-black text-primary tracking-tighter">₹{tutor.hourlyRate}</span>
            <span className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-widest">/hr</span>
          </div>
          <Link 
            href={`/tutor/${tutor.id}`}
            className="group/btn relative px-6 py-3 bg-primary text-white rounded-full font-black text-[10px] md:text-xs hover:bg-accent transition-all overflow-hidden shadow-lg shadow-primary/10 hover:shadow-accent-glow"
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest">
              View Profile <ArrowRight className="group-hover/btn:translate-x-1 transition-transform w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
