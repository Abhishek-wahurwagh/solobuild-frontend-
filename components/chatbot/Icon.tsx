import { ReactNode } from "react";
import { SolutionContext } from "./types";

export function SolutionIcon({ icon, className = "h-4 w-4" }: { icon: SolutionContext["icon"]; className?: string }) {
  const paths: Record<SolutionContext["icon"], ReactNode> = {
    people: <><path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" /><circle cx="9.5" cy="7" r="3" /><path d="M17 11a3 3 0 1 0-1.2-5.75M21 20v-1.5a4 4 0 0 0-3-3.87" /></>,
    chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 4-4 3 2 5-6" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h1v-6H4ZM20 13v4a2 2 0 0 1-2 2h-1v-6h3ZM15 20h-3" /></>,
    terminal: <><path d="m5 7 4 5-4 5M12 17h7" /></>,
    workflow: <><rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="15" width="6" height="5" rx="1" /><path d="M9 6.5h3a3 3 0 0 1 3 3v5.5M15 17.5h-3a3 3 0 0 1-3-3V9.5" /></>,
  };

  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[icon]}</svg>;
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h13m-5-5 5 5-5 5" /></svg>;
}

export function SendIcon() {
  return <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m5 12 14-7-3 7 3 7-14-7Zm0 0h11" /></svg>;
}
