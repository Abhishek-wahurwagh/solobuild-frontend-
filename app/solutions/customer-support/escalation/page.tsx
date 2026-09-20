import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS } from "@/lib/solutions/customer-support";
import { ESCALATION_STAGES } from "@/lib/solutions/cs-workflows";

export const metadata = {
  title: "Escalation | Customer Support | SoloBuildAI",
  description: "Escalate unresolved or high-priority issues to the right team before SLAs breach.",
};

const CATEGORIES = [
  null,
  "Ticket Management",
  "Escalation",
  "Communication",
  "Resolution",
  "Integration",
] as const;

export default function EscalationPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Escalation"
      headline={
        <>
          Escalation.<br />
          Right team,{" "}
          <span style={{ color: "#0066FF" }}>right context.</span>
        </>
      }
      description="Detect high-priority or unresolved issues before SLAs breach, route them to the appropriate team or manager with full ticket context, and keep the customer informed."
      stats={[
        { value: String(ESCALATION_STAGES.length),     label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+",  label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "95%", label: "SLA breach prevention" },
      ]}
      integrationNames={["Zendesk", "ServiceNow", "Slack", "Microsoft Teams"]}
      plugins={ALL_CS_PLUGINS}
      stages={ESCALATION_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
