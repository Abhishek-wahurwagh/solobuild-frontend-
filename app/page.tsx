import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconClass = "w-5 h-5 text-white";

const AGENTS = [
  {
    href: "/solutions/hiring",
    title: "Sourcing Agent",
    description: "Automatically find and reach the right candidates for your roles.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
      </svg>
    ),
  },
  {
    href: "/solutions/hiring",
    title: "Screening Agent",
    description: "Conduct voice interviews, assess skills, and rank candidates.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    href: "/products/candidate-intelligence",
    title: "Summary Agent",
    description: "Capture key skills, scores, and generated transcripts from every call.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M5.25 4.5h6.375c.621 0 1.125.504 1.125 1.125V12a3 3 0 01-3 3H5.25A2.25 2.25 0 013 12.75V6.75A2.25 2.25 0 015.25 4.5z" />
      </svg>
    ),
  },
  {
    href: "/products/analytics",
    title: "Analytics Agent",
    description: "Track campaign performance and candidate insights in real time.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    href: "/platform/workflow-automation",
    title: "Scheduling Agent",
    description: "Book interviews with a coordinated, AI-optimized calendar.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/solutions/custom",
    title: "Custom Agent",
    description: "Build your own agent for a unique workflow or business need.",
    icon: (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

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

      {/* AGENTS */}
      <section className="mt-3 rounded-2xl border border-white/12 bg-black px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9">
          <ScrollReveal variant="reveal">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-500 mb-4">
                Our AI agents
              </p>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.08] tracking-[-0.03em]">
                <span className="text-white">Specialised agents for</span>
                <br />
                <span className="text-[#0066FF]">real hiring.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="reveal" delay={80}>
            <div className="lg:max-w-sm lg:text-right">
              <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                From sourcing to screening to scheduling — deploy AI agents that handle the heavy lifting, so you can focus on the decision.
              </p>
              <Link
                href="/solutions/hiring"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0066FF] hover:text-white transition-colors"
              >
                View all agents
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {AGENTS.map((agent, i) => (
            <ScrollReveal key={agent.title} variant="reveal" delay={i * 40}>
              <Link
                href={agent.href}
                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-black hover:border-white/20 p-5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center mb-8">
                  {agent.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{agent.title}</h3>
                <p className="text-[12px] text-slate-400 leading-relaxed mb-8 flex-1">{agent.description}</p>
                <span className="text-slate-500 group-hover:text-[#0066FF] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-3 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-3">
        <div className="relative min-h-[420px] lg:min-h-[480px] rounded-2xl border border-white/12 overflow-hidden">
          <Image
            src="/images/editorial-man.png"
            alt=""
            fill
            className="object-cover object-[78%_center] grayscale"
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
