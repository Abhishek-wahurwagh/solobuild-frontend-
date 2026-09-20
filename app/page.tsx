import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import concreteBuildingImage from "@/app/file_00000000f12481fba98e0793f2268462.png";
import AgentRailSection from "@/components/sections/AgentRailSection";
import AIAssistantShowcase from "@/components/sections/AIAssistantShowcase";

const STEPS = [
  { num: "01", title: "Describe", desc: "Tell us the role and who you want to reach." },
  { num: "02", title: "Deploy", desc: "Use a ready screening agent or customise it." },
  { num: "03", title: "Operate", desc: "Let agents call, assess, and rank candidates." },
  { num: "04", title: "Grow", desc: "Review summaries, shortlist, and hire." },
];

export default function HomePage() {
  return (
    <PageLayout framed>

      {/* HERO */}
      <section className="rounded-2xl border border-white/12 overflow-hidden bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] lg:min-h-[620px]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
            <ScrollReveal variant="reveal">
              <div className="max-w-[540px]">
                <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-500 mb-8">
                  AI Agents for real work
                </p>

                <h1 className="mb-7">
                  <span className="block text-[56px] sm:text-[68px] lg:text-[80px] leading-[0.92] font-semibold tracking-[-0.04em] text-white">
                    Ideas
                  </span>
                  <span className="block text-[56px] sm:text-[68px] lg:text-[80px] leading-[0.92] font-semibold tracking-[-0.04em]">
                    <span className="text-white">to </span>
                    <span className="text-[#0066FF]">Impact.</span>
                  </span>
                </h1>

                <p className="text-[15px] leading-[1.7] text-slate-400 mb-9 max-w-[460px]">
                  Build, deploy and scale AI agents, workflows and tools to turn your ideas into real outcomes — without the usual complexity.
                </p>

                <div className="flex flex-wrap gap-3 mb-9">
                  <Link
                    href="/demo"
                    className="px-6 py-3 text-[13px] font-semibold text-white bg-[#0066FF] hover:bg-[#0052cc] rounded-xl transition-colors inline-flex items-center gap-2"
                  >
                    Get Started
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/demo"
                    className="px-6 py-3 text-[13px] font-semibold text-white border border-white/15 hover:border-white/30 hover:bg-white/5 rounded-xl transition-all inline-flex items-center gap-2.5"
                  >
                    <span className="w-[18px] h-[18px] rounded-full border border-white/70 flex items-center justify-center">
                      <svg className="w-2 h-2 ml-px" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    Watch Demo
                  </Link>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate-500 font-mono">
                  <span>// No coding required</span>
                  <span>// Ready-to-use agents</span>
                  <span>// Built for real hiring</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative min-h-[420px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/12">
            <Image
              src="/images/hero-woman.png"
              alt="Operator working with SoloBuildAI agents"
              fill
              priority
              className="object-cover object-[center_20%] grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />

            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-between pointer-events-none">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/80 leading-[1.7]">
                  Same<br />people.<br />Bigger<br />outcomes.
                </p>
                <p className="text-right text-[11px] font-medium tracking-[0.2em] uppercase text-white/80 leading-[1.7]">
                  Built for<br />doers.
                </p>
              </div>

              <div className="self-end max-w-[230px] bg-black/75 backdrop-blur-md border border-white/12 rounded-xl p-4 pointer-events-auto">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0" />
                  <p className="text-[12px] font-medium text-white leading-snug">
                    AI agents that work for you.<br />
                    <span className="text-slate-400 font-normal">Not the other way around.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIAssistantShowcase />

      {/* PLATFORM CAPABILITIES */}
      <AgentRailSection />

      {/* HOW IT WORKS */}
      <section className="mt-3 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-3">
        <div className="relative min-h-[420px] lg:min-h-[480px] rounded-2xl border border-white/12 overflow-hidden">
          <Image
            src={concreteBuildingImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/35" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/70 leading-[1.8]">
              Ideas<br />
              Agents<br />
              Execution<br />
              Real results
            </p>
            <p className="text-[15px] text-white/90">Built for a more capable you.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-500 mb-4">
                How it works
              </p>
              <h2 className="text-[34px] sm:text-[42px] font-semibold leading-[1.08] tracking-[-0.03em]">
                <span className="text-white">A simpler path </span>
                <span className="text-[#0066FF]">forward.</span>
              </h2>
            </div>
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-slate-500 sm:text-right max-w-[180px] leading-relaxed">
              Focus on what matters. Let agents handle the rest.
            </p>
          </div>

          <div className="relative mt-auto">
            <div className="hidden sm:block absolute top-[18px] left-[7%] right-[7%] h-px bg-white/10" />
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4">
              {STEPS.map((step, i) => (
                <ScrollReveal key={step.num} variant="reveal" delay={i * 50}>
                  <div>
                    <div className="text-[13px] font-semibold text-white mb-5 relative z-10">{step.num}</div>
                    <h3 className="text-[16px] font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL + FACTS + CTA */}
      <section className="mt-3 grid grid-cols-1 lg:grid-cols-[1.35fr_1fr_0.85fr] gap-3">
        <div className="rounded-2xl border border-white/12 bg-black overflow-hidden min-h-[240px]">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] h-full">
            <div className="p-7 sm:p-8 flex flex-col justify-between">
              <p className="text-[22px] sm:text-[26px] font-medium text-white leading-snug tracking-[-0.02em]">
                “We build AI that actually works in practice.”
              </p>
              <p className="mt-8 text-[13px] text-slate-500">SoloBuildAI</p>
            </div>
            <div className="relative min-h-[220px] sm:min-h-full border-t sm:border-t-0 sm:border-l border-white/12">
              <Image
                src="/images/editorial-man.png"
                alt="SoloBuildAI editorial portrait"
                fill
                className="object-cover object-center grayscale"
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black px-6 py-7 sm:px-8 flex items-center">
          <div className="grid grid-cols-3 gap-4 w-full text-center">
            <div>
              <p className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">Voice</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">AI screening calls</p>
            </div>
            <div className="border-x border-white/10">
              <p className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">Live</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">Hiring intelligence</p>
            </div>
            <div>
              <p className="text-[22px] sm:text-[26px] font-semibold text-white tracking-tight">Human</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">Handoff when it counts</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#0066FF] p-7 sm:p-8 flex flex-col justify-between min-h-[240px]">
          <Link href="/demo" className="group">
            <h3 className="text-[34px] sm:text-[38px] font-semibold text-white leading-[0.95] tracking-[-0.03em] group-hover:opacity-90">
              Build<br />
              Deploy<br />
              Hire.
            </h3>
            <p className="text-[13px] text-white/85 mt-8">Your next hire is just one agent away.</p>
          </Link>
          <a
            href="https://main.d3ataamm8hxei7.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-[13px] font-medium text-white/90 hover:text-white inline-flex items-center gap-2"
          >
            Open platform
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

    </PageLayout>
  );
}
