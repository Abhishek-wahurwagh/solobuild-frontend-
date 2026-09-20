import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS } from "@/lib/solutions/customer-support";
import { KNOWLEDGE_STAGES } from "@/lib/solutions/cs-workflows";

export const metadata = {
  title: "Knowledge & Resolution | Customer Support | SoloBuildAI",
  description: "Find trusted answers and guide customers toward faster issue resolution.",
};

const CATEGORIES = [
  null,
  "Knowledge",
  "Resolution",
  "Communication",
  "Reporting",
  "Integration",
] as const;

export default function KnowledgeResolutionPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Knowledge & Resolution"
      headline={
        <>
          Knowledge & Resolution.<br />
          The right answer,{" "}
          <span style={{ color: "#0066FF" }}>every time.</span>
        </>
      }
      description="Search approved knowledge sources, retrieve customer context, generate grounded responses, and confirm resolution — with automated follow-up and a complete support record."
      stats={[
        { value: String(KNOWLEDGE_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+",  label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "50%", label: "Faster first response" },
      ]}
      integrationNames={["Zendesk", "Confluence", "Salesforce", "Google Workspace"]}
      plugins={ALL_CS_PLUGINS}
      stages={KNOWLEDGE_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
