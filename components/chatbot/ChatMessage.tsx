import AIActivity from "./AIActivity";
import { ChatMessage as ChatMessageData } from "./types";

export default function ChatMessage({ message }: { message: ChatMessageData }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#0066FF] px-4 py-3 text-[13px] leading-relaxed text-white shadow-[0_8px_24px_rgba(0,102,255,0.18)]">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#0066FF]/30 bg-[#0066FF]/10 text-[10px] font-semibold text-[#0066FF]">SB</div>
      <div className="min-w-0 max-w-[94%]">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0066FF]">SoloBuildAI</p>
        <p className="text-[13px] leading-relaxed text-slate-300">{message.content}</p>
        {message.summary && (
          <div className="mt-3 space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            {message.summary.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[12px] text-slate-400">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0066FF]/15 text-[10px] text-[#0066FF]">✓</span>
                {item}
              </div>
            ))}
          </div>
        )}
        {message.showActivity && <AIActivity />}
      </div>
    </div>
  );
}
