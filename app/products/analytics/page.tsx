import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata = { title: "Analytics — SoloBuildAI Products" };

export default function AnalyticsPage() {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-24 px-6">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-5 tracking-tight">Analytics</h1>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            Operational insights and reporting across all your AI workflows. Understand pipeline
            performance, identify bottlenecks, and measure the business impact of your AI systems.
            Coming soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Request a demo
            </Link>
            <Link href="/solutions/custom" className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors">
              Discuss your needs
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
