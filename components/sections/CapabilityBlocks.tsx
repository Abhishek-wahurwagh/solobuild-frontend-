"use client";

import { useEffect, useRef } from "react";

// Section 03 — What SoloBuildAI Does
// Five large capability blocks in an architectural horizontal composition

const CAPABILITIES = [
  {
    id: "understand",
    label: "Understand",
    headline: "Read context,\nnot just words.",
    body: "SoloBuildAI systems understand the intent behind a request — the workflow it sits in, the people involved, and what a good outcome looks like.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: "bg-white",
    border: "border-slate-200",
    accent: "text-blue-600",
    index: "01",
  },
  {
    id: "guide",
    label: "Guide",
    headline: "Walk people\nthrough work.",
    body: "When a process is complex, the AI guides the person step by step — asking questions, providing context, and keeping work moving forward.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    bg: "bg-[#eff6ff]",
    border: "border-blue-100",
    accent: "text-blue-600",
    index: "02",
  },
  {
    id: "act",
    label: "Act",
    headline: "Perform tasks\nacross tools.",
    body: "AI doesn't just advise — it acts. It accesses information, triggers workflows, updates records, and moves work forward without waiting for someone to do it manually.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bg: "bg-[#2563eb]",
    border: "border-blue-600",
    accent: "text-blue-200",
    index: "03",
    dark: true,
  },
  {
    id: "interact",
    label: "Interact",
    headline: "Communicate\nnaturally.",
    body: "Voice-first interactions let AI talk to people the way people talk to each other — especially useful for outreach, screening and support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    bg: "bg-[#eff6ff]",
    border: "border-blue-100",
    accent: "text-blue-600",
    index: "04",
  },
  {
    id: "escalate",
    label: "Escalate",
    headline: "Know when to\ncall a human.",
    body: "Some decisions require judgment, authority or relationships. AI recognizes those moments and hands off — with full context — to the right person.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    bg: "bg-white",
    border: "border-slate-200",
    accent: "text-blue-600",
    index: "05",
  },
];

export default function CapabilityBlocks() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observe = (el: HTMLElement | null, delay = 0) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      }, { threshold: 0.08 });
      obs.observe(el);
      return obs;
    };
    const o1 = observe(headerRef.current, 0);
    const o2 = observe(gridRef.current, 80);
    return () => { o1?.disconnect(); o2?.disconnect(); };
  }, []);
  return (
    <section className="py-24" style={{ backgroundColor: "#080d1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase block mb-4" style={{ color: "#3b7eff" }}>
            What SoloBuildAI Does
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-5" style={{ color: "#f0f4ff" }}>
            AI that understands the work<br className="hidden md:block" /> behind the request.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3c4" }}>
            SoloBuildAI builds systems that understand context, guide people through complex processes,
            take action across workflows, and involve humans when the situation requires judgment.
          </p>
        </div>

        {/* Capability blocks */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.id}
              className={`flex flex-col p-7 lg:p-8`}
              style={{
                background: cap.dark ? "#2563eb" : i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(59,126,255,0.06)",
                borderRight: i < CAPABILITIES.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <span className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: cap.dark ? "rgba(191,219,254,0.7)" : "#3b5a7a" }}>
                {cap.index}
              </span>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: cap.dark ? "rgba(255,255,255,0.15)" : "rgba(59,126,255,0.12)", color: cap.dark ? "#ffffff" : "#3b7eff" }}>
                {cap.icon}
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: cap.dark ? "#bfdbfe" : "#3b7eff" }}>
                {cap.label}
              </span>
              <h3 className="text-xl font-semibold leading-snug mb-4 whitespace-pre-line" style={{ color: cap.dark ? "#ffffff" : "#f0f4ff" }}>
                {cap.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: cap.dark ? "#bfdbfe" : "#94a3c4" }}>
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
