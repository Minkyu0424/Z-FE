import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Z',
  description: 'Z replace X, start Z!',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} min-h-screen min-w-[800px] mx-auto font-pretendard`}>
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
