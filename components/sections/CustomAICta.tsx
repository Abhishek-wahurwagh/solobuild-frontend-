// Section 09 — Custom AI — deep navy section with pale blue contrast
"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CustomAICta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`;
    });
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        items.forEach((el) => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; });
        obs.unobserve(section);
      }
    }, { threshold: 0.08 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="bg-[#0b1736] py-24 relative overflow-hidden">
      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div data-reveal>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 block mb-5">
              Custom AI Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
              Have a workflow<br /> worth solving?
            </h2>
            <p className="text-xl text-blue-200 leading-relaxed mb-4">
              Tell us where work gets stuck.
            </p>
            <p className="text-base text-blue-300 leading-relaxed mb-10">
              We&apos;ll explore whether an AI system can make it simpler, faster, or more effective —
              and build one around your specific operational reality.
            </p>
            <Link
              href="/solutions/custom"
              className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-500 transition-colors shadow-lg"
            >
              Discuss your workflow
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Right — pale blue panels showing the conversation structure */}
          <div data-reveal style={{ transitionDelay: "100ms" }}>
            <div className="flex flex-col gap-3">
              {[
                { label: "Where does work slow down?", sub: "Tell us the operational problem" },
                { label: "What should the AI do?", sub: "Describe the ideal outcome" },
                { label: "How does your team work today?", sub: "Give us context on the current process" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-300 text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{item.label}</p>
                    <p className="text-xs text-blue-300">{item.sub}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-2 px-1">
                <div className="flex-1 h-px bg-blue-800" />
                <span className="text-xs text-blue-500 font-medium">Then we build it.</span>
                <div className="flex-1 h-px bg-blue-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
