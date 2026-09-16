"use client";

import { useEffect, useRef } from "react";

// Section 04 — How the System Works: From intent to action
// Two-column layout: left = copy + layer list, right = visual system diagram

const LAYERS = [
  {
    id: "person",
    label: "Person",
    sub: "Employee · Candidate · Customer",
    desc: "A question, a task, or a decision to make.",
    bg: "#ffffff",
    border: "#e2e8f0",
    textColor: "#0f172a",
    subColor: "#64748b",
    accentColor: "#64748b",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "interact",
    label: "AI Interaction",
    sub: "Voice · Text · Structured",
    desc: "AI engages naturally, listens and understands intent.",
    bg: "#eff6ff",
    border: "#bfdbfe",
    textColor: "#1e3a8a",
    subColor: "#3b82f6",
    accentColor: "#3b82f6",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: "understand",
    label: "Understanding",
    sub: "Context · Workflow · People",
    desc: "Maps the request to the workflow and what needs to happen.",
    bg: "#dbeafe",
    border: "#93c5fd",
    textColor: "#1e40af",
    subColor: "#2563eb",
    accentColor: "#2563eb",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "reason",
    label: "Reasoning + Action",
    sub: "Planning · Execution · Tasks",
    desc: "Determines the right steps and executes across tools and systems.",
    bg: "#2563eb",
    border: "#1d4ed8",
    textColor: "#ffffff",
    subColor: "#bfdbfe",
    accentColor: "#bfdbfe",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    id: "human",
    label: "Human When Needed",
    sub: "Escalation · Handoff · Oversight",
    desc: "Hands off with full context when judgment is required.",
    bg: "#fefce8",
    border: "#fde68a",
    textColor: "#92400e",
    subColor: "#d97706",
    accentColor: "#d97706",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function SystemArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const els = section.querySelectorAll<HTMLElement>("[data-reveal]");
    const layers = section.querySelectorAll<HTMLElement>("[data-layer]");

    // Initially hidden
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`;
    });
    layers.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(16px)";
      el.style.transition = `opacity 0.5s ease ${i * 75}ms, transform 0.5s ease ${i * 75}ms`;
    });

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        els.forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
        layers.forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateX(0)"; });
        obs.unobserve(section);
      }
    }, { threshold: 0.08 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24" style={{ backgroundColor: "#0d1426" }}>      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div data-reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase block mb-4" style={{ color: "#3b7eff" }}>
            How the System Works
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4" style={{ color: "#f0f4ff" }}>
            AI that can understand,<br className="hidden md:block" /> guide and act.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3c4" }}>
            Every SoloBuildAI system follows the same architecture — understand the situation,
            reason about it, act on it, and bring a human in when it matters.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — layer stack */}
          <div className="flex flex-col gap-2">
            {LAYERS.map((layer, i) => (
              <div key={layer.id}>
                <div
                  data-layer
                  className="flex items-start gap-4 rounded-xl px-5 py-4 border"
                  style={{ backgroundColor: layer.bg, borderColor: layer.border }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: layer.id === "reason" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)",
                      border: `1px solid ${layer.border}`,
                    }}
                  >
                    <span style={{ color: layer.accentColor }}>{layer.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-sm font-semibold" style={{ color: layer.textColor }}>{layer.label}</span>
                      <span className="text-xs font-medium" style={{ color: layer.subColor }}>{layer.sub}</span>
                    </div>
                    <p className="text-xs leading-relaxed mt-0.5" style={{ color: layer.subColor }}>{layer.desc}</p>
                  </div>
                </div>
                {i < LAYERS.length - 1 && (
                  <div className="flex items-center gap-2 pl-9 py-0.5">
                    <div className="w-px h-4 bg-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right — visual system panel */}
          <div data-reveal className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
              {/* Panel header */}
              <div className="bg-[#1d4ed8] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-300 pulse-dot" />
                  <span className="text-xs font-semibold text-blue-100 uppercase tracking-widest">SoloBuildAI System</span>
                </div>
                <span className="text-xs text-blue-300">Active</span>
              </div>

              {/* Visual flow */}
              <div className="bg-white p-6 space-y-3">
                {/* Request row */}
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">Person makes a request</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Voice or text input</p>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-4 bg-blue-200" /></div>

                {/* AI Understanding */}
                <div className="bg-[#eff6ff] border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-700">AI Processing</span>
                    <span className="text-[10px] bg-blue-100 text-blue-600 border border-blue-200 rounded-full px-2 py-0.5 font-semibold uppercase tracking-wide">Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Understand", color: "#dbeafe", textColor: "#1e40af" },
                      { label: "Reason", color: "#2563eb", textColor: "#ffffff" },
                      { label: "Plan", color: "#1d4ed8", textColor: "#ffffff" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-lg p-2.5 text-center"
                        style={{ backgroundColor: s.color }}
                      >
                        <span className="text-[11px] font-semibold" style={{ color: s.textColor }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-4 bg-blue-200" /></div>

                {/* Action row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-600 rounded-xl p-4">
                    <p className="text-[11px] font-semibold text-blue-200 uppercase tracking-wide mb-1">Action</p>
                    <p className="text-xs text-white font-medium">Execute workflow</p>
                    <div className="flex gap-1 mt-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="flex-1 h-1 bg-blue-400 rounded-full" style={{ opacity: 0.5 + i * 0.17 }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#fefce8] border border-amber-200 rounded-xl p-4">
                    <p className="text-[11px] font-semibold text-amber-600 uppercase tracking-wide mb-1">Escalate</p>
                    <p className="text-xs text-amber-800 font-medium">Human when needed</p>
                    <div className="mt-2 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-amber-400 pulse-dot" />
                      <span className="text-[10px] text-amber-600">Awaiting decision</span>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex justify-center"><div className="w-px h-4 bg-slate-200" /></div>
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-700">Work complete</p>
                    <p className="text-[11px] text-emerald-500 mt-0.5">Outcome delivered, workflow advanced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
