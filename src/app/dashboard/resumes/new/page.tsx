import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// Start a new resume from scratch, from a template, or by pasting a job description

import { auth } from '@clerk/nextjs/server';

export default async function NewResumePage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">New Resume</h1>
        <p className="text-slate-500">Start a new resume from scratch, from a template, or by pasting a job description</p>
      </main>
    </div>
  );
}
