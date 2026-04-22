import DashboardShell from '@/components/DashboardShell';

export default function TutorProfilePage() {
  return (
    <DashboardShell role="tutor" title="My Profile" subtitle="Update your details and teaching preferences.">
      <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-6">Personal Information</h2>
        <div className="space-y-4">
           <p className="text-slate-500 font-medium italic">Profile editing is coming soon to this demo.</p>
        </div>
      </div>
    </DashboardShell>
  );
}
