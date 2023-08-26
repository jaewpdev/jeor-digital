import { Cormorant, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ackermann Digital',
  description: 'We take care of your digital needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} text-brand-black relative`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
