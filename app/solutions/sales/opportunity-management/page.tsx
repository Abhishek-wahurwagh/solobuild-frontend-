import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS } from "@/lib/solutions/sales";
import { OPP_STAGES } from "@/lib/solutions/sales-workflows";

export const metadata = {
  title: "Opportunity Management | Sales | SoloBuildAI",
  description: "Track opportunities, update pipeline information and coordinate deal workflows.",
};

const CATEGORIES = [
  null,
  "Pipeline",
  "CRM",
  "Outreach",
  "Reporting",
  "Integration",
] as const;

export default function OpportunityManagementPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Opportunity Management"
      headline={
        <>
          Opportunity Management.<br />
          Pipeline that{" "}
          <span style={{ color: "#0066FF" }}>stays accurate.</span>
        </>
      }
      description="Track deal stages, update opportunity records, maintain prospect engagement through follow-up sequences, and analyze pipeline health — without manual CRM entry."
      stats={[
        { value: String(OPP_STAGES.length),              label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "90%", label: "CRM data accuracy" },
      ]}
      integrationNames={["Salesforce", "HubSpot CRM", "Microsoft 365", "Google Workspace"]}
      plugins={ALL_SALES_PLUGINS}
      stages={OPP_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
