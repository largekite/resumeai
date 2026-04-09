import { redirect } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';

// Pricing tiers
const TIERS = [
  {
    "name": "Free",
    "price": "Free",
    "features": [
      "2 resumes",
      "3 AI rewrites/month",
      "ATS score checker",
      "Basic templates",
      "PDF export"
    ],
    "description": "For job seekers just getting started"
  },
  {
    "name": "Pro",
    "price": "$19/mo",
    "features": [
      "Unlimited resumes",
      "Unlimited AI rewrites",
      "Job description matcher",
      "Unlimited cover letters",
      "20+ premium templates",
      "Version history",
      "Priority support"
    ],
    "description": "For active job seekers who want every edge"
  },
  {
    "name": "Career",
    "price": "$49/mo",
    "features": [
      "Everything in Pro",
      "LinkedIn profile optimizer",
      "Bulk resume tailoring",
      "Client workspace sharing",
      "White-label PDF export",
      "Dedicated support"
    ],
    "description": "For power users and career coaches"
  }
];

export default async function BillingPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Billing</h1>
        <p className="text-slate-500 mb-10">Manage your subscription and billing details.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <div key={tier.name} className={`bg-white border rounded-2xl p-6 ${i === 1 ? 'border-indigo-600 ring-1 ring-indigo-600' : 'border-slate-200'}`}>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{tier.name}</h3>
              <p className="text-3xl font-extrabold text-slate-900 mb-2">{tier.price}</p>
              <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                {i === 0 ? 'Current plan' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
