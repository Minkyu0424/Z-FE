import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z",
  description: "Z replace X, start Z!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
