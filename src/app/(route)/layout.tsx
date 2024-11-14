import type { Metadata } from 'next';
import localFont from 'next/font/local';
import UserProvider from '../components/common/layouts/useProvider';
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
    <html lang="ko" className={`${pretendard.variable} min-w-[500px] bg-gray-100 font-pretendard`}>
      <UserProvider>
        <body className="w-full h-full flex-center">{children}</body>
      </UserProvider>
    </html>
  );
}
