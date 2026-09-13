import Button from "./Button";

interface ComingSoonProps {
  title: string;
  description?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function ComingSoon({
  title,
  description = "We're exploring practical AI systems for this workflow. Tell us what problem you're trying to solve and we'll keep you informed.",
  showCta = true,
  ctaText = "Request a demo",
  ctaHref = "/demo",
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-slate-500 text-base leading-relaxed mb-10">
            {description}
          </p>
          {showCta && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={ctaHref} variant="primary" size="lg">
                {ctaText}
              </Button>
              <Button href="/solutions/custom" variant="secondary" size="lg">
                Tell us your problem
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
