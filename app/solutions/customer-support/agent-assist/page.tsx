import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_CS_PLUGINS } from "@/lib/solutions/customer-support";
import { AGENT_ASSIST_STAGES } from "@/lib/solutions/cs-workflows";

export const metadata = {
  title: "Agent Assist | Customer Support | SoloBuildAI",
  description: "Give support agents relevant information and recommended next actions in real time.",
};

const CATEGORIES = [
  null,
  "Ticket Management",
  "Knowledge",
  "Agent Assist",
  "Resolution",
  "Communication",
  "Reporting",
  "Integration",
] as const;

export default function AgentAssistPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Customer Support"
      solutionHref="/solutions/customer-support"
      solutionLabel="Customer Support"
      workflowLabel="Agent Assist"
      headline={
        <>
          Agent Assist.<br />
          Every agent,{" "}
          <span style={{ color: "#0066FF" }}>better equipped.</span>
        </>
      }
      description="Give support agents the customer context, relevant knowledge articles, and suggested responses they need to resolve tickets faster — without leaving their support platform."
      stats={[
        { value: String(AGENT_ASSIST_STAGES.length),    label: "Workflow stages" },
        { value: String(ALL_CS_PLUGINS.length) + "+",   label: "Ready-to-use plugins" },
        { value: "5+",  label: "Integrations" },
        { value: "35%", label: "Faster handle times" },
      ]}
      integrationNames={["Zendesk", "Confluence", "Notion", "Slack", "Google Workspace"]}
      plugins={ALL_CS_PLUGINS}
      stages={AGENT_ASSIST_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
