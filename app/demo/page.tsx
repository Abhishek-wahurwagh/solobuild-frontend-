import PageLayout from "@/components/layout/PageLayout";
import DemoForm from "./DemoForm";

export const metadata = {
  title: "Request a Demo — SoloBuildAI",
  description: "See SoloBuildAI in action. Request a personalized demo of our AI hiring platform.",
};

export default function DemoPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
              Request a Demo
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
              See SoloBuildAI in action.
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              We&apos;ll walk you through the platform, show you how it handles real hiring workflows,
              and answer any questions about how it would work for your team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Left: What to expect */}
            <div className="lg:col-span-1">
              <h2 className="text-base font-semibold text-slate-900 mb-6">What to expect</h2>
              <div className="space-y-6">
                {[
                  { title: "30-minute session", desc: "A focused walkthrough tailored to your workflow and team." },
                  { title: "Live demo", desc: "See AI voice screening, candidate management and recruiter tools in action." },
                  { title: "Q&A time", desc: "Ask anything about how SoloBuildAI works, integrates, and scales." },
                  { title: "No pressure", desc: "This is a conversation, not a sales call. We want to make sure we're a good fit." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Request your demo</h2>
                <p className="text-sm text-slate-500 mb-8">
                  Fill in your details and we&apos;ll be in touch within one business day.
                </p>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
