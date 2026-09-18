/**
 * SolutionPluginLogo
 *
 * Renders the visual identity mark for every SoloBuildAI solution plugin
 * across Sales, Customer Support, and IT domains.
 *
 * Same visual contract as HR's PluginLogo:
 *   - External integrations → recognisable branded SVG
 *   - Native capabilities   → category-accented icon
 *
 * To replace with a real asset: set logoImagePath in the plugin definition.
 */

import Image from "next/image";
import type { SolutionLogoType } from "@/lib/solutions/types";

type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, { outer: string; icon: string; text: string }> = {
  sm: { outer: "w-9  h-9  rounded-lg",   icon: "w-4 h-4", text: "text-[10px]" },
  md: { outer: "w-12 h-12 rounded-xl",   icon: "w-5 h-5", text: "text-xs" },
  lg: { outer: "w-16 h-16 rounded-2xl",  icon: "w-7 h-7", text: "text-sm" },
};

// ── Branded external integration icons ────────────────────────────────────────

function SalesforceIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M10.3 5.6a3.8 3.8 0 0 1 2.7-1.1c1.3 0 2.5.7 3.2 1.7.5-.2 1-.3 1.6-.3 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2H6.5C4.6 14.3 3 12.7 3 10.8c0-1.7 1.2-3.1 2.8-3.5a3.4 3.4 0 0 1 4.5-1.7z" fill="#00A1E0" />
      <text x="12" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#00A1E0" fontFamily="sans-serif">SF</text>
    </svg>
  );
}

function HubSpotCRMIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="8.5" cy="12" r="2.5" fill="#FF7A59" />
      <circle cx="15.5" cy="7"  r="2"   fill="#FF7A59" />
      <circle cx="15.5" cy="17" r="2"   fill="#FF7A59" />
      <line x1="11"   y1="12"   x2="13.5" y2="8.5"  stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11"   y1="12"   x2="13.5" y2="15.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ZendeskIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#03363D" />
      <path d="M12 5.5C9.5 5.5 7.5 7.5 7.5 10v.5h9V10c0-2.5-2-4.5-4.5-4.5z" fill="#BEFF00" />
      <path d="M7.5 11v2.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V11h-9z" fill="white" opacity="0.85" />
    </svg>
  );
}

function ServiceNowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#62D84E" />
      <path d="M12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" fill="white" />
    </svg>
  );
}

function JiraIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="sol-jira-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2684FF" />
          <stop offset="100%" stopColor="#0052CC" />
        </linearGradient>
      </defs>
      <path d="M11.75 3L3 11.75l4.25 4.25L11.75 11.5 16 15.75 20.5 11.75z" fill="url(#sol-jira-g)" />
      <path d="M11.75 11.5L7.5 15.75l4.25 4.25L16 15.75z" fill="#2684FF" opacity="0.7" />
    </svg>
  );
}

function ConfluenceIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="sol-conf-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path d="M4.2 16.7c-.3.4-.1 1 .4 1.1l4.8 1.2a.9.9 0 0 0 1-.5c1.2-2 2.5-3.5 5.4-3.5.3 0 .6 0 .9.1l2.5-4.4a.9.9 0 0 0-.5-1.3c-3.5-1.1-7.1-.5-10.2 1.7a22.6 22.6 0 0 0-4.3 5.6z" fill="url(#sol-conf-g)" />
      <path d="M19.8 7.3c.3-.4.1-1-.4-1.1L14.6 5a.9.9 0 0 0-1 .5c-1.2 2-2.5 3.5-5.4 3.5-.3 0-.6 0-.9-.1L4.8 13.3a.9.9 0 0 0 .5 1.3c3.5 1.1 7.1.5 10.2-1.7a22.6 22.6 0 0 0 4.3-5.6z" fill="url(#sol-conf-g)" opacity="0.7" />
    </svg>
  );
}

function SlackIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M9 4.5a1.5 1.5 0 1 0 0 3h1.5V4.5A1.5 1.5 0 0 0 9 4.5z"       fill="#E01E5A" />
      <path d="M9 10.5H4.5a1.5 1.5 0 1 0 0 3H9v-3z"                           fill="#E01E5A" />
      <path d="M19.5 12a1.5 1.5 0 1 0-3 0v1.5h1.5a1.5 1.5 0 0 0 1.5-1.5z"   fill="#ECB22E" />
      <path d="M13.5 12V4.5a1.5 1.5 0 1 0-3 0V12h3z"                          fill="#ECB22E" />
      <path d="M15 19.5a1.5 1.5 0 1 0 0-3h-1.5v1.5a1.5 1.5 0 0 0 1.5 1.5z"  fill="#2EB67D" />
      <path d="M15 13.5h4.5a1.5 1.5 0 1 0 0-3H15v3z"                          fill="#2EB67D" />
      <path d="M4.5 15a1.5 1.5 0 1 0 3 0v-1.5H6A1.5 1.5 0 0 0 4.5 15z"      fill="#36C5F0" />
      <path d="M10.5 15v4.5a1.5 1.5 0 1 0 3 0V15h-3z"                         fill="#36C5F0" />
    </svg>
  );
}

function GoogleCalendarIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="3" y="3" width="18" height="5.5" rx="2.5" fill="#4285F4" />
      <text x="12" y="18" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4285F4" fontFamily="sans-serif">31</text>
      <line x1="3" y1="8.5" x2="21" y2="8.5" stroke="#e2e8f0" strokeWidth="0.75" />
    </svg>
  );
}

function MicrosoftTeamsIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#5059C9" />
      <circle cx="15" cy="8" r="2.5" fill="white" />
      <path d="M18.5 11.5h-7a1 1 0 0 0-1 1V17a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4.5a1 1 0 0 0-1-1z" fill="white" opacity="0.85" />
      <circle cx="9"  cy="9" r="2"   fill="#7B83EB" />
      <path d="M12 13H5.5a.5.5 0 0 0-.5.5V17a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5z" fill="#4B53BC" />
    </svg>
  );
}

function OutlookIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0078D4" />
      <rect x="11" y="5" width="9" height="9" rx="1" fill="white" opacity="0.9" />
      <text x="15.5" y="13.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#0078D4" fontFamily="sans-serif">M</text>
      <rect x="4" y="10" width="9" height="9" rx="1" fill="#0050A0" />
      <text x="8.5" y="18.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="white" fontFamily="sans-serif">OL</text>
    </svg>
  );
}

function GmailIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="white" stroke="#e2e8f0" strokeWidth="0.75" />
      <path d="M2 7l10 7 10-7" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M2 7v10m20-10v10" stroke="#EA4335" strokeWidth="0.75" />
    </svg>
  );
}

// ── External icon registry ────────────────────────────────────────────────────
type IconFn = (props: { className: string }) => React.ReactElement;
const EXTERNAL: Partial<Record<SolutionLogoType, IconFn>> = {
  salesforce:       SalesforceIcon,
  "hubspot-crm":    HubSpotCRMIcon,
  zendesk:          ZendeskIcon,
  servicenow:       ServiceNowIcon,
  jira:             JiraIcon,
  confluence:       ConfluenceIcon,
  slack:            SlackIcon,
  "google-calendar": GoogleCalendarIcon,
  "microsoft-teams": MicrosoftTeamsIcon,
  outlook:          OutlookIcon,
  gmail:            GmailIcon,
};

// ── Native plugin visual meta ─────────────────────────────────────────────────
// Each entry: accent colour, background tint, and an icon path set.
interface NativeMeta {
  accent: string;
  bg: string;
  icon: React.ReactNode;
}

