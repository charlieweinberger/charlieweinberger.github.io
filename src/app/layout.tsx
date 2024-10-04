import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlie Weinberger",
  description: "Super awesome portfolio website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={GeistSans.className}>
    {/* <html lang="en"> */}
    <body>{children}</body>
    </html>
  );
}