import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_OFFBOARDING_PLUGINS, OFFBOARDING_STAGES } from "@/lib/solutions/hr-workflows";

export const metadata = {
  title: "Offboarding | HR Solutions | SoloBuildAI",
  description: "Coordinate employee exits, access revocation, documentation and team handovers.",
};

const CATEGORIES = [
  null,
  "Request Management",
  "Access Management",
  "Knowledge",
  "Communication",
  "Reporting",
] as const;

export default function OffboardingPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / HR"
      solutionHref="/solutions/hr"
      solutionLabel="HR Solutions"
      workflowLabel="Offboarding"
      headline={
        <>
          Offboarding.<br />
          Every exit,{" "}
          <span style={{ color: "#0066FF" }}>properly handled.</span>
        </>
      }
      description="Initiate departures, revoke system access, transfer critical knowledge, coordinate stakeholder communication, and confirm all offboarding obligations are fulfilled."
      stats={[
        { value: String(OFFBOARDING_STAGES.length),            label: "Workflow stages" },
        { value: String(ALL_OFFBOARDING_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "90%", label: "Fewer access gaps" },
      ]}
      integrationNames={["ServiceNow", "Confluence", "Slack", "Microsoft Teams"]}
      plugins={ALL_OFFBOARDING_PLUGINS}
      stages={OFFBOARDING_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
