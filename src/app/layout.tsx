import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"; // 👈 import your Navbar
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stalliq",
  description: "AI-powered platform for your business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  {/* 👈 add your Navbar here */}
        <main>{children}</main>
         <SpeedInsights />
      </body>
    </html>
  );
}
