"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PluginLogo from "@/components/talent-acquisition/PluginLogo";
import type { LogoType } from "@/lib/talent-acquisition/plugins";

const BLUE = "#0066FF";

type WorkflowPlugin = {
  id: string;
  name: string;
  category: string;
  purpose: string;
  description: string;
  capability: string;
  status: string;
  workflowStages: number[];
  stage: number;
  workflowRole: string;
  workflowDescription: string;
  logoType: LogoType;
  capabilities: string[];
  technical: { method: string; authentication: string; actions: string };
  connectedIntegrations: string[];
  readiness: string;
};

type PluginTab = "overview" | "technical" | "workflow";

type WorkflowSolution = {
  eyebrow: string;
  heading: string;
  headingLead: string;
  headingAccent?: string;
  description: string;
  exploreLabel: string;
  heroAlt: string;
  activeMessage: string;
  heroImage: string;
  metrics: [string, string][];
  integrations: string[];
  categories: string[];
  workflowHeading: string;
  workflowDescription: string;
  stages: { number: string; title: string; description: string }[];
  plugins: WorkflowPlugin[];
};

const EMPLOYEE_ONBOARDING: WorkflowSolution = {
  eyebrow: "SOLUTIONS / HR / EMPLOYEE ONBOARDING",
  heading: "Employee Onboarding.",
  headingLead: "Faster. Smoother. With ",
  headingAccent: "AI.",
  description: "Automate your employee onboarding process — from document verification to system access — and create a seamless experience for new hires with intelligent workflows.",
  exploreLabel: "Explore Onboarding Workflow →",
  heroAlt: "Employee onboarding team working together",
  activeMessage: "AI onboarding system active",
  heroImage: "/images/hero-woman.png",
  metrics: [["6", "Workflow steps"], ["12+", "Ready-to-use plugins"], ["95%", "Automation rate"], ["70%", "Faster onboarding"]],
  integrations: ["HR System", "Document Management", "Email & Calendar", "Identity Management", "Slack", "Microsoft 365", "Google Workspace"],
  categories: ["All", "Verification", "Access", "Documents", "Learning", "Communication", "Compliance", "Reporting", "Integration"],
  workflowHeading: "Employee Onboarding Workflow",
  workflowDescription: "Automate every step from first document to a confident first day.",
  stages: [
    { number: "01", title: "Document Verification", description: "Verify and validate employee documents." },
    { number: "02", title: "Account Setup", description: "Create employee accounts and system access." },
    { number: "03", title: "IT Equipment", description: "Assign devices and required hardware." },
    { number: "04", title: "Orientation", description: "Share onboarding materials and company policies." },
    { number: "05", title: "Training", description: "Assign training and learning paths." },
    { number: "06", title: "Compliance", description: "Complete legal and compliance requirements." },
    { number: "07", title: "Welcome", description: "Send onboarding messages and introductions." },
    { number: "08", title: "Track Progress", description: "Monitor onboarding status and completion." },
  ],
  plugins: [
    ["document-verifier", "Document Verifier", "Verification", "Document Validation", "Verify identity and employment documents before onboarding begins.", "Document checks", "Active", 1, "resume-parser"],
    ["identity-validation", "Identity Validation", "Verification", "Identity Checks", "Validate employee identity information against approved onboarding records.", "Identity validation", "Active", 1, "resume-screening"],
    ["account-creator", "Account Creator", "Access", "Account Provisioning", "Create employee accounts and provision access to required systems.", "Account creation", "Active", 2, "candidate-sourcing"],
    ["file-management", "File Management", "Documents", "Employee Files", "Organize signed forms, policies, and onboarding documents in one place.", "File organization", "Active", 1, "confluence"],
    ["training-management", "Training Management", "Learning", "Learning Paths", "Assign role-specific training and track progress through required learning paths.", "Training assignment", "Active", 5, "screening-report"],
    ["notification", "Notification", "Communication", "Employee Updates", "Send timely onboarding updates, reminders, and welcome messages.", "Notifications", "Active", 7, "candidate-communication"],
    ["compliance-check", "Compliance Check", "Compliance", "Compliance Readiness", "Track legal, policy, and compliance requirements through onboarding.", "Compliance tracking", "Active", 6, "jd-analyzer"],
    ["employee-portal", "Employee Portal", "Access", "Self-service Onboarding", "Give new hires a clear place to complete tasks and find essential resources.", "Employee self-service", "Active", 8, "candidate-sourcing"],
    ["onboarding-analytics", "Analytics", "Reporting", "Progress Reporting", "Monitor onboarding completion, bottlenecks, and team readiness.", "Progress analytics", "Active", 8, "screening-report"],
    ["slack-onboarding", "Slack", "Integration", "Team Communication", "Coordinate onboarding notifications with the teams supporting new hires.", "Team notifications", "Quick-start", 7, "slack"],
    ["microsoft-365", "Microsoft 365", "Integration", "Workplace Tools", "Connect calendars, documents, and workplace collaboration tools.", "Workplace integration", "Quick-start", 2, "microsoft-365"],
    ["google-workspace", "Google Workspace", "Integration", "Workplace Tools", "Connect onboarding documents, calendars, and team collaboration workflows.", "Workspace integration", "Quick-start", 4, "google-workspace"],
  ].map(([id, name, category, purpose, description, capability, status, stage, logoType]) => ({ id: String(id), name: String(name), category: String(category), purpose: String(purpose), description: String(description), capability: String(capability), status: String(status), workflowStages: [Number(stage)], stage: Number(stage), workflowRole: String(capability), workflowDescription: String(description), logoType: logoType as LogoType, capabilities: [String(capability), String(purpose)], technical: { method: "Not documented in the current workflow configuration", authentication: "Not documented in the current workflow configuration", actions: String(capability) }, connectedIntegrations: ["HR System", "Document Management"], readiness: "Review the connected onboarding tools and required permissions before enabling this step." })),
};

