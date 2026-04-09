import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus, Zap, ArrowRight } from 'lucide-react';
import { auth, UserButton } from '@clerk/nextjs/server';

import { auth, UserButton } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top nav */}
      <header className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-slate-900">ResumeAI</span>
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your workspaces</p>
          </div>
          <Link
            href="/dashboard/workspace/new"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New workspace
          </Link>
        </div>

        {/* Empty state */}
        <div className="text-center py-24 border-2 border-dashed border-slate-200 rounded-2xl bg-white">
          <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-lg font-semibold text-slate-700 mb-2">No workspaces yet</h2>
          <p className="text-slate-400 text-sm mb-6">Create your first workspace to get started.</p>
          <Link
            href="/dashboard/workspace/new"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create workspace
          </Link>
        </div>
      </main>
    </div>
  );
}
