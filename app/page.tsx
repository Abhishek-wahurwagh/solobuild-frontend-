import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import ProductCarousel from "@/components/sections/ProductCarousel";
import HeroSignin from "@/components/sections/HeroSignin";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroParallax from "@/components/sections/HeroParallax";
import CapabilityBlocks from "@/components/sections/CapabilityBlocks";
import SystemArchitecture from "@/components/sections/SystemArchitecture";
import HiringShowcase from "@/components/sections/HiringShowcase";
import BuildPhilosophy from "@/components/sections/BuildPhilosophy";
import EnterpriseSolutions from "@/components/sections/EnterpriseSolutions";
import CustomAICta from "@/components/sections/CustomAICta";
import EnterpriseFoundation from "@/components/sections/EnterpriseFoundation";

export default function HomePage() {
  return (
    <PageLayout>

      {/* ── 01 HERO ───────────────────────────────────────────────────── */}
      <section
        id="site-hero"
        className="relative bg-white min-h-[calc(100vh-80px)] flex items-center py-16 overflow-hidden"
      >
        {/* Dot-grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />

        {/* Parallax JS hook — no DOM output */}
        <HeroParallax />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          {/* hero-parallax wrapper — subtle upward shift + fade on scroll */}
          <div className="hero-parallax">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 xl:gap-10 items-center">

              {/* Left — headline + CTAs */}
              <ScrollReveal variant="reveal">
                <div className="flex flex-col gap-7 max-w-2xl">
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-600 mb-5 block">
                      <span className="w-6 h-px bg-blue-300 inline-block" />
                      Practical AI for Real Work
                    </span>
                    <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.07] tracking-tight mb-5">
                      AI that works{" "}
                      <span className="text-blue-600">with your people.</span>
                    </h1>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      We build practical AI systems that understand workflows, guide decisions,
                      perform tasks, and bring people into the loop when human judgment matters.
                    </p>
                  </div>

                  {/* Capability signal pills */}
                  <div className="flex flex-wrap gap-2">
                    {["Understand", "Guide", "Act", "Interact", "Escalate"].map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/demo"
                      className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Request a demo
                    </Link>
                    <Link
                      href="/solutions/hiring"
                      className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Explore AI for Hiring
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right — Auth card (unchanged size per brief) */}
              <ScrollReveal variant="reveal" delay={100}>
                <div className="flex lg:justify-end">
                  <HeroSignin />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── 02 PRODUCT SHOWCASE / CAROUSEL ───────────────────────────── */}
      {/* pale blue bg — visual chapter break from hero */}
      <div className="bg-[#f8fafc] border-y border-slate-200">
        <ScrollReveal variant="reveal-scale" threshold={0.06}>
          <ProductCarousel />
        </ScrollReveal>
      </div>

      {/* ── 03 WHAT SOLOBUILD AI DOES — Capability blocks ─────────────── */}
      {/* Uses its own scroll reveal internally; section bg: white */}
      <CapabilityBlocks />

      {/* ── 04 HOW THE SYSTEM WORKS — Architecture layers ─────────────── */}
      {/* bg: #eff6ff — light blue chapter */}
      <SystemArchitecture />

      {/* ── 05 AI FOR HIRING — Product showcase callout ───────────────── */}
      {/* bg: white */}
      <HiringShowcase />

      {/* ── 06 BUILD PHILOSOPHY — Discover / Build / Productize ────────── */}
      {/* bg: white */}
      <BuildPhilosophy />

      {/* ── 08 SOLUTIONS — Blue contrast treatment ────────────────────── */}
      {/* bg: #f8fafc */}
      <EnterpriseSolutions />

      {/* ── 09 CUSTOM AI CTA — Deep navy ─────────────────────────────── */}
      <CustomAICta />

      {/* ── 10 ENTERPRISE FOUNDATION ─────────────────────────────────── */}
      {/* bg: white */}
      <EnterpriseFoundation />

      {/* ── 11 FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-28 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="reveal" threshold={0.15}>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 block mb-5">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
              Let&apos;s build what works<br /> for your business.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Start with AI for Hiring today — or tell us the operational problem you want to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/demo"
                className="px-7 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 transition-colors shadow-sm"
              >
                Request a demo
              </Link>
              <Link
                href="/solutions/hiring"
                className="px-7 py-3.5 border border-slate-700 text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-colors"
              >
                Explore AI for Hiring
              </Link>
              <Link
                href="/signup"
                className="px-7 py-3.5 text-slate-400 text-sm font-medium rounded-xl hover:text-white transition-colors"
              >
                Sign up
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </PageLayout>
  );
}
