"use client";

import { useState } from "react";
import Link from "next/link";

const SIGN_IN_URL = "https://main.d3ataamm8hxei7.amplifyapp.com/";

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

type Tab = "signin" | "signup";

export default function HeroSignin() {
  const [tab, setTab] = useState<Tab>("signin");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) { setError("Enter your work email to continue."); return; }
    if (!isValidEmail(email)) { setError("Enter a valid email address."); return; }
    setLoading(true);

    if (tab === "signin") {
      // Sign-in: hand off to the deployed platform
      setTimeout(() => {
        window.open(SIGN_IN_URL, "_blank", "noopener,noreferrer");
        setLoading(false);
      }, 400);
    } else {
      // Sign-up: navigate to the signup page with email prefilled via query param
      setTimeout(() => {
        window.location.href = `/signup?email=${encodeURIComponent(email)}`;
      }, 400);
    }
  }

  return (
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
      {/* Logo mark */}
      <div className="flex justify-center mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex bg-slate-100 rounded-lg p-1 mb-6">
        <button
          type="button"
          onClick={() => { setTab("signin"); setError(""); }}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
            tab === "signin"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => { setTab("signup"); setError(""); }}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
            tab === "signup"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Sign up
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="hero-email" className="text-sm font-medium text-slate-700">
            Work email
          </label>
          <input
            id="hero-email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 bg-white outline-none transition-all
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${error ? "border-red-400 focus:ring-red-400" : "border-slate-200 hover:border-slate-300"}`}
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
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

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* SSO buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-3 py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          onClick={() => window.open(SIGN_IN_URL, "_blank", "noopener,noreferrer")}
        >
          {/* Google */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-3 py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          onClick={() => window.open(SIGN_IN_URL, "_blank", "noopener,noreferrer")}
        >
          {/* Microsoft */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#F25022" d="M1 1h10v10H1z"/>
            <path fill="#7FBA00" d="M13 1h10v10H13z"/>
            <path fill="#00A4EF" d="M1 13h10v10H1z"/>
            <path fill="#FFB900" d="M13 13h10v10H13z"/>
          </svg>
          Microsoft
        </button>
      </div>

      {/* Footer note */}
      <p className="text-[11px] text-slate-400 text-center mt-5 leading-relaxed">
        {tab === "signin" ? (
          <>
            No account?{" "}
            <button
              type="button"
              onClick={() => setTab("signup")}
              className="text-blue-600 hover:underline"
            >
              Sign up free
            </button>
          </>
        ) : (
          <>
            By signing up you agree to our{" "}
            <Link href="/legal/terms" className="text-slate-500 hover:underline">Terms</Link>
            {" and "}
            <Link href="/legal/privacy" className="text-slate-500 hover:underline">Privacy Policy</Link>.
          </>
        )}
      </p>
    </div>
  );
}
