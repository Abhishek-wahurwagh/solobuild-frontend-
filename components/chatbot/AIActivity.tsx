const ACTIVITY = [
  "Checking connected systems",
  "Retrieving relevant information",
  "Preparing recommended actions",
];

export default function AIActivity() {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0066FF]" />
          AI is working...
        </div>
        <span className="text-[10px] text-slate-600">Demo activity</span>
      </div>
      <div className="space-y-2.5">
        {ACTIVITY.map((item) => (
          <div key={item} className="flex items-center justify-between gap-3 text-[12px] text-slate-400">
            <span className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0066FF]/15 text-[10px] text-[#0066FF]">✓</span>
              <span className="truncate">{item}</span>
            </span>
            <span className="shrink-0 text-[10px] text-[#0066FF]">Completed</span>
          </div>
        ))}
      </div>
    </div>
  );
}
