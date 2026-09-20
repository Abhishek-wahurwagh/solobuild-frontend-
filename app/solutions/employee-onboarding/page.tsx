import WorkflowSolutionPage, { EMPLOYEE_ONBOARDING } from "@/components/solutions/WorkflowSolutionPage";

export const metadata = { title: "Employee Onboarding — SoloBuildAI" };

export default function EmployeeOnboardingPage() {
  return <WorkflowSolutionPage config={EMPLOYEE_ONBOARDING} />;
}
