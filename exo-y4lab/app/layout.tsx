import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EXO-Y4",
  keywords: ["EXO-Y4", "EXO-Y4LAB", "Web Development"],
  description: "My personal website built with Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden min-h-screen flex flex-col`}>
         <NavBar />
        <main className="flex flex-col items-center justify-center flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