const NATIVE: Record<string, NativeMeta> = {
  // ── Sales ──────────────────────────────────────────────────────────────────
  "lead-capture": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h14M3 10h10m-10 5h14" /></svg>,
  },
  "lead-enrichment": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><circle cx="10" cy="7" r="3" /><path strokeLinecap="round" d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path strokeLinecap="round" d="M14 3l2 2-2 2" /></svg>,
  },
  "lead-qualification": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" /></svg>,
  },
  "lead-scoring": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15V8m4 7V5m4 10v-4m4 4V3" /></svg>,
  },
  "sales-outreach": {
    accent: "#fb923c", bg: "rgba(251,146,60,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7-5 7 5v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 8v-5h6v5" /></svg>,
  },
  "email-automation": {
    accent: "#f472b6", bg: "rgba(244,114,182,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="2" y="4" width="16" height="12" rx="1.5" /><path strokeLinecap="round" d="M2 6l8 6 8-6" /></svg>,
  },
  "meeting-scheduler": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="4" width="14" height="13" rx="1.5" /><path strokeLinecap="round" d="M3 8h14M7 2v3m6-3v3M7 12l2 2 4-4" /></svg>,
  },
  "crm-update": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 6 8-6" /></svg>,
  },
  "opportunity-management": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm5-2l3 3 3-6" /></svg>,
  },
  "sales-summary": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12v12H4zm3 4h6M7 10h4m-4 3h6" /></svg>,
  },
  "sales-analytics": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15l4-5 3 2 4-6 3 3" /></svg>,
  },
  // ── Customer Support ────────────────────────────────────────────────────────
  "ticket-creation": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="3" width="14" height="14" rx="1.5" /><path strokeLinecap="round" d="M7 7h6M7 10h4M7 13h5M14 7l2 2-2 2" /></svg>,
  },
  "ticket-classification": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h4l2-2h6l2 2v10l-2 2H9l-2-2H3z" /><path strokeLinecap="round" d="M10 8v4m0 2v.5" /></svg>,
  },
  "knowledge-search": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm5-2 3 3" /></svg>,
  },
  "customer-context": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><circle cx="9" cy="7" r="3" /><path strokeLinecap="round" d="M3 17c0-3.3 2.7-6 6-6m5-4h4m-2-2v4" /></svg>,
  },
  "agent-assist": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3a7 7 0 0 1 7 7 7 7 0 0 1-7 7H5l-3 2 1-3A7 7 0 0 1 3 10a7 7 0 0 1 7-7z" /></svg>,
  },
  "response-generation": {
    accent: "#fb923c", bg: "rgba(251,146,60,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6l-4 3V6a2 2 0 0 1 2-2z" /></svg>,
  },
  "ticket-routing": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h14m-5-5 5 5-5 5" /></svg>,
  },
  "escalation": {
    accent: "#f87171", bg: "rgba(248,113,113,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3v10m-5-5 5-5 5 5" /></svg>,
  },
  "customer-notification": {
    accent: "#f472b6", bg: "rgba(244,114,182,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10a5 5 0 0 0-10 0v3l-1 1v1h12v-1l-1-1zm-5 6a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2z" /></svg>,
  },
  "support-summary": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 3h12v14H4zm3 4h6M7 10h4m-4 3h6" /></svg>,
  },
  "support-analytics": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15l4-5 3 2 4-6 3 3" /></svg>,
  },
  // ── IT Support ─────────────────────────────────────────────────────────────
  "it-request-intake": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="3" width="14" height="14" rx="2" /><path strokeLinecap="round" d="M7 7h6M7 10h4M7 13h5" /></svg>,
  },
  "it-issue-classification": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M5 4h10a2 2 0 0 1 2 2v1H3V6a2 2 0 0 1 2-2zm-2 5h14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5 2l2 2 4-4" /></svg>,
  },
  "it-knowledge-search": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm5-2 3 3" /></svg>,
  },
  "troubleshooting-assistant": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3a7 7 0 0 1 7 7 7 7 0 0 1-7 7H5l-3 2 1-3A7 7 0 0 1 3 10a7 7 0 0 1 7-7z" /></svg>,
  },
  "incident-management": {
    accent: "#f87171", bg: "rgba(248,113,113,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3l7 14H3zm0 5v4m0 2v1" /></svg>,
  },
  "service-request-management": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9m-8 0V2l8 7" /></svg>,
  },
  "access-request": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12V3m0 9-3-3m3 3 3-3m-3 9a4 4 0 0 1-4-4H3m14 0h-2a4 4 0 0 1-4 4" /></svg>,
  },
  "it-escalation": {
    accent: "#f87171", bg: "rgba(248,113,113,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3v10m-5-5 5-5 5 5" /></svg>,
  },
  "it-notification": {
    accent: "#fb923c", bg: "rgba(251,146,60,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10a5 5 0 0 0-10 0v3l-1 1v1h12v-1l-1-1zm-5 6a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2z" /></svg>,
  },
  "it-summary": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 3h12v14H4zm3 4h6M7 10h4m-4 3h6" /></svg>,
  },
  // ── IT Service Operations ───────────────────────────────────────────────────
  "service-catalog": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="11" y="3" width="6" height="6" rx="1" /><rect x="3" y="11" width="6" height="6" rx="1" /><rect x="11" y="11" width="6" height="6" rx="1" /></svg>,
  },
  "approval-workflow": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h10M5 12h10M9 5v10" /></svg>,
  },
  "service-provisioning": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3v4m0 6v4M3 10h4m6 0h4m-9.2-4.8 2.8 2.8-2.8 2.8m4.4-5.6 2.8 2.8-2.8 2.8" /></svg>,
  },
  "asset-management": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12a1 1 0 0 1 1 1v2H3V5a1 1 0 0 1 1-1zm-1 5h14v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm4 3h2m2 0h2" /></svg>,
  },
  "user-access-management": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><circle cx="9" cy="7" r="3" /><path strokeLinecap="round" d="M3 17c0-3.3 2.7-6 6-6m5-1v6m-2-2h4" /></svg>,
  },
  "service-status": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><circle cx="10" cy="10" r="7" /><path strokeLinecap="round" d="M10 6v4l3 2" /></svg>,
  },
  "change-management": {
    accent: "#f87171", bg: "rgba(248,113,113,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4l12 12M4 16 16 4" /></svg>,
  },
  "service-analytics": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15l4-5 3 2 4-6 3 3" /></svg>,
  },
  // ── IT Email Automation ─────────────────────────────────────────────────────
  "email-intake": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="2" y="4" width="16" height="12" rx="1.5" /><path strokeLinecap="round" d="M2 6l8 6 8-6" /></svg>,
  },
  "email-classification": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h4l2-2h6l2 2v10l-2 2H9l-2-2H3zm7 1v4m0 2v1" /></svg>,
  },
  "request-extraction": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12v12H4zm3 3h6m-6 3h4m-4 3h5" /></svg>,
  },
  "knowledge-retrieval": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm5-2 3 3" /></svg>,
  },
  "email-response-generator": {
    accent: "#fb923c", bg: "rgba(251,146,60,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6l-4 3V6a2 2 0 0 1 2-2z" /></svg>,
  },
  "email-routing": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h14m-5-5 5 5-5 5" /></svg>,
  },
  "task-creation": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><rect x="3" y="3" width="14" height="14" rx="2" /><path strokeLinecap="round" d="M7 10l2 2 4-4M10 3v4" /></svg>,
  },
  "email-followup": {
    accent: "#f472b6", bg: "rgba(244,114,182,0.12)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2 8l8 6 8-6M2 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2m-4 8H6l-2-2v-4h12v4z" /></svg>,
  },
  "email-audit": {
    accent: "#94a3b8", bg: "rgba(148,163,184,0.10)",
    icon: <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12v12H4zm2 4h8M6 10h6M6 13h4" /></svg>,
  },
};

