import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HeroParallax from "@/components/sections/HeroParallax";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

// AI Agent cards
const AI_AGENTS = [
  {
    icon: "🔍",
    title: "Research Agent",
    description: "Find insights, analyze information, save hours.",
    link: "/platform/ai-agents#research"
  },
  {
    icon: "✉️",
    title: "Outreach Agent",
    description: "Find and reach the right audience at scale.",
    link: "/platform/ai-agents#outreach"
  },
  {
    icon: "📄",
    title: "Content Agent",
    description: "Create, edit and publish content at scale.",
    link: "/platform/ai-agents#content"
  },
  {
    icon: "📊",
    title: "Analytics Agent",
    description: "Track performance and identify actionable insights.",
    link: "/platform/ai-agents#analytics"
  },
  {
    icon: "⚙️",
    title: "Operations Agent",
    description: "Automate repetitive tasks and workflows.",
    link: "/platform/ai-agents#operations"
  },
  {
    icon: "👤",
    title: "Custom Agent",
    description: "Build your own agent for unique needs.",
    link: "/solutions/custom"
  },
];

// Workflow steps
const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Describe",
    description: "Tell us what you want to build."
  },
  {
    number: "02",
    title: "Deploy",
    description: "Use ready agents or customize."
  },
  {
    number: "03",
    title: "Operate",
    description: "Let agents get to work."
  },
  {
    number: "04",
    title: "Grow",
    description: "See real results."
  }
];

