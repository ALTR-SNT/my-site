import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "EXO-Y4",
  keywords: ["EXO-Y4", "Altr Snt", "Web Development"],
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
        className={`${roboto.variable} antialiased min-h-screen flex flex-col`}>
         <NavBar />
        <main className="flex flex-col items-center flex-grow">
          {children}
          <section className="someFun">

          </section>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
