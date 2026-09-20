/**
 * Additional Customer Support Workflow Data
 * Additional stage sets for CS workflows beyond the main support-workflow.
 */
import type { SolutionPlugin, SolutionStage } from "./types";
import { CS_PLUGINS, ALL_CS_PLUGINS, CS_STAGES } from "./customer-support";

export { CS_PLUGINS, ALL_CS_PLUGINS, CS_STAGES };

// ── Agent Assist focused stages ────────────────────────────────────────────────
export const AGENT_ASSIST_STAGES: SolutionStage[] = [
  { id: "ticket-creation", number: "01", title: "Ticket & Context",  description: "Create ticket and retrieve customer context.",    pluginIds: ["ticket-creation", "ticket-classification", "customer-context"] },
  { id: "knowledge",       number: "02", title: "Knowledge Search",  description: "Find relevant answers and documentation.",        pluginIds: ["knowledge-search", "customer-context"] },
  { id: "agent-assist",    number: "03", title: "Agent Assist",       description: "Surface suggested responses and next actions.",   pluginIds: ["agent-assist", "knowledge-search"] },
  { id: "resolution",      number: "04", title: "Response & Close",   description: "Generate response and document resolution.",      pluginIds: ["response-generation", "support-summary", "customer-notification"] },
];

// ── Knowledge & Resolution stages ─────────────────────────────────────────────
export const KNOWLEDGE_STAGES: SolutionStage[] = [
  { id: "knowledge",  number: "01", title: "Knowledge Search",  description: "Search approved knowledge sources for answers.", pluginIds: ["knowledge-search", "customer-context"] },
  { id: "resolution", number: "02", title: "Resolution",         description: "Generate and deliver the customer response.",   pluginIds: ["response-generation", "customer-notification"] },
  { id: "follow-up",  number: "03", title: "Follow-up",          description: "Confirm resolution and gather feedback.",        pluginIds: ["customer-notification", "support-summary"] },
];

// ── Escalation stages ──────────────────────────────────────────────────────────
export const ESCALATION_STAGES: SolutionStage[] = [
  { id: "routing",    number: "01", title: "Routing",    description: "Classify and route the ticket.",                  pluginIds: ["ticket-routing", "ticket-classification"] },
  { id: "escalation", number: "02", title: "Escalation", description: "Escalate to the right team with full context.",  pluginIds: ["escalation", "customer-notification"] },
  { id: "resolution", number: "03", title: "Resolution", description: "Resolve and notify the customer.",                pluginIds: ["response-generation", "customer-notification", "support-summary"] },
];

// ── Customer Communication stages ──────────────────────────────────────────────
export const COMM_STAGES: SolutionStage[] = [
  { id: "routing",    number: "01", title: "Classification", description: "Classify the request and determine response path.", pluginIds: ["ticket-classification", "customer-context"] },
  { id: "resolution", number: "02", title: "Communication",  description: "Send updates, confirmations and resolutions.",      pluginIds: ["customer-notification", "response-generation"] },
  { id: "follow-up",  number: "03", title: "Follow-up",      description: "Confirm satisfaction and close the case.",           pluginIds: ["customer-notification", "support-summary"] },
];

// ── Support Analytics stages ───────────────────────────────────────────────────
export const SUPPORT_ANALYTICS_STAGES: SolutionStage[] = [
  { id: "analytics", number: "01", title: "Analytics",       description: "Analyze ticket volumes and resolution times.",    pluginIds: ["support-analytics"] },
  { id: "reporting", number: "02", title: "Reporting",        description: "Surface insights for support managers.",          pluginIds: ["support-analytics", "zendesk"] },
];
