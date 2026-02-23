import type { Metadata } from "next";
import { Nunito, Bellefair } from "next/font/google"; // Added Bellefair
import { Analytics } from "@vercel/analytics/react"; 
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito", 
  display: 'swap' 
});

// This replaces the Soria font with a reliable Google version
const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "eMVeOzHub | Portfolio Dossier",
  description: "Sales Management Hub & Technical Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Added bellefair.variable here */}
      <body className={`${nunito.variable} ${bellefair.variable} antialiased`}>
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}