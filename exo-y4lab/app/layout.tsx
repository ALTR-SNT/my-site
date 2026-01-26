import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import NavBar from './components/NavBar';
import Footer from './components/ui/Footer';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Alternative Sanctum",
  keywords: ["Alternative Sanctum", "Alter Saint", "EXO-Y4"],
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
           background: "#000000",
          backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      `,
      backgroundSize: "20px 20px, 30px 30px, 25px 25px",
      backgroundPosition: "0 0, 10px 10px, 15px 5px",
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
