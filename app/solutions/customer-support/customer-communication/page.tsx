import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS } from "@/lib/solutions/customer-support";
import { COMM_STAGES } from "@/lib/solutions/cs-workflows";

export const metadata = {
  title: "Customer Communication | Customer Support | SoloBuildAI",
  description: "Send automated status updates, confirmations and resolution notifications to customers.",
};

const CATEGORIES = [
  null,
  "Ticket Management",
  "Communication",
  "Resolution",
  "Reporting",
  "Integration",
] as const;

export default function CustomerCommunicationPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Customer Communication"
      headline={
        <>
          Customer Communication.<br />
          Customers always{" "}
          <span style={{ color: "#0066FF" }}>informed.</span>
        </>
      }
      description="Classify inbound requests, generate context-aware responses, send automated status updates and resolution confirmations, and follow up to confirm customer satisfaction."
      stats={[
        { value: String(COMM_STAGES.length),           label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+",  label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "70%", label: "Proactive communications" },
      ]}
      integrationNames={["Zendesk", "Gmail", "Outlook", "Slack"]}
      plugins={ALL_CS_PLUGINS}
      stages={COMM_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
