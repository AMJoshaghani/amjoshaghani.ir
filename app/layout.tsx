import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Amir Mohammad Joshaghani",
  description: "Fullstack Programmer & UI/UX Designer | Physics Undergrad @ Sharif UT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
    <body className={`${mono.className} bg-[#0a0a0a] text-[#00ff88] antialiased`}>
    {children}
    </body>
    </html>
  );
}