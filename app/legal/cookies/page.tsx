import PageLayout from "@/components/layout/PageLayout";

export const metadata = { title: "Cookie Policy — SoloBuildAI" };

export default function CookiesPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Legal</span>
          <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: September 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8 text-slate-600 leading-relaxed text-sm">
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">What are cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help websites work efficiently and provide information to the website owner.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">How we use cookies</h2>
              <p>SoloBuildAI uses cookies to ensure the website functions correctly, remember your preferences, and understand how visitors use the site. We do not use cookies for advertising purposes.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Managing cookies</h2>
              <p>You can control and delete cookies through your browser settings. Note that disabling cookies may affect your ability to use certain features of the platform.</p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-900 mb-3">Contact</h2>
              <p>For cookie-related questions, contact us via our <a href="/company/contact" className="text-blue-600 hover:underline">Contact page</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
