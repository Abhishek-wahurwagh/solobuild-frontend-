"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Card data ─────────────────────────────────────────────────────────── */
interface WorkflowCard {
  id: string;
  step: string;
  title: string;
  status: string;
  statusColor: "blue" | "green" | "amber" | "white";
  fields: string[];
  icon: React.ReactNode;
  isCentral?: boolean;
}

const WF_CARDS: WorkflowCard[] = [
  {
    id: "job",
    step: "01",
    title: "Job Intelligence",
    status: "Role understood",
    statusColor: "blue",
    fields: ["Job title", "Required skills", "Experience level", "Location"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
  },
  {
    id: "discovery",
    step: "02",
    title: "Candidate Discovery",
    status: "Matching",
    statusColor: "amber",
    fields: ["Candidate profile", "Skills match", "Experience", "Contact readiness"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  },
  {
    id: "campaign",
    step: "03",
    title: "Campaign Engine",
    status: "Campaign active",
    statusColor: "green",
    fields: ["Candidates queued", "Outreach sent", "Follow-ups", "Response tracking"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
  },
  {
    id: "screening",
    step: "04",
    title: "AI Voice Screening",
    status: "Screening",
    statusColor: "white",
    isCentral: true,
    fields: ["AI voice conversation", "Qualification questions", "Candidate responses", "Conversation summary"],
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>,
  },
  {
    id: "intelligence",
    step: "05",
    title: "Candidate Intelligence",
    status: "Analyzing",
    statusColor: "amber",
    fields: ["Qualification score", "Key responses", "Experience match", "Recruiter insights"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  },
  {
    id: "review",
    step: "06",
    title: "Recruiter Review",
    status: "Human review",
    statusColor: "blue",
    fields: ["Shortlisted candidates", "AI-generated insights", "Review actions", "Decision"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
  },
  {
    id: "interview",
    step: "07",
    title: "Interview",
    status: "Ready to schedule",
    statusColor: "green",
    fields: ["Interview scheduling", "Candidate availability", "Interviewer assignment", "Confirmation"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
  },
  {
    id: "hire",
    step: "08",
    title: "Hire",
    status: "Ready",
    statusColor: "green",
    fields: ["Final candidate", "Decision confirmed", "Offer stage", "Next steps"],
    icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  },
];

const STATUS_STYLES = {
  blue:  "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  white: "bg-white/20 text-white border-white/30",
};

/* ─── Single card ───────────────────────────────────────────────────────── */
function Card({ card, visible, delay = 0, active, onHover }: {
  card: WorkflowCard;
  visible: boolean;
  delay?: number;
  active: boolean;
  onHover: (id: string | null) => void;
}) {
  const isCentral = card.isCentral;

  return (
    <div
      className={`wf-card rounded-xl border p-5 flex flex-col gap-3 select-none ${
        isCentral
          ? "bg-[#1d4ed8] border-blue-600 text-white"
          : "bg-white border-slate-200"
      } ${active ? "wf-card-active" : ""}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
      }}
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isCentral ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
          }`}>
            {card.icon}
          </div>
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-widest block ${isCentral ? "text-blue-200" : "text-slate-400"}`}>
              {card.step}
            </span>
            <span className={`text-sm font-semibold leading-tight ${isCentral ? "text-white" : "text-slate-900"}`}>
              {card.title}
            </span>
          </div>
        </div>
        <span className={`text-[10px] font-semibold border rounded-full px-2 py-0.5 uppercase tracking-wide whitespace-nowrap flex-shrink-0 ${STATUS_STYLES[card.statusColor]}`}>
          {card.status}
        </span>
      </div>

      {/* Voice waveform for central card */}
      {isCentral && (
        <div className="flex items-center gap-1 py-1">
          {[3, 7, 5, 9, 6, 8, 4, 7, 5, 9, 6, 4, 8, 5, 7].map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-blue-300"
              style={{
                height: `${h * 2.5}px`,
                opacity: 0.5 + (h / 20),
                animation: `pulse-dot ${1.4 + i * 0.07}s ease-in-out infinite`,
              }}
            />
          ))}
          <span className="ml-2 text-[10px] text-blue-200 font-medium uppercase tracking-widest">Voice</span>
        </div>
      )}

      {/* Fields */}
      <div className="flex flex-col gap-1.5 mt-0.5">
        {card.fields.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isCentral ? "bg-blue-300" : "bg-blue-400"}`} />
            <span className={`text-xs leading-snug ${isCentral ? "text-blue-100" : "text-slate-500"}`}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SVG connector lines ─────────────────────────────────────────────── */
function Connector({ visible, delay = 0 }: { visible: boolean; delay?: number }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className="h-8 w-px bg-blue-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
          transition: `opacity 0.3s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
        }}
      />
    </div>
  );
}

function HConnector({ visible, delay = 0 }: { visible: boolean; delay?: number }) {
  return (
    <div
      className="h-px bg-blue-200 mx-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: `opacity 0.3s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    />
  );
}

/* ─── Main component ──────────────────────────────────────────────────── */
export default function HiringWorkflowV2() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const card = (id: string, delay = 0) => {
    const c = WF_CARDS.find((x) => x.id === id)!;
    return <Card card={c} visible={visible} delay={delay} active={hoveredId === id} onHover={setHoveredId} />;
  };

  return (
    <section className="py-28 bg-[#eff6ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
            Hiring Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
            One connected<br /> hiring system.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Every step from job description to hire — connected, automated, and designed
            to keep recruiters in control of the decisions that matter.
          </p>
        </div>

        <div ref={ref}>
          {/* ── TOP ROW: Job + Discovery + Campaign → converge into Screening ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {card("job", 0)}
            {card("discovery", 80)}
            {card("campaign", 160)}
          </div>

          {/* Converging connectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-0">
            <Connector visible={visible} delay={240} />
            <Connector visible={visible} delay={260} />
            <Connector visible={visible} delay={280} />
          </div>

          {/* Horizontal merge line */}
          <div className="hidden md:flex items-center justify-center mb-0">
            <div
              className="h-px bg-blue-200 flex-1 max-w-[40%]"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease 300ms`,
              }}
            />
            <div className="w-2 h-2 rounded-full bg-blue-400 mx-1" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease 320ms" }} />
            <div
              className="h-px bg-blue-200 flex-1 max-w-[40%]"
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity 0.4s ease 300ms`,
              }}
            />
          </div>

          {/* Center drop connector */}
          <Connector visible={visible} delay={340} />

          {/* ── CENTRAL: AI Voice Screening ── */}
          <div className="max-w-md mx-auto">
            {card("screening", 380)}
          </div>

          {/* Split out from screening */}
          <Connector visible={visible} delay={500} />
          <div className="hidden md:flex items-center justify-center mb-0">
            <div className="h-px bg-blue-200 flex-1 max-w-[40%]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease 540ms" }} />
            <div className="w-2 h-2 rounded-full bg-blue-400 mx-1" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease 560ms" }} />
            <div className="h-px bg-blue-200 flex-1 max-w-[40%]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease 540ms" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-0 mt-0">
            <Connector visible={visible} delay={580} />
            <Connector visible={visible} delay={600} />
            <Connector visible={visible} delay={620} />
          </div>

          {/* ── BOTTOM ROW: Intelligence + Review + Interview ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {card("intelligence", 640)}
            {card("review", 700)}
            {card("interview", 760)}
          </div>

          {/* Converge again */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Connector visible={visible} delay={820} />
            <Connector visible={visible} delay={840} />
            <Connector visible={visible} delay={860} />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="h-px bg-blue-200 flex-1 max-w-[40%]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease 880ms" }} />
            <div className="w-2 h-2 rounded-full bg-blue-400 mx-1" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease 900ms" }} />
            <div className="h-px bg-blue-200 flex-1 max-w-[40%]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease 880ms" }} />
          </div>
          <Connector visible={visible} delay={920} />

          {/* ── HIRE ── */}
          <div className="max-w-sm mx-auto">
            {card("hire", 960)}
          </div>
        </div>
      </div>
    </section>
  );
}
