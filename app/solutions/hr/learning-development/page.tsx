import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_LD_PLUGINS, LD_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Learning & Development | HR Solutions | SoloBuildAI",
  description: "Personalize learning, training and skill development across the organization.",
};

const CATEGORIES = [
  null,
  "Analysis",
  "Knowledge",
  "Automation",
  "Communication",
  "Reporting",
] as const;

export default function LearningDevelopmentPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Learning & Development"
      headline={
        <>
          Learning & Development.<br />
          Growth that{" "}
          <span style={{ color: "#0066FF" }}>actually happens.</span>
        </>
      }
      description="Identify skill gaps, curate relevant learning content, assign personalized development plans, and track progress — without manual coordination overhead."
      stats={[
        { value: String(LD_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_LD_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "50%", label: "More learning completion" },
      ]}
      integrationNames={["Confluence", "Slack", "Microsoft Teams", "Google Workspace"]}
      plugins={ALL_LD_PLUGINS}
      stages={LD_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
