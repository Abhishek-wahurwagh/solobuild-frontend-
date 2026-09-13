// Section 10 — Enterprise Foundation (honest, no fake certifications)
"use client";
import { useEffect, useRef } from "react";

const PILLARS = [
  {
    id: "security",
    label: "Security",
    headline: "Controlled access by design.",
    body: "SoloBuildAI systems are built with access control, data handling, and responsible AI workflows in mind from the start — not bolted on after.",
    detail: ["Role-based access", "Responsible AI boundaries", "Workflow audit trails"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "integrations",
    label: "Integrations",
    headline: "Works with the systems you already use.",
    body: "AI value comes from connecting to real organizational data and tools. SoloBuildAI is designed to integrate with existing systems rather than replace them.",
    detail: ["Existing tool compatibility", "Data access design", "API-first approach"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    id: "human",
    label: "Human Control",
    headline: "People remain part of the important decisions.",
    body: "AI can assist, act and escalate — but meaningful decisions stay with humans. Our systems are built to know the difference and act accordingly.",
    detail: ["Human escalation paths", "Approval workflows", "Override by design"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "observability",
    label: "Observability",
    headline: "Workflows that are understandable and traceable.",
    body: "Every AI action should be explainable. SoloBuildAI systems produce structured outputs, activity logs and performance data so teams can understand and improve them.",
    detail: ["Activity logging", "Structured outputs", "Performance tracking"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function EnterpriseFoundation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector<HTMLElement>("[data-header]");
    const cards = section.querySelectorAll<HTMLElement>("[data-card]");

    if (header) {
      header.style.opacity = "0";
      header.style.transform = "translateY(20px)";
      header.style.transition = "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    }
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
      card.style.transition = `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`;
    });

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (header) { header.style.opacity = "1"; header.style.transform = "translateY(0)"; }
        cards.forEach((card) => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; });
        obs.unobserve(section);
      }
    }, { threshold: 0.06 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div data-header className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
            Built for Organizations
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
            Designed for real<br /> organizational environments.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            SoloBuildAI is being built with the requirements of real organizational deployment in mind —
            security, integrations, human control, and operational transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <div key={p.id} data-card className="flex flex-col gap-5 p-8 bg-[#f8fafc] border border-slate-200 rounded-2xl hover:border-blue-100 hover:bg-[#eff6ff] transition-colors duration-200">
              {/* Icon + label */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {p.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{p.label}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.headline}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
              </div>

              {/* Detail tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200">
                {p.detail.map((d) => (
                  <span key={d} className="text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
