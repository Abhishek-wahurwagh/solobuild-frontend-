import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_EMP_SUPPORT_PLUGINS, EMP_SUPPORT_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Employee Support | HR Solutions | SoloBuildAI",
  description: "Help employees get answers and complete HR requests faster with AI assistance.",
};

const CATEGORIES = [
  null,
  "Request Management",
  "Knowledge",
  "Resolution",
  "Escalation",
  "Reporting",
] as const;

export default function EmployeeSupportPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Employee Support"
      headline={
        <>
          Employee Support.<br />
          HR answers,{" "}
          <span style={{ color: "#0066FF" }}>instantly.</span>
        </>
      }
      description="Understand employee HR questions, search approved policies, generate accurate responses, and escalate complex cases to specialists — with a complete record of every interaction."
      stats={[
        { value: String(EMP_SUPPORT_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_EMP_SUPPORT_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "80%", label: "Questions resolved instantly" },
      ]}
      integrationNames={["ServiceNow", "Confluence", "Slack", "Microsoft Teams"]}
      plugins={ALL_EMP_SUPPORT_PLUGINS}
      stages={EMP_SUPPORT_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
