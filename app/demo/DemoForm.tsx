"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";

const INTEREST_OPTIONS = [
  { value: "hr-solution", label: "HR Solution" },
  { value: "sales-solution", label: "Sales Solution" },
  { value: "customer-support-solution", label: "Customer Support Solution" },
  { value: "operations-solution", label: "Operations Solution" },
  { value: "custom-ai-solution", label: "Custom AI Solution" },
  { value: "other", label: "Other" },
];

const TEAM_SIZE_OPTIONS = [
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

type Form = {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  phone: string;
  interest: string;
  requirements: string;
  teamSize: string;
  message: string;
};

type Errors = Partial<Record<keyof Form, string>>;

const EMPTY: Form = {
  fullName: "", workEmail: "", company: "", jobTitle: "",
  phone: "", interest: "", requirements: "", teamSize: "", message: "",
};

function validate(f: Form): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Full name is required.";
  if (!f.workEmail.trim()) e.workEmail = "Work email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.workEmail)) e.workEmail = "Enter a valid email address.";
  if (!f.company.trim()) e.company = "Company is required.";
  if (!f.interest) e.interest = "Please select an area of interest.";
  return e;
}

export default function DemoForm() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(field: keyof Form, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // TODO: Connect to email/CRM API
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">Demo request received.</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
          Someone from the SoloBuildAI team will be in touch within one business day to confirm your demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" id="fullName" required placeholder="Jane Smith"
          value={form.fullName} onChange={(e) => handle("fullName", e.target.value)} error={errors.fullName} />
        <FormField label="Work Email" id="workEmail" type="email" required placeholder="jane@company.com"
          value={form.workEmail} onChange={(e) => handle("workEmail", e.target.value)} error={errors.workEmail} />
        <FormField label="Company" id="company" required placeholder="Acme Corp"
          value={form.company} onChange={(e) => handle("company", e.target.value)} error={errors.company} />
        <FormField label="Job Title" id="jobTitle" placeholder="Head of Talent"
          value={form.jobTitle} onChange={(e) => handle("jobTitle", e.target.value)} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Phone Number" id="phone" type="tel" placeholder="+1 555 000 0000 (optional)"
          value={form.phone} onChange={(e) => handle("phone", e.target.value)} />
        <FormField as="select" label="Team Size" id="teamSize" placeholder="Select team size"
          value={form.teamSize} onChange={(e) => handle("teamSize", e.target.value)} options={TEAM_SIZE_OPTIONS} />
      </div>
      <FormField as="select" label="Area of Interest" id="interest" required placeholder="What are you interested in?"
        value={form.interest} onChange={(e) => handle("interest", e.target.value)}
        options={INTEREST_OPTIONS} error={errors.interest} />
      <FormField as="textarea" label="Tell us more about your requirements" id="requirements" rows={3}
        placeholder="Describe what you would like to automate, improve, or build…"
        value={form.requirements} onChange={(e) => handle("requirements", e.target.value)} />
      <FormField as="textarea" label="Anything you'd like us to know?" id="message" rows={3}
        placeholder="Optional — tell us about your current hiring process, challenges, or goals."
        value={form.message} onChange={(e) => handle("message", e.target.value)} />
      <div className="pt-1">
        <button type="submit" disabled={loading}
          className="w-full py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-colors shadow-sm flex items-center justify-center gap-2">
          {loading ? (
            <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Sending...</>
          ) : "Request a Demo"}
        </button>
      </div>
    </form>
  );
}
