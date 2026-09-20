import Link from "next/link";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

export default function AIAssistantShowcase() {
  return (
    <section id="ai-assistant-showcase" className="mt-3 scroll-mt-20 overflow-hidden rounded-2xl border border-white/12 bg-black">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0066FF]">AI Assistant</p>
          <h2 className="max-w-[430px] text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[52px]">AI that gets work done.</h2>
          <p className="mt-6 max-w-[430px] text-[15px] leading-[1.7] text-slate-400">Ask SoloBuildAI questions, automate tasks, and interact with your business systems through an intelligent AI assistant.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/assistant" className="inline-flex items-center gap-2 rounded-xl border border-[#0066FF] bg-[#0066FF] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:border-[#0052cc] hover:bg-[#0052cc]">Explore AI Assistant <span aria-hidden="true">→</span></Link>
            <a href="#ai-assistant-chat" className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5">See it in action <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div id="ai-assistant-chat" className="min-w-0 border-t border-white/12 p-3 sm:p-5 lg:border-l lg:border-t-0 lg:p-6 scroll-mt-20">
          <ChatbotShell compact />
        </div>
      </div>
    </section>
  );
}
