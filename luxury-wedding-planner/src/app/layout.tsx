import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Base font for body/readability
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});



// Custom Brand Fonts
const alexBrush = localFont({
  src: "./fonts/AlexBrush.ttf", // Ensure this path matches your file name/extension
  variable: "--font-alexbrush",
});

const raleway = localFont({
  src: "./fonts/Raleway.ttf", // Ensure this path matches your file name/extension
  variable: "--font-raleway",
});

const amsterdam = localFont({
  src: "./fonts/Amsterdam.ttf", // Ensure this path matches your file name/extension
  variable: "--font-amsterdam",
});

const preistacy = localFont({
  src: "./fonts/Preistacy.otf",
  variable: "--font-preistacy",
});

const zaslia = localFont({
  src: "./fonts/Zaslia.otf",
  variable: "--font-zaslia",
});

const geist = localFont({
  src: "./fonts/Geist.ttf",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "The Blush Bureau | Luxury Weddings",
  description: "Bespoke wedding planning and event design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`
        ${montserrat.variable} 
        ${amsterdam.variable} 
        ${preistacy.variable} 
        ${zaslia.variable} 
        ${alexBrush.variable}
        ${raleway.variable}
        ${geist.variable}
        bg-[#FAF9F6] text-zinc-800 antialiased
      `}>
        <main>{children}</main>
      </body>
    </html>
  );
}