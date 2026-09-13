import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata = { title: "Candidate Intelligence — SoloBuildAI Products" };

export default function CandidateIntelligencePage() {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-24 px-6">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-5 tracking-tight">Candidate Intelligence</h1>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            Deep candidate analytics combining resume data and AI voice screening — skill
            breakdowns, communication scores, and structured qualification reports that give
            recruiters the context they need to make better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Request a demo
            </Link>
            <Link href="/solutions/hiring" className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors">
              See in hiring solution
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
