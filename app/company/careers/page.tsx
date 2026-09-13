import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata = { title: "Careers — SoloBuildAI" };

export default function CareersPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Careers</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
              Build practical AI with us.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              We&apos;re a small, focused team working on AI systems that solve real operational
              problems. We value clear thinking, practical engineering, and work that actually
              makes a difference to the organizations using it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-5">What we look for</h2>
              <div className="space-y-4">
                {[
                  { title: "Practical problem-solving", desc: "We value people who start with the problem and work backwards — not people who start with technology." },
                  { title: "Clear communication", desc: "We work closely with customers and each other. Clear thinking and clear writing matter." },
                  { title: "Ownership", desc: "Small team means real responsibility. We look for people who take ownership of outcomes, not just tasks." },
                  { title: "Curiosity", desc: "AI is moving fast. We want people who are genuinely curious and continuously learning." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">No openings listed yet</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-3">We&apos;re growing.</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  We don&apos;t have specific roles listed yet, but we&apos;re always interested in
                  exceptional people in AI engineering, product, and go-to-market. If that&apos;s you,
                  reach out — we&apos;d love to talk.
                </p>
              </div>
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors w-fit"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
