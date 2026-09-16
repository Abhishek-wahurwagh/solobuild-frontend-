import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

const HIRING_AGENTS = [
  {
    icon: "👤",
    title: "Sourcing Agent",
    description: "Automatically find and reach the right candidates for your roles."
  },
  {
    icon: "📞",
    title: "Screening Agent",
    description: "Conduct voice interviews, assess skills, and rank candidates."
  },
  {
    icon: "📝",
    title: "Summary Agent",
    description: "Learn key skills, summary, scores and generated transcripts."
  },
  {
    icon: "📊",
    title: "Analytics Agent",
    description: "Track campaign performance and candidate insights in real-time."
  },
  {
    icon: "📅",
    title: "Scheduling Agent",
    description: "Book interviews with a coordinated, AI-optimized calendar."
  },
  {
    icon: "⚙️",
    title: "Custom Agent",
    description: "Build your own agent for a unique workflow or business need."
  }
];

export default function HomePage() {
  return (
    <PageLayout>

      {/* HERO SECTION - EXACT REFERENCE MATCH */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
            
            {/* LEFT - Content */}
            <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
              <ScrollReveal variant="reveal">
                <div className="max-w-[520px]">
                  {/* Eyebrow */}
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-600 mb-10">
                    AI AGENTS FOR REAL HIRING
                  </div>

                  {/* Headline - exact from reference screenshot */}
                  <h1 className="mb-9">
                    <span className="block text-[64px] lg:text-[76px] leading-[0.95] font-bold tracking-tight text-white mb-1">
                      Ideas
                    </span>
                    <span className="block text-[64px] lg:text-[76px] leading-[0.95] font-bold tracking-tight">
                      <span className="text-white">to </span>
                      <span className="text-[#5B7FFF]">Impact.</span>
                    </span>
                  </h1>

                  {/* Supporting text */}
                  <p className="text-[15px] leading-[1.7] text-slate-400 mb-10 max-w-[460px]">
                    Build, deploy and scale AI recruiting agents that source, screen and call candidates for you — so hiring moves without the usual back-and-forth.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3.5 mb-9">
                    <Link
                      href="/demo"
                      className="px-8 py-3.5 text-[13px] font-semibold text-white bg-[#5B7FFF] hover:bg-[#4a6ae6] rounded-md transition-colors inline-flex items-center gap-2"
                    >
                      Get Started
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <button className="px-8 py-3.5 text-[13px] font-semibold text-white border border-white/15 hover:border-white/25 hover:bg-white/5 rounded-md transition-all inline-flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-white/70 flex items-center justify-center">
                        <svg className="w-2 h-2 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      Watch Demo
                    </button>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-6 text-[10px] text-slate-700 font-mono">
                    <span>// No coding required</span>
                    <span>// Ready-to-use agents</span>
                    <span>// Built for real hiring</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT - Hero Image Section */}
            <div className="relative bg-neutral-950 overflow-hidden border-l border-white/10">
              <ScrollReveal variant="reveal" delay={100}>
                {/* Placeholder for woman-laptop image - will be visible once uploaded */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                  {/* Image will go here */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-24 h-24 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating elements overlaid on image */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
                  
                  {/* Top left labels */}
                  <div className="space-y-2.5">
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/30">SAME</div>
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/30">PEOPLE</div>
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/30">BETTER</div>
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/30">RESULTS</div>
                  </div>

                  {/* Top right labels */}
                  <div className="absolute top-10 right-10 text-right space-y-2">
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50">BUILT FOR</div>
                    <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50">RECRUITERS</div>
                  </div>

                  {/* Bottom right floating card */}
                  <div className="self-end max-w-[260px] bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-5 pointer-events-auto">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#5B7FFF] animate-pulse"></div>
                      <span className="text-[11px] font-bold text-white tracking-wide">AI agents that call for you.</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Screen candidates, answer<br/>questions, schedule interviews.
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALIZED AGENTS SECTION - EXACT REFERENCE MATCH */}
      <section className="bg-black py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <ScrollReveal variant="reveal">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-700 mb-7">
                  OUR AI AGENTS
                </div>
                <h2 className="text-[40px] lg:text-[46px] font-bold leading-[1.1] mb-2">
                  <span className="text-white">Specialised agents for</span>
                  <br />
                  <span className="text-[#5B7FFF]">real hiring.</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="reveal" delay={80}>
              <div className="text-right hidden lg:block mt-14">
                <p className="text-[13px] text-slate-500 max-w-sm mb-5 leading-relaxed">
                  From sourcing to screening to scheduling — deploy AI agents that handle the outreach, so you focus on the decision.
                </p>
                <Link href="/solutions/hiring" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5B7FFF] hover:text-[#4a6ae6] transition-colors">
                  View all agents
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Agent Cards Grid - 3 columns x 2 rows matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIRING_AGENTS.map((agent, i) => (
              <ScrollReveal key={i} variant="reveal" delay={i * 35}>
                <div className="group bg-neutral-950/50 border border-white/[0.08] hover:border-[#5B7FFF]/30 rounded-lg p-7 transition-all cursor-pointer h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon - simplified emoji/icon */}
                    <div className="w-12 h-12 rounded-lg bg-[#5B7FFF]/10 border border-[#5B7FFF]/20 flex items-center justify-center text-2xl mb-6">
                      {agent.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[16px] font-bold text-white mb-3 group-hover:text-[#5B7FFF] transition-colors">
                      {agent.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[13px] text-slate-500 leading-relaxed mb-5 flex-grow">
                      {agent.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center text-slate-700 group-hover:text-[#5B7FFF] transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION - EXACT REFERENCE MATCH */}
      <section className="bg-black py-20 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          
          {/* Layout with left label - exact from reference */}
          <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-14">
            
            {/* Left sticky label */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-800 leading-[1.8]">
                IDEAS<br/>
                AGENTS<br/>
                CALLS<br/>
                HIRES
              </div>
            </div>

            {/* Main content */}
            <div>
              
              {/* Header */}
              <ScrollReveal variant="reveal">
                <div className="mb-12">
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-700 mb-7">
                    HOW IT WORKS
                  </div>
                  <h2 className="text-[40px] lg:text-[46px] font-bold leading-[1.1]">
                    <span className="text-white">A simpler path </span>
                    <span className="text-[#5B7FFF]">forward.</span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* 4-step process - exact from reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
                {[
                  { num: "01", title: "Create a hiring", desc: "Tell us the role and who you want to reach." },
                  { num: "02", title: "Deploy the agent", desc: "Use a ready screening agent or customize it." },
                  { num: "03", title: "Agent calls", desc: "Candidates are ranked, assessed and recorded." },
                  { num: "04", title: "Review & shortlist", desc: "Read the summary, listen back, decide." }
                ].map((step, i) => (
                  <ScrollReveal key={i} variant="reveal" delay={i * 50}>
                    <div>
                      <div className="w-11 h-11 rounded-full bg-[#5B7FFF] flex items-center justify-center mb-5">
                        <span className="text-[13px] font-bold text-white">{step.num}</span>
                      </div>
                      <h3 className="text-[17px] font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Workflow diagram box - matching reference style */}
              <ScrollReveal variant="reveal-scale" delay={180}>
                <div className="bg-neutral-950/50 border border-white/[0.08] rounded-lg p-10 lg:p-12">
                  
                  <div className="text-center mb-12">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-700 mb-5">
                      FOCUS ON THE DECISION. LET AGENTS HANDLE THE REST.
                    </p>
                    <h3 className="text-[32px] font-bold text-white leading-tight">
                      Every screening call, recorded<br className="hidden sm:block"/> and summarised automatically
                    </h3>
                    <p className="text-[13px] text-slate-600 mt-4 max-w-2xl mx-auto">— nothing to transcribe by hand.</p>
                  </div>

                  {/* Simple workflow visualization */}
                  <div className="max-w-2xl mx-auto">
                    
                    {/* Top - Call icon */}
                    <div className="flex justify-center mb-6">
                      <div className="px-10 py-5 bg-black border border-white/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-[#5B7FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                          <span className="text-[13px] font-bold text-white">AI Phone Screening</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center mb-6">
                      <div className="w-px h-10 bg-gradient-to-b from-[#5B7FFF]/50 to-transparent"></div>
                    </div>

                    {/* Processing boxes */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-black border border-white/10 rounded-lg p-5 text-center">
                        <div className="text-[11px] font-bold text-white mb-1">Recording + summary</div>
                        <div className="text-[10px] text-slate-600">every call</div>
                      </div>
                      <div className="bg-black border border-white/10 rounded-lg p-5 text-center">
                        <div className="text-[11px] font-bold text-white mb-1">Private by default</div>
                        <div className="text-[10px] text-slate-600">no setup team required to launch</div>
                      </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center mb-6">
                      <div className="w-px h-10 bg-gradient-to-b from-[#5B7FFF]/50 to-green-500/50"></div>
                    </div>

                    {/* Bottom - Result */}
                    <div className="flex justify-center">
                      <div className="px-10 py-5 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[13px] font-bold text-green-400">Live in minutes</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>

      {/* FINAL EDITORIAL + CTA SECTION - EXACT REFERENCE MATCH */}
      <section className="bg-black py-16 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            
            {/* Left - Editorial Image (Man Portrait) */}
            <ScrollReveal variant="reveal">
              <div className="relative bg-neutral-950 rounded-lg overflow-hidden border border-white/[0.08] aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
                {/* Placeholder for man-portrait image */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg className="w-20 h-20 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-6 max-w-md">
                    <p className="text-[13px] text-slate-300 leading-relaxed mb-3">
                      "Built for a hiring team that moves faster."
                    </p>
                    <div className="text-[10px] uppercase tracking-wider text-slate-600">FOCUSED ON DECISIONS</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Blue CTA Card */}
            <ScrollReveal variant="reveal" delay={100}>
              <div className="bg-[#5B7FFF] rounded-lg p-10 lg:p-12 flex flex-col justify-between h-full min-h-[400px]">
                
                <div>
                  <h3 className="text-[48px] lg:text-[54px] font-bold text-white leading-[0.95] mb-6">
                    Build.<br/>
                    Deploy.<br/>
                    Hire.
                  </h3>
                  
                  <p className="text-[14px] text-blue-50 leading-relaxed mb-8">
                    Your next hire is just one agent away.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <Link 
                    href="/demo"
                    className="block w-full px-8 py-4 bg-white text-[#5B7FFF] text-[14px] font-bold rounded-md hover:bg-blue-50 transition-colors text-center"
                  >
                    Get Started
                  </Link>
                  
                  <a
                    href={SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 bg-transparent border-2 border-white/30 text-white text-[14px] font-bold rounded-md hover:bg-white/10 transition-colors text-center"
                  >
                    Open Platform
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-[10px] uppercase tracking-wider text-blue-100 mb-2">SOME FACTS:</div>
                  <div className="text-[11px] text-blue-50/80 space-y-1">
                    <div>→ Launch hiring in 24 hours</div>
                    <div>→ Reduce time-to-hire by 60%</div>
                    <div>→ Only pay for results</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </PageLayout>
  );
}
