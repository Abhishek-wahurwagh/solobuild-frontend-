/**
 * SolutionOverviewPage (Server Component)
 *
 * Data-driven version of /solutions/hr/page.tsx.
 * Pass in a SolutionDef and it renders the full overview with
 * hero, workflow-card grid, and integrations marquee.
 */

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import type { SolutionDef } from "@/lib/solutions/types";

const BLUE = "#0066FF";

// ── Icon paths ─────────────────────────────────────────────────────────────────
const ICON_PATHS: Record<string, string> = {
  // HR
  people:   "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-8a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87",
  spark:    "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zm7 11l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z",
  book:     "M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5m0-17v17M4 19h16",
  chart:    "M4 19V5m0 14h16M8 16v-5m4 5V7m4 9v-8",
  wallet:   "M3 6h18v14H3zM3 6l2-3h14l2 3m-4 7h4",
  support:  "M20 11a8 8 0 0 1-8 8H7l-4 3 1.5-4.5A8 8 0 1 1 20 11z",
  exit:     "M10 17l5-5-5-5m5 5H3m9-9V2h9v20h-9v-1",
  // Sales
  funnel:   "M4 4h16v2L13 13v7l-2-1v-6L4 6z",
  mail:     "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 8 8-8",
  calendar: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 5h18M8 3v4m8-4v4",
  // CS
  alert:    "M12 9v4m0 4v.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
  // IT
  wrench:   "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  cog:      "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8.93-4.44a9.06 9.06 0 0 0 .21-1.56A9.06 9.06 0 0 0 20.93 7.56l-2.18-.35a7 7 0 0 0-.86-2.07l1.27-1.75A9.06 9.06 0 0 0 16.56 1.07l-1.75 1.27a7 7 0 0 0-2.07-.86L12.44 0a9.06 9.06 0 0 0-3.12 0L9.32 1.41a7 7 0 0 0-2.07.86L5.5 1.07a9.06 9.06 0 0 0-2.6 2.32l1.27 1.75a7 7 0 0 0-.86 2.07L1.07 7.56a9.06 9.06 0 0 0 0 3.12l1.41.7a7 7 0 0 0 .86 2.07L2.07 15.2a9.06 9.06 0 0 0 2.6 2.32l1.75-1.27a7 7 0 0 0 2.07.86l.35 2.18a9.06 9.06 0 0 0 3.12 0l.7-1.41a7 7 0 0 0 2.07-.86l1.75 1.27a9.06 9.06 0 0 0 2.6-2.32l-1.27-1.75a7 7 0 0 0 .86-2.07l2.18-.35z",
  // pipeline / generic
  pipeline: "M3 6h18M3 12h18M3 18h18",
};

