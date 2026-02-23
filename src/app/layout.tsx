import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // Added for tracking
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito", 
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
      <body className={`${nunito.variable} antialiased`}>
        {children}
        <Analytics /> {/* This component handles the 'who viewed' data */}
      </body>
    </html>
  );
}