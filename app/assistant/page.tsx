import PageLayout from "@/components/layout/PageLayout";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

export const metadata = { title: "SoloBuildAI Assistant" };

export default function AssistantPage() {
  return (
    <PageLayout framed wide>
      <section className="overflow-hidden rounded-2xl border border-white/12 bg-[#080808]">
        <ChatbotShell />
      </section>
    </PageLayout>
  );
}
