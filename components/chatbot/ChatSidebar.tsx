"use client";

import Image from "next/image";
import logoImage from "@/image.png";
import { RECENT_CHATS, SOLUTIONS } from "./data";
import { SolutionIcon } from "./Icon";
import { SolutionId } from "./types";

export default function ChatSidebar({
  selectedSolution,
  selectedChat,
  onSelectSolution,
  onSelectChat,
  onNewChat,
  onClose,
  light = false,
}: {
  selectedSolution: SolutionId;
  selectedChat: string | null;
  onSelectSolution: (solutionId: SolutionId) => void;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  onClose?: () => void;
  light?: boolean;
}) {
  // When light=true the sidebar is white — logo renders as dark asset on white bg, which is fine
  const bg      = light ? "bg-white"                : "bg-[#090909]";
  const border  = light ? "border-slate-100"        : "border-white/10";
  const divider = light ? "border-slate-100"        : "border-white/8";

  // New Chat button
  const newChatCls = light
    ? "flex w-full items-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-left text-[12px] font-semibold text-white transition-colors hover:bg-slate-800"
    : "flex w-full items-center gap-2 rounded-lg border border-white/12 px-3 py-2.5 text-left text-[12px] font-medium text-white transition-colors hover:border-[#0066FF]/60 hover:bg-white/[0.03]";

  const labelCls = light ? "text-slate-400" : "text-slate-600";

  const chatBtnCls = (active: boolean) => light
    ? active
      ? "bg-blue-50 text-slate-900"
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    : active
      ? "bg-[#0066FF]/10 text-white"
      : "text-slate-400 hover:bg-white/[0.04] hover:text-white";

  const solBtnCls = (active: boolean) => light
    ? active
      ? "bg-blue-50 text-[#0066FF]"
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
    : active
      ? "bg-[#0066FF]/10 text-[#0066FF]"
      : "text-slate-400 hover:bg-white/[0.04] hover:text-white";

  const titleCls = light ? "text-slate-900" : "text-white";

  return (
    <aside className={`flex w-full shrink-0 flex-col border-b ${border} ${bg} lg:w-[200px] lg:border-b-0 lg:border-r`}>

      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-4">
        <Image
          src={logoImage}
          alt="SoloBuildAI"
          width={110}
          height={32}
          className="h-8 w-[120px] object-cover"
        />
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className={`rounded-lg p-1.5 transition-colors lg:hidden ${
              light ? "text-slate-400 hover:bg-slate-100" : "text-slate-500 hover:bg-white/5 hover:text-white"
            }`}
          >
            ×
          </button>
        )}
      </div>

      {/* New Chat */}
      <div className="px-4">
        <button onClick={onNewChat} className={newChatCls}>
          <span className={`text-base leading-none ${light ? "text-white" : "text-[#0066FF]"}`}>+</span>
          New Chat
        </button>
      </div>

      {/* Scrollable list */}
      <div className="mt-5 min-h-0 flex-1 overflow-y-auto px-3 pb-5">

        {/* Recent Chats */}
        <p className={`px-2 text-[9px] font-semibold uppercase tracking-[0.2em] ${labelCls}`}>Recent Chats</p>
        <div className="mt-2 space-y-0.5">
          {RECENT_CHATS.map((chat) => (
            <button
              key={chat.id}
              onClick={() => { onSelectChat(chat.id); onClose?.(); }}
              className={`w-full rounded-lg px-2.5 py-2.5 text-left transition-colors ${chatBtnCls(selectedChat === chat.id)}`}
            >
              <span className={`block truncate text-[12px] font-medium ${light ? (selectedChat === chat.id ? "text-slate-900" : "text-slate-600") : ""}`}>
                {chat.title}
              </span>
              <span className={`mt-1 flex items-center justify-between gap-2 text-[10px] ${light ? "text-slate-400" : "text-slate-600"}`}>
                <span>{SOLUTIONS.find((s) => s.id === chat.solutionId)?.shortName}</span>
                <span>{chat.time}</span>
              </span>
            </button>
          ))}
        </div>

        <div className={`my-4 border-t ${divider}`} />

        {/* Solutions nav */}
        <p className={`px-2 text-[9px] font-semibold uppercase tracking-[0.2em] ${labelCls}`}>Solutions</p>
        <div className="mt-2 space-y-0.5">
          {SOLUTIONS.map((solution) => {
            const active = solution.id === selectedSolution;
            return (
              <button
                key={solution.id}
                onClick={() => { onSelectSolution(solution.id); onClose?.(); }}
                className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-left transition-colors ${solBtnCls(active)}`}
              >
                <SolutionIcon icon={solution.icon} className={`h-4 w-4 shrink-0 ${active ? "text-[#0066FF]" : ""}`} />
                <span className={`min-w-0 flex-1 truncate text-[12px] font-medium`}>{solution.name}</span>
                <span className={`text-[14px] transition-transform ${active ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"}`}>›</span>
              </button>
            );
          })}
        </div>

      </div>
    </aside>
  );
}
