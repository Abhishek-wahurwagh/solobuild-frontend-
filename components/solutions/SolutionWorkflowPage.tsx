"use client";

/**
 * SolutionWorkflowPage
 *
 * Data-driven version of the HR Talent Acquisition page.
 * Pass in plugins + stages — the UI is identical across every domain.
 * Used by: Sales, Customer Support, IT Support, IT Service Ops, IT Email Automation.
 */

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import SolutionPluginLogo from "./SolutionPluginLogo";
import { categoryColor, type SolutionPlugin, type SolutionStage } from "@/lib/solutions/types";

const BLUE = "#0066FF";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabId = "overview" | "technical" | "workflow";

interface WorkflowPageProps {
  /** Breadcrumb: e.g. "Solutions / Sales" */
  eyebrow: string;
  /** Parent solution href for breadcrumb link */
  solutionHref: string;
  /** Parent solution label */
  solutionLabel: string;
  /** Workflow name shown in breadcrumb */
  workflowLabel: string;
  /** Page headline */
  headline: React.ReactNode;
  /** Supporting paragraph */
  description: string;
  /** Top-line stats */
  stats: Array<{ value: string; label: string }>;
  /** Integration name strings for the marquee */
  integrationNames: string[];
  /** All plugins for this workflow */
  plugins: SolutionPlugin[];
  /** Workflow stage definitions (reference plugin IDs) */
  stages: SolutionStage[];
  /** Category filter options — null means "All" */
  categories: Array<string | null>;
}

// ─── Category filter ──────────────────────────────────────────────────────────
function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string | null;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.10em] transition-all"
      style={{
        background: active ? `${BLUE}22` : "rgba(255,255,255,0.04)",
        border: `1px solid ${active ? `${BLUE}55` : "rgba(255,255,255,0.08)"}`,
        color: active ? "#ffffff" : "rgba(255,255,255,0.40)",
      }}
    >
      {label ?? "All"}
    </button>
  );
}

// ─── Plugin chip (compact — used inside workflow stage) ───────────────────────
function PluginChip({
  plugin,
  selected,
  onClick,
}: {
  plugin: SolutionPlugin;
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
      <SolutionPluginLogo logoType={plugin.logoType} logoImagePath={plugin.logoImagePath} size="sm" />
      <span
        className="truncate text-[11px] font-medium"
        style={{ color: selected ? "#ffffff" : "rgba(255,255,255,0.55)" }}
      >
        {plugin.name}
      </span>
    </button>
  );
}

