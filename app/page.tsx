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

      {/* ── 01 HERO ──────────────────────────────────────────────────────
          Dark navy bg. Dot grid overlay. Auth card on right.           */}
      <section
        id="site-hero"
        className="relative min-h-[calc(100vh-80px)] flex items-center py-16 overflow-hidden"
        style={{ backgroundColor: "#080d1a" }}
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        {/* Subtle radial glow behind hero text */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%", left: "0", width: "60%", height: "70%",
            background: "radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.12) 0%, transparent 65%)",
          }}
        />

        <HeroParallax />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="hero-parallax">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 xl:gap-10 items-center">

              {/* Left */}
              <ScrollReveal variant="reveal">
                <div className="flex flex-col gap-7 max-w-2xl">
                  <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5 block">
                      <span className="w-6 h-px bg-blue-700 inline-block" />
                      Practical AI for Real Work
                    </span>
                    <h1 className="text-5xl md:text-6xl font-semibold leading-[1.07] tracking-tight mb-5" style={{ color: "#f0f4ff" }}>
                      AI that works{" "}
                      <span style={{ color: "#3b7eff" }}>with your people.</span>
                    </h1>
                    <p className="text-lg leading-relaxed" style={{ color: "#94a3c4" }}>
                      We build practical AI systems that understand workflows, guide decisions,
                      perform tasks, and bring people into the loop when human judgment matters.
                    </p>
                  </div>

                  {/* Capability pills */}
                  <div className="flex flex-wrap gap-2">
                    {["Understand", "Guide", "Act", "Interact", "Escalate"].map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5"
                        style={{ color: "#94a3c4", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#3b7eff" }} />
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/demo"
                      className="btn-glow px-6 py-3 text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
                      style={{ backgroundColor: "#2563eb" }}
                    >
                      Request a demo
                    </Link>
                    <Link
                      href="/solutions/hiring"
                      className="px-6 py-3 text-sm font-medium rounded-xl transition-colors"
                      style={{ color: "#94a3c4", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                    >
                      Explore AI for Hiring
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right — Auth card stays white (untouched) */}
              <ScrollReveal variant="reveal" delay={100}>
                <div className="flex lg:justify-end">
                  <HeroSignin />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* Glowing separator */}
      <div className="section-sep" />

      {/* ── 02 PRODUCT SHOWCASE / CAROUSEL ─────────────────────────────── */}
      <div style={{ backgroundColor: "#0d1426", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <ScrollReveal variant="reveal-scale" threshold={0.06}>
          <ProductCarousel />
        </ScrollReveal>
      </div>

      {/* ── 03 CAPABILITY BLOCKS ────────────────────────────────────────── */}
      <CapabilityBlocks />

      {/* ── 04 SYSTEM ARCHITECTURE ──────────────────────────────────────── */}
      <SystemArchitecture />

      {/* ── 05 AI FOR HIRING ────────────────────────────────────────────── */}
      <HiringShowcase />

      {/* ── 06 BUILD PHILOSOPHY ─────────────────────────────────────────── */}
      <BuildPhilosophy />

      {/* ── 07 SOLUTIONS ────────────────────────────────────────────────── */}
      <EnterpriseSolutions />

      {/* ── 08 CUSTOM AI ────────────────────────────────────────────────── */}
      <CustomAICta />

      {/* ── 09 ENTERPRISE FOUNDATION ────────────────────────────────────── */}
      <EnterpriseFoundation />

      {/* ── 10 FINAL CTA ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0a0f1e", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="reveal" threshold={0.15}>
            <span className="text-xs font-semibold tracking-widest uppercase block mb-5" style={{ color: "#3b7eff" }}>
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-5" style={{ color: "#f0f4ff" }}>
              Let&apos;s build what works<br /> for your business.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#94a3c4" }}>
              Start with AI for Hiring today — or tell us the operational problem you want to solve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/demo"
                className="btn-glow px-7 py-3.5 text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
                style={{ backgroundColor: "#2563eb" }}
              >
                Request a demo
              </Link>
              <Link
                href="/solutions/hiring"
                className="px-7 py-3.5 text-sm font-medium rounded-xl transition-colors"
                style={{ color: "#94a3c4", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
              >
                Explore AI for Hiring
              </Link>
              <Link
                href="/signup"
                className="px-7 py-3.5 text-sm font-medium rounded-xl transition-colors"
                style={{ color: "#4e607a" }}
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
