"use client";

/**
 * AgentRailSection
 * ─────────────────────────────────────────────────────────────────────────────
 * Homepage section — replaces the old hiring-only agent grid.
 *
 * • Heading: "AI agents for real business workflows."
 * • Sub-copy scoped to the platform breadth (HR → IT)
 * • Infinite horizontal plugin rail with pause-on-hover
 * • Each card: clean icon mark + plugin name + domain label
 * • All logos are local SVGs — swap path to a real asset when ready
 * • Respects prefers-reduced-motion (animation paused)
 */

import Link from "next/link";

// ── Plugin / capability definitions ──────────────────────────────────────────

interface PluginCard {
  id: string;
  name: string;
  domain: string;          // category label shown below the name
  href: string;            // clicking the card navigates here
  icon: React.ReactNode;   // replace with <Image> when real asset is ready
}

const C = "w-5 h-5";      // icon size shorthand

const PLUGINS: PluginCard[] = [
  // ── HR ────────────────────────────────────────────────────────────────────
  {
    id: "resume-screening",
    name: "Resume Screening",
    domain: "HR · Talent",
    href: "/solutions/hr/talent-acquisition",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "voice-screening",
    name: "AI Voice Screening",
    domain: "HR · Talent",
    href: "/solutions/hr/talent-acquisition",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: "interview-scheduling",
    name: "Interview Scheduling",
    domain: "HR · Talent",
    href: "/solutions/hr/talent-acquisition",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    id: "candidate-scoring",
    name: "Candidate Scoring",
    domain: "HR · Talent",
    href: "/solutions/hr/talent-acquisition",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  // ── Sales ─────────────────────────────────────────────────────────────────
  {
    id: "lead-qualification",
    name: "Lead Qualification",
    domain: "Sales",
    href: "/solutions/sales/lead-management",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    id: "sales-outreach",
    name: "Sales Outreach",
    domain: "Sales",
    href: "/solutions/sales",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "opportunity-management",
    name: "Opportunity Management",
    domain: "Sales",
    href: "/solutions/sales",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    id: "crm-update",
    name: "CRM Update",
    domain: "Sales",
    href: "/solutions/sales",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  // ── Customer Support ──────────────────────────────────────────────────────
  {
    id: "ticket-classification",
    name: "Ticket Classification",
    domain: "Support",
    href: "/solutions/customer-support/support-workflow",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    id: "agent-assist",
    name: "Agent Assist",
    domain: "Support",
    href: "/solutions/customer-support",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    id: "knowledge-search",
    name: "Knowledge Search",
    domain: "Support",
    href: "/solutions/customer-support",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: "response-generation",
    name: "Response Generation",
    domain: "Support",
    href: "/solutions/customer-support",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  // ── IT ────────────────────────────────────────────────────────────────────
  {
    id: "it-incident",
    name: "IT Incident Management",
    domain: "IT Support",
    href: "/solutions/it/it-support",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    id: "service-request",
    name: "Service Request",
    domain: "IT · Service Ops",
    href: "/solutions/it/service-operations",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: "email-automation",
    name: "Email Automation",
    domain: "IT · Email",
    href: "/solutions/it/email-automation",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "approval-workflow",
    name: "Approval Workflow",
    domain: "IT · Service Ops",
    href: "/solutions/it/service-operations",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  // ── Second row (slightly different set for visual variety in rail row 2) ──
  {
    id: "candidate-sourcing",
    name: "Candidate Sourcing",
    domain: "HR · Talent",
    href: "/solutions/hr/talent-acquisition",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "lead-enrichment",
    name: "Lead Enrichment",
    domain: "Sales",
    href: "/solutions/sales/lead-management",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    id: "escalation",
    name: "Escalation",
    domain: "Support",
    href: "/solutions/customer-support/support-workflow",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
    ),
  },
  {
    id: "access-request",
    name: "Access Request",
    domain: "IT Support",
    href: "/solutions/it/it-support",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    id: "sales-analytics",
    name: "Sales Analytics",
    domain: "Sales",
    href: "/solutions/sales",
    icon: (
      <svg className={C} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

// ── Single plugin card ────────────────────────────────────────────────────────

function PluginPill({ plugin }: { plugin: PluginCard }) {
  return (
    <Link
      href={plugin.href}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.055] transition-all duration-150 px-4 py-3 flex-shrink-0 select-none"
      tabIndex={-1}   // rail is decorative; keyboard users can reach links via normal tab
    >
      {/* Icon container — replace with <Image> when real logo asset is ready */}
      <span
        className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 flex-shrink-0 text-[#0066FF]"
        style={{ background: "rgba(0,102,255,0.10)" }}
        aria-hidden
      >
        {plugin.icon}
      </span>

      <div className="text-left leading-tight min-w-0">
        <p className="text-[13px] font-medium text-white truncate">{plugin.name}</p>
        <p className="text-[10px] text-slate-500 mt-0.5 truncate">{plugin.domain}</p>
      </div>
    </Link>
  );
}

// ── Rail row ─────────────────────────────────────────────────────────────────
// Renders items + their clone (seamless loop at 50% translate).

function RailRow({
  plugins,
  speed = 48,
  reverse = false,
}: {
  plugins: PluginCard[];
  speed?: number;
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const items = [...plugins, ...plugins];

  return (
    <div
      className="plugin-rail-wrap overflow-hidden w-full"
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)" }}
    >
      <div
        className="plugin-rail-track flex gap-3 py-1"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((plugin, i) => (
          <PluginPill key={`${plugin.id}-${i}`} plugin={plugin} />
        ))}
      </div>
    </div>
  );
}

// ── Main exported section ─────────────────────────────────────────────────────

export default function AgentRailSection() {
  // Split plugins into two rows for visual depth
  const row1 = PLUGINS.slice(0, Math.ceil(PLUGINS.length / 2));
  const row2 = PLUGINS.slice(Math.ceil(PLUGINS.length / 2));

  return (
    <section className="mt-3 rounded-2xl border border-white/12 bg-black overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-10 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-slate-500 mb-4">
            Platform capabilities
          </p>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-semibold leading-[1.08] tracking-[-0.03em]">
            <span className="text-white">AI agents for real</span>
            <br />
            <span className="text-[#0066FF]">business workflows.</span>
          </h2>
        </div>
        <div className="lg:max-w-sm lg:text-right shrink-0">
          <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
            From HR and sales to customer support and IT, SoloBuildAI connects AI agents to the tools your teams already use to automate real work.
          </p>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#0066FF] hover:text-white transition-colors"
          >
            Explore all solutions
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Domain pills */}
      <div className="px-6 sm:px-8 lg:px-10 pb-7 flex flex-wrap gap-2">
        {[
          { label: "HR", href: "/solutions/hr" },
          { label: "Sales", href: "/solutions/sales" },
          { label: "Customer Support", href: "/solutions/customer-support" },
          { label: "IT Solutions", href: "/solutions/it" },
        ].map((d) => (
          <Link
            key={d.label}
            href={d.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 transition-all px-3 py-1 text-[11px] font-medium text-slate-400 hover:text-white"
          >
            {d.label}
            <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Plugin rail — two rows */}
      <div className="space-y-3 pb-8">
        <RailRow plugins={row1} speed={52} />
        <RailRow plugins={row2} speed={64} reverse />
      </div>
    </section>
  );
}
