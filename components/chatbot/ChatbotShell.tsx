"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ContextPanel from "./ContextPanel";
import { createConversation, getSolution, RECENT_CHATS } from "./data";
import { ChatMessage, SolutionId } from "./types";

export default function ChatbotShell({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  const [selectedSolution, setSelectedSolution] = useState<SolutionId>("hr");
  const [selectedChat, setSelectedChat] = useState<string | null>("hr-tasks");
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    createConversation(getSolution("hr"))
  );
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const solution = getSolution(selectedSolution);

  function selectSolution(solutionId: SolutionId) {
    setSelectedSolution(solutionId);
    setSelectedChat(null);
    setMessages(createConversation(getSolution(solutionId)));
    setSidebarOpen(false);
  }

  function selectChat(chatId: string) {
    const chat = RECENT_CHATS.find((item) => item.id === chatId);
    if (!chat) return;
    setSelectedSolution(chat.solutionId);
    setSelectedChat(chat.id);
    setMessages(createConversation(getSolution(chat.solutionId)));
    setSidebarOpen(false);
  }

  function newChat() {
    setSelectedChat(null);
    setMessages([]);
    setSidebarOpen(false);
  }

  function submitMessage(content: string) {
    const activeSolution = getSolution(selectedSolution);
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: "user", content },
    ]);
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: `I can help with that in ${activeSolution.name}. I reviewed the available demo context and prepared the next steps for you.`,
          summary: activeSolution.summary.slice(0, 3),
          showActivity: true,
        },
      ]);
    }, 700);
  }

  function runAction(action: string) {
    submitMessage(action);
  }

  // Shell bg: light = white, dark = original #080808
  const shellBg     = light ? "bg-white"          : "bg-[#080808]";
  const shellBorder = light ? "border-slate-200"   : "border-white/12";
  const backdropBg  = light ? "bg-slate-900/30"    : "bg-black/60";

  return (
    <div
      className={`relative flex min-h-0 overflow-hidden border ${shellBorder} ${shellBg} text-white ${
        compact
          ? "h-[600px] rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.22),0_0_0_1px_rgba(0,0,0,0.04)]"
          : "min-h-[calc(100vh-58px)]"
      }`}
    >
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <button
          aria-label="Close chat navigation"
          onClick={() => setSidebarOpen(false)}
          className={`fixed inset-0 z-30 lg:hidden ${backdropBg}`}
        />
      )}

      {/* Sidebar (always dark — logo must read on dark bg) */}
      <div
        className={`${
          sidebarOpen ? "fixed inset-y-0 left-0 z-40 flex" : "hidden"
        } w-[200px] lg:static lg:flex`}
      >
        <ChatSidebar
          selectedSolution={selectedSolution}
          selectedChat={selectedChat}
          onSelectSolution={selectSolution}
          onSelectChat={selectChat}
          onNewChat={newChat}
          onClose={() => setSidebarOpen(false)}
          light={light}
        />
      </div>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <ChatHeader
          solution={solution}
          onToggleSidebar={() => setSidebarOpen(true)}
          onSelectContext={selectSolution}
          light={light}
        />
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <ChatWindow
            messages={messages}
            loading={loading}
            onSubmit={submitMessage}
            light={light}
          />
          <ContextPanel
            solution={solution}
            onAction={runAction}
            light={light}
          />
        </div>
      </div>
    </div>
  );
}
