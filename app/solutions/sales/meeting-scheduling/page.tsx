import SolutionWorkflowPage from "@/components/solutions/SolutionWorkflowPage";
import { ALL_SALES_PLUGINS } from "@/lib/solutions/sales";
import { MEETING_STAGES } from "@/lib/solutions/sales-workflows";

export const metadata = {
  title: "Meeting & Scheduling | Sales | SoloBuildAI",
  description: "Coordinate calendars and schedule meetings between sales reps and prospects.",
};

const CATEGORIES = [
  null,
  "Scheduling",
  "CRM",
  "Reporting",
  "Integration",
] as const;

export default function MeetingSchedulingPage() {
  return (
    <SolutionWorkflowPage
      eyebrow="Solutions / Sales"
      solutionHref="/solutions/sales"
      solutionLabel="Sales"
      workflowLabel="Meeting & Scheduling"
      headline={
        <>
          Meeting & Scheduling.<br />
          Less coordination,{" "}
          <span style={{ color: "#0066FF" }}>more conversations.</span>
        </>
      }
      description="Coordinate availability across calendars, schedule meetings with prospects without back-and-forth, and log outcomes in the CRM automatically."
      stats={[
        { value: String(MEETING_STAGES.length),          label: "Workflow stages" },
        { value: String(ALL_SALES_PLUGINS.length) + "+", label: "Ready-to-use plugins" },
        { value: "4+",  label: "Integrations" },
        { value: "80%", label: "Less scheduling effort" },
      ]}
      integrationNames={["Google Calendar", "Outlook", "Salesforce", "Microsoft Teams"]}
      plugins={ALL_SALES_PLUGINS}
      stages={MEETING_STAGES}
      categories={[...CATEGORIES]}
    />
  );
}
