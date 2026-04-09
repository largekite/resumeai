import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

const NAV_LINKS = [
      { href: '/onboarding', label: 'Onboarding' },
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/dashboard/resumes', label: 'Resumes' },
      { href: '/dashboard/resumes/new', label: 'New Resume' },
      { href: '/dashboard/resumes/[id]', label: 'Resume Editor' },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-100 px-6 h-14 flex items-center justify-between shrink-0">
        <Link href="/dashboard" className="font-bold text-slate-900">ResumeAI</Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="flex-1 bg-slate-50">{children}</div>
    </div>
  );
}
