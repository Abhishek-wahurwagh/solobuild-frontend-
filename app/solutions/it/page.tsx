import SolutionOverviewPage from "@/components/solutions/SolutionOverviewPage";
import { IT_SOLUTION } from "@/lib/solutions/it";

export const metadata = {
  title: "AI for IT | SoloBuildAI",
  description: "AI agents to automate IT support, service operations, and email-based workflows.",
};

export default function ITPage() {
  return <SolutionOverviewPage solution={IT_SOLUTION} heroImage="/images/editorial-man.png" />;
}