// ─── Plugin marketplace card ──────────────────────────────────────────────────
function PluginCard({
  plugin,
  selected,
  onClick,
  highlightedStageIds,
  stages,
}: {
  plugin: SolutionPlugin;
  selected: boolean;
  onClick: () => void;
  highlightedStageIds: Set<string>;
  stages: SolutionStage[];
}) {
  const cc = categoryColor(plugin.category);
  const stageNames = plugin.workflowStages
    .map((sid) => stages.find((s) => s.id === sid)?.title)
    .filter(Boolean);
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
          selected ? `${BLUE}55` : isWorkflowActive ? `${BLUE}30` : "rgba(255,255,255,0.08)"
        }`,
        boxShadow: selected ? `0 0 0 1px ${BLUE}22, 0 4px 20px rgba(0,102,255,0.12)` : undefined,
      }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <SolutionPluginLogo logoType={plugin.logoType} logoImagePath={plugin.logoImagePath} size="md" />
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
      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em]" style={{ color: cc.text }}>
        {plugin.purpose}
      </p>

      {/* Description */}
      <p className="mt-3 flex-1 text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        {plugin.description}
      </p>

      {/* Footer */}
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
              <span className="rounded px-1.5 py-0.5 text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                +{stageNames.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

// ─── Detail panel ─────────────────────────────────────────────────────────────
function DetailPanel({
  plugin,
  plugins,
  stages,
  onViewWorkflow,
}: {
  plugin: SolutionPlugin;
  plugins: SolutionPlugin[];
  stages: SolutionStage[];
  onViewWorkflow: () => void;
}) {
  const [tab, setTab] = useState<TabId>("overview");
  const cc = categoryColor(plugin.category);

  const stageNames = plugin.workflowStages
    .map((sid) => stages.find((s) => s.id === sid)?.title)
    .filter(Boolean)
    .join(" → ");

  const connectedPlugins = plugins.filter(
    (p) => p.id !== plugin.id && plugin.integrationsWith?.includes(p.id)
  );

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 border-b p-6"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-4">
          <SolutionPluginLogo logoType={plugin.logoType} logoImagePath={plugin.logoImagePath} size="lg" />
          <div>
            <p className="text-xl font-semibold leading-tight text-white">{plugin.name}</p>
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
        className="flex gap-1 border-b px-6 pt-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        {(["overview", "technical", "workflow"] as TabId[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="pb-3 px-1 text-[11px] capitalize tracking-[0.14em] uppercase transition-colors"
            style={{
              color: tab === t ? "#fff" : "rgba(255,255,255,0.3)",
              borderBottom: tab === t ? `2px solid ${BLUE}` : "2px solid transparent",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        className="flex-1 space-y-5 overflow-y-auto p-6 text-[12px]"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
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
              <p className="mb-1 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Use
              </p>
              <p className="leading-relaxed">{plugin.use}</p>
            </div>
            {connectedPlugins.length > 0 && (
              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Connects with
                </p>
                <div className="flex flex-wrap gap-2">
                  {connectedPlugins.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <SolutionPluginLogo logoType={p.logoType} size="sm" />
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
              ["Plugin tier",     plugin.tier],
              ["Method",          plugin.method         ?? "Documented purpose only"],
              ["Authentication",  plugin.authentication ?? "Not documented"],
              ["Access",          plugin.access         ?? "Not documented"],
              ["Category",        plugin.category],
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
                  const stage = stages.find((s) => s.id === sid);
                  if (!stage) return null;
                  return (
                    <div
                      key={sid}
                      className="flex items-start gap-3 rounded-lg p-3"
                      style={{
                        background: "rgba(0,102,255,0.08)",
                        border: "1px solid rgba(0,102,255,0.18)",
                      }}
                    >
                      <span
                        className="mt-0.5 shrink-0 text-[10px] font-bold"
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
        className="flex gap-3 border-t p-5"
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
          style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.12)" }}
        >
          View in workflow →
        </button>
      </div>
    </div>
  );
}

// ─── Integration mark (marquee) ───────────────────────────────────────────────
function IntegrationMark({ name }: { name: string }) {
  const colors: Record<string, string> = {
    Salesforce: "#00A1E0", "HubSpot CRM": "#FF7A59", Zendesk: "#03363D",
    ServiceNow: "#62D84E", Jira: "#2684FF", Confluence: "#1868DB",
    Slack: "#E01E5A", "Google Calendar": "#4285F4", Gmail: "#EA4335",
    Outlook: "#0078D4", "Microsoft Teams": "#5059C9", "Google Workspace": "#34A853",
  };
  const abbr =
    name === "Google Calendar" ? "GC" :
    name === "Microsoft Teams" ? "MT" :
    name === "HubSpot CRM" ? "HS" :
    name.slice(0, 2).toUpperCase();
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-[10px] font-bold"
      style={{ color: colors[name] ?? "#64748B" }}
    >
      {abbr}
    </span>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
export default function SolutionWorkflowPage({
  eyebrow,
  solutionHref,
  solutionLabel,
  workflowLabel,
  headline,
  description,
  stats,
  integrationNames,
  plugins,
  stages,
  categories,
}: WorkflowPageProps) {
  const workflowRef    = useRef<HTMLElement>(null);
  const marketplaceRef = useRef<HTMLElement>(null);

  const [selectedId, setSelectedId] = useState<string>(plugins[0]?.id ?? "");
  const [activeStageId, setActiveStageId] = useState<string>(stages[0]?.id ?? "");
  const [filter, setFilter] = useState<string | null>(null);

  const selectedPlugin = plugins.find((p) => p.id === selectedId) ?? plugins[0];
  const activeStage    = stages.find((s) => s.id === activeStageId) ?? stages[0];

  const highlightedStageIds = new Set<string>(selectedPlugin?.workflowStages ?? []);

  const visiblePlugins = filter
    ? plugins.filter((p) => p.category === filter)
    : plugins;

  const selectPlugin = useCallback((plugin: SolutionPlugin) => {
    setSelectedId(plugin.id);
    if (plugin.workflowStages.length > 0) setActiveStageId(plugin.workflowStages[0]);
  }, []);

  const selectStage = useCallback((stage: SolutionStage) => {
    setActiveStageId(stage.id);
    const first = plugins.find((p) => stage.pluginIds.includes(p.id));
    if (first) setSelectedId(first.id);
  }, [plugins]);

  const scrollToWorkflow    = useCallback(() => workflowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), []);
  const scrollToMarketplace = useCallback(() => marketplaceRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), []);

  return (
    <PageLayout framed wide>
      <div className="bg-[#05070B] text-white space-y-3">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07090D]">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative px-7 py-14 sm:px-10 lg:px-14">
            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-2">
              <Link
                href={solutionHref}
                className="text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors hover:text-white/60"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {solutionLabel}
              </Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: BLUE }}>
                {workflowLabel}
              </span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                  {headline}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {description}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button
                    onClick={scrollToWorkflow}
                    className="rounded-lg px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
                    style={{ backgroundColor: BLUE }}
                  >
                    Explore Workflow →
                  </button>
                  <button
                    onClick={scrollToMarketplace}
                    className="rounded-lg border border-white/15 px-5 py-3 text-sm text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    Browse Plugins
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 sm:gap-0">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="sm:border-r sm:border-white/10 sm:pl-6 first:pl-0 last:border-0"
                    style={{ paddingLeft: i === 0 ? 0 : undefined }}
                  >
                    <p className="text-2xl font-medium text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Integrations marquee ──────────────────────────────────────── */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#07090D] py-8">
          <div className="px-7 sm:px-10 lg:px-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: BLUE }}>
              Integrates with your tools
            </p>
          </div>
          <div className="mt-6 overflow-hidden border-y border-white/10 py-3">
            <div className="hr-marquee-track flex w-max gap-3">
              {[...integrationNames, ...integrationNames].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  <IntegrationMark name={name} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflow ──────────────────────────────────────────────────── */}
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
                  {workflowLabel} Workflow
                </h2>
                <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                  Click a stage to see active plugins. Click a plugin chip to open its details.
                </p>
              </div>
              <p className="hidden max-w-sm text-sm leading-relaxed sm:block sm:text-right" style={{ color: "rgba(255,255,255,0.40)" }}>
                A connected system with humans in control at every decision point.
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
              <div className="flex items-start justify-between gap-2" style={{ minWidth: `${stages.length * 155}px` }}>
                {stages.map((stage, index) => {
                  const isActive      = activeStageId === stage.id;
                  const isHighlighted = highlightedStageIds.has(stage.id);
                  const stagePlugins  = plugins.filter((p) => stage.pluginIds.includes(p.id));

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
                          boxShadow: isActive ? "0 0 24px rgba(0,102,255,0.16)" : undefined,
                        }}
                      >
                        <span
                          className="text-[10px] font-bold tracking-[0.2em]"
                          style={{ color: isActive || isHighlighted ? BLUE : "rgba(255,255,255,0.25)" }}
                        >
                          {stage.number}
                        </span>
                        <h3 className="mt-3 text-[13px] font-semibold leading-tight text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-[10px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                          {stage.description}
                        </p>
                        <p className="mt-3 text-[9px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.22)" }}>
                          {stagePlugins.length} plugin{stagePlugins.length !== 1 ? "s" : ""}
                        </p>
                        {(isActive || isHighlighted) && (
                          <span
                            className="absolute -right-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#080B11]"
                            style={{ backgroundColor: BLUE }}
                          />
                        )}
                      </button>
                      {index < stages.length - 1 && (
                        <div
                          className="mt-10 h-px w-8 shrink-0 transition-colors"
                          style={{
                            backgroundColor:
                              isActive || activeStageId === stages[index + 1]?.id
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

            {/* Active-stage plugin chips */}
            <div className="mt-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                  Stage <span className="font-semibold text-white">{activeStage?.title}</span> — active plugins
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
                {plugins
                  .filter((p) => activeStage?.pluginIds.includes(p.id))
                  .map((plugin) => (
                    <PluginChip
                      key={plugin.id}
                      plugin={plugin}
                      selected={selectedId === plugin.id}
                      onClick={() => selectPlugin(plugin)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Plugin marketplace ─────────────────────────────────────────── */}
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
                {plugins.length} connected capabilities
              </span>
            </div>

            {/* Category filter */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <FilterTab
                  key={cat ?? "__all__"}
                  label={cat}
                  active={filter === cat}
                  onClick={() => setFilter(cat)}
                />
              ))}
            </div>
          </div>

          {/* Three-column workspace */}
          <div className="grid lg:grid-cols-[220px_1fr_300px] divide-x divide-white/[0.07]">

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <p
                className="px-4 py-3 text-[9px] uppercase tracking-[0.20em]"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Plugins &amp; Integrations
              </p>
              <div className="space-y-0.5 px-2 pb-4">
                {plugins.map((plugin) => {
                  const isActive = selectedId === plugin.id;
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
                      <SolutionPluginLogo logoType={plugin.logoType} logoImagePath={plugin.logoImagePath} size="sm" />
                      <span className="truncate">{plugin.name}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Cards grid */}
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {visiblePlugins.map((plugin) => (
                  <PluginCard
                    key={plugin.id}
                    plugin={plugin}
                    selected={selectedId === plugin.id}
                    onClick={() => selectPlugin(plugin)}
                    highlightedStageIds={highlightedStageIds}
                    stages={stages}
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

            {/* Detail panel */}
            <aside id="plugin-workspace" className="min-h-[480px] border-t border-white/[0.07] lg:border-t-0">
              {selectedPlugin && (
                <DetailPanel
                  plugin={selectedPlugin}
                  plugins={plugins}
                  stages={stages}
                  onViewWorkflow={() => { selectPlugin(selectedPlugin); scrollToWorkflow(); }}
                />
              )}
            </aside>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
