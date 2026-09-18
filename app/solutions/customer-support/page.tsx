import SolutionOverviewPage from "@/components/solutions/SolutionOverviewPage";
import { CS_SOLUTION } from "@/lib/solutions/customer-support";

export const metadata = {
  title: "AI for Customer Support | SoloBuildAI",
  description: "AI agents to automate ticket management, knowledge retrieval, agent assistance, and customer communication.",
};

export default function CustomerSupportPage() {
  return <SolutionOverviewPage solution={CS_SOLUTION} />;
}