const SALES_OUTREACH: WorkflowSolution = {
  eyebrow: "SOLUTIONS / SALES / SALES OUTREACH",
  heading: "Sales Outreach.",
  headingLead: "More Leads. More Conversations.",
  description: "Automate your sales outreach with personalized messaging, lead research, and follow-ups — and turn more prospects into customers with AI-powered workflows.",
  exploreLabel: "Explore Sales Workflow →",
  heroAlt: "Sales team collaborating on outreach",
  activeMessage: "AI sales system active",
  heroImage: "/images/editorial-man.png",
  metrics: [["6", "Workflow steps"], ["10+", "Ready-to-use plugins"], ["85%", "Automation rate"], ["60%", "Faster follow-ups"]],
  integrations: ["CRM", "Email & Calendar", "LinkedIn", "Salesforce", "HubSpot", "Google Workspace", "Slack"],
  categories: ["All", "Lead Management", "Qualification", "Outreach", "CRM", "Pipeline", "Scheduling", "Reporting", "Integration"],
  workflowHeading: "Sales Outreach Workflow",
  workflowDescription: "Move from researched lead to meaningful conversation with less manual work.",
  stages: [
    { number: "01", title: "Lead Research", description: "Find and qualify potential leads." },
    { number: "02", title: "Personalized Messaging", description: "Create tailored outreach messages." },
    { number: "03", title: "Email Campaigns", description: "Send personalized email sequences." },
    { number: "04", title: "Follow-ups", description: "Track responses and send follow-up messages." },
    { number: "05", title: "Meeting Booking", description: "Schedule qualified sales meetings." },
    { number: "06", title: "CRM Update", description: "Sync data and update pipeline information." },
    { number: "07", title: "Deal Tracking", description: "Monitor progress and opportunities." },
    { number: "08", title: "Reporting", description: "Generate sales reports and insights." },
  ],
  plugins: [
    ["lead-finder", "Lead Finder", "Lead Management", "Lead Discovery", "Find and prioritize prospects that match your ideal customer profile.", "Lead discovery", "Active", 1, "candidate-sourcing"],
    ["data-enrichment", "Data Enrichment", "Qualification", "Contact Intelligence", "Enrich lead records with relevant company and contact context.", "Data enrichment", "Active", 1, "resume-parser"],
    ["email-sender", "Email Sender", "Outreach", "Outreach Delivery", "Send personalized outreach and campaign messages at the right time.", "Email delivery", "Active", 3, "candidate-communication"],
    ["follow-up-tracker", "Follow-up Tracker", "Outreach", "Follow-up Automation", "Track responses and keep every follow-up moving without manual reminders.", "Follow-up tracking", "Active", 4, "screening-report"],
    ["calendar-booking", "Calendar Booking", "Scheduling", "Meeting Scheduling", "Coordinate availability and book qualified sales meetings automatically.", "Meeting booking", "Active", 5, "google-calendar"],
    ["crm-sync", "CRM Sync", "CRM", "Pipeline Updates", "Keep contacts, activities, and opportunities synchronized in your CRM.", "CRM synchronization", "Active", 6, "hubspot"],
    ["deal-tracker", "Deal Tracker", "Pipeline", "Deal Progress", "Monitor opportunity movement and highlight deals needing attention.", "Deal tracking", "Active", 7, "candidate-scoring"],
    ["sales-analytics", "Analytics", "Reporting", "Sales Insights", "Generate reports that show outreach performance and pipeline momentum.", "Sales analytics", "Active", 8, "screening-report"],
    ["linkedin", "LinkedIn", "Integration", "Prospect Research", "Bring professional context into lead research and personalized outreach.", "Social prospecting", "Quick-start", 1, "linkedin"],
    ["hubspot", "HubSpot", "Integration", "CRM Context", "Connect contact, company, and pipeline context to outreach workflows.", "CRM context", "Quick-start", 6, "hubspot"],
    ["salesforce", "Salesforce", "Integration", "CRM Pipeline", "Sync sales activities and opportunity updates with Salesforce.", "CRM pipeline", "Quick-start", 6, "salesforce"],
    ["google-workspace-sales", "Google Workspace", "Integration", "Workplace Tools", "Connect email, calendar, and documents used by sales teams.", "Workspace integration", "Quick-start", 5, "google-workspace"],
  ].map(([id, name, category, purpose, description, capability, status, stage, logoType]) => ({ id: String(id), name: String(name), category: String(category), purpose: String(purpose), description: String(description), capability: String(capability), status: String(status), workflowStages: [Number(stage)], stage: Number(stage), workflowRole: String(capability), workflowDescription: String(description), logoType: logoType as LogoType, capabilities: [String(capability), String(purpose)], technical: { method: "Not documented in the current workflow configuration", authentication: "Not documented in the current workflow configuration", actions: String(capability) }, connectedIntegrations: ["CRM", "Email & Calendar"], readiness: "Review the connected sales tools and required permissions before enabling this step." })),
};

