import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_IT_SUPPORT_PLUGINS, IT_SUPPORT_STAGES } from "@/lib/solutions/it-support";

export const metadata = {
  title: "IT Support | IT Solutions | SoloBuildAI",
  description: "Resolve employee IT requests from intake to closure with AI guidance and structured workflows.",
};

const CATEGORIES = [
  null,
  "Request Management",
  "Knowledge",
  "Access Management",
  "Escalation",
  "Communication",
  "Reporting",
  "Integration",
] as const;

export default function ITSupportPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / IT"
      solutionHref="/solutions/it"
      solutionLabel="IT Solutions"
      workflowLabel="IT Support"
      headline={
        <>
          IT Support.<br />
          From request to{" "}
          <span style={{ color: "#0066FF" }}>resolution.</span>
        </>
      }
      description="Understand employee IT requests, classify issues, search knowledge, guide troubleshooting, create tickets, and escalate when needed — all through a connected AI support system."
      stats={[
        { value: String(IT_SUPPORT_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_IT_SUPPORT_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "50%", label: "Ticket deflection" },
      ]}
      integrationNames={["ServiceNow", "Jira", "Confluence", "Slack", "Microsoft Teams"]}
      plugins={ALL_IT_SUPPORT_PLUGINS}
      stages={IT_SUPPORT_STAGES}
      categories={[...CATEGORIES]}
      heroImage="/images/hero-woman.png"
      heroBadge="AI IT support system active"
    />
  );
}
