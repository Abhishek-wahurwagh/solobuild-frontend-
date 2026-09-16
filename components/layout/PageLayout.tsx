import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
  framed = false,
}: {
  children: ReactNode;
  framed?: boolean;
}) {
  if (framed) {
    return (
      <div className="min-h-screen bg-black p-2 sm:p-3 md:p-4">
        <div className="flex flex-col min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] rounded-[22px] border border-white/12 bg-black overflow-hidden">
          <Navbar framed />
          <main className="flex-1 px-2 sm:px-3 pt-[70px] sm:pt-[74px] pb-2 sm:pb-3">{children}</main>
          <Footer compact />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </div>
  );
}
