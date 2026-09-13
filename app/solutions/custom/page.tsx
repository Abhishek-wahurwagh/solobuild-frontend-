import PageLayout from "@/components/layout/PageLayout";
import CustomForm from "./CustomForm";

export const metadata = {
  title: "Custom AI Solutions — SoloBuildAI",
  description: "Tell us about your operational problem and we'll design a practical AI solution for your workflow.",
};

export default function CustomSolutionsPage() {
  return (
    <PageLayout>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 block mb-4">
              Custom AI Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-4">
              Built around your problem, not a template.
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              Every organization has unique workflows. Tell us the operational problem you want to
              solve — we&apos;ll design and deploy a practical AI system tailored to how your team
              actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Left: Info */}
            <div className="lg:col-span-1">
              <h2 className="text-base font-semibold text-slate-900 mb-6">What happens next</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "We review your submission",
                    desc: "Someone from the SoloBuildAI team reads your enquiry and understands the problem you're describing.",
                  },
                  {
                    step: "02",
                    title: "Discovery call",
                    desc: "We schedule a short call to understand your workflow in depth — current process, pain points, and goals.",
                  },
                  {
                    step: "03",
                    title: "Solution proposal",
                    desc: "We outline a practical AI solution designed around your specific operational problem.",
                  },
                  {
                    step: "04",
                    title: "Build & validate",
                    desc: "We build, deploy and measure the solution — iterating until it creates real business value.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-2xl font-bold text-blue-100 leading-none flex-shrink-0 w-8">
                      {s.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">{s.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Tell us about your solution</h2>
                <p className="text-sm text-slate-500 mb-8">
                  The more detail you provide, the better we can prepare for our first conversation.
                </p>
                <CustomForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
