import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

// List of all created resumes with status, last edited, and match score

import { auth } from '@clerk/nextjs/server';

export default async function ResumesPage() {
  const { userId } = await auth();
  if (!userId) { redirect('/sign-in'); }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Resumes</h1>
        <p className="text-slate-500">List of all created resumes with status, last edited, and match score</p>
      </main>
    </div>
  );
}
