import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.scss';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0c0c0e',
};

export const metadata: Metadata = {
  title: 'OpenCraft — Three apps. One craft.',
  description:
    'Native, open-source Android apps built for performance, privacy, and freedom. High-speed peer-to-peer file transfer, offline Hi-Fi music player, and unified device sync.',
  keywords: [
    'OpenCraft',
    'Eagle Share',
    'Pigeon Music',
    'Pigeon Echo',
    'Open Source Android Apps',
    'Offline First',
    'P2P File Transfer',
    'Hi-Fi Audio',
  ],
  authors: [{ name: 'OpenCraft' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`}>
      <body>
        <SmoothScrollProvider>
          <main className="main-content-flow">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
