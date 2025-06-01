import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

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
  keywords: ["EXO-Y4", "EXO-Y4LAB", "Next.js", "React", "Web Development"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
