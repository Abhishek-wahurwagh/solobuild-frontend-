"use client";

import Image from "next/image";
import logoImage from "@/app/7526.png";
import { RECENT_CHATS, SOLUTIONS } from "./data";
import { SolutionIcon } from "./Icon";
import { SolutionId } from "./types";

export default function ChatSidebar({ selectedSolution, selectedChat, onSelectSolution, onSelectChat, onNewChat, onClose }: {
  selectedSolution: SolutionId;
  selectedChat: string | null;
  onSelectSolution: (solutionId: SolutionId) => void;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  onClose?: () => void;
}) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-[#090909] lg:w-[246px] lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between px-5 py-5">
        <Image src={logoImage} alt="SoloBuildAI" width={132} height={36} className="h-9 w-[132px] object-cover" />
        {onClose && <button onClick={onClose} aria-label="Close sidebar" className="rounded-lg p-1.5 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden">×</button>}
      </div>
      <div className="px-4">
        <button onClick={onNewChat} className="flex w-full items-center gap-2 rounded-lg border border-white/12 px-3 py-2.5 text-left text-[12px] font-medium text-white transition-colors hover:border-[#0066FF]/60 hover:bg-white/[0.03]"><span className="text-base leading-none text-[#0066FF]">+</span> New Chat</button>
      </div>
      <div className="mt-6 min-h-0 flex-1 overflow-y-auto px-3 pb-5">
        <p className="px-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">Recent Chats</p>
        <div className="mt-2 space-y-0.5">
          {RECENT_CHATS.map((chat) => (
            <button key={chat.id} onClick={() => { onSelectChat(chat.id); onClose?.(); }} className={`w-full rounded-lg px-2.5 py-2.5 text-left transition-colors ${selectedChat === chat.id ? "bg-[#0066FF]/10 text-white" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}>
              <span className="block truncate text-[12px] font-medium">{chat.title}</span>
              <span className="mt-1 flex items-center justify-between gap-2 text-[10px] text-slate-600"><span>{SOLUTIONS.find((solution) => solution.id === chat.solutionId)?.shortName}</span><span>{chat.time}</span></span>
            </button>
          ))}
        </div>
        <div className="my-5 border-t border-white/8" />
        <p className="px-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">Solutions</p>
        <div className="mt-2 space-y-0.5">
          {SOLUTIONS.map((solution) => {
            const active = solution.id === selectedSolution;
            return <button key={solution.id} onClick={() => { onSelectSolution(solution.id); onClose?.(); }} className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left transition-colors ${active ? "bg-[#0066FF]/10 text-[#0066FF]" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}><SolutionIcon icon={solution.icon} className="h-4 w-4 shrink-0" /><span className="min-w-0 flex-1 truncate text-[12px] font-medium">{solution.name}</span><span className={`text-[14px] transition-transform ${active ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"}`}>›</span></button>;
          })}
        </div>
      </div>
    </aside>
  );
}
