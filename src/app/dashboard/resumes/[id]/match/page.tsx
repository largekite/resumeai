import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Paste a job description to get an ATS match score and AI-powered tailoring suggestions

import { auth } from '@clerk/nextjs/server';

export default async function JobMatcherPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Job Matcher</h1>
        <p className="text-slate-500">Paste a job description to get an ATS match score and AI-powered tailoring suggestions</p>
      </main>
    </div>
  );
}