// ── Main component ────────────────────────────────────────────────────────────
export default function SolutionPluginLogo({
  logoType,
  logoImagePath,
  size = "md",
}: {
  logoType: SolutionLogoType;
  logoImagePath?: string;
  size?: Size;
}) {
  const s = SIZE[size];

  // Real image asset takes precedence
  if (logoImagePath) {
    return (
      <div className={`${s.outer} flex items-center justify-center overflow-hidden bg-white border border-white/10 flex-shrink-0`}>
        <Image src={logoImagePath} alt={logoType} width={48} height={48} className="w-3/4 h-3/4 object-contain" />
      </div>
    );
  }

  // External integration → branded SVG
  const ExtIcon = EXTERNAL[logoType];
  if (ExtIcon) {
    return (
      <div className={`${s.outer} flex items-center justify-center flex-shrink-0 bg-[#111827] border border-white/10`}>
        <ExtIcon className={s.icon} />
      </div>
    );
  }

  // Native capability → accented icon
  const meta = NATIVE[logoType];
  if (meta) {
    return (
      <div
        className={`${s.outer} flex items-center justify-center flex-shrink-0`}
        style={{ background: meta.bg, border: `1px solid ${meta.accent}33` }}
      >
        <span style={{ color: meta.accent }} className={`${s.icon} flex items-center justify-center`}>
          {meta.icon}
        </span>
      </div>
    );
  }

  // Fallback initials
  return (
    <div className={`${s.outer} flex items-center justify-center flex-shrink-0 bg-[#0066FF]/15 border border-[#0066FF]/25`}>
      <span className={`${s.text} font-bold text-[#0066FF] uppercase`}>
        {logoType.split("-").map((w) => w[0]).join("").slice(0, 2)}
      </span>
    </div>
  );
}
