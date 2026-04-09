import Link from 'next/link';
import { ArrowRight, Brain, Zap, FileText, Star, Upload, CheckCircle } from 'lucide-react';

const FEATURES = [
  {
    icon: Brain,
    title: 'AI Resume Tailoring',
    description: 'Paste any job description and get a resume rewritten to match in under 60 seconds — boosting your interview callback rate.',
  },
  {
    icon: Zap,
    title: 'ATS Score Optimizer',
    description: 'Know exactly how your resume scores against applicant tracking systems before you hit submit.',
  },
  {
    icon: FileText,
    title: 'One-Click Cover Letters',
    description: 'Generate a compelling, personalized cover letter for any job in one click — saving you 30+ minutes per application.',
  },
  {
    icon: Star,
    title: 'Professional Templates',
    description: 'Choose from 20+ ATS-friendly templates designed by recruiters to make you stand out in any industry.',
  },
  {
    icon: Zap,
    title: 'Version History',
    description: 'Keep multiple tailored versions of your resume for different roles and switch between them instantly.',
  },
  {
    icon: Upload,
    title: 'Export & Share',
    description: 'Download as PDF or share a live link — your resume always looks perfect on any device.',
  },
];

const PRICING_TIERS = [
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-100 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-bold text-xl text-slate-900">ResumeAI</span>
        <div className="flex items-center gap-4">
          <Link href="/sign-up" className="text-sm font-semibold text-slate-600 hover:text-slate-900">Sign in</Link>
          <Link href="/sign-up" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Land your dream job with an AI-crafted resume
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            ResumeAI uses advanced AI to build tailored, ATS-optimized resumes in minutes — not hours. Paste a job description and watch your resume transform to match exactly what hiring managers want.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-base"
            >
              Get started free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Everything you need</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            ResumeAI gives you all the tools to get started quickly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Simple, transparent pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <div key={tier.name} className={`bg-white border rounded-2xl p-6 ${i === 1 ? 'border-indigo-600 shadow-lg ring-1 ring-indigo-600' : 'border-slate-200'}`}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{tier.name}</h3>
                <p className="text-3xl font-extrabold text-slate-900 mb-2">{tier.price}</p>
                <p className="text-slate-500 text-sm mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sign-up"
                  className={`block text-center font-semibold py-2.5 px-4 rounded-lg transition-colors ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-indigo-200 mb-8">Join thousands of users already using ResumeAI.</p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
          <a
            href="https://skylia.dev/built-with/01b84f46-9bba-4c15-a934-93e55aa048f1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors group"
          >
            Built with{' '}
            <span className="font-semibold text-indigo-500 group-hover:text-indigo-700 transition-colors">
              Skylia
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
