import Link from "next/link";
import SigninFlow from "./SigninFlow";

export const metadata = {
  title: "Sign In — SoloBuildAI",
};

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4">
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
      </header>

      {/* Centered card */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-10">
          <SigninFlow />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-5 text-center">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} SoloBuildAI ·{" "}
          <Link href="/legal/privacy" className="hover:text-slate-600 transition-colors">Privacy</Link>
          {" · "}
          <Link href="/legal/terms" className="hover:text-slate-600 transition-colors">Terms</Link>
        </p>
      </footer>
    </div>
  );
}
