// Section 08 — Solutions with blue contrast treatment per status
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "hiring",
    title: "AI for Hiring",
    status: "available" as const,
    statusLabel: "Available Now",
    desc: "Screen candidates automatically. Engage via voice. Guide recruiters through qualification to hire.",
    href: "/solutions/hiring",
    cta: "Explore",
    bg: "bg-[#eff6ff]",
    border: "border-blue-200",
    titleCls: "text-slate-900",
    descCls: "text-slate-600",
  },
  {
    id: "sales",
    title: "AI for Sales",
    status: "soon" as const,
    statusLabel: "Coming Soon",
    desc: "Intelligent outreach, pipeline management and sales workflow automation.",
    href: "/solutions/sales",
    cta: "Learn more",
    bg: "bg-slate-50",
    border: "border-slate-200",
    titleCls: "text-slate-700",
    descCls: "text-slate-500",
  },
  {
    id: "support",
    title: "AI for Customer Support",
    status: "soon" as const,
    statusLabel: "Coming Soon",
    desc: "AI-first support that resolves queries and escalates to humans at exactly the right moment.",
    href: "/solutions/customer-support",
    cta: "Learn more",
    bg: "bg-slate-50",
    border: "border-slate-200",
    titleCls: "text-slate-700",
    descCls: "text-slate-500",
  },
  {
    id: "operations",
    title: "AI for Operations",
    status: "soon" as const,
    statusLabel: "Coming Soon",
    desc: "Operational intelligence that surfaces insights and automates multi-step workflows.",
    href: "/solutions/operations",
    cta: "Learn more",
    bg: "bg-slate-50",
    border: "border-slate-200",
    titleCls: "text-slate-700",
    descCls: "text-slate-500",
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    status: "custom" as const,
    statusLabel: "Talk to us",
    desc: "Built around your specific operational problem. We design, deploy and validate a practical AI system for your workflow.",
    href: "/solutions/custom",
    cta: "Discuss your workflow",
    bg: "bg-[#0b1736]",
    border: "border-navy-800",
    titleCls: "text-white",
    descCls: "text-blue-200",
    dark: true,
  },
];

const STATUS_BADGE = {
  available: "inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest bg-blue-600 text-white rounded-full px-3 py-1",
  soon: "text-[11px] font-semibold uppercase tracking-widest text-slate-400 bg-slate-100 border border-slate-200 rounded-full px-3 py-1",
  custom: "text-[11px] font-semibold uppercase tracking-widest text-blue-300 bg-blue-900/40 border border-blue-700 rounded-full px-3 py-1",
};

export default function EnterpriseSolutions() {
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
      card.style.transition = `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 75}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 75}ms`;
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
    <section ref={sectionRef} className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        <div data-header className="mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Solutions</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight">
            Practical AI across<br /> the organization.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              data-card
              className={`group flex flex-col p-8 rounded-2xl border ${sol.bg} ${sol.border} transition-all duration-200 hover:shadow-md`}
            >
              {/* Status */}
              <div className="mb-6">
                <span className={STATUS_BADGE[sol.status]}>
                  {sol.status === "available" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white pulse-dot" />
                  )}
                  {sol.statusLabel}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-semibold mb-3 ${sol.titleCls}`}>{sol.title}</h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed flex-1 mb-8 ${sol.descCls}`}>{sol.desc}</p>

              {/* CTA */}
              {sol.status !== "soon" ? (
                <Link
                  href={sol.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    sol.dark
                      ? "text-blue-300 hover:text-white"
                      : "text-blue-600 hover:text-blue-700"
                  } group`}
                >
                  {sol.cta}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ) : (
                <span className="text-sm font-medium text-slate-400">{sol.cta}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
