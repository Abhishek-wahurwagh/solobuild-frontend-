import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_PERF_PLUGINS, PERF_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Performance & Reviews | HR Solutions | SoloBuildAI",
  description: "Automate feedback collection, review cycles and performance workflows for your teams.",
};

const CATEGORIES = [
  null,
  "Analysis",
  "Automation",
  "Reporting",
  "Communication",
] as const;

export default function PerformanceReviewsPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Performance & Reviews"
      headline={
        <>
          Performance & Reviews.<br />
          Feedback that{" "}
          <span style={{ color: "#0066FF" }}>drives growth.</span>
        </>
      }
      description="Configure review cycles, collect structured multi-source feedback, generate review summaries, and set development goals — with less administrative overhead for HR and managers."
      stats={[
        { value: String(PERF_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_PERF_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "60%", label: "Less admin time" },
      ]}
      integrationNames={["Slack", "Microsoft Teams", "Workday", "Google Workspace"]}
      plugins={ALL_PERF_PLUGINS}
      stages={PERF_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
