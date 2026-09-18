import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_IT_OPS_PLUGINS, IT_OPS_STAGES } from "@/lib/solutions/it-service-operations";

export const metadata = {
  title: "Service Operations | IT Solutions | SoloBuildAI",
  description: "Manage IT service requests, approvals, provisioning, and change control with AI agents.",
};

const CATEGORIES = [
  null,
  "Service Operations",
  "Access Management",
  "Automation",
  "Reporting",
  "Integration",
] as const;

export default function ServiceOperationsPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / IT"
      solutionHref="/solutions/it"
      solutionLabel="IT Solutions"
      workflowLabel="Service Operations"
      headline={
        <>
          Service Operations.<br />
          From request to{" "}
          <span style={{ color: "#0066FF" }}>fulfilment.</span>
        </>
      }
      description="Service catalog access, approval routing, automated provisioning, asset tracking, change management, and operational analytics — all in one connected IT service operations system."
      stats={[
        { value: String(IT_OPS_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_IT_OPS_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "1+",  label: "Integrations" },
        { value: "70%", label: "Faster fulfilment" },
      ]}
      integrationNames={["ServiceNow", "Jira", "Slack", "Microsoft Teams", "Confluence"]}
      plugins={ALL_IT_OPS_PLUGINS}
      stages={IT_OPS_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
