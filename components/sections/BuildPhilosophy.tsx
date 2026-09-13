"use client";

import { useEffect, useRef } from "react";

// Section 07 — Built around problems, not hype
// Three large panels: Discover → Build → Productize

const STAGES = [
  {
    number: "01",
    label: "Discover",
    headline: "Find a real operational problem.",
    body: "We start by understanding how work actually happens inside an organization — where it slows down, where people spend time they shouldn't, and where AI could genuinely help.",
    detail: "Interviews · Workflow mapping · Problem definition",
    bg: "bg-white",
    border: "border-slate-200",
    numCls: "text-blue-100",
    labelCls: "text-blue-600",
    dark: false,
  },
  {
    number: "02",
    label: "Build",
    headline: "Create a practical AI system around the workflow.",
    body: "We design and deploy an AI system that fits how the team works — not how we think it works. We validate against real users, real data, and real outcomes.",
    detail: "System design · Deployment · Iteration",
    bg: "bg-[#2563eb]",
    border: "border-blue-600",
    numCls: "text-blue-400",
    labelCls: "text-blue-200",
    dark: true,
  },
  {
    number: "03",
    label: "Productize",
    headline: "Turn what works into a repeatable solution.",
    body: "When a solution proves it creates real value, we turn it into a product that can be deployed again and again — improving each time across different organizations.",
    detail: "Product packaging · Repeatability · Scale",
    bg: "bg-[#0b1736]",
    border: "border-blue-950",
    numCls: "text-blue-900",
    labelCls: "text-blue-400",
    dark: true,
  },
];

export default function BuildPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const header = section.querySelector<HTMLElement>("[data-header]");
    const grid = section.querySelector<HTMLElement>("[data-grid]");

    [header, grid].filter(Boolean).forEach((el, i) => {
      el!.style.opacity = "0";
      el!.style.transform = "translateY(20px)";
      el!.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`;
    });

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        [header, grid].filter(Boolean).forEach((el) => {
          el!.style.opacity = "1";
          el!.style.transform = "translateY(0)";
        });
        obs.unobserve(section);
      }
    }, { threshold: 0.08 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div data-header className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
            Built around problems,<br /> not hype.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We experiment across industries and use cases to find where AI creates clear operational value.
            When a solution proves useful, we turn it into a repeatable product.
          </p>
        </div>

        <div data-grid className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200">
          {STAGES.map((stage, i) => (
            <div
              key={stage.number}
              className={`${stage.bg} border-r border-slate-200 last:border-r-0 p-10 lg:p-12 flex flex-col gap-5 relative`}
            >
              <span className={`text-8xl font-black leading-none select-none mb-2 ${stage.numCls}`}>
                {stage.number}
              </span>
              <span className={`text-xs font-bold uppercase tracking-widest ${stage.labelCls}`}>
                {stage.label}
              </span>
              <h3 className={`text-2xl font-semibold leading-snug tracking-tight ${stage.dark ? "text-white" : "text-slate-900"}`}>
                {stage.headline}
              </h3>
              <p className={`text-sm leading-relaxed ${stage.dark ? "text-blue-100" : "text-slate-500"}`}>
                {stage.body}
              </p>
              <div className={`mt-auto pt-6 border-t ${stage.dark ? "border-white/10" : "border-slate-100"}`}>
                <span className={`text-xs font-medium ${stage.dark ? "text-blue-300" : "text-slate-400"}`}>
                  {stage.detail}
                </span>
              </div>
              {i < STAGES.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full items-center justify-center shadow-sm">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
