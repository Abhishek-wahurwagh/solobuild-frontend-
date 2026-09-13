"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* 
  CAROUSEL SLIDES
  ─────────────────────────────────────────────────────────────────────────
  To replace mock images with real screenshots:
  1. Add your screenshot to /public/images/
  2. Update the `image` field in the slides array below
  3. The aspect ratio and layout will remain the same — no redesign needed
*/
const SLIDES = [
  {
    id: "hiring",
    label: "AI for Hiring",
    tag: "Live",
    tagColor: "blue" as const,
    headline: "End-to-end AI recruitment, from job description to hire.",
    description:
      "AI voice screening, candidate discovery, campaign management, and recruiter workflows — all in one platform.",
    href: "/solutions/hiring",
    ctaText: "Learn more",
    // Replace with actual screenshot when available
    image: "/images/hiring-dashboard-1.png",
    imageAlt: "SoloBuildAI Hiring Dashboard — Recruitment Operations view",
  },
  {
    id: "voice",
    label: "Voice AI",
    tag: "Coming Soon",
    tagColor: "slate" as const,
    headline: "Natural voice interaction for any operational workflow.",
    description:
      "AI that speaks, listens, and understands — enabling natural conversations with candidates, customers, and teams.",
    href: "/products/voice-ai",
    ctaText: "Learn more",
    image: null,
    imageAlt: "Voice AI — Coming Soon",
  },
  {
    id: "operations",
    label: "AI for Operations",
    tag: "Coming Soon",
    tagColor: "slate" as const,
    headline: "AI that understands and improves how your organization works.",
    description:
      "Intelligent workflow automation that surfaces insights, takes action, and involves people when it matters.",
    href: "/solutions/operations",
    ctaText: "Learn more",
    image: null,
    imageAlt: "AI for Operations — Coming Soon",
  },
  {
    id: "custom",
    label: "Custom AI Solutions",
    tag: "Enquire",
    tagColor: "slate" as const,
    headline: "Built around the problem, not a template.",
    description:
      "We design and deploy practical AI systems tailored to your specific operational challenge.",
    href: "/solutions/custom",
    ctaText: "Tell us your problem",
    image: null,
    imageAlt: "Custom AI Solutions",
  },
];

const TAG_STYLES = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  slate: "bg-slate-100 text-slate-500 border-slate-200",
};

/* Placeholder visual for non-image slides */
function SlidePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
        <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      </div>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <p className="text-slate-300 text-xs mt-1">Preview coming soon</p>
    </div>
  );
}

export default function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === active) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 180);
    },
    [active, animating]
  );

  const prev = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo]);
  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);

  // Optional subtle autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-2">
              Product Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
              Real workflows. Real impact.
            </h2>
          </div>
          {/* Tab navigation */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  i === active
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Text */}
            <div className={`p-8 md:p-12 flex flex-col justify-center transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}>
              <div className="mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-2.5 py-1 rounded-full uppercase tracking-wide ${TAG_STYLES[slide.tagColor]}`}
                >
                  {slide.tag === "Live" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                  )}
                  {slide.tag}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug mb-4 tracking-tight">
                {slide.headline}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                {slide.description}
              </p>
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
              >
                {slide.ctaText}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Right: Image */}
            <div
              className={`relative bg-slate-50 border-l border-slate-200 transition-opacity duration-200 ${animating ? "opacity-0" : "opacity-100"}`}
              style={{ minHeight: "360px" }}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={active === 0}
                />
              ) : (
                <SlidePlaceholder label={slide.label} />
              )}
            </div>
          </div>

          {/* Bottom controls */}
          <div className="border-t border-slate-100 px-8 py-4 flex items-center justify-between bg-slate-50/50">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? "w-5 h-2 bg-blue-600"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
