import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StudyGlobal - Your Gateway to International Education',
  description: 'Professional study abroad consultancy helping students achieve their dreams of international education. Expert guidance for university applications, visa processing, and career planning.',
  keywords: 'study abroad, international education, university applications, visa guidance, overseas education, study in USA, study in UK, study in Canada, study in Australia, study in Germany, study in Ireland',
  authors: [{ name: 'StudyGlobal Team' }],
  openGraph: {
    title: 'StudyGlobal - Your Gateway to International Education',
    description: 'Professional study abroad consultancy helping students achieve their dreams of international education.',
    url: 'https://studyglobal.com',
    siteName: 'StudyGlobal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudyGlobal - Your Gateway to International Education',
    description: 'Professional study abroad consultancy helping students achieve their dreams of international education.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://studyglobal.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}