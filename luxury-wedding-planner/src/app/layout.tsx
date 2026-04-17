import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Upgraded, premium script font
const pinyon = Pinyon_Script({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
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
      <body className={`${montserrat.className} ${playfair.variable} ${pinyon.variable} bg-white text-zinc-600 antialiased`}>
        
        <main>{children}</main>
      </body>
    </html>
  );
}