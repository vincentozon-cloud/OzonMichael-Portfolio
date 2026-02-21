import type { Metadata } from "next";
import { Nunito } from "next/font/google"; // Changed from Inter
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"], 
  variable: "--font-nunito", // Changed to match your new CSS variable
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
      {/* Updated the variable and removed 'font-sans' to let globals.css control the default */}
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}