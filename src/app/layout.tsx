import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FitBlind - 트레이너 커뮤니티',
  description: '모든 트레이너들을 위한 익명 커뮤니티. 이직, 급여, 회원관리 고민을 나누세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Header />
        <div className="flex max-w-6xl mx-auto w-full">
          <Sidebar />
          <main className="flex-1 w-full min-w-0 bg-background pb-20 md:pb-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
