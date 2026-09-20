import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { getSolutionNav } from "@/lib/solutions/nav-data";

const BRAND = "#0066FF";

// ── Subprocess routes from shared nav-data — single source of truth ───────────
const hrNav = getSolutionNav("hr")!;

// ── Icon paths ────────────────────────────────────────────────────────────────
const ICON_PATHS: Record<string, string> = {
  people:  "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-8a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87",
  spark:   "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zm7 11l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z",
  book:    "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5m0-17v17M4 19h16",
  chart:   "M4 19V5m0 14h16M8 16v-5m4 5V7m4 9v-8",
  wallet:  "M3 6h18v14H3zM3 6l2-3h14l2 3m-4 7h4",
  support: "M20 11a8 8 0 0 1-8 8H7l-4 3 1.5-4.5A8 8 0 1 1 20 11z",
  exit:    "M10 17l5-5-5-5m5 5H3m9-9V2h9v20h-9v-1",
};

// ── Subprocess icon map (same order as SOLUTION_NAV subprocesses) ─────────────
const SUBPROCESS_ICONS: Record<string, string> = {
  "talent-acquisition":  "people",
  "employee-onboarding": "spark",
  "learning-development":"book",
  "performance-reviews": "chart",
  "payroll-benefits":    "wallet",
  "employee-support":    "support",
  "offboarding":         "exit",
};

// ── Integration logos ─────────────────────────────────────────────────────────
const HR_INTEGRATIONS = [
  "Workday", "Greenhouse", "Lever", "LinkedIn", "Slack",
  "Google Workspace", "Microsoft 365", "Okta", "ADP",
];

function IntegrationLogo({ name }: { name: string }) {
  const c = { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "Workday")          return <svg {...c} style={{ color: "#0875E1" }}><path d="M3 7h4l2.2 7L12 7l2.8 7L17 7h4" /></svg>;
  if (name === "Greenhouse")       return <svg {...c} style={{ color: "#24A47F" }}><path d="M12 3v18M6 7h12M6 12h12M6 17h12M6 7v10m12-10v10" /></svg>;
  if (name === "Lever")            return <svg {...c} style={{ color: "#6F42C1" }}><path d="M5 4v16h14M5 16l5-5 3 3 6-7" /></svg>;
  if (name === "LinkedIn")         return <svg {...c} style={{ color: "#0A66C2" }}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16M12 10v6" /></svg>;
  if (name === "Slack")            return <svg {...c}><path stroke="#36C5F0" d="M9 4.5v4M4.5 9h4" /><path stroke="#2EB67D" d="M15 4.5v4M19.5 9h-4" /><path stroke="#ECB22E" d="M15 19.5v-4M19.5 15h-4" /><path stroke="#E01E5A" d="M9 19.5v-4M4.5 15h4" /></svg>;
  if (name === "Google Workspace") return <svg {...c}><path stroke="#4285F4" d="M20 12a8 8 0 0 1-2.35-5.65M20 5v7h-7" /><path stroke="#34A853" d="M17.65 17.65A8 8 0 0 1 6.35 6.35" /><path stroke="#FBBC05" d="M6.35 6.35A8 8 0 0 0 4 12" /><path stroke="#EA4335" d="M4 12a8 8 0 0 0 2.35 5.65" /></svg>;
  if (name === "Microsoft 365")    return <svg {...c}><path fill="#F25022" stroke="none" d="M4 4h7v7H4z" /><path fill="#7FBA00" stroke="none" d="M13 4h7v7h-7z" /><path fill="#00A4EF" stroke="none" d="M4 13h7v7H4z" /><path fill="#FFB900" stroke="none" d="M13 13h7v7h-7z" /></svg>;
  if (name === "Okta")             return <svg {...c} style={{ color: "#007DC1" }}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>;
  if (name === "ADP")              return <svg {...c} style={{ color: "#D02727" }}><circle cx="12" cy="12" r="8" /><path d="M8 16l2-8 2 8m-3.2-3h2.4M15 8v8m0-8h2a2 2 0 0 1 0 4h-2" /></svg>;
  return <svg {...c} style={{ color: "#64748B" }}><path d="M12 4v16M4 12h16" /></svg>;
}

export const metadata = {
  title: "HR Solutions | SoloBuildAI",
  description: "AI agents for the entire employee lifecycle — hiring, onboarding, performance, payroll and beyond.",
};

