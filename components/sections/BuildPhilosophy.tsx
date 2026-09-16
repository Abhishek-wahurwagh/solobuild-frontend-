"use client";

import { useEffect, useRef } from "react";

const STAGES = [
  {
    number: "01",
    label: "Discover",
    headline: "Find a real operational problem.",
    body: "We start by understanding how work actually happens inside an organization — where it slows down, where people spend time they shouldn't, and where AI could genuinely help.",
    detail: "Interviews · Workflow mapping · Problem definition",
    bgStyle: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" },
    numColor: "rgba(37,99,235,0.2)",
    labelColor: "#3b7eff",
    headlineColor: "#f0f4ff",
    bodyColor: "#94a3c4",
    detailColor: "#3b5a7a",
    arrowBg: "rgba(255,255,255,0.06)",
    arrowBorder: "rgba(255,255,255,0.12)",
  },
  {
    number: "02",
    label: "Build",
    headline: "Create a practical AI system around the workflow.",
    body: "We design and deploy an AI system that fits how the team works — not how we think it works. We validate against real users, real data, and real outcomes.",
    detail: "System design · Deployment · Iteration",
    bgStyle: { background: "#2563eb", border: "1px solid #1d4ed8" },
    numColor: "rgba(147,197,253,0.3)",
    labelColor: "#bfdbfe",
    headlineColor: "#ffffff",
    bodyColor: "#bfdbfe",
    detailColor: "#93c5fd",
    arrowBg: "rgba(255,255,255,0.15)",
    arrowBorder: "rgba(255,255,255,0.25)",
  },
  {
    number: "03",
    label: "Productize",
    headline: "Turn what works into a repeatable solution.",
    body: "When a solution proves it creates real value, we turn it into a product that can be deployed again and again — improving each time across different organizations.",
    detail: "Product packaging · Repeatability · Scale",
    bgStyle: { background: "#0b1736", border: "1px solid rgba(37,99,235,0.3)" },
    numColor: "rgba(37,99,235,0.25)",
    labelColor: "#60a5fa",
    headlineColor: "#f0f4ff",
    bodyColor: "#6b89b0",
    detailColor: "#3b5a7a",
    arrowBg: "transparent",
    arrowBorder: "transparent",
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
    <section ref={sectionRef} className="py-24" style={{ backgroundColor: "#0d1426" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div data-header className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest block mb-4" style={{ color: "#3b7eff" }}>
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4" style={{ color: "#f0f4ff" }}>
            Built around problems,<br /> not hype.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3c4" }}>
            We experiment across industries and use cases to find where AI creates clear operational value.
            When a solution proves useful, we turn it into a repeatable product.
          </p>
        </div>

        <div data-grid className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden">
          {STAGES.map((stage, i) => (
            <div
              key={stage.number}
              className="p-10 lg:p-12 flex flex-col gap-5 relative"
              style={{
                ...stage.bgStyle,
                borderRight: i < STAGES.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined,
              }}
            >
              <span className="text-8xl font-black leading-none select-none mb-2" style={{ color: stage.numColor }}>
                {stage.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: stage.labelColor }}>
                {stage.label}
              </span>
              <h3 className="text-2xl font-semibold leading-snug tracking-tight" style={{ color: stage.headlineColor }}>
                {stage.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: stage.bodyColor }}>
                {stage.body}
              </p>
              <div className="mt-auto pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-xs font-medium" style={{ color: stage.detailColor }}>
                  {stage.detail}
                </span>
              </div>
              {i < STAGES.length - 1 && (
                <div
                  className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center"
                  style={{ background: stage.arrowBg, border: `1px solid ${stage.arrowBorder}` }}
                >
                  <svg className="w-4 h-4" style={{ color: "#3b7eff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
