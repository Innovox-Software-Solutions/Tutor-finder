const CommissionTable = () => {
  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-premium bg-white">
      <table className="w-full text-left">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-8 py-6 text-xs font-black uppercase tracking-widest">Pricing Metric</th>
            <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-400">Other Apps</th>
            <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-accent">GharGuru</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 font-bold">
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="px-8 py-6 text-sm text-primary">Platform Fee (%)</td>
            <td className="px-8 py-6 text-sm text-slate-400">50%</td>
            <td className="px-8 py-6 text-xl text-accent font-black">20%</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="px-8 py-6 text-sm text-primary">Parent Booking Fee</td>
            <td className="px-8 py-6 text-sm text-slate-400">₹200+</td>
            <td className="px-8 py-6 text-xl text-green-500 font-black">₹0</td>
          </tr>
          <tr className="bg-accent/5">
            <td className="px-8 py-6 text-base font-black text-primary uppercase tracking-tight">Earnings for Tutor</td>
            <td className="px-8 py-6 text-sm text-slate-400 line-through">₹250</td>
            <td className="px-8 py-6 text-3xl font-black text-primary tracking-tighter">₹400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommissionTable;
