import DashboardShell from '@/components/DashboardShell';
import { mockEarnings } from '@/data/mockEarnings';
import { Wallet, TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TutorEarningsPage() {
  return (
    <DashboardShell role="tutor" title="Earnings" subtitle="Track your income and commission breakdown.">
       <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary p-8 rounded-[32px] text-white shadow-xl shadow-primary/20">
             <div className="flex justify-between items-start mb-4">
                <div className="bg-white/10 p-3 rounded-2xl"><Wallet size={24} /></div>
                <div className="flex items-center gap-1 text-xs font-bold bg-green-500/20 text-green-300 px-2 py-1 rounded-lg">
                   <TrendingUp size={14} /> +12%
                </div>
             </div>
             <div className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1">Total Balance</div>
             <div className="text-4xl font-black">₹24,500</div>
          </div>
          {/* Add more metrics cards if needed */}
       </div>

       <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-8">Payout History</h3>
          <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-6 px-4">Period</th>
                       <th className="pb-6 px-4">Amount</th>
                       <th className="pb-6 px-4">Fees (20%)</th>
                       <th className="pb-6 px-4">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockEarnings.map((earn, idx) => (
                      <tr key={idx}>
                         <td className="py-6 px-4 font-bold text-primary">{earn.month} 2024</td>
                         <td className="py-6 px-4 text-primary font-black">₹{earn.earnings}</td>
                         <td className="py-6 px-4 text-red-500 font-bold">- ₹{earn.earnings * 0.25}</td>
                         <td className="py-6 px-4"><span className="text-xs font-black bg-green-100 text-green-700 px-4 py-1.5 rounded-full">Paid</span></td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
       </div>
    </DashboardShell>
  );
}
