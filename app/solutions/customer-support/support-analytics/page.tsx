import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS } from "@/lib/solutions/customer-support";
import { SUPPORT_ANALYTICS_STAGES } from "@/lib/solutions/cs-workflows";

export const metadata = {
  title: "Support Analytics | Customer Support | SoloBuildAI",
  description: "Analyze ticket volumes, resolution times and support performance trends.",
};

const CATEGORIES = [
  null,
  "Reporting",
  "Integration",
] as const;

export default function SupportAnalyticsPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Support Analytics"
      headline={
        <>
          Support Analytics.<br />
          Data that{" "}
          <span style={{ color: "#0066FF" }}>improves support.</span>
        </>
      }
      description="Analyze support ticket volumes, resolution times, escalation rates, and CSAT trends to surface actionable insights for support managers."
      stats={[
        { value: String(SUPPORT_ANALYTICS_STAGES.length), label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+",      label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "4×",  label: "Faster insight generation" },
      ]}
      integrationNames={["Zendesk", "Salesforce", "Google Workspace", "Microsoft Teams"]}
      plugins={ALL_CS_PLUGINS}
      stages={SUPPORT_ANALYTICS_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
