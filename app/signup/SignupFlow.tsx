"use client";

import { useState } from "react";
import Link from "next/link";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Step = "email" | "details" | "contact" | "success";

type Form = {
  email: string;
  fullName: string;
  password: string;
  company: string;
  jobTitle: string;
};

type Errors = Partial<Record<keyof Form, string>>;

/* ─── Helpers ────────────────────────────────────────────────────────── */
function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

/* ─── Eye icon ───────────────────────────────────────────────────────── */
function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

/* ─── Input ──────────────────────────────────────────────────────────── */
function Input({
  label,
  id,
  error,
  hint,
  suffix,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  suffix?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-white outline-none transition-all
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${error ? "border-red-400 focus:ring-red-400" : "border-slate-200 hover:border-slate-300"}`}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{suffix}</div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

/* ─── Step 1 — Email ─────────────────────────────────────────────────── */
function EmailStep({
  onContinue,
}: {
  onContinue: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) { setError("Enter your work email to continue."); return; }
    if (!isValidEmail(email)) { setError("Enter a valid email address."); return; }
    setLoading(true);
    // Simulate a brief check before proceeding
    setTimeout(() => { setLoading(false); onContinue(email); }, 400);
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1.5 tracking-tight text-center">
        Create your account
      </h1>
      <p className="text-sm text-slate-500 mb-8 text-center">
        Already have one?{" "}
        <a
          href={SIGN_IN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign in
        </a>
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Input
          label="Work email"
          id="email"
          type="email"
          placeholder="you@company.com"
          value={email}
          autoFocus
          autoComplete="email"
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          error={error}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : null}
          Continue
        </button>
      </form>

      <div className="mt-6">
        <div className="relative flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 flex-shrink-0">or sign up with</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => alert("Google sign-up coming soon.")}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          {/* Microsoft */}
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => alert("Microsoft sign-up coming soon.")}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#F25022" d="M1 1h10v10H1z"/>
              <path fill="#7FBA00" d="M13 1h10v10H13z"/>
              <path fill="#00A4EF" d="M1 13h10v10H1z"/>
              <path fill="#FFB900" d="M13 13h10v10H13z"/>
            </svg>
            Microsoft
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 2 — Details ────────────────────────────────────────────────── */
function DetailsStep({
  email,
  onBack,
  onSuccess,
}: {
  email: string;
  onBack: () => void;
  onSuccess: () => void;
}) {
  const [form, setForm] = useState<Omit<Form, "email">>({
    fullName: "",
    password: "",
    company: "",
    jobTitle: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(field: keyof typeof form, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 8) e.password = "Minimum 8 characters.";
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.jobTitle.trim()) e.jobTitle = "Job title is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // TODO: Connect to account creation API
    setTimeout(() => { setLoading(false); onSuccess(); }, 900);
  }

  return (
    <div className="w-full">
      {/* Back + email chip */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={onBack}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Go back"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1.5">
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold uppercase flex-shrink-0">
            {email[0]}
          </div>
          <span className="text-xs font-medium text-slate-700 truncate max-w-[180px]">{email}</span>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-slate-900 mb-1.5 tracking-tight">
        Set up your account
      </h1>
      <p className="text-sm text-slate-500 mb-7">
        Just a few details to get you started with AI for Hiring.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <Input
          label="Full name"
          id="fullName"
          placeholder="Jane Smith"
          autoFocus
          autoComplete="name"
          value={form.fullName}
          onChange={(e) => handle("fullName", e.target.value)}
          error={errors.fullName}
        />
        <Input
          label="Password"
          id="password"
          type={showPass ? "text" : "password"}
          placeholder="Minimum 8 characters"
          autoComplete="new-password"
          value={form.password}
          onChange={(e) => handle("password", e.target.value)}
          error={errors.password}
          hint="Use a mix of letters, numbers, and symbols."
          suffix={
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              tabIndex={-1}
            >
              <EyeIcon open={showPass} />
            </button>
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Company"
            id="company"
            placeholder="Acme Corp"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => handle("company", e.target.value)}
            error={errors.company}
          />
          <Input
            label="Job title"
            id="jobTitle"
            placeholder="Talent Lead"
            value={form.jobTitle}
            onChange={(e) => handle("jobTitle", e.target.value)}
            error={errors.jobTitle}
          />
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : null}
            Create account
          </button>
        </div>
      </form>

      <p className="text-xs text-slate-400 mt-5 text-center leading-relaxed">
        By continuing you agree to our{" "}
        <Link href="/legal/terms" className="text-slate-500 hover:underline">Terms</Link> and{" "}
        <Link href="/legal/privacy" className="text-slate-500 hover:underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}

/* ─── Success ────────────────────────────────────────────────────────── */
function SuccessStep({ email }: { email: string }) {
  return (
    <div className="w-full flex flex-col items-center text-center py-4">
      <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-slate-900 mb-2">Account created</h2>
      <p className="text-sm text-slate-500 mb-1">
        You&apos;re signed up as
      </p>
      <p className="text-sm font-medium text-slate-800 mb-8">{email}</p>
      <a
        href={SIGN_IN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center block"
      >
        Go to Hiring Platform
      </a>
    </div>
  );
}

/* ─── Root ───────────────────────────────────────────────────────────── */
export default function SignupFlow({ initialEmail = "" }: { initialEmail?: string }) {
  // If email arrives pre-filled (e.g. from homepage sign-in box), skip straight to details
  const [step, setStep] = useState<Step>(initialEmail ? "details" : "email");
  const [email, setEmail] = useState(initialEmail);

  if (step === "success") return <SuccessStep email={email} />;
  if (step === "details")
    return (
      <DetailsStep
        email={email}
        onBack={() => setStep("email")}
        onSuccess={() => setStep("success")}
      />
    );

  return (
    <EmailStep
      onContinue={(e) => { setEmail(e); setStep("details"); }}
    />
  );
}
