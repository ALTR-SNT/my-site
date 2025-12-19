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
  title: "Alternative Sanctum",
  keywords: ["Alternative Sanctum", "Altr Snt", "EXO-Y4", "Web Development"],
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
        className={`${roboto.variable} antialiased min-h-screen flex flex-col w-full bg-[#000000] relative`}>
      <div
          className="absolute inset-0 -z-9999"
          style={{
            background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)",
          }}
        />
         <NavBar />
        <main className="flex flex-col items-center flex-grow">
          
          {children}
        </main>
        <Footer />
        <Analytics />
        
      </body>
    </html>
  );
}
