"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";

const AREA_OPTIONS = [
  { value: "hiring", label: "Hiring" },
  { value: "sales", label: "Sales" },
  { value: "customer-support", label: "Customer Support" },
  { value: "operations", label: "Operations" },
  { value: "other", label: "Other" },
];

type FormState = {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  phone: string;
  area: string;
  problem: string;
  aiGoal: string;
  additional: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  fullName: "",
  workEmail: "",
  company: "",
  jobTitle: "",
  phone: "",
  area: "",
  problem: "",
  aiGoal: "",
  additional: "",
};

function validate(form: FormState): Errors {
  const err: Errors = {};
  if (!form.fullName.trim()) err.fullName = "Full name is required.";
  if (!form.workEmail.trim()) err.workEmail = "Work email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) err.workEmail = "Enter a valid email address.";
  if (!form.company.trim()) err.company = "Company is required.";
  if (!form.jobTitle.trim()) err.jobTitle = "Job title is required.";
  if (!form.area) err.area = "Please select a solution area.";
  if (!form.problem.trim()) err.problem = "Please describe the problem.";
  if (!form.aiGoal.trim()) err.aiGoal = "Please describe what you'd like the AI to do.";
  return err;
}

export default function CustomForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // TODO: Replace with real API call when backend is ready
    // await fetch('/api/custom-solution', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">We&apos;ve received your enquiry.</h2>
        <p className="text-slate-500 text-base leading-relaxed max-w-md">
          Thank you for reaching out. Someone from the SoloBuildAI team will review your submission
          and be in touch shortly to discuss your solution.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label="Full Name"
          id="fullName"
          required
          placeholder="Jane Smith"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          error={errors.fullName}
        />
        <FormField
          label="Work Email"
          id="workEmail"
          type="email"
          required
          placeholder="jane@company.com"
          value={form.workEmail}
          onChange={(e) => handleChange("workEmail", e.target.value)}
          error={errors.workEmail}
        />
        <FormField
          label="Company"
          id="company"
          required
          placeholder="Acme Corp"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
          error={errors.company}
        />
        <FormField
          label="Job Title / Role"
          id="jobTitle"
          required
          placeholder="Head of Operations"
          value={form.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          error={errors.jobTitle}
        />
      </div>

      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="+1 555 000 0000 (optional)"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        hint="Optional — for a faster conversation."
      />

      <FormField
        as="select"
        label="What area does this solution relate to?"
        id="area"
        required
        placeholder="Select an area"
        value={form.area}
        onChange={(e) => handleChange("area", e.target.value)}
        options={AREA_OPTIONS}
        error={errors.area}
      />

      <FormField
        as="textarea"
        label="Describe the problem or workflow"
        id="problem"
        required
        rows={4}
        placeholder="Describe the operational problem you're trying to solve. The more specific, the better."
        value={form.problem}
        onChange={(e) => handleChange("problem", e.target.value)}
        error={errors.problem}
      />

      <FormField
        as="textarea"
        label="What would you like the AI system to do?"
        id="aiGoal"
        required
        rows={4}
        placeholder="What outcome are you looking for? What tasks should the AI perform or assist with?"
        value={form.aiGoal}
        onChange={(e) => handleChange("aiGoal", e.target.value)}
        error={errors.aiGoal}
      />

      <FormField
        as="textarea"
        label="Additional information"
        id="additional"
        rows={3}
        placeholder="Anything else you'd like us to know — tools you use, team size, timeline, constraints, etc."
        value={form.additional}
        onChange={(e) => handleChange("additional", e.target.value)}
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            "Discuss Your Solution"
          )}
        </button>
      </div>
    </form>
  );
}
