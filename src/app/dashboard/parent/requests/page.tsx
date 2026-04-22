import DashboardShell from '@/components/DashboardShell';
import { mockParentRequests } from '@/data/mockRequests';

export default function ParentRequestsPage() {
  return (
    <DashboardShell role="parent" title="My Requests" subtitle="Track the status of your demo class requests.">
       <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100">
                       <th className="pb-6 px-4">Tutor Name</th>
                       <th className="pb-6 px-4">Subject</th>
                       <th className="pb-6 px-4">Date Requested</th>
                       <th className="pb-6 px-4">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {mockParentRequests.map(req => (
                      <tr key={req.id}>
                         <td className="py-6 px-4 font-bold text-primary">{req.tutorName}</td>
                         <td className="py-6 px-4 text-slate-500 font-medium">{req.subject}</td>
                         <td className="py-6 px-4 text-slate-500 font-medium">{req.date}</td>
                         <td className="py-6 px-4">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-black ${
                              req.status === 'Accepted' ? 'bg-green-100 text-green-700' : 
                              req.status === 'Rejected' ? 'bg-red-100 text-red-700' : 
                              'bg-amber-100 text-amber-700'
                            }`}>
                               {req.status}
                            </span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
    </DashboardShell>
  );
}