function WorkflowIcon({ name }: { name: string }) {
  const d = ICON_PATHS[name] ?? ICON_PATHS.spark;
  return (
    <svg aria-hidden className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

function ProcessCard({ process }: { process: SolutionDef["processes"][number] }) {
  const isLive = !!process.live;
  return (
    <Link
      href={process.href}
      className={`group flex min-h-[242px] flex-col rounded-xl border bg-white/[0.035] p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.06] ${
        isLive ? "border-[#0066FF]" : "border-white/10 hover:border-white/25"
      }`}
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#0066FF]">
          <WorkflowIcon name={process.icon} />
        </div>
        <div className="flex items-center gap-2">
          {isLive && (
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.14em] px-1.5 py-0.5 rounded"
              style={{ color: BLUE, border: `1px solid ${BLUE}4D`, background: `${BLUE}1A` }}
            >
              Live
            </span>
          )}
          <span className="text-white/35 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
      <h3 className="text-[15px] font-medium text-white">{process.title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/50">{process.description}</p>
      <div className="mt-5 flex gap-4 border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.12em] text-white/35">
        <span>{process.pluginCount}</span>
        <span>{process.integrationCount}</span>
      </div>
    </Link>
  );
}

function IntegrationLogo({ name }: { name: string }) {
  const c = { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "Salesforce")       return <svg {...c} style={{ color: "#00A1E0" }}><path d="M10.3 5.6a3.8 3.8 0 0 1 5.9.6 3.4 3.4 0 0 1 4.3 3.9A3.5 3.5 0 0 1 18 17H6.5A3.5 3.5 0 0 1 5 10a3.5 3.5 0 0 1 5.3-4.4z" /></svg>;
  if (name === "HubSpot CRM")      return <svg {...c} style={{ color: "#FF7A59" }}><circle cx="8.5" cy="12" r="2.5" /><circle cx="15.5" cy="7" r="2" /><circle cx="15.5" cy="17" r="2" /><line x1="11" y1="12" x2="13.5" y2="8.5" /><line x1="11" y1="12" x2="13.5" y2="15.5" /></svg>;
  if (name === "Zendesk")          return <svg {...c} style={{ color: "#03363D" }}><path d="M12 5.5c-2.5 0-4.5 2-4.5 4.5v.5h9V10c0-2.5-2-4.5-4.5-4.5z" /><path d="M7.5 11v2.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V11h-9z" /></svg>;
  if (name === "ServiceNow")       return <svg {...c} style={{ color: "#62D84E" }}><circle cx="12" cy="12" r="8" /><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" /></svg>;
  if (name === "Jira")             return <svg {...c} style={{ color: "#2684FF" }}><path d="M11.75 3L3 11.75l4.25 4.25 4.5-4.5 4.25 4.25L20.5 11.75z" /></svg>;
  if (name === "Confluence")       return <svg {...c} style={{ color: "#1868DB" }}><path d="M4 16.5c3-4 7-5 11.5-3L19 9c-5-2-11-1-14.5 4L4 16.5z" /></svg>;
  if (name === "Slack")            return <svg {...c}><path stroke="#36C5F0" d="M9 4.5v4M4.5 9h4" /><path stroke="#2EB67D" d="M15 4.5v4M19.5 9h-4" /><path stroke="#ECB22E" d="M15 19.5v-4M19.5 15h-4" /><path stroke="#E01E5A" d="M9 19.5v-4M4.5 15h4" /></svg>;
  if (name === "Google Calendar")  return <svg {...c} style={{ color: "#4285F4" }}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 9h18M8 2v4m8-4v4" /></svg>;
  if (name === "Gmail")            return <svg {...c} style={{ color: "#EA4335" }}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 7l10 7 10-7" /></svg>;
  if (name === "Outlook")          return <svg {...c} style={{ color: "#0078D4" }}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 8h4v8H7zm5-4v16m2-12h4v8h-4" /></svg>;
  if (name === "Microsoft Teams")  return <svg {...c} style={{ color: "#5059C9" }}><circle cx="14" cy="8" r="2" /><path d="M17 13h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /><circle cx="9" cy="9" r="2" /><path d="M11 14H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6" /></svg>;
  if (name === "Google Workspace") return <svg {...c} style={{ color: "#34A853" }}><path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4z" /><path d="M8 12h8M12 8v8" /></svg>;
  if (name === "Workday")          return <svg {...c} style={{ color: "#0875E1" }}><path d="M3 7h4l2.2 7L12 7l2.8 7L17 7h4" /></svg>;
  return <svg {...c} style={{ color: "#64748B" }}><path d="M12 4v16M4 12h16" /></svg>;
}

interface Props {
  solution: SolutionDef;
  /** Hero background image path. Optional — renders a fallback if missing. */
  heroImage?: string;
}

export default function SolutionOverviewPage({ solution, heroImage }: Props) {
  const solutionPath = `/solutions/${solution.slug}`;

  return (
    <PageLayout framed wide>
      <div className="mx-auto max-w-none space-y-3">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070707]">
          <div className="grid min-h-[580px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40">
                  {solution.eyebrow}
                </p>
                <h1 className="mt-8 max-w-[540px] text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[64px]">
                  {solution.tagline.split(".").map((part, i, arr) => (
                    <span key={i}>
                      {part.trim()}
                      {i < arr.length - 1 && (
                        <>
                          .<br />
                        </>
                      )}
                    </span>
                  ))}
                </h1>
                <p className="mt-7 max-w-[470px] text-base leading-relaxed text-white/50">
                  {solution.description}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href={`${solutionPath}#workflows`}
                    className="rounded-lg px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BLUE }}
                  >
                    Explore {solution.name} Workflows →
                  </Link>
                  {solution.processes.find((p) => p.live) && (
                    <Link
                      href={solution.processes.find((p) => p.live)!.href}
                      className="rounded-lg border border-white/15 px-5 py-3 text-[13px] font-medium text-white/75 transition-colors hover:border-white/35 hover:text-white"
                    >
                      View Live Workflow
                    </Link>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-y-7 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-0">
                {solution.stats.map(({ value, label }, i) => (
                  <div
                    key={label}
                    className="sm:border-r sm:border-white/10 sm:pl-4 first:pl-0 last:border-0"
                    style={{ paddingLeft: i === 0 ? 0 : undefined }}
                  >
                    <p className="text-2xl font-medium text-white">{value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/35">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image or fallback */}
            <div className="relative min-h-[380px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={solution.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center opacity-70 grayscale"
                />
              ) : (
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.35) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-black/20" />
              <div className="absolute bottom-8 left-6 right-6 rounded-lg border border-white/15 bg-black/65 p-4 backdrop-blur-sm sm:left-auto sm:w-[260px]">
                <div className="mb-3 h-2 w-2 rounded-full" style={{ backgroundColor: BLUE }} />
                <p className="text-[13px] leading-relaxed text-white/80">{solution.heroQuote}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Workflow grid ─────────────────────────────────────────────── */}
        <section id="workflows" className="rounded-2xl border border-white/10 bg-[#070707] p-7 sm:p-10 lg:p-14">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40">The platform</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                {solution.name} Workflows
              </h2>
              <p className="mt-4 text-sm text-white/45">
                Choose a workflow to explore agents, plugins and integrations.
              </p>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed text-white/45 lg:text-right">
              From {solution.processes[0]?.title.toLowerCase() ?? "intake"} to outcome —
              a connected {solution.name.toLowerCase()} system powered by AI agents.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {solution.processes.map((process) => (
              <ProcessCard key={process.id} process={process} />
            ))}
            {/* Promo tile */}
            <div className="relative min-h-[242px] overflow-hidden rounded-xl border border-[#0066FF]/45 bg-[#0066FF]/[0.08] p-5">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0066FF]/60" />
              <div className="absolute -right-2  top-8  h-28 w-28 rounded-full border border-[#0066FF]/40" />
              <p className="relative text-2xl font-medium leading-tight text-white">
                One platform<br />for the entire<br />{solution.name.toLowerCase()} lifecycle.
              </p>
              <p className="relative mt-8 text-[11px] uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                Automate. Augment. Act.
              </p>
            </div>
          </div>
        </section>

        {/* ── Integrations marquee ──────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070707] py-9">
          <div className="px-7 sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em]" style={{ color: BLUE }}>
              Integrates with your tools
            </p>
          </div>
          <div className="hr-marquee mt-7 overflow-hidden border-y border-white/10 py-4" aria-label="Integrations">
            <div className="hr-marquee-track flex items-center gap-3 px-3">
              {[...solution.integrationNames, ...solution.integrationNames].map((name, i) => (
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
