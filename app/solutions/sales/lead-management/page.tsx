import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS, SALES_STAGES } from "@/lib/solutions/sales";

export const metadata = {
  title: "Lead Management | Sales | SoloBuildAI",
  description: "Capture, enrich, qualify and score leads automatically with AI-powered sales agents.",
};

const CATEGORIES = [
  null,
  "Lead Management",
  "Qualification",
  "Outreach",
  "CRM",
  "Pipeline",
  "Scheduling",
  "Reporting",
  "Integration",
] as const;

export default function LeadManagementPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Lead Management"
      headline={
        <>
          Lead Management.<br />
          From capture to{" "}
          <span style={{ color: "#0066FF" }}>qualified pipeline.</span>
        </>
      }
      description="Capture leads from every source, enrich them automatically, qualify against your sales criteria, and hand off only the best opportunities to your sales team."
      stats={[
        { value: String(SALES_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "3+",  label: "Integrations" },
        { value: "60%", label: "Less manual CRM work" },
      ]}
      integrationNames={["Salesforce", "HubSpot CRM", "Google Calendar", "Gmail", "Outlook"]}
      plugins={ALL_SALES_PLUGINS}
      stages={SALES_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
