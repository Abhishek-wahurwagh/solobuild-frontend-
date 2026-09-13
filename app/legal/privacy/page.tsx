import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "Privacy Policy — SoloBuildAI" };

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Legal</span>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: September 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-sm max-w-none">
          <div className="space-y-8 text-slate-600 leading-relaxed text-sm">
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Overview</h2>
              <p>SoloBuildAI is committed to protecting the privacy of individuals who use our platform and website. This policy explains how we collect, use, and protect your information.</p>
              <p className="mt-3 text-slate-400 italic">Full privacy policy documentation is being prepared. For privacy-related enquiries, please contact us directly.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Information we collect</h2>
              <p>We collect information you provide directly — such as when you create an account, request a demo, or submit an enquiry. This may include your name, work email, company, job title, and messages you send to us.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">How we use your information</h2>
              <p>We use information to provide and improve our services, communicate with you about your account or enquiry, and understand how our platform is being used.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Data security</h2>
              <p>We implement appropriate technical and organizational measures to protect your data. See our <a href="/company/security" className="text-blue-600 hover:underline">Security page</a> for more details.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Contact</h2>
              <p>For privacy-related questions, please contact us via our <a href="/company/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
