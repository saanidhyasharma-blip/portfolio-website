import type { Metadata } from "next";
import { Orbitron, Press_Start_2P, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis-provider";
import CRTOverlay from "@/components/arcade/CRTOverlay";
import Navbar from "@/components/arcade/Navbar";
import ArcadeCursor from "@/components/arcade/ArcadeCursor";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saanidhya Sharma | Creative Technologist",
  description: "Arcade-themed portfolio of Saanidhya Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${pressStart.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CRTOverlay />
        <ArcadeCursor />
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
