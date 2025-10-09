import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jay | Developer & Musician",
  description: "Personal portfolio of Jay - Developer and Musician. Explore my projects and get in touch.",
  keywords: ["developer", "musician", "portfolio", "web development"],
  authors: [{ name: "Jay" }],
  openGraph: {
    title: "Jay | Developer & Musician",
    description: "Personal portfolio of Jay - Developer and Musician",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
