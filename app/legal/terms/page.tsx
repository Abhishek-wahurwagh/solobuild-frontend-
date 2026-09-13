import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "Terms of Service — SoloBuildAI" };

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Legal</span>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: September 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-slate-600 leading-relaxed text-sm">
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Overview</h2>
              <p>By using SoloBuildAI&apos;s platform or website, you agree to these terms. Full terms of service documentation is being prepared.</p>
              <p className="mt-3 text-slate-400 italic">For terms-related enquiries, please contact us directly.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Use of the platform</h2>
              <p>SoloBuildAI grants you a limited, non-exclusive license to use the platform for your organization&apos;s operational purposes in accordance with these terms.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Acceptable use</h2>
              <p>You agree not to misuse the platform, attempt to access systems without authorization, or use the platform in any way that violates applicable laws or regulations.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Contact</h2>
              <p>For questions about these terms, please contact us via our <a href="/company/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
