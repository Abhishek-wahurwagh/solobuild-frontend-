/**
 * PluginLogo — renders the visual identity mark for every talent plugin.
 *
 * For external integrations it renders a recognisable branded SVG icon.
 * For native SoloBuildAI capabilities it renders a styled monogram with
 * a category-specific accent color.
 *
 * To replace a placeholder with a real asset:
 *   1. Add the image to /public/logos/<id>.svg (or .png)
 *   2. Set logoImagePath in the plugin definition in plugins.ts
 *   3. PluginLogo will automatically use the image instead of the SVG.
 *
 * Size is controlled by the `size` prop: "sm" | "md" | "lg"
 */

import Image from "next/image";
import type { LogoType } from "@/lib/talent-acquisition/plugins";

type Size = "sm" | "md" | "lg";

const SIZE_MAP: Record<Size, { outer: string; inner: string; iconW: string; textSize: string }> = {
  sm: { outer: "w-9 h-9 rounded-lg",   inner: "w-9 h-9",  iconW: "w-4 h-4", textSize: "text-[10px]" },
  md: { outer: "w-12 h-12 rounded-xl",  inner: "w-12 h-12", iconW: "w-5 h-5", textSize: "text-xs" },
  lg: { outer: "w-16 h-16 rounded-2xl", inner: "w-16 h-16", iconW: "w-7 h-7", textSize: "text-sm" },
};

// ── External integration logos ─────────────────────────────────────────────

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

function JiraIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="jira-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2684FF" />
          <stop offset="100%" stopColor="#0052CC" />
        </linearGradient>
      </defs>
      <path d="M11.75 3L3 11.75l4.25 4.25L11.75 11.5 16 15.75 20.5 11.75z" fill="url(#jira-g)" />
      <path d="M11.75 11.5L7.5 15.75l4.25 4.25L16 15.75z" fill="#2684FF" opacity="0.7" />
    </svg>
  );
}

function WorkableIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#F47B20" />
      <path d="M8 8l2.5 8L12 10l1.5 6L16 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BambooHRIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#73BE44" />
      <path d="M7 18V8m0 0c0-2 2-3 4-2s3 3.5 0 5c3 1.5 4 4 1 5m3-8v8" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function AshbyIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7C5CFC" />
      <path d="M7 18l5-12 5 12M9 14h6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlackIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M9 4.5a1.5 1.5 0 1 0 0 3h1.5V4.5A1.5 1.5 0 0 0 9 4.5z" fill="#E01E5A" />
      <path d="M9 10.5H4.5a1.5 1.5 0 1 0 0 3H9v-3z" fill="#E01E5A" />
      <path d="M19.5 12a1.5 1.5 0 1 0-3 0v1.5h1.5a1.5 1.5 0 0 0 1.5-1.5z" fill="#ECB22E" />
      <path d="M13.5 12V4.5a1.5 1.5 0 1 0-3 0V12h3z" fill="#ECB22E" />
      <path d="M15 19.5a1.5 1.5 0 1 0 0-3h-1.5v1.5a1.5 1.5 0 0 0 1.5 1.5z" fill="#2EB67D" />
      <path d="M15 13.5h4.5a1.5 1.5 0 1 0 0-3H15v3z" fill="#2EB67D" />
      <path d="M4.5 15a1.5 1.5 0 1 0 3 0v-1.5H6A1.5 1.5 0 0 0 4.5 15z" fill="#36C5F0" />
      <path d="M10.5 15v4.5a1.5 1.5 0 1 0 3 0V15h-3z" fill="#36C5F0" />
    </svg>
  );
}

function ConfluenceIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="conf-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#2684FF" />
        </linearGradient>
      </defs>
      <path d="M4.2 16.7c-.3.4-.1 1 .4 1.1l4.8 1.2a.9.9 0 0 0 1-.5c1.2-2 2.5-3.5 5.4-3.5.3 0 .6 0 .9.1l2.5-4.4a.9.9 0 0 0-.5-1.3c-3.5-1.1-7.1-.5-10.2 1.7a22.6 22.6 0 0 0-4.3 5.6z" fill="url(#conf-g)" />
      <path d="M19.8 7.3c.3-.4.1-1-.4-1.1L14.6 5a.9.9 0 0 0-1 .5c-1.2 2-2.5 3.5-5.4 3.5-.3 0-.6 0-.9-.1L4.8 13.3a.9.9 0 0 0 .5 1.3c3.5 1.1 7.1.5 10.2-1.7a22.6 22.6 0 0 0 4.3-5.6z" fill="url(#conf-g)" opacity="0.7" />
    </svg>
  );
}

function HubSpotIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="8.5" cy="12" r="2.5" fill="#FF7A59" />
      <circle cx="15.5" cy="7" r="2" fill="#FF7A59" />
      <circle cx="15.5" cy="17" r="2" fill="#FF7A59" />
      <line x1="11" y1="12" x2="13.5" y2="8.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="12" x2="13.5" y2="15.5" stroke="#FF7A59" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Microsoft365Icon({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24"><path d="M3 4h8v8H3zM13 4h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" fill="#F25022" /><path d="M13 4h8v8h-8zM13 13h8v8h-8z" fill="#7FBA00" /><path d="M3 4h8v8H3z" fill="#00A4EF" /><path d="M3 13h8v8H3z" fill="#FFB900" /></svg>;
}

function GoogleWorkspaceIcon({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 4a8 8 0 1 0 7.5 10.8" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" /><path d="M19.5 14.8V10H12" stroke="#34A853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.3 17.2 8 14.5" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" /><path d="M5.3 6.8 8 9.5" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" /></svg>;
}

function LinkedInIcon({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" fill="#0A66C2" /><circle cx="8" cy="8" r="1.3" fill="white" /><path d="M7 11v6M11 17v-3.2a2 2 0 0 1 4 0V17M11 11v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

function SalesforceIcon({ className }: { className: string }) {
  return <svg className={className} viewBox="0 0 24 24"><path d="M7.2 17.5a4 4 0 0 1-.7-7.9A5.7 5.7 0 0 1 17 8.2a3.7 3.7 0 0 1 .6 7.3H7.2Z" fill="#0D9DDA" /><path d="M7.2 14.2h9.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}

// ── SoloBuildAI native capability logos ────────────────────────────────────
// Each has a distinct accent color and an appropriate icon.

const NATIVE_META: Record<string, { accent: string; bg: string; initials: string; icon: React.ReactNode }> = {
  "jd-analyzer": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.14)",
    initials: "JD",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h12M4 8h8M4 11h10M4 14h6" />
      </svg>
    ),
  },
  "candidate-sourcing": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.14)",
    initials: "CS",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="8" cy="7" r="3" /><path strokeLinecap="round" d="M2 18c0-3.3 2.7-6 6-6m4-1l5 5m0 0-2.5.5m2.5-.5-.5-2.5" />
      </svg>
    ),
  },
  "resume-parser": {
    accent: "#34d399", bg: "rgba(52,211,153,0.12)",
    initials: "RP",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <rect x="4" y="2" width="12" height="16" rx="1.5" /><path strokeLinecap="round" d="M7 7h6M7 10h4M7 13h5" />
      </svg>
    ),
  },
  "resume-screening": {
    accent: "#60a5fa", bg: "rgba(96,165,250,0.12)",
    initials: "RS",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m-7 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
      </svg>
    ),
  },
  "candidate-scoring": {
    accent: "#f59e0b", bg: "rgba(245,158,11,0.12)",
    initials: "SC",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15V8m4 7V5m4 10v-4m4 4V3" />
      </svg>
    ),
  },
  "voice-screening": {
    accent: "#f472b6", bg: "rgba(244,114,182,0.12)",
    initials: "VS",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <rect x="7" y="2" width="6" height="10" rx="3" /><path strokeLinecap="round" d="M4 11a7 7 0 0 0 12 0M10 17v2m-3 0h6" />
      </svg>
    ),
  },
  "call-assessment": {
    accent: "#a78bfa", bg: "rgba(167,139,250,0.12)",
    initials: "CA",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6.75A3.75 3.75 0 0 1 5.75 3h8.5A3.75 3.75 0 0 1 18 6.75v4.5A3.75 3.75 0 0 1 14.25 15H12l-3 3v-3H5.75A3.75 3.75 0 0 1 2 11.25z" />
      </svg>
    ),
  },
  "interview-scheduling": {
    accent: "#22d3ee", bg: "rgba(34,211,238,0.10)",
    initials: "IS",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3" y="4" width="14" height="13" rx="1.5" /><path strokeLinecap="round" d="M3 8h14M7 2v3m6-3v3M7 12l2 2 4-4" />
      </svg>
    ),
  },
  "candidate-communication": {
    accent: "#fb923c", bg: "rgba(251,146,60,0.11)",
    initials: "CC",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6l-4 3V6a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  "screening-report": {
    accent: "#3b7eff", bg: "rgba(59,126,255,0.12)",
    initials: "SR",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 3h12v14H4zm3 4h6M7 10h4m-4 3h6" />
      </svg>
    ),
  },
};

