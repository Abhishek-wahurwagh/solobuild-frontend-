import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata = { title: "Security — SoloBuildAI" };

export default function SecurityPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Security</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
              How we protect your data.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Security and data privacy are foundational to how we build SoloBuildAI. Full security
              documentation, compliance information, and data handling policies are being prepared.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Data encryption", desc: "All data is encrypted in transit and at rest using industry-standard encryption." },
              { title: "Access controls", desc: "Role-based access controls ensure data is only accessible to authorized users." },
              { title: "Audit logging", desc: "All actions within the platform are logged and auditable by your organization." },
              { title: "Data residency", desc: "We work to ensure your organizational data is stored in appropriate regions." },
              { title: "Third-party audits", desc: "Regular third-party security reviews are part of our development process." },
              { title: "Responsible AI", desc: "We design AI systems with human oversight built in — AI does not act beyond defined boundaries." },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-slate-900 mb-2">Have a security question?</h3>
              <p className="text-sm text-slate-500">
                For security enquiries, compliance questions, or to report a vulnerability, please contact us directly.
              </p>
            </div>
            <Link href="/company/contact" className="flex-shrink-0 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors">
              Contact security team
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
