import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS } from "@/lib/solutions/sales";
import { OUTREACH_STAGES } from "@/lib/solutions/sales-workflows";

export const metadata = {
  title: "Sales Outreach | Sales | SoloBuildAI",
  description: "Automate personalized outreach and follow-up sequences across channels.",
};

const CATEGORIES = [
  null,
  "Outreach",
  "CRM",
  "Reporting",
  "Integration",
] as const;

export default function SalesOutreachPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Sales Outreach"
      headline={
        <>
          Sales Outreach.<br />
          Personalized at{" "}
          <span style={{ color: "#0066FF" }}>scale.</span>
        </>
      }
      description="Create and send personalized outreach to qualified prospects, automate follow-up sequences, log all activity in the CRM, and measure engagement to optimize messaging."
      stats={[
        { value: String(OUTREACH_STAGES.length),         label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "5+",  label: "Integrations" },
        { value: "3×",  label: "More prospect touchpoints" },
      ]}
      integrationNames={["Gmail", "Outlook", "Salesforce", "HubSpot CRM", "LinkedIn"]}
      plugins={ALL_SALES_PLUGINS}
      stages={OUTREACH_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
