"use client";

import { useState } from "react";
import FormField from "@/components/ui/FormField";

type Form = { name: string; email: string; company: string; message: string };
type Errors = Partial<Record<keyof Form, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(field: keyof Form, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (!form.message.trim()) errs.message = "Message is required.";
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // TODO: Connect to contact API
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-5 mx-auto">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Message sent.</h3>
        <p className="text-sm text-slate-500">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Name" id="name" required placeholder="Jane Smith"
          value={form.name} onChange={(e) => handle("name", e.target.value)} error={errors.name} />
        <FormField label="Email" id="email" type="email" required placeholder="jane@company.com"
          value={form.email} onChange={(e) => handle("email", e.target.value)} error={errors.email} />
      </div>
      <FormField label="Company" id="company" placeholder="Acme Corp (optional)"
        value={form.company} onChange={(e) => handle("company", e.target.value)} />
      <FormField as="textarea" label="Message" id="message" required rows={5}
        placeholder="How can we help?"
        value={form.message} onChange={(e) => handle("message", e.target.value)} error={errors.message} />
      <button type="submit" disabled={loading}
        className="w-full py-3.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 transition-colors shadow-sm flex items-center justify-center gap-2">
        {loading ? (
          <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Sending...</>
        ) : "Send Message"}
      </button>
    </form>
  );
}