export default function HomePage() {
  return (
    <PageLayout>

      {/* ── 01 HERO ──────────────────────────────────────────────────────
          Clean, bold, inspired by reference screenshot                   */}
      <section
        id="site-hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        {/* Dot grid background */}
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        
        {/* Subtle gradient glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%", left: "10%", width: "50%", height: "60%",
            background: "radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          }}
        />

        <HeroParallax />

        <div className="relative max-w-7xl mx-auto px-6 w-full py-20">
          <div className="hero-parallax">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

              {/* Left: Main hero content */}
              <ScrollReveal variant="reveal">
                <div className="flex flex-col gap-8">
                  {/* Tagline */}
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-medium tracking-wider uppercase text-slate-400">
                      AI AGENTS FOR REAL WORK
                    </span>
                  </div>

                  {/* Hero headline */}
                  <div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                      <span className="text-white">Ideas</span>
                      <br />
                      <span className="text-white">to </span>
                      <span className="text-[#3b82f6]">Impact.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl">
                      Build, deploy and scale AI agents, workflows and tools to turn your ideas into real outcomes — without the usual complexity.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/demo"
                      className="px-7 py-4 text-sm font-semibold text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    >
                      Get Started →
                    </Link>
                    <button
                      className="px-7 py-4 text-sm font-semibold text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-xl transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="white" opacity="0.2"/>
                        <path d="M8 5v14l11-7z" fill="currentColor"/>
                      </svg>
                      Watch Demo
                    </button>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="text-xs text-slate-500">// No coding required</span>
                    <span className="text-xs text-slate-500">// Ready-to-use agents</span>
                    <span className="text-xs text-slate-500">// Built for real progress</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Image/Visual placeholder */}
              <ScrollReveal variant="reveal" delay={100}>
                <div className="relative">
                  {/* Visual card showing person at work */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="aspect-[3/4] flex items-center justify-center p-12">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                          <span className="text-3xl">⚡</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-white uppercase tracking-wider">Built for</p>
                          <p className="text-xl font-bold text-white">Doers</p>
                        </div>
                        <div className="pt-6 space-y-3 text-left">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                            <span className="text-xs text-slate-400">AI agents that work for you,</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                            <span className="text-xs text-slate-400">Not the other way around.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stat badge */}
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-2xl p-6 shadow-2xl border border-blue-500">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">10K+</div>
                      <div className="text-xs text-blue-100 uppercase tracking-wider">Tasks Automated</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── 02 AI AGENTS SECTION ────────────────────────────────────────── */}
      <section className="py-24 relative" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto px-6">
          
          <ScrollReveal variant="reveal">
            <div className="mb-16">
              <p className="text-xs font-medium tracking-wider uppercase text-slate-500 mb-4">OUR AI AGENTS</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Specialised agents for<br />
                <span className="text-[#3b82f6]">real work.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl">
                From research to outreach to operations — deploy AI agents that handle the heavy lifting, so you can focus on what matters.
              </p>
            </div>
          </ScrollReveal>

          {/* Agent Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_AGENTS.map((agent, i) => (
              <ScrollReveal key={i} variant="reveal" delay={i * 50}>
                <Link 
                  href={agent.link}
                  className="group block p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {agent.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {agent.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {agent.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* View all link */}
          <ScrollReveal variant="reveal">
            <div className="mt-12 text-center">
              <Link 
                href="/platform/ai-agents" 
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                View all agents
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 03 HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-24 relative" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6">
          
          <ScrollReveal variant="reveal">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <p className="text-xs font-medium tracking-wider uppercase text-slate-500 mb-4">HOW IT WORKS</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                A simpler path <span className="text-[#3b82f6]">forward.</span>
              </h2>
              <p className="text-lg text-slate-400">
                From what you want to build, let agents do the work, and focus on what matters: let the rest handle itself.
              </p>
            </div>
          </ScrollReveal>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((step, i) => (
              <ScrollReveal key={i} variant="reveal" delay={i * 100}>
                <div className="relative">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">{step.number}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  
                  {/* Connector line (desktop only) */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent" style={{ marginLeft: '-50%', width: '100%' }} />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── 04 SOCIAL PROOF / STATS ──────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ScrollReveal variant="reveal">
              <div className="text-center p-8 rounded-2xl border border-white/10 bg-slate-950/50">
                <div className="text-5xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Tasks Automated</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="reveal" delay={100}>
              <div className="text-center p-8 rounded-2xl border border-white/10 bg-slate-950/50">
                <div className="text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Time Saved</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="reveal" delay={200}>
              <div className="text-center p-8 rounded-2xl border border-white/10 bg-slate-950/50">
                <div className="text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Use Cases</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Testimonial */}
          <ScrollReveal variant="reveal">
            <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/30">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                "SoloBuild helps me do what I couldn't alone."
              </blockquote>
              <cite className="text-sm text-slate-400 not-italic">
                — A solo founder
              </cite>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 05 AI FOR HIRING CALLOUT ─────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal variant="reveal">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Available Now</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  AI for<br />
                  <span className="text-[#3b82f6]">Hiring</span>
                </h2>
                
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  From job description to qualified candidate. AI-powered recruitment that screens, engages, qualifies, and schedules — automatically.
                </p>

                <div className="space-y-3 mb-10">
                  {[
                    "Screen candidates via AI voice calls",
                    "Engage candidate pools with campaigns",
                    "Qualify and rank by role criteria",
                    "Schedule interviews automatically",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/solutions/hiring"
                    className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
                  >
                    Explore AI for Hiring
                  </Link>
                  <a
                    href={SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-semibold text-slate-300 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                  >
                    Open Platform
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="reveal-scale" delay={100}>
              <div className="relative">
                {/* Dashboard preview placeholder */}
                <div className="rounded-2xl border border-white/10 overflow-hidden bg-slate-900 shadow-2xl">
                  <div className="bg-slate-800 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-slate-400">Hiring Intelligence Dashboard</span>
                  </div>
                  <div className="aspect-[4/3] flex items-center justify-center p-12 bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">📊</div>
                      <p className="text-sm text-slate-500">Live recruitment operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 06 FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <ScrollReveal variant="reveal">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Build Deploy Grow</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Your ideas<br />
              deserve it.
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Start with AI for Hiring today — or tell us the operational problem you want to solve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                Request a demo
              </Link>
              <Link
                href="/signup"
                className="px-8 py-4 text-base font-semibold text-slate-300 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
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
