import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_ONBOARDING_PLUGINS, ONBOARDING_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Employee Onboarding | HR Solutions | SoloBuildAI",
  description: "Turn new hires into productive employees with automated onboarding workflows.",
};

const CATEGORIES = [
  null,
  "Request Management",
  "Access Management",
  "Knowledge",
  "Automation",
  "Communication",
  "Reporting",
] as const;

export default function EmployeeOnboardingPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Employee Onboarding"
      headline={
        <>
          Employee Onboarding.<br />
          Day one, done{" "}
          <span style={{ color: "#0066FF" }}>right.</span>
        </>
      }
      description="Coordinate tasks, access provisioning, and documentation across HR, IT, and the new hire's team — so every employee starts their role ready to contribute."
      stats={[
        { value: String(ONBOARDING_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_ONBOARDING_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "5+",  label: "Integrations" },
        { value: "70%", label: "Less manual coordination" },
      ]}
      integrationNames={["ServiceNow", "Jira", "Confluence", "Slack", "Microsoft Teams"]}
      plugins={ALL_ONBOARDING_PLUGINS}
      stages={ONBOARDING_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