export default function HRSolutionsPage() {
  return (
    <PageLayout framed wide>
      <div className="mx-auto max-w-none space-y-3">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070707]">
          <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40">
                  Solutions / HR
                </p>
                <h1 className="mt-8 max-w-[540px] text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[68px]">
                  Smarter People.<br />Stronger{" "}
                  <span style={{ color: BRAND }}>Organizations.</span>
                </h1>
                <p className="mt-7 max-w-[470px] text-base leading-relaxed text-white/50">
                  AI agents that orchestrate workflows across recruiting, onboarding,
                  performance, payroll and employee support — so HR teams focus on people,
                  not administration.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="#workflows"
                    className="rounded-lg px-5 py-3 text-[13px] font-medium text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: BRAND }}
                  >
                    Explore HR Workflows →
                  </Link>
                  <Link
                    href="/solutions/hr/talent-acquisition"
                    className="rounded-lg border border-white/15 px-5 py-3 text-[13px] font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    View Talent Acquisition
                  </Link>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-y-7 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-0">
                {[
                  ["7",   "HR Workflows"],
                  ["50+", "Ready-to-use Plugins"],
                  ["9+",  "Integrations"],
                  ["80%", "Less Manual Admin"],
                ].map(([value, label]) => (
                  <div key={label} className="sm:border-r sm:border-white/10 sm:pl-4 first:pl-0 last:border-0">
                    <p className="text-2xl font-medium text-white">{value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/35">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[380px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              <Image
                src="/images/editorial-man.png"
                alt="HR team working with SoloBuildAI"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center opacity-75 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-black/20" />
              <div className="absolute bottom-8 left-6 right-6 rounded-lg border border-white/15 bg-black/65 p-4 backdrop-blur-sm sm:left-auto sm:w-[250px]">
                <div className="mb-3 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
                <p className="text-[13px] leading-relaxed text-white/80">
                  AI agents that work for your people.<br />Not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What SoloBuildAI automates for HR ────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-[#070707] p-7 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40 mb-4">
                What SoloBuildAI automates
              </p>
              <h2 className="text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl mb-5">
                Every stage of the<br />employee lifecycle.
              </h2>
              <p className="text-[14px] leading-relaxed text-white/50 max-w-md">
                SoloBuildAI connects AI agents to your existing HR systems to automate the repetitive work
                in recruiting, onboarding, development, payroll and support — while keeping HR
                teams in control of the decisions that matter.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { title: "Hiring", detail: "AI voice screening, candidate discovery, campaign management and recruiter workflows." },
                { title: "Onboarding", detail: "Automated task assignment, access provisioning, knowledge delivery and check-ins." },
                { title: "Development", detail: "Skill gap analysis, learning content curation and progress tracking." },
                { title: "Performance", detail: "Review cycle setup, feedback collection and goal setting workflows." },
                { title: "Payroll", detail: "Compensation change approvals, benefits guidance and data validation." },
                { title: "Support", detail: "Policy question answers, HR service requests and human escalation when needed." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <p className="text-[12px] font-semibold text-white mb-1.5">{item.title}</p>
                  <p className="text-[11px] leading-relaxed text-white/40">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflow Grid ─────────────────────────────────────────────── */}
        <section id="workflows" className="rounded-2xl border border-white/10 bg-[#070707] p-7 sm:p-10 lg:p-14">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40">
                HR Workflows
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                7 HR workflows.
              </h2>
              <p className="mt-4 text-sm text-white/45">
                Click any workflow to see its plugins, integrations and how the AI executes it.
              </p>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed text-white/45 lg:text-right">
              From first contact to final offboarding — all automated, all connected.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hrNav.subprocesses.map((sub) => {
              const iconKey = SUBPROCESS_ICONS[sub.id] ?? "spark";
              const isFirst = sub.id === "talent-acquisition";
              return (
                <Link
                  key={sub.id}
                  href={sub.href}
                  className={`group flex min-h-[220px] flex-col rounded-xl border bg-white/[0.035] p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.06] ${
                    isFirst ? "border-[#0066FF]" : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#0066FF]">
                      <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[iconKey]} />
                      </svg>
                    </div>
                    <span className="text-white/35 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <h3 className="text-[15px] font-medium text-white">{sub.label}</h3>
                  <p className="mt-2 flex-1 text-[12px] leading-relaxed text-white/45">{sub.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/8 pt-3">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/30">
                      {sub.pluginCount} plugins
                    </span>
                    <span className="text-[11px] font-medium text-white/30 group-hover:text-[#0066FF] transition-colors">
                      View workflow →
                    </span>
                  </div>
                </Link>
              );
            })}

            {/* Promo tile */}
            <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-[#0066FF]/45 bg-[#0066FF]/[0.08] p-5">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0066FF]/60" />
              <div className="absolute -right-2 top-8 h-28 w-28 rounded-full border border-[#0066FF]/40" />
              <p className="relative text-xl font-medium leading-tight text-white">
                One platform<br />for the entire<br />employee lifecycle.
              </p>
              <p className="relative mt-6 text-[11px] uppercase tracking-[0.18em]" style={{ color: BRAND }}>
                Automate. Augment. Empower.
              </p>
            </div>
          </div>
        </section>

        {/* ── Integrations ─────────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070707] py-9">
          <div className="px-7 sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em]" style={{ color: BRAND }}>
              Integrates with your HR tools
            </p>
            <p className="mt-2 text-[13px] text-white/40">
              SoloBuildAI HR workflows connect to the systems your teams already use.
            </p>
          </div>
          <div className="hr-marquee mt-7 overflow-hidden border-y border-white/10 py-4" aria-label="HR Integrations">
            <div className="hr-marquee-track flex items-center gap-3 px-3">
              {[...HR_INTEGRATIONS, ...HR_INTEGRATIONS].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-white/65"
                >
                  <span className="flex h-5 w-5 items-center justify-center text-white/55">
                    <IntegrationLogo name={name} />
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
