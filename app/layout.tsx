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
  title: "SoloBuildAI — AI Agents for Real Work",
  description:
    "Build, deploy and scale AI agents, workflows and tools to turn your ideas into real outcomes — without the usual complexity.",
  keywords: ["AI agents", "AI automation", "hiring AI", "workflow automation", "voice AI", "enterprise AI", "SoloBuild"],
  openGraph: {
    title: "SoloBuildAI — AI Agents for Real Work",
    description:
      "Build, deploy and scale AI agents, workflows and tools to turn your ideas into real outcomes — without the usual complexity.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