// ── External integration SVG icons map ─────────────────────────────────────

type IconRenderer = (props: { className: string }) => React.ReactElement;

const EXTERNAL_ICONS: Partial<Record<LogoType, IconRenderer>> = {
  "google-calendar": GoogleCalendarIcon,
  jira:             JiraIcon,
  workable:         WorkableIcon,
  bamboohr:         BambooHRIcon,
  ashby:            AshbyIcon,
  slack:            SlackIcon,
  confluence:       ConfluenceIcon,
  hubspot:          HubSpotIcon,
  "microsoft-365":  Microsoft365Icon,
  "google-workspace": GoogleWorkspaceIcon,
  linkedin:         LinkedInIcon,
  salesforce:       SalesforceIcon,
};

// ── Main component ──────────────────────────────────────────────────────────

export default function PluginLogo({
  logoType,
  logoImagePath,
  size = "md",
}: {
  logoType: LogoType;
  logoImagePath?: string;
  size?: Size;
}) {
  const s = SIZE_MAP[size];

  // If a real image asset is supplied — use it
  if (logoImagePath) {
    return (
      <div className={`${s.outer} flex items-center justify-center overflow-hidden bg-white border border-white/10 flex-shrink-0`}>
        <Image src={logoImagePath} alt={logoType} width={48} height={48} className="w-3/4 h-3/4 object-contain" />
      </div>
    );
  }

  // External integration — render branded SVG
  const ExternalIcon = EXTERNAL_ICONS[logoType];
  if (ExternalIcon) {
    return (
      <div className={`${s.outer} flex items-center justify-center flex-shrink-0 bg-[#111827] border border-white/10`}>
        <ExternalIcon className={s.iconW} />
      </div>
    );
  }

  // Native SoloBuildAI capability — styled monogram + icon
  const meta = NATIVE_META[logoType];
  if (meta) {
    return (
      <div
        className={`${s.outer} flex items-center justify-center flex-shrink-0`}
        style={{ background: meta.bg, border: `1px solid ${meta.accent}33` }}
      >
        <span style={{ color: meta.accent }} className={`${s.iconW} flex items-center justify-center`}>
          {meta.icon}
        </span>
      </div>
    );
  }

  // Fallback — initials from logoType
  return (
    <div className={`${s.outer} flex items-center justify-center flex-shrink-0 bg-[#0066FF]/15 border border-[#0066FF]/25`}>
      <span className={`${s.textSize} font-bold text-[#0066FF] uppercase`}>
        {logoType.split("-").map(w => w[0]).join("").slice(0, 2)}
      </span>
    </div>
  );
}
