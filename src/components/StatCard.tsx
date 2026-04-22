interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

const StatCard = ({ label, value, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary">
          {icon}
        </div>
        {trend && (
          <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">
            {trend}
          </div>
        )}
      </div>
      <div>
        <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{label}</div>
        <div className="text-3xl font-black text-primary">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
