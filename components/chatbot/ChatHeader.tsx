import { SolutionContext } from "./types";
import { SolutionIcon } from "./Icon";

export default function ChatHeader({
  solution,
  onToggleSidebar,
  onSelectContext,
  light = false,
}: {
  solution: SolutionContext;
  onToggleSidebar?: () => void;
  onSelectContext: (id: SolutionContext["id"]) => void;
  light?: boolean;
}) {
  if (light) {
    return (
      <header className="flex min-h-[64px] items-center justify-between gap-4 border-b border-slate-100 bg-white px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              aria-label="Open chat navigation"
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 lg:hidden"
            >
              ☰
            </button>
          )}
          {/* Avatar circle — light blue, matches reference */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0066FF]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-semibold text-slate-900">SoloBuildAI Assistant</p>
            <p className="truncate text-[11px] text-slate-400">Connected to your business systems</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#0066FF]" />
            Online
          </span>
        </div>
      </header>
    );
  }

  // Dark original
  return (
    <header className="flex min-h-[72px] items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        {onToggleSidebar && (
          <button onClick={onToggleSidebar} aria-label="Open chat navigation" className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden">☰</button>
        )}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/12 text-[#0066FF]">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M7 18l-3 3v-6.5A7.5 7.5 0 0 1 11.5 7h1A7.5 7.5 0 0 1 20 14.5V21l-3-3H7Z" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-white">SoloBuildAI Assistant</p>
          <p className="truncate text-[10px] text-slate-500">Connected to your business systems</p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <label className="hidden items-center gap-2 rounded-lg border border-white/10 px-2.5 py-2 text-[11px] text-slate-300 sm:flex">
          <SolutionIcon icon={solution.icon} className="h-3.5 w-3.5 text-[#0066FF]" />
          <select
            value={solution.id}
            onChange={(e) => onSelectContext(e.target.value as SolutionContext["id"])}
            aria-label="Assistant context"
            className="bg-transparent text-[11px] text-slate-300 outline-none"
          >
            <option value="hr"         className="bg-[#0a0a0a]">HR Solutions</option>
            <option value="sales"      className="bg-[#0a0a0a]">Sales</option>
            <option value="support"    className="bg-[#0a0a0a]">Customer Support</option>
            <option value="it"         className="bg-[#0a0a0a]">IT Solutions</option>
            <option value="operations" className="bg-[#0a0a0a]">Operations</option>
          </select>
        </label>
        <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" /> Online
        </span>
      </div>
    </header>
  );
}
