import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, BadgeCheck, Clock } from 'lucide-react';
import { Tutor } from '@/data/mockTutors';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all group">
      <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {tutor.verified && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-sm">
            <BadgeCheck className="text-blue-500" size={20} />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{tutor.name}</h3>
            <p className="text-sm text-slate-500 truncate w-40">{tutor.subjects.join(', ')}</p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-amber-700">{tutor.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{tutor.experience} years</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span className="truncate max-w-[100px]">{tutor.location.split(',')[0]}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-primary">₹{tutor.hourlyRate}</span>
            <span className="text-xs text-slate-400 ml-1">/hr</span>
          </div>
          <Link 
            href={`/tutor/${tutor.id}`}
            className="text-sm font-bold text-accent hover:underline"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
