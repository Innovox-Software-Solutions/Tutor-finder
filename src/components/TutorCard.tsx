import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, BadgeCheck, Clock, ArrowRight } from 'lucide-react';
import { Tutor } from '@/data/mockTutors';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-premium border border-slate-100/50 hover:shadow-primary-glow hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative h-44 md:h-56 w-full mb-4 md:mb-6 rounded-xl md:rounded-2xl overflow-hidden shadow-inner bg-slate-100">
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {tutor.verified && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-md p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg border border-white/20">
            <BadgeCheck className="text-blue-500 w-4 h-4 md:w-5 md:h-5" />
          </div>
        )}

        <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-lg translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-accent text-accent" />
            <span className="text-[10px] font-black text-white">{tutor.rating} Rating</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div>
          <h3 className="text-lg md:text-xl font-black text-primary mb-1 group-hover:text-accent transition-colors leading-tight">{tutor.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {tutor.subjects.slice(0, 2).map((sub, i) => (
              <span key={i} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                {sub}
              </span>
            ))}
            {tutor.subjects.length > 2 && (
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                +{tutor.subjects.length - 2}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-slate-500 text-[10px] md:text-sm font-bold">
          <div className="flex items-center gap-1.5">
            <div className="bg-slate-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
              <Clock className="text-primary w-3 h-3 md:w-4 md:h-4" />
            </div>
            <span>{tutor.experience}y Exp.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-slate-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
              <MapPin className="text-primary w-3 h-3 md:w-4 md:h-4" />
            </div>
            <span className="truncate max-w-[70px] md:max-w-[80px]">{tutor.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="pt-4 md:pt-5 border-t border-slate-50 flex justify-between items-center group-hover:border-slate-100 transition-colors">
          <div>
            <span className="text-xl md:text-2xl font-black text-primary">₹{tutor.hourlyRate}</span>
            <span className="text-[10px] font-bold text-slate-400 ml-1">/hr</span>
          </div>
          <Link 
            href={`/tutor/${tutor.id}`}
            className="group/btn relative px-4 md:px-5 py-2 md:py-2.5 bg-slate-50 text-slate-900 rounded-lg md:rounded-xl font-black text-[10px] md:text-sm hover:bg-primary hover:text-white transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Profile <ArrowRight className="group-hover/btn:translate-x-1 transition-transform w-3 h-3 md:w-3.5 md:h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
