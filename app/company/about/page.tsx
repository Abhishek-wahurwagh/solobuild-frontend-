import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata = { title: "About — SoloBuildAI" };

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">Company</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-5">
              We build AI that actually works in practice.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              SoloBuildAI is a company focused on building practical AI systems that solve real
              operational problems inside organizations — not demos, not prototypes, not generic AI wrappers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight">Our mission</h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Most AI projects fail because they start with technology and work backwards.
                We start with the problem — the specific workflow, the real bottleneck, the moment
                where people are spending time they shouldn&apos;t have to.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                Then we build AI that fits that reality. AI that interacts naturally with people.
                AI that understands context. AI that takes action. AI that involves humans at
                exactly the right moment.
              </p>
              <p className="text-slate-500 leading-relaxed">
                When it works — when it creates real, measurable business value — we turn it into
                a repeatable product that other organizations can use.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-5 tracking-tight">How we work</h2>
              <div className="space-y-5">
                {[
                  { title: "Start with the problem", desc: "We spend time understanding the real operational challenge before we propose anything." },
                  { title: "Build for real use", desc: "Our solutions are designed for how people actually work — not how we think they work." },
                  { title: "Validate before productizing", desc: "We measure whether the solution creates real value before scaling it." },
                  { title: "Keep humans in control", desc: "AI should augment human judgment, not replace it. We build systems that know when to hand off." },
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Want to work with us?</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Whether you&apos;re looking to solve an operational problem or join the team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Request a demo
            </Link>
            <Link href="/company/careers" className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors">
              View careers
            </Link>
            <Link href="/company/contact" className="px-6 py-3 text-slate-600 text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