function IntegrationMark({ name }: { name: string }) {
  const logoTypes: Partial<Record<string, LogoType>> = {
    Slack: "slack",
    "Microsoft 365": "microsoft-365",
    "Google Workspace": "google-workspace",
    LinkedIn: "linkedin",
    Salesforce: "salesforce",
    HubSpot: "hubspot",
  };
  const logoType = logoTypes[name];
  if (logoType) return <PluginLogo logoType={logoType} size="sm" />;
  const icon: Record<string, string> = {
    "HR System": "♙",
    "Document Management": "▤",
    "Email & Calendar": "◷",
    "Identity Management": "◇",
    CRM: "◎",
  };
  return <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm text-[#0066FF]" aria-label={`${name} icon`}>{icon[name] ?? "•"}</span>;
}

function PluginCard({ plugin, selected, onClick }: { plugin: WorkflowPlugin; selected: boolean; onClick: () => void }) {
  return <button onClick={onClick} className={`group flex min-h-[190px] flex-col rounded-xl border p-4 text-left transition-all ${selected ? "border-[#0066FF] bg-[#0066FF]/10" : "border-white/10 bg-white/[0.025] hover:border-white/25"}`}><div className="flex items-start justify-between"><PluginLogo logoType={plugin.logoType} size="md" /><span className="text-white/35 transition-transform group-hover:translate-x-1">→</span></div><div className="mt-4 flex items-start justify-between gap-2"><h3 className="text-sm font-medium">{plugin.name}</h3><span className="shrink-0 rounded-full border border-white/10 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.1em] text-white/35">{plugin.category}</span></div><p className="mt-2 flex-1 text-[11px] leading-relaxed text-white/45">{plugin.description}</p><div className="mt-3 flex items-center justify-between gap-2 border-t border-white/8 pt-3"><span className="truncate text-[9px] uppercase tracking-[0.12em] text-white/30">{plugin.capability}</span><span className="shrink-0 text-[9px] text-white/30">Stage {plugin.workflowStages[0]}</span></div></button>;
}

export default function WorkflowSolutionPage({ config }: { config: WorkflowSolution }) {
  const workflowRef = useRef<HTMLElement>(null);
  const marketplaceRef = useRef<HTMLElement>(null);
  const pluginRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [selectedPluginId, setSelectedPluginId] = useState(config.plugins[0].id);
  const [pluginTab, setPluginTab] = useState<PluginTab>("overview");
  const [showReadiness, setShowReadiness] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const selectedPlugin = config.plugins.find((plugin) => plugin.id === selectedPluginId) ?? config.plugins[0];
  const visiblePlugins = selectedCategory === "All" ? config.plugins : config.plugins.filter((plugin) => plugin.category === selectedCategory);
  const stagePlugins = config.plugins.filter((plugin) => plugin.workflowStages.includes(activeStage + 1));

  const selectStage = useCallback((index: number) => {
    setActiveStage(index);
    const selectedBelongsToStage = config.plugins.some((plugin) => plugin.id === selectedPluginId && plugin.workflowStages.includes(index + 1));
    if (!selectedBelongsToStage) {
      const first = config.plugins.find((plugin) => plugin.workflowStages.includes(index + 1));
      if (first) setSelectedPluginId(first.id);
    }
  }, [config.plugins, selectedPluginId]);

  const selectPlugin = useCallback((plugin: WorkflowPlugin) => {
    setSelectedPluginId(plugin.id);
    setActiveStage(plugin.workflowStages[0] - 1);
    setPluginTab("overview");
    setShowReadiness(false);
  }, []);

  return <PageLayout framed wide><div className="space-y-3 bg-[#05070B] text-white">
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07090D]"><div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.18) 1px, transparent 1px)", backgroundSize: "28px 28px" }} /><div className="relative px-7 py-14 sm:px-10 lg:px-14"><div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div><div className="mb-7 flex items-center gap-2"><Link href="/solutions" className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">{config.eyebrow.split(" /").slice(0, 2).join(" /")}</Link><span className="text-white/20">/</span><span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0066FF]">{config.eyebrow.split(" /").slice(2).join(" / ")}</span></div><h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{config.heading}<br /><span>{config.headingLead}{config.headingAccent && <span className="text-[#0066FF]">{config.headingAccent}</span>}</span></h1><p className="mt-7 max-w-xl text-base leading-relaxed text-white/50">{config.description}</p><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => workflowRef.current?.scrollIntoView({ behavior: "smooth" })} className="rounded-lg bg-[#0066FF] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85">{config.exploreLabel}</button><button onClick={() => marketplaceRef.current?.scrollIntoView({ behavior: "smooth" })} className="rounded-lg border border-white/15 px-5 py-3 text-sm text-white/75 transition-colors hover:border-white/35 hover:text-white">Browse Plugins</button></div></div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"><div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 via-transparent to-transparent" /><Image src={config.heroImage} alt={config.heroAlt} width={900} height={700} priority className="h-[340px] w-full object-cover object-center opacity-60 grayscale sm:h-[400px]" /><div className="absolute bottom-5 left-5 rounded-lg border border-white/15 bg-black/70 px-4 py-3 text-xs text-white/75 backdrop-blur-sm"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0066FF]" />{config.activeMessage}</div></div></div>
      <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-0">{config.metrics.map(([value, label]) => <div key={label} className="sm:border-r sm:border-white/10 sm:pl-6 first:pl-0 last:border-0"><p className="text-2xl font-medium text-white">{value}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/35">{label}</p></div>)}</div>
    </div></section>

    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#07090D] py-8"><div className="px-7 sm:px-10 lg:px-14"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0066FF]">Integrates with your tools</p></div><div className="mt-6 overflow-hidden border-y border-white/10 py-3"><div className="hr-marquee-track flex w-max gap-3">{[...config.integrations, ...config.integrations].map((name, index) => <div key={`${name}-${index}`} className="flex shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white/60"><IntegrationMark name={name} />{name}</div>)}</div></div></section>

    <section id="workflow" ref={workflowRef} className="rounded-2xl border border-white/10 bg-[#07090D]"><div className="border-b border-white/10 px-7 py-8 sm:px-10 lg:px-14"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">Automation canvas</p><h2 className="mt-3 text-4xl font-medium tracking-[-0.04em]">{config.workflowHeading}</h2><p className="mt-2 text-sm text-white/40">Click a stage to see which plugins are active. Click a plugin chip to open its details.</p></div><div className="px-7 py-8 sm:px-10 lg:px-14"><div className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B11] p-5 sm:p-8" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)", backgroundSize: "22px 22px" }}><div className="flex min-w-[1100px] items-start gap-2">{config.stages.map((stage, index) => <div key={stage.number} className="flex items-start"><button onClick={() => selectStage(index)} className={`relative flex w-[138px] flex-col rounded-xl border p-4 text-left transition-all ${activeStage === index ? "border-[#0066FF] bg-[#0066FF]/15 shadow-[0_0_28px_rgba(0,102,255,0.18)]" : "border-white/12 bg-white/[0.035] hover:border-white/30"}`}><span className="text-[10px] font-bold tracking-[0.2em] text-[#0066FF]">{stage.number}</span><h3 className="mt-3 text-[13px] font-semibold leading-tight">{stage.title}</h3><p className="mt-1 text-[10px] leading-relaxed text-white/40">{stage.description}</p><p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-white/25">{config.plugins.filter((plugin) => plugin.workflowStages.includes(index + 1)).length} plugins</p><span className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#080B11] bg-[#0066FF]" /></button>{index < config.stages.length - 1 && <div className="mt-10 h-px w-8 shrink-0 bg-white/12" />}</div>)}</div></div><div className="mt-5"><p className="text-xs text-white/30">Stage <span className="font-semibold text-white">{config.stages[activeStage].title}</span> — active plugins</p><div className="mt-3 flex flex-wrap gap-2">{stagePlugins.map((plugin) => <button key={plugin.id} onClick={() => selectPlugin(plugin)} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-left text-[11px] text-white/60 hover:border-[#0066FF]/60 hover:text-white"><PluginLogo logoType={plugin.logoType} size="sm" />{plugin.name}</button>)}</div></div></div></section>

    <section ref={marketplaceRef} id="plugin-workspace" className="overflow-hidden rounded-2xl border border-white/10 bg-[#07090D]"><div className="border-b border-white/10 px-7 py-8 sm:px-10 lg:px-14"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">The plugin layer</p><h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">Available Plugins &amp; Integrations</h2><p className="mt-2 text-sm text-white/40">Click any plugin to see what it does and where it fits in the workflow.</p><div className="mt-6 flex flex-wrap gap-2">{config.categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-lg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-all ${selectedCategory === category ? "border border-[#0066FF]/35 bg-[#0066FF]/[0.13] text-white" : "border border-white/8 bg-white/[0.04] text-white/40 hover:border-white/20 hover:text-white/70"}`}>{category}</button>)}</div></div><div className="grid lg:grid-cols-[220px_minmax(0,1fr)_300px] lg:divide-x lg:divide-white/8">
      <aside className="border-b border-white/10 p-4 lg:border-b-0"><p className="px-3 pb-3 text-[9px] uppercase tracking-[0.2em] text-white/35">Plugins &amp; Integrations</p><div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:block">{config.plugins.map((plugin) => <button key={plugin.id} onClick={() => selectPlugin(plugin)} className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${selectedPlugin.id === plugin.id ? "bg-[#0066FF]/15 text-white" : "text-white/50 hover:bg-white/[0.04] hover:text-white"}`}><PluginLogo logoType={plugin.logoType} size="sm" /><span className="truncate">{plugin.name}</span></button>)}</div></aside>
      <div className="min-w-0 border-b border-white/10 p-5 sm:p-7 lg:border-b-0 lg:p-8"><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{visiblePlugins.map((plugin) => <PluginCard key={plugin.id} plugin={plugin} selected={selectedPlugin.id === plugin.id} onClick={() => selectPlugin(plugin)} />)}</div>{visiblePlugins.length === 0 && <p className="py-10 text-center text-sm text-white/35">No plugins in this category.</p>}</div>
      <aside ref={pluginRef} className="flex min-h-[560px] flex-col border-t border-white/10 lg:border-t-0"><div className="border-b border-white/10 p-5"><div className="flex items-start gap-3"><PluginLogo logoType={selectedPlugin.logoType} size="md" /><div className="min-w-0"><h3 className="truncate text-base font-medium text-white">{selectedPlugin.name}</h3><p className="mt-1 text-[11px] text-white/45">{selectedPlugin.purpose}</p></div></div><span className="mt-4 inline-flex rounded-full border border-[#0066FF]/35 bg-[#0066FF]/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[#66a3ff]">{selectedPlugin.status}</span></div><div className="flex gap-4 border-b border-white/10 px-5 pt-4">{(["overview", "technical", "workflow"] as PluginTab[]).map((tab) => <button key={tab} onClick={() => setPluginTab(tab)} className={`border-b-2 pb-3 text-[10px] uppercase tracking-[0.14em] transition-colors ${pluginTab === tab ? "border-[#0066FF] text-white" : "border-transparent text-white/30 hover:text-white/70"}`}>{tab}</button>)}</div><div className="flex-1 space-y-5 overflow-y-auto p-5 text-[12px] text-white/55">{pluginTab === "overview" && <><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Description</p><p className="leading-relaxed">{selectedPlugin.description}</p></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Capabilities</p><div className="flex flex-wrap gap-2">{selectedPlugin.capabilities.map((capability) => <span key={capability} className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-white/60">{capability}</span>)}</div></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Purpose / use case</p><p className="leading-relaxed">{selectedPlugin.purpose}</p></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Workflow stage</p><p className="text-white/70">{config.stages[selectedPlugin.stage - 1].number} — {config.stages[selectedPlugin.stage - 1].title}</p></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Connects with</p><div className="flex flex-wrap gap-2">{selectedPlugin.connectedIntegrations.map((integration) => <span key={integration} className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.04] px-2 py-1.5 text-[10px] text-white/55"><IntegrationMark name={integration} />{integration}</span>)}</div></div></>}{pluginTab === "technical" && <><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Integration method</p><p className="text-white/70">{selectedPlugin.technical.method}</p></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Authentication</p><p className="text-white/70">{selectedPlugin.technical.authentication}</p></div><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Data / actions supported</p><p className="leading-relaxed text-white/70">{selectedPlugin.technical.actions}</p></div></>}{pluginTab === "workflow" && <><div><p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-white/30">Active at workflow stages</p>{selectedPlugin.workflowStages.map((stageNumber) => <div key={stageNumber} className="mt-3 rounded-lg border border-[#0066FF]/20 bg-[#0066FF]/[0.06] p-3"><p className="font-medium text-white/80">{config.stages[stageNumber - 1].number} — {config.stages[stageNumber - 1].title}</p><p className="mt-1 leading-relaxed text-white/65">{config.stages[stageNumber - 1].description}</p></div>)}</div></>}</div><div className="order-2 mt-auto flex gap-3 border-t border-white/10 p-5"><button onClick={() => setShowReadiness((current) => !current)} className="rounded-lg bg-[#0066FF] px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-85">Readiness details</button><button onClick={() => { setActiveStage(selectedPlugin.workflowStages[0] - 1); workflowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="rounded-lg border border-white/15 px-4 py-2.5 text-xs text-white/70 transition-colors hover:border-[#0066FF] hover:text-white">View in workflow →</button></div></aside>
    </div></section>
  </div></PageLayout>;
}

export { EMPLOYEE_ONBOARDING, SALES_OUTREACH };
