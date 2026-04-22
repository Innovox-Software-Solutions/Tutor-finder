const CommissionTable = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-sm font-bold text-slate-600">Metric</th>
            <th className="px-6 py-4 text-sm font-bold text-slate-400">Other Platforms</th>
            <th className="px-6 py-4 text-sm font-bold text-accent">GharGuru</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="px-6 py-5 text-sm font-medium text-slate-900">Commission from Tutor</td>
            <td className="px-6 py-5 text-sm text-slate-500">50%</td>
            <td className="px-6 py-5 text-sm font-bold text-green-600">20%</td>
          </tr>
          <tr>
            <td className="px-6 py-5 text-sm font-medium text-slate-900">Commission from Parent</td>
            <td className="px-6 py-5 text-sm text-slate-500">50%</td>
            <td className="px-6 py-5 text-sm font-bold text-green-600">0%</td>
          </tr>
          <tr className="bg-primary/5">
            <td className="px-6 py-5 text-sm font-bold text-slate-900">Tutor keeps (₹500 session)</td>
            <td className="px-6 py-5 text-sm text-slate-500 line-through">₹250</td>
            <td className="px-6 py-5 text-lg font-black text-primary">₹400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CommissionTable;
