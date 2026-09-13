"use client";

import { useEffect, useRef } from "react";

/* ─── Node data ────────────────────────────────────────────────────────── */
const TOP_NODE = {
  id: "engine",
  step: "",
  title: "AI Hiring Engine",
  desc: "Orchestrates the entire recruitment workflow",
  icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  accent: true,
};

const MID_NODES = [
  {
    id: "discover",
    step: "01",
    title: "Discover",
    desc: "Job description + candidate sourcing",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: "engage",
    step: "02",
    title: "Engage",
    desc: "Outbound AI calls + campaign management",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    id: "screen",
    step: "03",
    title: "Screen",
    desc: "AI voice screening + assessment",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

const QUALIFY_NODE = {
  id: "qualify",
  step: "04",
  title: "Qualify",
  desc: "Score + rank candidates automatically",
  icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const BOTTOM_NODES = [
  {
    id: "schedule",
    step: "05",
    title: "Schedule",
    desc: "Auto interview scheduling",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    id: "review",
    step: "06",
    title: "Review",
    desc: "Recruiter review with full AI context",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "insights",
    step: "07",
    title: "Insights",
    desc: "Candidate analytics + skill breakdown",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const HIRE_NODE = {
  id: "hire",
  step: "08",
  title: "Hire",
  desc: "Make the right decision, faster",
  icon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  accent: true,
};

/* ─── Node card ────────────────────────────────────────────────────────── */
function Node({
  step,
  title,
  desc,
  icon,
  accent = false,
  delay = 0,
}: {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="workflow-node opacity-0 translate-y-3 transition-all duration-500 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative flex flex-col gap-2 rounded-xl border p-4 w-[168px] shadow-sm ${
          accent
            ? "bg-blue-600 border-blue-500 text-white"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        {step && (
          <span className={`text-[10px] font-bold uppercase tracking-widest ${accent ? "text-blue-200" : "text-blue-500"}`}>
            {step}
          </span>
        )}
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${accent ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-600"}`}>
          {icon}
        </div>
        <p className={`text-xs font-semibold leading-tight ${accent ? "text-white" : "text-slate-900"}`}>
          {title}
        </p>
        <p className={`text-[11px] leading-relaxed ${accent ? "text-blue-100" : "text-slate-500"}`}>
          {desc}
        </p>
        {/* Status dot */}
        {accent && (
          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/60 pulse-dot" />
        )}
      </div>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────────────── */
export default function HiringWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate nodes
          const nodes = container.querySelectorAll<HTMLElement>(".workflow-node");
          nodes.forEach((n) => {
            n.style.opacity = "1";
            n.style.transform = "translateY(0)";
          });
          // Animate SVG lines
          const lines = container.querySelectorAll<SVGElement>(".wf-line");
          lines.forEach((l) => l.classList.add("visible"));
          observer.unobserve(container);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-auto pb-4">
      <div className="min-w-[720px]">

        {/* Row 0 — Engine (top, centered) */}
        <div className="flex justify-center mb-0">
          <Node {...TOP_NODE} step="" accent delay={0} />
        </div>

        {/* Connector: engine → 3 columns */}
        <div className="flex justify-center">
          <svg width="560" height="52" viewBox="0 0 560 52" className="overflow-visible" fill="none">
            {/* vertical down from engine */}
            <line x1="280" y1="0" x2="280" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" />
            {/* horizontal spread */}
            <line x1="100" y1="20" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "100ms" }} />
            {/* down to each mid node */}
            <line x1="100" y1="20" x2="100" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "180ms" }} />
            <line x1="280" y1="20" x2="280" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "200ms" }} />
            <line x1="460" y1="20" x2="460" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "220ms" }} />
          </svg>
        </div>

        {/* Row 1 — Discover / Engage / Screen */}
        <div className="flex justify-between px-[96px]">
          <Node {...MID_NODES[0]} delay={120} />
          <Node {...MID_NODES[1]} delay={200} />
          <Node {...MID_NODES[2]} delay={280} />
        </div>

        {/* Connector: 3 cols → qualify */}
        <div className="flex justify-center">
          <svg width="560" height="52" viewBox="0 0 560 52" fill="none">
            <line x1="100" y1="0" x2="100" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "320ms" }} />
            <line x1="280" y1="0" x2="280" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "340ms" }} />
            <line x1="460" y1="0" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "360ms" }} />
            <line x1="100" y1="20" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "380ms" }} />
            <line x1="280" y1="20" x2="280" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "420ms" }} />
          </svg>
        </div>

        {/* Row 2 — Qualify (center) */}
        <div className="flex justify-center mb-0">
          <Node {...QUALIFY_NODE} delay={400} />
        </div>

        {/* Connector: qualify → 3 bottom nodes */}
        <div className="flex justify-center">
          <svg width="560" height="52" viewBox="0 0 560 52" fill="none">
            <line x1="280" y1="0" x2="280" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "460ms" }} />
            <line x1="100" y1="20" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "480ms" }} />
            <line x1="100" y1="20" x2="100" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "500ms" }} />
            <line x1="280" y1="20" x2="280" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "520ms" }} />
            <line x1="460" y1="20" x2="460" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "540ms" }} />
          </svg>
        </div>

        {/* Row 3 — Schedule / Review / Insights */}
        <div className="flex justify-between px-[96px]">
          <Node {...BOTTOM_NODES[0]} delay={520} />
          <Node {...BOTTOM_NODES[1]} delay={580} />
          <Node {...BOTTOM_NODES[2]} delay={640} />
        </div>

        {/* Connector: bottom → hire */}
        <div className="flex justify-center">
          <svg width="560" height="52" viewBox="0 0 560 52" fill="none">
            <line x1="100" y1="0" x2="100" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "680ms" }} />
            <line x1="280" y1="0" x2="280" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "700ms" }} />
            <line x1="460" y1="0" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "720ms" }} />
            <line x1="100" y1="20" x2="460" y2="20" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "740ms" }} />
            <line x1="280" y1="20" x2="280" y2="52" stroke="#dbeafe" strokeWidth="1.5" className="wf-line line-draw" style={{ transitionDelay: "760ms" }} />
          </svg>
        </div>

        {/* Row 4 — Hire (bottom, centered) */}
        <div className="flex justify-center">
          <Node {...HIRE_NODE} step="08" accent delay={760} />
        </div>

      </div>
    </div>
  );
}
