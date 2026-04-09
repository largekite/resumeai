import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Collect user's career info, work history, skills, and target role to seed the first resume

import { auth } from '@clerk/nextjs/server';

export default async function OnboardingPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Onboarding</h1>
        <p className="text-slate-500">Collect user's career info, work history, skills, and target role to seed the first resume</p>
      </main>
    </div>
  );
}
