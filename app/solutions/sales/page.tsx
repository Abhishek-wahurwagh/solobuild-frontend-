import SolutionOverviewPage from "@/components/solutions/SolutionOverviewPage";
import { SALES_SOLUTION } from "@/lib/solutions/sales";

export const metadata = {
  title: "AI for Sales | SoloBuildAI",
  description: "AI agents to automate lead management, qualification, outreach, and pipeline operations.",
};

export default function SalesPage() {
  return <SolutionOverviewPage solution={SALES_SOLUTION} />;
}
