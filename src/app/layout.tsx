import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/shared/Footer';
import { Header } from '@/components/shared/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Annotation Tool',
  description:
    'A comprehensive platform enabling collaborative video review with synchronized audio feedback, visual annotations, and categorized feedback.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
