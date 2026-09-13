import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import ProductCarousel from "@/components/sections/ProductCarousel";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

/* ─── Capability Card ──────────────────────────────────────────────────── */
function CapabilityCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">{title}</span>
    </div>
  );
}

/* ─── Process Step ─────────────────────────────────────────────────────── */
function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold text-blue-500 tracking-widest">{number}</span>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Solution Card ────────────────────────────────────────────────────── */
function SolutionCard({
  title,
  description,
  status,
  href,
  ctaText,
}: {
  title: string;
  description: string;
  status: "available" | "coming-soon" | "contact";
  href: string;
  ctaText: string;
}) {
  return (
    <div className="group relative flex flex-col bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* Status badge */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        {status === "available" && (
          <span className="text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
            Available
          </span>
        )}
        {status === "coming-soon" && (
          <span className="text-[11px] font-semibold bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
            Coming Soon
          </span>
        )}
        {status === "contact" && (
          <span className="text-[11px] font-semibold bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
            Enquire
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">{description}</p>
      <Link
        href={href}
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
          status === "available"
            ? "text-blue-600 hover:text-blue-700"
            : status === "contact"
            ? "text-slate-700 hover:text-slate-900"
            : "text-slate-400 cursor-default"
        }`}
        tabIndex={status === "coming-soon" ? -1 : undefined}
      >
        {ctaText}
        {status !== "coming-soon" && (
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        )}
      </Link>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <PageLayout>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-600 mb-5 block">
                  <span className="w-6 h-px bg-blue-300 inline-block"></span>
                  Practical AI for Real Work
                </span>
                <h1 className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-5">
                  AI that works{" "}
                  <span className="text-blue-600">with your people.</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  We build practical AI systems that understand your workflows, guide decisions,
                  perform tasks and involve humans when needed.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Request a demo
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Sign up
                </Link>
                <a
                  href={SIGN_IN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Sign in
                </a>
              </div>
            </div>

            {/* Right: Capabilities visual */}
            <div className="relative">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                  What SoloBuildAI can do
                </p>
                <div className="flex flex-col gap-3">
                  <CapabilityCard
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                    title="Understand your operations"
                  />
                  <CapabilityCard
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                      </svg>
                    }
                    title="Interact naturally via voice"
                  />
                  <CapabilityCard
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                      </svg>
                    }
                    title="Take action across tools"
                  />
                  <CapabilityCard
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    }
                    title="Guide people step-by-step"
                  />
                  <CapabilityCard
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    }
                    title="Bring in humans when needed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ────────────────────────────────────────────────────── */}
      <ProductCarousel />

      {/* ── TRUST / CREDIBILITY ─────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Built for teams that need AI to actually work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Voice-first screening", desc: "Candidates screened via natural AI phone calls" },
              { label: "End-to-end workflow", desc: "From job post to hire in a single system" },
              { label: "Human in the loop", desc: "AI hands off to people at the right moment" },
              { label: "Enterprise ready", desc: "Built for teams managing high hiring volume" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-2 p-5 bg-white rounded-xl border border-slate-200">
                <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                <span className="text-xs text-slate-500 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              From real problems to real impact.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand real operational problems and workflows before writing a single line of code.",
              },
              {
                number: "02",
                title: "Build",
                description:
                  "Design and deploy a practical AI solution that fits how your team actually works.",
              },
              {
                number: "03",
                title: "Validate",
                description:
                  "Measure whether the solution creates meaningful, measurable business value.",
              },
              {
                number: "04",
                title: "Productize",
                description:
                  "Turn successful solutions into repeatable, scalable products for your organization.",
              },
            ].map((step, i, arr) => (
              <div key={step.number} className="relative flex flex-col gap-3">
                {/* connector line */}
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-3.5 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-slate-200" style={{ width: "2rem" }} />
                )}
                <span className="text-3xl font-bold text-blue-100 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-slate-900">— {step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ──────────────────────────────────────────────── */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-3">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Solve real problems across your organization.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SolutionCard
              title="AI for Hiring"
              description="AI-powered voice screening, candidate discovery, campaign management and recruiter workflows."
              status="available"
              href="/solutions/hiring"
              ctaText="Learn more"
            />
            <SolutionCard
              title="AI for Sales"
              description="Intelligent outreach, pipeline management and sales workflow automation."
              status="coming-soon"
              href="/solutions/sales"
              ctaText="Coming soon"
            />
            <SolutionCard
              title="AI for Customer Support"
              description="AI-first customer service that resolves issues and escalates to humans when needed."
              status="coming-soon"
              href="/solutions/customer-support"
              ctaText="Coming soon"
            />
            <SolutionCard
              title="AI for Operations"
              description="Operational intelligence that surfaces insights and automates multi-step workflows."
              status="coming-soon"
              href="/solutions/operations"
              ctaText="Coming soon"
            />
            <SolutionCard
              title="Custom AI Solutions"
              description="We design and deploy practical AI systems built around your specific operational problem."
              status="contact"
              href="/solutions/custom"
              ctaText="Let's talk"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
            Let's build what works for your business.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Start with AI for Hiring today, or tell us the operational problem you want to solve.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="px-7 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Request a demo
            </Link>
            <Link
              href="/signup"
              className="px-7 py-3.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
