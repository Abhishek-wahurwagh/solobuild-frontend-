"use client";

import { useEffect, useRef } from "react";
import ChatComposer from "./ChatComposer";
import ChatMessage from "./ChatMessage";
import { ChatMessage as ChatMessageData } from "./types";

export default function ChatWindow({ messages, loading, onSubmit }: { messages: ChatMessageData[]; loading: boolean; onSubmit: (message: string) => void }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  return <main className="flex min-h-[520px] min-w-0 flex-1 flex-col bg-[#0b0b0b]"><div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"><div className="mx-auto max-w-2xl space-y-6">{messages.map((message) => <ChatMessage key={message.id} message={message} />)}{loading && <div className="flex items-center gap-3 text-[12px] text-slate-500"><div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#0066FF]/30 bg-[#0066FF]/10 text-[10px] font-semibold text-[#0066FF]">SB</div><span className="flex items-center gap-1.5">SoloBuildAI is thinking<span className="inline-flex gap-0.5"><span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF]" /><span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF] [animation-delay:120ms]" /><span className="h-1 w-1 animate-bounce rounded-full bg-[#0066FF] [animation-delay:240ms]" /></span></span></div>}<div ref={bottomRef} /></div></div><div className="border-t border-white/10 p-4 sm:p-5"><div className="mx-auto max-w-2xl"><ChatComposer onSubmit={onSubmit} /></div></div></main>;
}
