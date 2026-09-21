import Navbar from "@/components/layout/Navbar";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

export const metadata = { title: "SoloBuildAI Assistant" };

export default function AssistantPage() {
  return (
    // Outer: fixed to viewport, no page scroll ever
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-black">
      <Navbar />
      {/* Spacer clears the fixed navbar (h-14 = 56px, navbar is 58px — close enough, border accounts for the rest) */}
      <div className="h-[58px] flex-shrink-0" />
      {/* Centered stage — takes all remaining height, centers the card */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Chatbot card — constrained, never overflows its box */}
        <div
          className="flex w-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_48px_rgba(0,0,0,0.32)]"
          style={{ maxWidth: "1320px", height: "clamp(400px, 100%, 880px)" }}
        >
          <ChatbotShell light fullHeight />
        </div>
      </div>
    </div>
  );
}
