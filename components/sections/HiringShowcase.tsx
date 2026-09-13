"use client";

// Section 05 — AI for Hiring homepage callout
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

export default function HiringShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el, i) => {
      const isScale = el.dataset.reveal === "scale";
      el.style.opacity = "0";
      el.style.transform = isScale ? "scale(0.97) translateY(10px)" : "translateY(20px)";
      el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`;
    });
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        items.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
        obs.unobserve(section);
      }
    }, { threshold: 0.08 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div data-reveal>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 pulse-dot flex-shrink-0" />
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Available Now</span>
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              AI for Hiring
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
              From job description<br /> to qualified candidate.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              SoloBuildAI&apos;s hiring solution brings candidate discovery, outreach,
              voice screening, qualification and recruiter workflows into one connected system.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Screen candidates automatically via AI voice calls",
                "Engage candidate pools with outbound calling campaigns",
                "Qualify and rank candidates based on role criteria",
                "Schedule interviews without manual coordination",
                "Give recruiters full context — call summaries, scores, insights",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/solutions/hiring"
                className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                Explore AI for Hiring
              </Link>
              <a
                href={SIGN_IN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
              >
                Open Hiring Platform
              </a>
            </div>
          </div>

          {/* Right — dashboard screenshot
              PLACEHOLDER: Replace /images/hiring-dashboard-1.png with actual screenshot.
              Aspect ratio 16:10. Layout will not need to change. */}
          <div data-reveal="scale">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
                  <span className="text-[11px] font-medium text-slate-300 uppercase tracking-widest">
                    Recruitment Operations
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">AI Active</span>
              </div>
              <Image
                src="/images/hiring-dashboard-1.png"
                alt="SoloBuildAI Hiring Platform — Recruitment Operations dashboard"
                width={1400}
                height={875}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
