import AIActivity from "./AIActivity";
import { ChatMessage as ChatMessageData } from "./types";

export default function ChatMessage({
  message,
  light = false,
}: {
  message: ChatMessageData;
  light?: boolean;
}) {
  // User bubble — solid blue, same in both modes
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#0066FF] px-4 py-3 text-[13px] leading-relaxed text-white shadow-[0_4px_16px_rgba(0,102,255,0.25)]">
          {message.content}
        </div>
      </div>
    );
  }

  // Assistant bubble
  return (
    <div className="flex gap-3">
      {/* SB avatar */}
      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-[#0066FF] ${
        light ? "bg-blue-100" : "border border-[#0066FF]/30 bg-[#0066FF]/10"
      }`}>
        SB
      </div>

      <div className="min-w-0 max-w-[94%]">
        <p className={`mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0066FF]`}>
          SoloBuildAI
        </p>
        <p className={`text-[13px] leading-relaxed ${light ? "text-slate-700" : "text-slate-300"}`}>
          {message.content}
        </p>

        {message.summary && (
          <div className={`mt-3 space-y-2 rounded-xl border p-3.5 ${
            light ? "border-slate-100 bg-slate-50" : "border-white/10 bg-white/[0.02]"
          }`}>
            {message.summary.map((item) => (
              <div key={item} className={`flex items-center gap-2.5 text-[12px] ${light ? "text-slate-600" : "text-slate-400"}`}>
                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-[#0066FF] ${
                  light ? "bg-blue-100" : "bg-[#0066FF]/15"
                }`}>
                  ✓
                </span>
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
