// ─── Shared Solution Types ────────────────────────────────────────────────────
// Used by Sales, Customer Support, IT — and re-exported for HR compatibility.
// HR (Talent Acquisition) uses the original lib/talent-acquisition/plugins.ts;
// new solutions use these shared types so only the DATA changes per domain.

// ── Plugin category — union covers all domains ────────────────────────────────
export type SolutionCategory =
  | "Analysis"
  | "Sourcing"
  | "Screening"
  | "Communication"
  | "Scheduling"
  | "Reporting"
  | "Integration"
  // Sales
  | "Lead Management"
  | "Qualification"
  | "Outreach"
  | "CRM"
  | "Pipeline"
  // Customer Support
  | "Ticket Management"
  | "Knowledge"
  | "Agent Assist"
  | "Resolution"
  | "Escalation"
  // IT
  | "Request Management"
  | "Access Management"
  | "Service Operations"
  | "Automation";

// ── Logo type — every plugin has a unique identifier that drives rendering ─────
export type SolutionLogoType =
  // ── Sales ──────────────────────────────────────────────────────────────
  | "lead-capture"
  | "lead-enrichment"
  | "lead-qualification"
  | "lead-scoring"
  | "sales-outreach"
  | "email-automation"
  | "meeting-scheduler"
  | "crm-update"
  | "opportunity-management"
  | "sales-summary"
  | "sales-analytics"
  // ── Customer Support ────────────────────────────────────────────────────
  | "ticket-creation"
  | "ticket-classification"
  | "knowledge-search"
  | "customer-context"
  | "agent-assist"
  | "response-generation"
  | "ticket-routing"
  | "escalation"
  | "customer-notification"
  | "support-summary"
  | "support-analytics"
  // ── IT Support ──────────────────────────────────────────────────────────
  | "it-request-intake"
  | "it-issue-classification"
  | "it-knowledge-search"
  | "troubleshooting-assistant"
  | "incident-management"
  | "service-request-management"
  | "access-request"
  | "it-escalation"
  | "it-notification"
  | "it-summary"
  // ── IT Service Operations ────────────────────────────────────────────────
  | "service-catalog"
  | "approval-workflow"
  | "service-provisioning"
  | "asset-management"
  | "user-access-management"
  | "service-status"
  | "change-management"
  | "service-analytics"
  // ── IT Email Automation ──────────────────────────────────────────────────
  | "email-intake"
  | "email-classification"
  | "request-extraction"
  | "knowledge-retrieval"
  | "email-response-generator"
  | "email-routing"
  | "task-creation"
  | "email-followup"
  | "email-audit"
  // ── External integrations (shared) ───────────────────────────────────────
  | "salesforce"
  | "hubspot-crm"
  | "google-calendar"
  | "microsoft-teams"
  | "slack"
  | "zendesk"
  | "servicenow"
  | "jira"
  | "confluence"
  | "outlook"
  | "gmail";

// ── Core plugin definition ─────────────────────────────────────────────────────
export interface SolutionPlugin {
  id: string;
  name: string;
  /** What the plugin actually does — one precise sentence. */
  description: string;
  /** Short purpose label shown as a subtitle/tag. */
  purpose: string;
  category: SolutionCategory;
  logoType: SolutionLogoType;
  /** Optional — swap with a real image path later. */
  logoImagePath?: string;
  tier: string;
  status: string;
  /** IDs of workflow stages where this plugin is active. */
  workflowStages: string[];
  capabilities: string[];
  method?: string;
  authentication?: string;
  access?: string;
  use: string;
  integrationsWith?: string[];
}

// ── Workflow stage ─────────────────────────────────────────────────────────────
export interface SolutionStage {
  id: string;
  number: string;
  title: string;
  description: string;
  /** IDs from SolutionPlugin[] that are active at this stage. */
  pluginIds: string[];
}

// ── Solution definition (overview page data) ───────────────────────────────────
export interface SolutionProcess {
  id: string;
  title: string;
  description: string;
  pluginCount: string;
  integrationCount: string;
  href: string;
  icon: string;
  live?: boolean;
}

export interface SolutionDef {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  eyebrow: string;
  heroQuote: string;
  stats: Array<{ value: string; label: string }>;
  processes: SolutionProcess[];
  integrationNames: string[];
}

// ── Category colour map ────────────────────────────────────────────────────────
export function categoryColor(cat: string): { text: string; bg: string; border: string } {
  const map: Record<string, { text: string; bg: string; border: string }> = {
    // HR colours (kept for cross-domain consistency)
    Analysis:           { text: "#3b7eff", bg: "rgba(59,126,255,0.10)",  border: "rgba(59,126,255,0.22)" },
    Sourcing:           { text: "#a78bfa", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.22)" },
    Screening:          { text: "#60a5fa", bg: "rgba(96,165,250,0.10)",  border: "rgba(96,165,250,0.22)" },
    Communication:      { text: "#fb923c", bg: "rgba(251,146,60,0.10)",  border: "rgba(251,146,60,0.22)" },
    Scheduling:         { text: "#22d3ee", bg: "rgba(34,211,238,0.10)",  border: "rgba(34,211,238,0.22)" },
    Reporting:          { text: "#34d399", bg: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.22)" },
    Integration:        { text: "#94a3b8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.18)" },
    // Sales
    "Lead Management":  { text: "#a78bfa", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.22)" },
    Qualification:      { text: "#60a5fa", bg: "rgba(96,165,250,0.10)",  border: "rgba(96,165,250,0.22)" },
    Outreach:           { text: "#fb923c", bg: "rgba(251,146,60,0.10)",  border: "rgba(251,146,60,0.22)" },
    CRM:                { text: "#22d3ee", bg: "rgba(34,211,238,0.10)",  border: "rgba(34,211,238,0.22)" },
    Pipeline:           { text: "#34d399", bg: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.22)" },
    // Customer Support
    "Ticket Management":{ text: "#3b7eff", bg: "rgba(59,126,255,0.10)",  border: "rgba(59,126,255,0.22)" },
    Knowledge:          { text: "#a78bfa", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.22)" },
    "Agent Assist":     { text: "#22d3ee", bg: "rgba(34,211,238,0.10)",  border: "rgba(34,211,238,0.22)" },
    Resolution:         { text: "#34d399", bg: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.22)" },
    Escalation:         { text: "#f87171", bg: "rgba(248,113,113,0.10)", border: "rgba(248,113,113,0.22)" },
    // IT
    "Request Management":  { text: "#3b7eff", bg: "rgba(59,126,255,0.10)",  border: "rgba(59,126,255,0.22)" },
    "Access Management":   { text: "#a78bfa", bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.22)" },
    "Service Operations":  { text: "#22d3ee", bg: "rgba(34,211,238,0.10)",  border: "rgba(34,211,238,0.22)" },
    Automation:            { text: "#34d399", bg: "rgba(52,211,153,0.10)",  border: "rgba(52,211,153,0.22)" },
  };
  return map[cat] ?? { text: "#94a3b8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.18)" };
}
