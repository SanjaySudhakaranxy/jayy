import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sanjay Sudhakaran :)",
  description: "Personal portfolio of Jay - Developer and Musician. Explore my projects and get in touch.",
  keywords: ["developer", "musician", "portfolio", "web development"],
  authors: [{ name: "Jay" }],
  openGraph: {
    title: "Jay | Developer & Musician",
    description: "Personal portfolio of Jay - Developer and Musician",
    type: "website",
  },
  // ensures correct mobile scaling on all devices
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
