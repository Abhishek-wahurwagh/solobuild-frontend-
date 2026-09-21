import { getConnectedTools } from "./data";
import { ArrowIcon } from "./Icon";
import { SolutionContext } from "./types";

export default function ContextPanel({
  solution,
  onAction,
  light = false,
}: {
  solution: SolutionContext;
  onAction: (action: string) => void;
  light?: boolean;
}) {
  const tools = getConnectedTools(solution);

  const bg         = light ? "bg-slate-50"       : "bg-[#090909]";
  const border     = light ? "border-slate-200"  : "border-white/10";
  const sectionLbl = light ? "text-slate-400"    : "text-slate-600";
  const toolCard   = light
    ? "border-slate-200 bg-white text-slate-600"
    : "border-white/8 bg-white/[0.02] text-slate-400";
  const toolStatus = light ? "text-slate-400"    : "text-slate-600";
  const actionBtn  = light
    ? "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
    : "text-slate-400 hover:bg-white/[0.04] hover:text-white";
  const securityCard = light
    ? "border-[#0066FF]/20 bg-[#0066FF]/[0.04]"
    : "border-[#0066FF]/15 bg-[#0066FF]/[0.04]";
  const securityTitle = light ? "text-slate-800" : "text-white";
  const securityBody  = light ? "text-slate-500" : "text-slate-500";

  return (
    <aside className={`flex w-full shrink-0 flex-col border-t ${border} ${bg} lg:w-[200px] lg:border-l lg:border-t-0`}>
      <div className="flex-1 space-y-6 overflow-y-auto p-5">

        {/* Connected tools */}
        <section>
          <p className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${sectionLbl}`}>
            Connected Tools
          </p>
          <div className="mt-3 space-y-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 ${toolCard}`}
              >
                <span className="truncate text-[11px]">{tool.name}</span>
                <span className={`flex shrink-0 items-center gap-1.5 text-[9px] ${toolStatus}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                  {tool.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested actions */}
        <section>
          <p className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${sectionLbl}`}>
            Suggested Actions
          </p>
          <div className="mt-3 space-y-1">
            {solution.actions.map((action) => (
              <button
                key={action}
                onClick={() => onAction(action)}
                className={`group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-[11px] transition-colors ${actionBtn}`}
              >
                <span className="min-w-0 flex-1">{action}</span>
                <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-[#0066FF] opacity-50 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </section>

        {/* Security note */}
        <section className={`rounded-xl border p-4 ${securityCard}`}>
          <div className={`flex items-center gap-2 text-[11px] font-semibold ${securityTitle}`}>
            <svg className="h-4 w-4 text-[#0066FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.5 2.8 8.3 7 10 4.2-1.7 7-5.5 7-10V6l-7-3Z" />
            </svg>
            Your data is secure
          </div>
          <p className={`mt-2 text-[10px] leading-relaxed ${securityBody}`}>
            SoloBuildAI follows enterprise-grade security and privacy standards.
          </p>
        </section>

      </div>
    </aside>
  );
}
