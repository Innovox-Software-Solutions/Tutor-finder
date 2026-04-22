interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

const StatCard = ({ label, value, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-premium space-y-4 group hover:shadow-primary-glow transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        {trend && (
          <div className="bg-green-50 text-green-600 text-[10px] font-black px-2.5 py-1 rounded-lg border border-green-100">
            {trend}
          </div>
        )}
      </div>
      <div>
        <div className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-1">{label}</div>
        <div className="text-3xl font-black text-primary tracking-tight">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
