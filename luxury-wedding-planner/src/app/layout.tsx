import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

// Elegant Serif for Headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Clean Sans-Serif for Body Text
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Luxury Wedding Planner",
  description: "Bespoke wedding planning and event design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${playfair.variable} bg-[#FAFAFA] text-zinc-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}