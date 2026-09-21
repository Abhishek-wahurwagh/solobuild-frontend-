"use client";

import { useEffect, useRef } from "react";
import ChatComposer from "./ChatComposer";
import ChatMessage from "./ChatMessage";
import { ChatMessage as ChatMessageData } from "./types";

export default function ChatWindow({
  messages,
  loading,
  onSubmit,
  light = false,
}: {
  messages: ChatMessageData[];
  loading: boolean;
  onSubmit: (message: string) => void;
  light?: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const bg     = light ? "bg-white"               : "bg-[#0b0b0b]";
  const border = light ? "border-slate-100"        : "border-white/10";
  const footBg = light ? "bg-white"               : "";

  return (
    <main className={`flex min-h-[480px] min-w-0 flex-1 flex-col ${bg}`}>
      {/* Message list */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} light={light} />
          ))}
          {loading && (
            <div className={`flex items-center gap-3 text-[12px] ${light ? "text-slate-400" : "text-slate-500"}`}>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#0066FF]/30 bg-[#0066FF]/10 text-[10px] font-semibold text-[#0066FF]">
                SB
              </div>
              <span className="flex items-center gap-1.5">
                SoloBuildAI is thinking
                <span className="inline-flex gap-0.5">
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF] [animation-delay:120ms]" />
                  <span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF] [animation-delay:240ms]" />
                </span>
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Composer */}
      <div className={`border-t ${border} ${footBg} p-4 sm:p-5`}>
        <div className="mx-auto max-w-2xl">
          <ChatComposer onSubmit={onSubmit} light={light} />
        </div>
      </div>
    </main>
  );
}
