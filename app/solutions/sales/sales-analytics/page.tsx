import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS } from "@/lib/solutions/sales";
import { SALES_ANALYTICS_STAGES } from "@/lib/solutions/sales-workflows";

export const metadata = {
  title: "Sales Analytics | Sales | SoloBuildAI",
  description: "Turn sales activity and pipeline data into actionable business insights.",
};

const CATEGORIES = [
  null,
  "Reporting",
  "Pipeline",
  "CRM",
  "Integration",
] as const;

export default function SalesAnalyticsPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Sales Analytics"
      headline={
        <>
          Sales Analytics.<br />
          Insights from{" "}
          <span style={{ color: "#0066FF" }}>every interaction.</span>
        </>
      }
      description="Summarize sales activity, analyze pipeline conversion and health, and surface actionable insights for sales managers — without building manual reports."
      stats={[
        { value: String(SALES_ANALYTICS_STAGES.length),   label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+",  label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "5×",  label: "Faster pipeline reviews" },
      ]}
      integrationNames={["Salesforce", "HubSpot CRM", "Google Workspace", "Microsoft 365"]}
      plugins={ALL_SALES_PLUGINS}
      stages={SALES_ANALYTICS_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
