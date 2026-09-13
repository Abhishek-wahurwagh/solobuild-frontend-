import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoloBuildAI — Practical AI for Real Work",
  description:
    "We build practical AI systems that understand your workflows, guide decisions, perform tasks and involve humans when needed.",
  keywords: ["AI", "hiring", "workflows", "automation", "voice AI", "enterprise AI"],
  openGraph: {
    title: "SoloBuildAI — Practical AI for Real Work",
    description:
      "We build practical AI systems that understand your workflows, guide decisions, perform tasks and involve humans when needed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white text-navy-950 antialiased">
        {children}
      </body>
    </html>
  );
}
