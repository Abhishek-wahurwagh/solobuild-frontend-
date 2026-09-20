import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_PAYROLL_PLUGINS, PAYROLL_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Payroll & Benefits | HR Solutions | SoloBuildAI",
  description: "Streamline payroll, benefits and employee compensation workflows.",
};

const CATEGORIES = [
  null,
  "Analysis",
  "Automation",
  "Access Management",
  "Communication",
] as const;

export default function PayrollBenefitsPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Payroll & Benefits"
      headline={
        <>
          Payroll & Benefits.<br />
          Fewer errors,{" "}
          <span style={{ color: "#0066FF" }}>faster cycles.</span>
        </>
      }
      description="Validate payroll data, process compensation changes, and guide employees through benefits enrolment — through structured, automated workflows that reduce manual effort."
      stats={[
        { value: String(PAYROLL_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_PAYROLL_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "5+",  label: "Integrations" },
        { value: "40%", label: "Less processing time" },
      ]}
      integrationNames={["Workday", "ServiceNow", "Slack", "Microsoft 365", "Google Workspace"]}
      plugins={ALL_PAYROLL_PLUGINS}
      stages={PAYROLL_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
