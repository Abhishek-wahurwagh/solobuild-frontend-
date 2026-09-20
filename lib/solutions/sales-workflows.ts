/**
 * Additional Sales Workflow Data
 * For workflows beyond Lead Management that share the same plugin infrastructure
 * but have their own stage definitions.
 */
import type { SolutionPlugin, SolutionStage } from "./types";
import { SALES_PLUGINS, ALL_SALES_PLUGINS, SALES_STAGES } from "./sales";

// Re-export the base set
export { SALES_PLUGINS, ALL_SALES_PLUGINS, SALES_STAGES };

// ── Lead Qualification stages (subset of SALES_STAGES focused on qualification) ──
export const LEAD_QUAL_STAGES: SolutionStage[] = [
  { id: "lead-capture",       number: "01", title: "Lead Capture",       description: "Bring leads into the pipeline.",                 pluginIds: ["lead-capture", "lead-enrichment", "crm-update"] },
  { id: "lead-qualification", number: "02", title: "Lead Qualification",  description: "Evaluate leads against sales criteria.",          pluginIds: ["lead-enrichment", "lead-qualification", "lead-scoring", "crm-update"] },
  { id: "outreach",           number: "03", title: "Qualified Outreach",  description: "Engage only qualified, high-scoring prospects.",  pluginIds: ["sales-outreach", "email-automation", "lead-scoring"] },
];

// ── Sales Outreach stages ──────────────────────────────────────────────────────
export const OUTREACH_STAGES: SolutionStage[] = [
  { id: "outreach",  number: "01", title: "Sales Outreach",   description: "Send personalized outreach to qualified prospects.", pluginIds: ["sales-outreach", "crm-update"] },
  { id: "follow-up", number: "02", title: "Follow-up",         description: "Automated follow-up and re-engagement sequences.",   pluginIds: ["email-automation", "crm-update"] },
  { id: "reporting", number: "03", title: "Outreach Analytics", description: "Measure engagement and optimize messaging.",        pluginIds: ["sales-analytics", "salesforce", "hubspot-crm"] },
];

// ── Meeting & Scheduling stages ────────────────────────────────────────────────
export const MEETING_STAGES: SolutionStage[] = [
  { id: "meeting",  number: "01", title: "Meeting Scheduling", description: "Coordinate availability and schedule meetings.", pluginIds: ["meeting-scheduler", "google-calendar", "crm-update"] },
  { id: "follow-up", number: "02", title: "Post-Meeting",       description: "Log outcomes and update opportunity records.",   pluginIds: ["crm-update", "sales-summary"] },
];

// ── Opportunity Management stages ──────────────────────────────────────────────
export const OPP_STAGES: SolutionStage[] = [
  { id: "opportunity", number: "01", title: "Opportunity Tracking",   description: "Track and advance deals through the pipeline.", pluginIds: ["opportunity-management", "crm-update", "salesforce"] },
  { id: "follow-up",   number: "02", title: "Engagement & Follow-up", description: "Maintain prospect engagement.",                 pluginIds: ["email-automation", "sales-summary"] },
  { id: "reporting",   number: "03", title: "Pipeline Reporting",     description: "Review pipeline health and forecast.",          pluginIds: ["sales-analytics", "sales-summary"] },
];

// ── Sales Analytics stages ──────────────────────────────────────────────────────
export const SALES_ANALYTICS_STAGES: SolutionStage[] = [
  { id: "reporting", number: "01", title: "Activity Analysis",  description: "Summarize sales activity and interactions.", pluginIds: ["sales-summary", "sales-analytics"] },
  { id: "pipeline",  number: "02", title: "Pipeline Analysis",  description: "Analyze pipeline health and conversion.",    pluginIds: ["sales-analytics", "salesforce", "hubspot-crm"] },
];
