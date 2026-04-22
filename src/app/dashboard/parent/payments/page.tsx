import DashboardShell from '@/components/DashboardShell';
import { CreditCard, Wallet, ArrowUpRight } from 'lucide-react';

export default function ParentPaymentsPage() {
  return (
    <DashboardShell role="parent" title="Payments" subtitle="Track your spending and download invoices.">
       <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900 p-8 rounded-[40px] text-white overflow-hidden relative">
             <div className="relative z-10">
                <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2">Total Monthly Spend</div>
                <div className="text-4xl font-black">₹12,400</div>
             </div>
             <CreditCard className="absolute -bottom-6 -right-6 text-white/5" size={160} />
          </div>
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 flex items-center justify-between">
             <div>
                <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Active Wallet</div>
                <div className="text-3xl font-black text-primary">₹2,500</div>
             </div>
             <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2">Add Cash <ArrowUpRight size={18}/></button>
          </div>
       </div>

       <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-8">Transaction History</h3>
          <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-6 px-4">Transaction ID</th>
                       <th className="pb-6 px-4">Description</th>
                       <th className="pb-6 px-4">Date</th>
                       <th className="pb-6 px-4">Amount</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {[1, 2, 3].map(i => (
                      <tr key={i}>
                         <td className="py-6 px-4 font-bold text-primary text-xs tracking-tighter uppercase">#TN-77292-{i}</td>
                         <td className="py-6 px-4 text-slate-600 font-bold">5 Classes with Rahul S.</td>
                         <td className="py-6 px-4 text-slate-400 font-medium">1{i} Apr, 2024</td>
                         <td className="py-6 px-4 text-primary font-black">₹3,000</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
       </div>
    </DashboardShell>
  );
}
