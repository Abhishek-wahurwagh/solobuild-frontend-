import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Job Description",
    description: "Define the role, requirements, and ideal candidate profile. AI assists in structuring job criteria for better screening.",
  },
  {
    step: "02",
    title: "Candidate Discovery",
    description: "Identify and source candidates from your pipeline. AI surfaces the most relevant profiles based on role criteria.",
  },
  {
    step: "03",
    title: "Candidate Engagement",
    description: "Outbound AI campaigns contact candidates via phone. Natural, professional conversations at scale — no manual cold-calling.",
  },
  {
    step: "04",
    title: "AI Voice Screening",
    description: "AI conducts structured voice screening calls. Candidates are assessed on experience, availability, communication and fit.",
  },
  {
    step: "05",
    title: "Qualification",
    description: "Screening results are scored and summarised. Recruiters see a ranked candidate list with full call transcripts and skill assessments.",
  },
  {
    step: "06",
    title: "Interview Scheduling",
    description: "Qualified candidates are automatically scheduled for human interviews. Calendar coordination handled by the AI.",
  },
  {
    step: "07",
    title: "Recruiter Review",
    description: "Recruiters review shortlisted candidates with full screening context — call summaries, skill scores, and notes — all in one place.",
  },
  {
    step: "08",
    title: "Hire",
    description: "Make the right decision faster. All the information you need, structured and ready for the final call.",
  },
];

const CAPABILITIES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "AI Voice Screening",
    description: "AI conducts natural, structured voice calls with candidates — assessing experience, communication and role fit.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Outbound Calling",
    description: "Proactive outbound AI calls to candidate pools — reaching more candidates without manual recruiter effort.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Campaign Management",
    description: "Run multiple hiring campaigns simultaneously. Track progress, manage AI recruiters, and monitor status in real time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Candidate Qualification",
    description: "Every screened candidate receives a structured qualification score based on the role requirements you defined.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Interview Scheduling",
    description: "Automatically schedule qualified candidates for human interviews — no back-and-forth email coordination.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Recruiter Workflow",
    description: "Everything recruiters need in one place — candidate profiles, screening reports, call summaries, and next steps.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Candidate Analytics",
    description: "Detailed skill breakdowns, call performance data, and pipeline analytics for every hiring campaign.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Human Handoff",
    description: "AI recognises when a human recruiter needs to step in — and hands off seamlessly with full context.",
  },
];

/* Dashboard screenshots — replace src values when new screenshots are ready */
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
      <section className="bg-white pt-10 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-xs text-slate-500">Solutions</span>
              <span className="text-slate-300">/</span>
              <span className="text-xs text-blue-600 font-medium">AI for Hiring</span>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-600 mb-5 block">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
              Available Now
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Hire smarter with AI that{" "}
              <span className="text-blue-600">screens, calls, and qualifies.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              SoloBuildAI&apos;s hiring solution handles end-to-end recruitment — from job
              description to qualified candidate — using AI voice screening, outbound campaigns,
              and structured recruiter workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={SIGN_IN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Open Hiring Platform
              </a>
              <Link
                href="/demo"
                className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD SCREENSHOTS ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
              The Platform
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              A complete hiring operations platform.
            </h2>
          </div>

          {/* Primary large screenshot */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-5">
            <Image
              src={SCREENSHOTS[0].src}
              alt={SCREENSHOTS[0].alt}
              width={1400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Secondary 3-up screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SCREENSHOTS.slice(1).map((shot) => (
              <div key={shot.src} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              From job description to hire.
            </h2>
            <p className="text-slate-500 mt-3 text-base max-w-xl mx-auto leading-relaxed">
              Every step of the hiring workflow, handled end-to-end — with humans in control at every decision point.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-slate-200" />
            <div className="space-y-6">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.step} className="relative flex gap-8 items-start">
                  {/* Step indicator */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex flex-col items-center justify-center relative z-10">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">
                      Step
                    </span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ─────────────────────────────────────────── */}
      <section className="py-20 bg-blue-50/40 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Everything your hiring team needs.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Ready to transform your hiring?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            Get started with SoloBuildAI&apos;s hiring platform today, or request a demo to see it in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Open Hiring Platform
            </a>
            <Link
              href="/demo"
              className="px-7 py-3.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
            >
              Request a demo
            </Link>
            <Link
              href="/signup"
              className="px-7 py-3.5 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
