import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_IT_EMAIL_PLUGINS, IT_EMAIL_STAGES } from "@/lib/solutions/it-email-automation";

export const metadata = {
  title: "Email Automation | IT Solutions | SoloBuildAI",
  description: "Classify, route, and respond to operational emails automatically with AI agents.",
};

const CATEGORIES = [
  null,
  "Automation",
  "Knowledge",
  "Reporting",
  "Integration",
] as const;

export default function EmailAutomationPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / IT"
      solutionHref="/solutions/it"
      solutionLabel="IT Solutions"
      workflowLabel="Email Automation"
      headline={
        <>
          Email Automation.<br />
          From inbox to{" "}
          <span style={{ color: "#0066FF" }}>action.</span>
        </>
      }
      description="Read incoming operational emails, classify intent, extract requests, retrieve relevant knowledge, generate responses, route to the right team, and maintain a full audit trail."
      stats={[
        { value: String(IT_EMAIL_STAGES.length),      label: "Workflow stages" },
        { value: String(ALL_IT_EMAIL_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "2+",  label: "Integrations" },
        { value: "80%", label: "Automated responses" },
      ]}
      integrationNames={["Gmail", "Outlook", "ServiceNow", "Jira", "Confluence", "Slack"]}
      plugins={ALL_IT_EMAIL_PLUGINS}
      stages={IT_EMAIL_STAGES}
      categories={[...CATEGORIES]}
      heroImage="/images/editorial-man.png"
      heroBadge="AI email operations active"
    />
  );
}
