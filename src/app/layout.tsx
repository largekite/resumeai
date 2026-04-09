import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { PostHogProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ResumeAI',
  description: 'Land your dream job with an AI-crafted resume',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}><PostHogProvider>{children}</PostHogProvider></body>
      </ClerkProvider>
    </html>
  );
}
