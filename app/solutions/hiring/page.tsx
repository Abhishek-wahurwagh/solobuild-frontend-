import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import HiringWorkflow from "@/components/sections/HiringWorkflow";
import HeroSignin from "@/components/sections/HeroSignin";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CAPABILITIES = [
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>),
    title: "AI Voice Screening",
    description: "Natural structured voice calls that assess experience, communication and role fit.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>),
    title: "Outbound Calling",
    description: "Proactive AI calls reach your candidate pool without manual recruiter effort.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>),
    title: "Campaign Management",
    description: "Run multiple hiring campaigns simultaneously with real-time status tracking.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    title: "Candidate Qualification",
    description: "Structured scores based on your role criteria — every screened candidate ranked automatically.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>),
    title: "Interview Scheduling",
    description: "Qualified candidates scheduled for human interviews automatically — no coordination overhead.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
    title: "Recruiter Workflow",
    description: "Everything in one place — profiles, screening reports, call summaries, next steps.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
    title: "Candidate Analytics",
    description: "Skill breakdowns, call performance data, and pipeline analytics for every campaign.",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>),
    title: "Human Handoff",
    description: "AI recognises when a recruiter needs to step in — and hands off with full context.",
  },
];

const SCREENSHOTS = [
  { src: "/images/hiring-dashboard-1.png", alt: "Recruitment Operations Dashboard" },
  { src: "/images/hiring-dashboard-2.png", alt: "AI Recruiters" },
  { src: "/images/hiring-dashboard-3.png", alt: "Interviews Management" },
  { src: "/images/hiring-dashboard-4.png", alt: "Candidate Skills Breakdown" },
];

export default function HiringSolutionPage() {
  return (
    <PageLayout>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-white py-16 md:py-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span className="text-blue-600 font-medium">AI for Hiring</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 xl:gap-16 items-center">
            {/* Left */}
            <ScrollReveal variant="reveal">
              <div>
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500 pulse-dot" />
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Available Now</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.08] tracking-tight mb-5">
                  Hire smarter with AI that{" "}
                  <span className="text-blue-600">screens, calls, and qualifies.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                  End-to-end recruitment — from job description to qualified candidate — using AI voice screening,
                  outbound campaigns, and structured recruiter workflows.
                </p>

                {/* Capability pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Voice screening", "Outbound calling", "Campaign management", "Interview scheduling", "Human handoff"].map((f) => (
                    <span key={f} className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Auth card with hiring context */}
            <ScrollReveal variant="reveal" delay={120}>
              <div className="flex lg:justify-end">
                <div className="w-full max-w-sm">
                  {/* Context label above the card */}
                  <div className="flex items-center gap-2 mb-3 px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 pulse-dot" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                      Access the Hiring Platform
                    </span>
                  </div>
                  <HeroSignin />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD SCREENSHOTS ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal variant="reveal">
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">The Platform</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
                A complete hiring operations platform.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="reveal-scale">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-5">
              <Image src={SCREENSHOTS[0].src} alt={SCREENSHOTS[0].alt} width={1400} height={800} className="w-full h-auto" priority />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="stagger" threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SCREENSHOTS.slice(1).map((shot) => (
                <div key={shot.src} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image src={shot.src} alt={shot.alt} width={700} height={450} className="w-full h-auto" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WORKFLOW DIAGRAM ──────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal variant="reveal">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
                How it works
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                From job description to hire.
              </h2>
              <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto leading-relaxed">
                Every step of the hiring workflow handled end-to-end — humans in control at every decision point.
              </p>
            </div>
          </ScrollReveal>

          <HiringWorkflow />
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal variant="reveal">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                Everything your hiring team needs.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="stagger" threshold={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA — dark ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900" data-cursor-dark>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal variant="reveal" threshold={0.15}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Ready to transform your hiring?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Get started with the hiring platform today, or request a demo to see it in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/demo" className="px-7 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-500 transition-colors shadow-sm">
                Request a demo
              </Link>
              <Link href="/signup" className="px-7 py-3.5 border border-slate-700 text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-colors">
                Create an account
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </PageLayout>
  );
}
