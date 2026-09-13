"use client";

import { useState } from "react";
import Link from "next/link";
import FormField from "@/components/ui/FormField";

const SOLUTIONS = [
  {
    id: "hiring",
    label: "AI for Hiring",
    description: "Voice screening, candidate discovery, and recruiter workflows.",
    available: true,
  },
  {
    id: "sales",
    label: "AI for Sales",
    description: "Intelligent outreach, pipeline management and conversation AI.",
    available: false,
  },
  {
    id: "customer-support",
    label: "AI for Customer Support",
    description: "AI-first support that resolves queries and escalates intelligently.",
    available: false,
  },
  {
    id: "operations",
    label: "AI for Operations",
    description: "Operational intelligence and multi-step workflow automation.",
    available: false,
  },
  {
    id: "custom",
    label: "Custom AI Solutions",
    description: "A tailored AI system built around your specific operational problem.",
    available: false,
    isContact: true,
  },
];

type HiringForm = {
  fullName: string;
  workEmail: string;
  password: string;
  company: string;
  jobTitle: string;
};

type HiringErrors = Partial<Record<keyof HiringForm, string>>;

const EMPTY_HIRING: HiringForm = {
  fullName: "",
  workEmail: "",
  password: "",
  company: "",
  jobTitle: "",
};

function validateHiring(f: HiringForm): HiringErrors {
  const e: HiringErrors = {};
  if (!f.fullName.trim()) e.fullName = "Full name is required.";
  if (!f.workEmail.trim()) e.workEmail = "Work email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.workEmail)) e.workEmail = "Enter a valid email address.";
  if (!f.password) e.password = "Password is required.";
  else if (f.password.length < 8) e.password = "Password must be at least 8 characters.";
  if (!f.company.trim()) e.company = "Company is required.";
  if (!f.jobTitle.trim()) e.jobTitle = "Job title is required.";
  return e;
}

/* ── Step 1: Solution Selection ───────────────────────────────────────── */
function SolutionSelection({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
        What would you like to use SoloBuildAI for?
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Select a solution to get started. More solutions are in development.
      </p>
      <div className="space-y-3">
        {SOLUTIONS.map((sol) => (
          <button
            key={sol.id}
            type="button"
            disabled={!sol.available && !sol.isContact}
            onClick={() => sol.available ? onSelect(sol.id) : sol.isContact ? onSelect("contact") : undefined}
            className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all duration-150 ${
              sol.available
                ? "border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 cursor-pointer"
                : sol.isContact
                ? "border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                : "border-slate-100 bg-slate-50/50 cursor-not-allowed opacity-60"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${sol.available ? "border-blue-500" : "border-slate-300"}`}>
              {sol.available && <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-900">{sol.label}</span>
                {sol.available && (
                  <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Available
                  </span>
                )}
                {!sol.available && !sol.isContact && (
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-400 border border-slate-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Coming Soon
                  </span>
                )}
                {sol.isContact && (
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Contact Us
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5 leading-snug">{sol.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Step 2: Hiring Account Form ──────────────────────────────────────── */
function HiringAccountForm({ onBack }: { onBack: () => void }) {
  const [form, setForm] = useState<HiringForm>(EMPTY_HIRING);
  const [errors, setErrors] = useState<HiringErrors>({});
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(field: keyof HiringForm, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateHiring(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // TODO: Replace with real account creation API
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Account created.</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
          Your SoloBuildAI hiring account has been created. You can now sign in to access the platform.
        </p>
        <a
          href="https://main.d3ataamm8hxei7.amplifyapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors"
        >
          Go to Hiring Platform
        </a>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-6">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back
      </button>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
          AI for Hiring
        </span>
      </div>
      <h1 className="text-2xl font-semibold text-slate-900 mb-2 mt-3 tracking-tight">
        Create your hiring account.
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Get started with SoloBuildAI&apos;s AI hiring platform.
      </p>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Full Name" id="fullName" required
            placeholder="Jane Smith" value={form.fullName}
            onChange={(e) => handle("fullName", e.target.value)} error={errors.fullName}
          />
          <FormField
            label="Work Email" id="workEmail" type="email" required
            placeholder="jane@company.com" value={form.workEmail}
            onChange={(e) => handle("workEmail", e.target.value)} error={errors.workEmail}
          />
        </div>
        <div className="relative">
          <FormField
            label="Password" id="password" type={showPass ? "text" : "password"} required
            placeholder="Minimum 8 characters" value={form.password}
            onChange={(e) => handle("password", e.target.value)} error={errors.password}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-[2.1rem] text-slate-400 hover:text-slate-600 transition-colors"
            tabIndex={-1}
          >
            {showPass ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Company" id="company" required
            placeholder="Acme Corp" value={form.company}
            onChange={(e) => handle("company", e.target.value)} error={errors.company}
          />
          <FormField
            label="Job Title" id="jobTitle" required
            placeholder="Talent Acquisition Lead" value={form.jobTitle}
            onChange={(e) => handle("jobTitle", e.target.value)} error={errors.jobTitle}
          />
        </div>
        <div className="pt-2">
          <button
            type="submit" disabled={loading}
            className="w-full py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Creating account...
              </>
            ) : "Create Hiring Account"}
          </button>
        </div>
      </form>
      <p className="text-xs text-slate-400 mt-5 text-center">
        Already have an account?{" "}
        <a href="https://main.d3ataamm8hxei7.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
}

/* ── Main Flow ────────────────────────────────────────────────────────── */
export default function SignupFlow() {
  const [step, setStep] = useState<"select" | "hiring" | "contact">("select");

  if (step === "contact") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Let&apos;s talk about your solution.</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-8">
          Custom AI Solutions require a discovery conversation. Tell us about your operational problem and we&apos;ll design something around it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/solutions/custom" className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors">
            Submit an enquiry
          </Link>
          <button onClick={() => setStep("select")} className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors">
            Go back
          </button>
        </div>
      </div>
    );
  }

  if (step === "hiring") return <HiringAccountForm onBack={() => setStep("select")} />;

  return (
    <SolutionSelection
      onSelect={(id) => {
        if (id === "hiring") setStep("hiring");
        if (id === "contact") setStep("contact");
      }}
    />
  );
}
