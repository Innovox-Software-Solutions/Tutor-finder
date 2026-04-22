import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, BadgeCheck, Clock, ArrowRight } from 'lucide-react';
import { Tutor } from '@/data/mockTutors';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-premium border border-slate-100/50 hover:shadow-primary-glow hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {tutor.verified && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20">
            <BadgeCheck className="text-blue-500" size={20} />
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="fill-accent text-accent" />
            <span className="text-xs font-black text-white">{tutor.rating} Rating</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-black text-primary mb-1 group-hover:text-accent transition-colors">{tutor.name}</h3>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.slice(0, 3).map((sub, i) => (
              <span key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                {sub}
              </span>
            ))}
            {tutor.subjects.length > 3 && (
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                +{tutor.subjects.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-500 text-sm font-bold">
          <div className="flex items-center gap-2">
            <div className="bg-slate-50 p-1.5 rounded-lg"><Clock size={16} className="text-primary" /></div>
            <span>{tutor.experience}y Exp.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-slate-50 p-1.5 rounded-lg"><MapPin size={16} className="text-primary" /></div>
            <span className="truncate max-w-[80px]">{tutor.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="pt-5 border-t border-slate-50 flex justify-between items-center group-hover:border-slate-100 transition-colors">
          <div>
            <span className="text-2xl font-black text-primary">₹{tutor.hourlyRate}</span>
            <span className="text-xs font-bold text-slate-400 ml-1">/hr</span>
          </div>
          <Link 
            href={`/tutor/${tutor.id}`}
            className="group/btn relative px-5 py-2.5 bg-slate-50 text-slate-900 rounded-xl font-black text-sm hover:bg-primary hover:text-white transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Profile <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
