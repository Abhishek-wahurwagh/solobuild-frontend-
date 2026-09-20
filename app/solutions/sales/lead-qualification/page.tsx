import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS } from "@/lib/solutions/sales";
import { LEAD_QUAL_STAGES } from "@/lib/solutions/sales-workflows";

export const metadata = {
  title: "Lead Qualification | Sales | SoloBuildAI",
  description: "Evaluate leads against sales criteria and identify prospects ready for engagement.",
};

const CATEGORIES = [
  null,
  "Lead Management",
  "Qualification",
  "Outreach",
  "CRM",
  "Integration",
] as const;

export default function LeadQualificationPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Lead Qualification"
      headline={
        <>
          Lead Qualification.<br />
          Engage only the{" "}
          <span style={{ color: "#0066FF" }}>right prospects.</span>
        </>
      }
      description="Enrich lead data, score prospects against configurable sales criteria, and automatically route only qualified leads into the outreach pipeline."
      stats={[
        { value: String(LEAD_QUAL_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "45%", label: "Better lead quality" },
      ]}
      integrationNames={["Salesforce", "HubSpot CRM", "LinkedIn"]}
      plugins={ALL_SALES_PLUGINS}
      stages={LEAD_QUAL_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
