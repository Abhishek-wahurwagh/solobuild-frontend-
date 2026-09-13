import Link from "next/link";
import SignupFlow from "./SignupFlow";

export const metadata = {
  title: "Sign Up — SoloBuildAI",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <span className="font-semibold text-slate-900 text-[15px] tracking-tight">
            SoloBuild<span className="text-blue-600">AI</span>
          </span>
        </Link>
        <a
          href="https://main.d3ataamm8hxei7.amplifyapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          Sign in instead
        </a>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <SignupFlow />
        </div>
      </main>

      {/* Footer note */}
      <footer className="px-6 py-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          By signing up you agree to our{" "}
          <Link href="/legal/terms" className="text-slate-500 hover:underline">Terms</Link>{" "}
          and{" "}
          <Link href="/legal/privacy" className="text-slate-500 hover:underline">Privacy Policy</Link>.
        </p>
      </footer>
    </div>
  );
}
