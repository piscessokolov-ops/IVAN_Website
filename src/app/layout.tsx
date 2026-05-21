import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ivan Dubovoi — Cinematic Videographer Vienna',
  description:
    'Ivan Dubovoi is a Vienna-based videographer specializing in cinematic storytelling, brand films, music videos, and emotional visual narratives.',
  keywords: [
    'videographer vienna',
    'cinematic videographer',
    'brand films vienna',
    'music video director',
    'ivan dubovoi',
    'commercial videography',
    'event videography austria',
  ],
  authors: [{ name: 'Ivan Dubovoi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ivan Dubovoi — Cinematic Videographer Vienna',
    description: 'Cinematic stories that feel real. Based in Vienna, Austria.',
    siteName: 'Ivan Dubovoi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Dubovoi — Cinematic Videographer Vienna',
    description: 'Cinematic stories that feel real. Based in Vienna, Austria.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
