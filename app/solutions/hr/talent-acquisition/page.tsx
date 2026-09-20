"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import IntegrationLogo from "@/components/solutions/IntegrationLogo";
import PluginLogo from "@/components/talent-acquisition/PluginLogo";
import {
  ALL_TALENT_PLUGINS,
  WORKFLOW_STAGES,
  type TalentPlugin,
  type StageId,
  type WorkflowStage,
} from "@/lib/talent-acquisition/plugins";

// ─── Constants ────────────────────────────────────────────────────────────────
const BLUE = "#0066FF";

// Integration marquee names
const INTEGRATION_NAMES = [
  "Google Calendar", "Jira", "Workable", "BambooHR", "Ashby",
  "Slack", "Confluence", "HubSpot",
];

// Category filter options (null = show all)
const CATEGORIES = [null, "Analysis", "Sourcing", "Screening", "Communication", "Scheduling", "Reporting", "Integration"] as const;
type FilterCategory = typeof CATEGORIES[number];

// ─── Tab types ────────────────────────────────────────────────────────────────
type TabId = "overview" | "technical" | "workflow";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns accent colour for a plugin category badge */
function categoryColor(cat: string): { text: string; bg: string; border: string } {
  const map: Record<string, { text: string; bg: string; border: string }> = {
    Analysis:      { text: "#3b7eff", bg: "rgba(59,126,255,0.10)",  border: "rgba(59,126,255,0.22)" },
    Sourcing:      { text: "#a78bfa", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.22)" },
    Screening:     { text: "#60a5fa", bg: "rgba(96,165,250,0.10)",  border: "rgba(96,165,250,0.22)" },
    Communication: { text: "#fb923c", bg: "rgba(251,146,60,0.10)",  border: "rgba(251,146,60,0.22)" },
    Scheduling:    { text: "#22d3ee", bg: "rgba(34,211,238,0.10)",  border: "rgba(34,211,238,0.22)" },
    Reporting:     { text: "#34d399", bg: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.22)" },
    Integration:   { text: "#94a3b8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.18)" },
  };
  return map[cat] ?? { text: "#94a3b8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.18)" };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Compact plugin chip used inside workflow stage nodes */
function PluginChip({
  plugin,
  selected,
  onClick,
}: {
  plugin: TalentPlugin;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-left transition-all"
      style={{
        background: selected ? `${BLUE}22` : "rgba(255,255,255,0.04)",
        border: `1px solid ${selected ? BLUE + "60" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <PluginLogo logoType={plugin.logoType} logoImagePath={plugin.logoImagePath} size="sm" />
      <span
        className="truncate text-[11px] font-medium"
        style={{ color: selected ? "#ffffff" : "rgba(255,255,255,0.55)" }}
      >
        {plugin.name}
      </span>
    </button>
  );
}

/** Full plugin marketplace card */
function PluginCard({
  plugin,
  selected,
  onClick,
  highlightedStageIds,
}: {
  plugin: TalentPlugin;
  selected: boolean;
  onClick: () => void;
  highlightedStageIds: Set<StageId>;
}) {
  const cc = categoryColor(plugin.category);
  const stageNames = plugin.workflowStages
    .map((sid) => WORKFLOW_STAGES.find((s) => s.id === sid)?.title)
    .filter(Boolean);

  // Which workflow stages containing this plugin are currently highlighted
  const isWorkflowActive = plugin.workflowStages.some((sid) => highlightedStageIds.has(sid));

  return (
    <button
      onClick={onClick}
      className="group flex flex-col rounded-xl border p-5 text-left transition-all duration-150 hover:-translate-y-0.5"
      style={{
        background: selected
          ? "rgba(0,102,255,0.10)"
          : isWorkflowActive
          ? "rgba(0,102,255,0.05)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${
          selected
            ? `${BLUE}55`
            : isWorkflowActive
            ? `${BLUE}30`
            : "rgba(255,255,255,0.08)"
        }`,
        boxShadow: selected ? `0 0 0 1px ${BLUE}22, 0 4px 20px rgba(0,102,255,0.12)` : undefined,
      }}
    >
      {/* Header: logo + category + arrow */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <PluginLogo
          logoType={plugin.logoType}
          logoImagePath={plugin.logoImagePath}
          size="md"
        />
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em]"
            style={{ color: cc.text, background: cc.bg, border: `1px solid ${cc.border}` }}
          >
            {plugin.category}
          </span>
          <span
            className="text-[11px] transition-transform group-hover:translate-x-0.5"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            →
          </span>
        </div>
      </div>

      {/* Name + purpose */}
      <p className="text-[13px] font-semibold leading-snug text-white">{plugin.name}</p>
      <p
        className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em]"
        style={{ color: cc.text }}
      >
        {plugin.purpose}
      </p>

      {/* Description — the key addition */}
      <p className="mt-3 flex-1 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        {plugin.description}
      </p>

      {/* Footer: tier + workflow stages */}
      <div
        className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <span className="text-[9px] uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.25)" }}>
          {plugin.tier}
        </span>
        {stageNames.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {stageNames.slice(0, 2).map((name) => (
              <span
                key={name}
                className="rounded px-1.5 py-0.5 text-[9px] font-medium"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {name}
              </span>
            ))}
            {stageNames.length > 2 && (
              <span
                className="rounded px-1.5 py-0.5 text-[9px]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                +{stageNames.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

/** Detail panel — shows full plugin info */
function PluginDetailPanel({
  plugin,
  onViewWorkflow,
}: {
  plugin: TalentPlugin;
  onViewWorkflow: () => void;
}) {
  const [tab, setTab] = useState<TabId>("overview");
  const cc = categoryColor(plugin.category);

  const stageNames = plugin.workflowStages
    .map((sid) => WORKFLOW_STAGES.find((s) => s.id === sid)?.title)
    .filter(Boolean)
    .join(" → ");

  const integrations = ALL_TALENT_PLUGINS.filter(
    (p) => p.id !== plugin.id && plugin.integrationsWith?.includes(p.id)
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 p-6 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-4">
          <PluginLogo
            logoType={plugin.logoType}
            logoImagePath={plugin.logoImagePath}
            size="lg"
          />
          <div>
            <p className="text-xl font-semibold text-white leading-tight">{plugin.name}</p>
            <p className="mt-0.5 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              {plugin.purpose}
            </p>
          </div>
        </div>
        <span
          className="shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
          style={{
            color: plugin.status === "Active" ? "#34d399" : "rgba(255,255,255,0.4)",
            background: plugin.status === "Active" ? "rgba(52,211,153,0.10)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${plugin.status === "Active" ? "rgba(52,211,153,0.25)" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          {plugin.status}
        </span>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-1 px-6 pt-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        {(["overview", "technical", "workflow"] as TabId[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="pb-3 px-1 text-[11px] uppercase tracking-[0.14em] transition-colors capitalize"
            style={{
              color: tab === t ? "#fff" : "rgba(255,255,255,0.3)",
              borderBottom: tab === t ? `2px solid ${BLUE}` : "2px solid transparent",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5 text-[12px]" style={{ color: "rgba(255,255,255,0.55)" }}>
        {tab === "overview" && (
          <>
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Description
              </p>
              <p className="leading-relaxed">{plugin.description}</p>
            </div>

            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {plugin.capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg px-2.5 py-1.5 text-[11px]"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Use
              </p>
              <p className="leading-relaxed">{plugin.use}</p>
            </div>

            {integrations.length > 0 && (
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Connects with
                </p>
                <div className="flex flex-wrap gap-2">
                  {integrations.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <PluginLogo logoType={p.logoType} size="sm" />
                      <span style={{ color: "rgba(255,255,255,0.55)" }}>{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {tab === "technical" && (
          <>
            {[
              ["Plugin tier", plugin.tier],
              ["Method", plugin.method ?? "Documented purpose only"],
              ["Authentication", plugin.authentication ?? "Not documented"],
              ["Access", plugin.access ?? "Not documented"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="mb-1 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {label}
                </p>
                <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{value}</p>
              </div>
            ))}
          </>
        )}

        {tab === "workflow" && (
          <>
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Active at workflow stages
              </p>
              <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stageNames || "Not mapped to a stage"}
              </p>
            </div>
            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Stage roles
              </p>
              <div className="space-y-2">
                {plugin.workflowStages.map((sid) => {
                  const stage = WORKFLOW_STAGES.find((s) => s.id === sid);
                  if (!stage) return null;
                  return (
                    <div
                      key={sid}
                      className="flex items-start gap-3 rounded-lg p-3"
                      style={{ background: "rgba(0,102,255,0.08)", border: "1px solid rgba(0,102,255,0.18)" }}
                    >
                      <span
                        className="text-[10px] font-bold shrink-0 mt-0.5"
                        style={{ color: BLUE }}
                      >
                        {stage.number}
                      </span>
                      <div>
                        <p className="text-[12px] font-medium text-white">{stage.title}</p>
                        <p className="mt-0.5 text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div
        className="flex gap-3 p-5 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <button
          className="rounded-lg px-4 py-2.5 text-xs font-medium text-white transition-colors"
          style={{ backgroundColor: BLUE }}
        >
          Readiness details
        </button>
        <button
          onClick={onViewWorkflow}
          className="rounded-lg border px-4 py-2.5 text-xs transition-colors"
          style={{
            color: "rgba(255,255,255,0.6)",
            borderColor: "rgba(255,255,255,0.12)",
          }}
        >
          View in workflow →
        </button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function TalentAcquisitionPage() {
  const workflowRef = useRef<HTMLElement>(null);
  const marketplaceRef = useRef<HTMLElement>(null);

  // ── State ──────────────────────────────────────────────────────────────────
  const [selectedPluginId, setSelectedPluginId]   = useState<string>("jd-analyzer");
  const [activeStageId, setActiveStageId]         = useState<StageId>("description");
  const [filter, setFilter]                       = useState<FilterCategory>(null);

  const selectedPlugin  = ALL_TALENT_PLUGINS.find((p) => p.id === selectedPluginId) ?? ALL_TALENT_PLUGINS[0];
  const activeStage     = WORKFLOW_STAGES.find((s) => s.id === activeStageId) ?? WORKFLOW_STAGES[0];

  // Set of stage IDs that should show blue highlights because the selected
  // plugin is active in them
  const highlightedStageIds = new Set<StageId>(selectedPlugin.workflowStages);

  // Filtered list for the marketplace grid
  const visiblePlugins = filter
    ? ALL_TALENT_PLUGINS.filter((p) => p.category === filter)
    : ALL_TALENT_PLUGINS;

  // ── Interactions ───────────────────────────────────────────────────────────
  const selectPlugin = useCallback((plugin: TalentPlugin) => {
    setSelectedPluginId(plugin.id);
    if (plugin.workflowStages.length > 0) setActiveStageId(plugin.workflowStages[0]);
  }, []);

  const selectStage = useCallback((stage: WorkflowStage) => {
    setActiveStageId(stage.id);
    const firstPlugin = ALL_TALENT_PLUGINS.find((p) =>
      stage.pluginIds.includes(p.id)
    );
    if (firstPlugin) setSelectedPluginId(firstPlugin.id);
  }, []);

  const scrollToWorkflow = useCallback(() => {
    workflowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToMarketplace = useCallback(() => {
    marketplaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <PageLayout framed wide>
      <div className="bg-[#05070B] text-white space-y-3">

        {/* ─── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07090D]">
          {/* dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative px-7 py-14 sm:px-10 lg:px-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Copy */}
              <div>
                <div className="flex items-center gap-2 mb-7">
                  <Link
                    href="/solutions/hr"
                    className="text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Solutions / HR
                  </Link>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: BLUE }}
                  >
                    Talent Acquisition
                  </span>
                </div>
                <h1
                  className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                  style={{ color: "#ffffff" }}
                >
                  Talent Acquisition.<br />
                  Smarter Hiring with{" "}
                  <span style={{ color: BLUE }}>AI.</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  Find, engage, screen and hire the best talent with AI agents. A connected
                  workflow from job description to hire — with humans in control at every
                  decision point.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button
                    onClick={scrollToWorkflow}
                    className="rounded-lg px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
                    style={{ backgroundColor: BLUE }}
                  >
                    Explore Hiring Workflow →
                  </button>
                  <button
                    onClick={scrollToMarketplace}
                    className="rounded-lg border border-white/15 px-5 py-3 text-sm text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    Browse Plugins
                  </button>
                </div>
              </div>

              {/* Hero image panel */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,102,255,0.20) 0%, transparent 60%)",
                  }}
                />
                <Image
                  src="/images/hero-woman.png"
                  alt="Talent acquisition team"
                  width={900}
                  height={700}
                  priority
                  className="h-[340px] w-full object-cover object-center opacity-60 grayscale sm:h-[400px]"
                />
                <div className="absolute bottom-5 left-5 rounded-lg border border-white/15 bg-black/70 px-4 py-3 text-xs backdrop-blur-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: BLUE }} />
                  AI hiring system active
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4 sm:gap-0"
            >
              {[
                [String(WORKFLOW_STAGES.length),         "Workflow stages"],
                [String(ALL_TALENT_PLUGINS.length) + "+", "Ready-to-use plugins"],
                ["8+",  "Integrations"],
                ["80%", "Faster execution"],
              ].map(([value, label]) => (
                <div key={label} className="sm:border-r sm:border-white/10 sm:pl-6 first:pl-0 last:border-0">
                  <p className="text-2xl font-medium text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS MARQUEE ──────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#07090D] py-8">
          <div className="px-7 sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: BLUE }}>
              INTEGRATES WITH YOUR TOOLS
            </p>
          </div>
          <div className="mt-6 overflow-hidden border-y border-white/10 py-3">
            <div className="hr-marquee-track flex w-max gap-3">
              {[...INTEGRATION_NAMES, ...INTEGRATION_NAMES].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  <IntegrationLogo name={name} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HIRING WORKFLOW ───────────────────────────────────────────── */}
        <section
          id="workflow"
          ref={workflowRef}
          className="rounded-2xl border border-white/10 bg-[#07090D]"
        >
          <div className="border-b border-white/10 px-7 py-8 sm:px-10 lg:px-14">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Automation canvas
                </p>
                <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] text-white">
                  Hiring Workflow
                </h2>
                <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                  Click a stage to see which plugins are active. Click a plugin chip to open its details.
                </p>
              </div>
              <p
                className="hidden max-w-sm text-sm leading-relaxed sm:block sm:text-right"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                A connected system that keeps every hiring decision visible and recruiters in control.
              </p>
            </div>
          </div>

          <div className="px-7 py-8 sm:px-10 lg:px-14">
            {/* Stage rail */}
            <div
              className="overflow-x-auto rounded-xl border border-white/10 bg-[#080B11] p-5 sm:p-8"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            >
              <div className="flex min-w-[1100px] items-start justify-between gap-2">
                {WORKFLOW_STAGES.map((stage, index) => {
                  const isActive = activeStageId === stage.id;
                  const isHighlighted = highlightedStageIds.has(stage.id);
                  const stagePlugins = ALL_TALENT_PLUGINS.filter((p) =>
                    stage.pluginIds.includes(p.id)
                  );

                  return (
                    <div key={stage.id} className="flex items-start">
                      <button
                        onClick={() => selectStage(stage)}
                        className="relative flex w-[138px] flex-col rounded-xl border p-4 text-left transition-all"
                        style={{
                          background: isActive
                            ? "rgba(0,102,255,0.14)"
                            : isHighlighted
                            ? "rgba(0,102,255,0.06)"
                            : "rgba(255,255,255,0.03)",
                          border: `1px solid ${
                            isActive
                              ? `${BLUE}80`
                              : isHighlighted
                              ? `${BLUE}40`
                              : "rgba(255,255,255,0.10)"
                          }`,
                          boxShadow: isActive
                            ? `0 0 24px rgba(0,102,255,0.16)`
                            : undefined,
                        }}
                      >
                        {/* Stage number */}
                        <span
                          className="text-[10px] font-bold tracking-[0.2em]"
                          style={{ color: isActive || isHighlighted ? BLUE : "rgba(255,255,255,0.25)" }}
                        >
                          {stage.number}
                        </span>

                        {/* Stage title + description */}
                        <h3 className="mt-3 text-[13px] font-semibold leading-tight text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-[10px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                          {stage.description}
                        </p>

                        {/* Plugin count */}
                        <p className="mt-3 text-[9px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.22)" }}>
                          {stagePlugins.length} plugin{stagePlugins.length !== 1 ? "s" : ""}
                        </p>

                        {/* Active indicator dot */}
                        {(isActive || isHighlighted) && (
                          <span
                            className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#080B11]"
                            style={{ backgroundColor: BLUE }}
                          />
                        )}
                      </button>

                      {/* Connector line */}
                      {index < WORKFLOW_STAGES.length - 1 && (
                        <div
                          className="mt-10 h-px w-8 shrink-0 transition-colors"
                          style={{
                            backgroundColor:
                              isActive || (activeStageId === WORKFLOW_STAGES[index + 1]?.id)
                                ? BLUE
                                : "rgba(255,255,255,0.12)",
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active stage plugin chips */}
            <div className="mt-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                  Stage <span className="font-semibold text-white">{activeStage.title}</span> — active plugins
                </p>
                <button
                  onClick={scrollToMarketplace}
                  className="text-[10px] uppercase tracking-[0.14em] transition-colors"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  View all plugins →
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {ALL_TALENT_PLUGINS
                  .filter((p) => activeStage.pluginIds.includes(p.id))
                  .map((plugin) => (
                    <PluginChip
                      key={plugin.id}
                      plugin={plugin}
                      selected={selectedPluginId === plugin.id}
                      onClick={() => selectPlugin(plugin)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PLUGIN MARKETPLACE ────────────────────────────────────────── */}
        <section
          id="marketplace"
          ref={marketplaceRef}
          className="rounded-2xl border border-white/10 bg-[#07090D]"
        >
          <div className="border-b border-white/10 px-7 py-8 sm:px-10 lg:px-14">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  The plugin layer
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
                  Available Plugins &amp; Integrations
                </h2>
                <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                  Click any plugin to see what it does and where it fits in the workflow.
                </p>
              </div>
              <span className="hidden text-xs sm:block" style={{ color: "rgba(255,255,255,0.30)" }}>
                {ALL_TALENT_PLUGINS.length} connected capabilities
              </span>
            </div>

            {/* Category filter tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat ?? "all"}
                  onClick={() => setFilter(cat)}
                  className="rounded-lg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.10em] transition-all"
                  style={{
                    background: filter === cat ? `${BLUE}22` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${filter === cat ? `${BLUE}55` : "rgba(255,255,255,0.08)"}`,
                    color: filter === cat ? "#ffffff" : "rgba(255,255,255,0.40)",
                  }}
                >
                  {cat ?? "All"}
                </button>
              ))}
            </div>
          </div>

          {/* Three-column workspace: sidebar list | cards grid | detail panel */}
          <div className="grid lg:grid-cols-[220px_1fr_300px] divide-x divide-white/8">

            {/* ── Sidebar plugin index ──────────────────────────────────── */}
            <aside className="hidden lg:block border-b border-white/10 lg:border-b-0">
              <p
                className="px-4 py-3 text-[9px] uppercase tracking-[0.20em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Plugins &amp; Integrations
              </p>
              <div className="space-y-0.5 px-2 pb-4">
                {ALL_TALENT_PLUGINS.map((plugin) => {
                  const isActive = selectedPluginId === plugin.id;
                  return (
                    <button
                      key={plugin.id}
                      onClick={() => selectPlugin(plugin)}
                      className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors"
                      style={{
                        background: isActive ? `${BLUE}18` : "transparent",
                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      <PluginLogo
                        logoType={plugin.logoType}
                        logoImagePath={plugin.logoImagePath}
                        size="sm"
                      />
                      <span className="truncate">{plugin.name}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* ── Plugin cards grid ─────────────────────────────────────── */}
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {visiblePlugins.map((plugin) => (
                  <PluginCard
                    key={plugin.id}
                    plugin={plugin}
                    selected={selectedPluginId === plugin.id}
                    onClick={() => selectPlugin(plugin)}
                    highlightedStageIds={highlightedStageIds}
                  />
                ))}
              </div>

              {visiblePlugins.length === 0 && (
                <div className="flex h-40 items-center justify-center">
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
                    No plugins in this category.
                  </p>
                </div>
              )}
            </div>

            {/* ── Detail panel ─────────────────────────────────────────── */}
            <aside
              id="plugin-workspace"
              className="min-h-[480px] border-t border-white/10 lg:border-t-0"
            >
              <PluginDetailPanel
                plugin={selectedPlugin}
                onViewWorkflow={() => {
                  selectPlugin(selectedPlugin);
                  scrollToWorkflow();
                }}
              />
            </aside>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
