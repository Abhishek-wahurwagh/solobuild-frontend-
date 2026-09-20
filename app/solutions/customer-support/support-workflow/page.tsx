import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS, CS_STAGES } from "@/lib/solutions/customer-support";

export const metadata = {
  title: "Support Workflow | Customer Support | SoloBuildAI",
  description: "End-to-end customer issue resolution — from ticket creation to resolution and analytics.",
};

const CATEGORIES = [
  null,
  "Ticket Management",
  "Knowledge",
  "Agent Assist",
  "Resolution",
  "Escalation",
  "Communication",
  "Reporting",
  "Integration",
] as const;

export default function SupportWorkflowPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Support Workflow"
      headline={
        <>
          Support Workflow.<br />
          Every request{" "}
          <span style={{ color: "#0066FF" }}>resolved.</span>
        </>
      }
      description="Classify tickets, retrieve knowledge, assist agents with suggested responses, escalate when needed, and keep customers informed — all through a connected AI-powered support system."
      stats={[
        { value: String(CS_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "3+",  label: "Integrations" },
        { value: "40%", label: "Faster resolution" },
      ]}
      integrationNames={["Zendesk", "ServiceNow", "Slack", "Confluence", "Salesforce", "HubSpot CRM"]}
      plugins={ALL_CS_PLUGINS}
      stages={CS_STAGES}
      categories={[...CATEGORIES]}
      heroImage="/images/hero-woman.png"
      heroBadge="AI support system active"
    />
  );
}
