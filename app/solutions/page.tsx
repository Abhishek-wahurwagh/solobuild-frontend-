import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

// ─── Design tokens (match the rest of the SoloBuildAI site) ──────────────────
const BLUE = "#0066FF";

// ─── Integration Logo System ──────────────────────────────────────────────────
// Each entry has an id, display name, and an inline SVG logo mark.
// Replace with <Image> assets later by swapping the `mark` field.
// Do NOT use plain letters — every logo uses a recognisable icon shape.

interface Integration {
  id: string;
  name: string;
  // Returns a small SVG that fits in a 20×20 container
  mark: React.ReactNode;
}

function Logo({ integ, size = 28 }: { integ: Integration; size?: number }) {
  return (
    <div
      title={integ.name}
      className="flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 20 20"
        className="w-[14px] h-[14px]"
        aria-label={integ.name}
        role="img"
      >
        {integ.mark}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// All integration definitions. Logos are compact SVG marks that are recognisable
// at small sizes. All are placeholders — swap with real assets via logoImagePath.
// ─────────────────────────────────────────────────────────────────────────────

const INTEGRATIONS: Record<string, Integration> = {
  workday: {
    id: "workday", name: "Workday",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#0875E1"/><path d="M3 8h3l1.5 5L10 8l2.5 5L14 8h3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
  },
  greenhouse: {
    id: "greenhouse", name: "Greenhouse",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#24A47F"/><path d="M10 3v14M6 6h8M6 10h8M6 14h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/></>,
  },
  linkedin: {
    id: "linkedin", name: "LinkedIn",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#0A66C2"/><path d="M5 8v7M5 5.5v.01M9 15v-3.5a2 2 0 014 0V15M9 8v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/></>,
  },
  google: {
    id: "google", name: "Google Workspace",
    mark: <><path d="M10 4.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" fill="none"/><path d="M17 10a7 7 0 00-.1-1H10v2h4a3.5 3.5 0 01-1.5 2.3v1.9h2.4A7 7 0 0017 10z" fill="#4285F4"/><path d="M10 17a6.9 6.9 0 004.9-1.8L12.5 13.3A4.3 4.3 0 0110 14c-2.1 0-3.8-1.4-4.4-3.4H3v2A7 7 0 0010 17z" fill="#34A853"/><path d="M5.6 10.6A4.4 4.4 0 015.4 9.8v-.8a4.3 4.3 0 01.2-.8l-2.5-2A7 7 0 003 9.8a7 7 0 001.1 3.7l2.5-2z" fill="#FBBC05"/><path d="M10 5.5c1.2 0 2.3.4 3.1 1.2l2.3-2.3A7 7 0 0010 3a7 7 0 00-6.9 5.8l2.5 2c.6-1.9 2.3-3.3 4.4-3.3z" fill="#EA4335"/></>,
  },
  microsoft: {
    id: "microsoft", name: "Microsoft 365",
    mark: <><path fill="#F25022" d="M1 1h8.5v8.5H1z"/><path fill="#7FBA00" d="M10.5 1H19v8.5h-8.5z"/><path fill="#00A4EF" d="M1 10.5h8.5V19H1z"/><path fill="#FFB900" d="M10.5 10.5H19V19h-8.5z"/></>,
  },
  slack: {
    id: "slack", name: "Slack",
    mark: <><path d="M7 3.5a1.5 1.5 0 100 3h1V3.5A1.5 1.5 0 007 3.5z" fill="#E01E5A"/><path d="M7 8.5H3.5a1.5 1.5 0 100 3H7v-3z" fill="#E01E5A"/><path d="M16.5 10A1.5 1.5 0 1013 10v1.5h1.5a1.5 1.5 0 001.5-1.5z" fill="#ECB22E"/><path d="M11.5 10V3.5a1.5 1.5 0 10-3 0V10h3z" fill="#ECB22E"/><path d="M13 16.5a1.5 1.5 0 100-3h-1.5v1.5a1.5 1.5 0 001.5 1.5z" fill="#2EB67D"/><path d="M13 11.5h3.5a1.5 1.5 0 100-3H13v3z" fill="#2EB67D"/><path d="M3.5 13a1.5 1.5 0 103 0v-1.5H5A1.5 1.5 0 003.5 13z" fill="#36C5F0"/><path d="M8.5 13v3.5a1.5 1.5 0 103 0V13h-3z" fill="#36C5F0"/></>,
  },
  okta: {
    id: "okta", name: "Okta",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#007DC1"/><circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.6" fill="none"/><circle cx="10" cy="10" r="1.5" fill="white"/></>,
  },
  lever: {
    id: "lever", name: "Lever",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#6F42C1"/><path d="M5 4v12h10M5 13l4-4 3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
  },
  salesforce: {
    id: "salesforce", name: "Salesforce",
    mark: <><path d="M8.5 5a3 3 0 015 .6 2.7 2.7 0 013.4 3 2.8 2.8 0 01-3 5H4a2.7 2.7 0 01-2.2-4.3A2.8 2.8 0 015 5.2 3 3 0 018.5 5z" fill="#00A1E0"/><text x="10" y="14" textAnchor="middle" fontSize="5" fontWeight="700" fill="white" fontFamily="sans-serif">SF</text></>,
  },
  hubspot: {
    id: "hubspot", name: "HubSpot",
    mark: <><circle cx="7" cy="10" r="2.2" fill="#FF7A59"/><circle cx="13.5" cy="6" r="1.8" fill="#FF7A59"/><circle cx="13.5" cy="14" r="1.8" fill="#FF7A59"/><line x1="9.2" y1="10" x2="11.7" y2="7.5" stroke="#FF7A59" strokeWidth="1.3" strokeLinecap="round"/><line x1="9.2" y1="10" x2="11.7" y2="12.5" stroke="#FF7A59" strokeWidth="1.3" strokeLinecap="round"/></>,
  },
  gmail: {
    id: "gmail", name: "Gmail",
    mark: <><rect x="1" y="3" width="18" height="14" rx="2" fill="white" stroke="#e2e8f0" strokeWidth="0.5"/><path d="M1 5l9 7 9-7" stroke="#EA4335" strokeWidth="1.4" strokeLinecap="round" fill="none"/><path d="M1 5v10m18-10v10" stroke="#EA4335" strokeWidth="0.5"/></>,
  },
  outlook: {
    id: "outlook", name: "Outlook",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#0078D4"/><rect x="10" y="3" width="8" height="8" rx="1" fill="white" opacity="0.9"/><text x="14" y="10.5" textAnchor="middle" fontSize="4.5" fontWeight="700" fill="#0078D4" fontFamily="sans-serif">M</text><rect x="2" y="8" width="9" height="9" rx="1" fill="#0050A0"/><text x="6.5" y="16" textAnchor="middle" fontSize="4" fontWeight="700" fill="white" fontFamily="sans-serif">OL</text></>,
  },
  zendesk: {
    id: "zendesk", name: "Zendesk",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#03363D"/><path d="M10 4c-2.2 0-4 1.6-4 3.6v.4h8V7.6C14 5.6 12.2 4 10 4z" fill="#BEFF00"/><path d="M6 9v2.4c0 2 1.8 3.6 4 3.6s4-1.6 4-3.6V9H6z" fill="white" opacity="0.9"/></>,
  },
  teams: {
    id: "teams", name: "Microsoft Teams",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#5059C9"/><circle cx="13" cy="7" r="2.2" fill="white"/><path d="M15.5 10.5H10a1 1 0 00-1 1v3.5a1 1 0 001 1h5.5a1 1 0 001-1V11.5a1 1 0 00-1-1z" fill="white" opacity="0.9"/><circle cx="7.5" cy="8" r="1.8" fill="#7B83EB"/><path d="M10 12H4.5a.5.5 0 00-.5.5V15a.5.5 0 00.5.5H10a.5.5 0 00.5-.5v-2.5A.5.5 0 0010 12z" fill="#4B53BC"/></>,
  },
  jira: {
    id: "jira", name: "Jira",
    mark: <><defs><linearGradient id="jg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2684FF"/><stop offset="100%" stopColor="#0052CC"/></linearGradient></defs><path d="M10 2L2 10l3.5 3.5L10 9l4.5 4.5L18 10z" fill="url(#jg)"/><path d="M10 9L6.5 12.5l3.5 3.5 4.5-4.5z" fill="#2684FF" opacity="0.7"/></>,
  },
  servicenow: {
    id: "servicenow", name: "ServiceNow",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#62D84E"/><circle cx="10" cy="10" r="5.5" stroke="white" strokeWidth="1.5" fill="none"/><circle cx="10" cy="10" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/></>,
  },
  confluence: {
    id: "confluence", name: "Confluence",
    mark: <><defs><linearGradient id="cfg" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient></defs><path d="M3 14c3-4 7-5 11-3l2-4c-4-2-9-1-12 4L3 14z" fill="url(#cfg)"/><path d="M17 6C14 10 10 11 6 9L4 13c4 2 9 1 12-4L17 6z" fill="url(#cfg)" opacity="0.7"/></>,
  },
  notion: {
    id: "notion", name: "Notion",
    mark: <><rect x="0" y="0" width="20" height="20" rx="4" fill="#000000"/><rect x="5" y="4" width="10" height="12" rx="1" fill="white"/><path d="M7 7h6M7 10h4M7 13h5" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/></>,
  },
  gcal: {
    id: "gcal", name: "Google Calendar",
    mark: <><rect x="1" y="1" width="18" height="18" rx="2.5" fill="white" stroke="#e2e8f0" strokeWidth="0.75"/><rect x="1" y="1" width="18" height="5.5" rx="2.5" fill="#4285F4"/><text x="10" y="14.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#4285F4" fontFamily="sans-serif">31</text></>,
  },
};

// ─── Workflow card data ───────────────────────────────────────────────────────

interface WorkflowDef {
  id: string;
  name: string;
  description: string;
  pluginCount: number;
  integrationIds: string[];
  route: string;
  icon: React.ReactNode;
}

interface SolutionSection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  exploreHref: string;
  workflows: WorkflowDef[];
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const WF_ICON_CLS = "w-5 h-5 text-[#0066FF]";

function PeopleIcon()    { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0114.998 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function SparkIcon()     { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>; }
function BookIcon()      { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 21.5v-17zm0 17A2.5 2.5 0 006.5 19H20" /></svg>; }
function ChartIcon()     { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zm6.75-4.5c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>; }
function WalletIcon()    { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v3m13.5 0h.008v.008h-.008V12z" /></svg>; }
function SupportIcon()   { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>; }
function ExitIcon()      { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>; }
function FunnelIcon()    { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" /></svg>; }
function MailIcon()      { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>; }
function PipeIcon()      { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>; }
function TicketIcon()    { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg>; }
function AgentIcon()     { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }
function KnowledgeIcon() { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>; }
function WrenchIcon()    { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>; }
function CogIcon()       { return <svg className={WF_ICON_CLS} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>; }

// ─── Solutions data ───────────────────────────────────────────────────────────

const SOLUTIONS: SolutionSection[] = [
  // ── HR ─────────────────────────────────────────────────────────────────────
  {
    id: "hr",
    name: "HR Solutions",
    tagline: "Attract, develop and support people with AI-powered workflows.",
    description: "Automate the employee lifecycle with AI agents, workflows and enterprise integrations.",
    exploreHref: "/solutions/hr",
    workflows: [
      {
        id: "talent-acquisition",
        name: "Talent Acquisition",
        description: "Find, screen and hire candidates through an AI-powered recruiting workflow.",
        pluginCount: 10,
        integrationIds: ["greenhouse", "linkedin", "google", "workday", "lever"],
        route: "/solutions/hr/talent-acquisition",
        icon: <PeopleIcon />,
      },
      {
        id: "employee-onboarding",
        name: "Employee Onboarding",
        description: "Turn new hires into productive employees with automated onboarding workflows.",
        pluginCount: 9,
        integrationIds: ["okta", "microsoft", "slack", "google", "workday"],
        route: "/solutions/hr",
        icon: <SparkIcon />,
      },
      {
        id: "learning-development",
        name: "Learning & Development",
        description: "Personalize learning, training and skill development across the organization.",
        pluginCount: 8,
        integrationIds: ["google", "microsoft", "slack", "notion"],
        route: "/solutions/hr",
        icon: <BookIcon />,
      },
      {
        id: "performance-reviews",
        name: "Performance & Reviews",
        description: "Automate feedback, review cycles and performance workflows for your teams.",
        pluginCount: 7,
        integrationIds: ["workday", "slack", "teams", "google"],
        route: "/solutions/hr",
        icon: <ChartIcon />,
      },
      {
        id: "payroll-benefits",
        name: "Payroll & Benefits",
        description: "Streamline payroll, benefits and employee compensation workflows.",
        pluginCount: 10,
        integrationIds: ["workday", "microsoft", "okta", "google", "slack"],
        route: "/solutions/hr",
        icon: <WalletIcon />,
      },
      {
        id: "employee-support",
        name: "Employee Support",
        description: "Help employees get answers and complete HR requests faster with AI assistance.",
        pluginCount: 11,
        integrationIds: ["slack", "teams", "confluence", "servicenow"],
        route: "/solutions/hr",
        icon: <SupportIcon />,
      },
      {
        id: "offboarding",
        name: "Offboarding",
        description: "Coordinate employee exits, access revocation, documentation and team handovers.",
        pluginCount: 6,
        integrationIds: ["okta", "workday", "slack", "teams"],
        route: "/solutions/hr",
        icon: <ExitIcon />,
      },
    ],
  },

  // ── Sales ───────────────────────────────────────────────────────────────────
  {
    id: "sales",
    name: "Sales",
    tagline: "Automate the sales lifecycle from lead to opportunity.",
    description: "Turn prospects into revenue with intelligent workflows across the full sales cycle.",
    exploreHref: "/solutions/sales",
    workflows: [
      {
        id: "lead-management",
        name: "Lead Management",
        description: "Capture and organize leads from multiple sources into the sales pipeline.",
        pluginCount: 11,
        integrationIds: ["salesforce", "hubspot", "linkedin", "google"],
        route: "/solutions/sales/lead-management",
        icon: <FunnelIcon />,
      },
      {
        id: "lead-qualification",
        name: "Lead Qualification",
        description: "Evaluate leads against sales criteria and identify prospects ready for engagement.",
        pluginCount: 8,
        integrationIds: ["salesforce", "hubspot", "google", "linkedin"],
        route: "/solutions/sales/lead-management",
        icon: <AgentIcon />,
      },
      {
        id: "sales-outreach",
        name: "Sales Outreach",
        description: "Automate personalized outreach and follow-up sequences across channels.",
        pluginCount: 9,
        integrationIds: ["gmail", "outlook", "salesforce", "hubspot", "linkedin"],
        route: "/solutions/sales",
        icon: <MailIcon />,
      },
      {
        id: "meeting-scheduling",
        name: "Meeting & Scheduling",
        description: "Coordinate calendars and schedule meetings between sales reps and prospects.",
        pluginCount: 6,
        integrationIds: ["gcal", "outlook", "salesforce", "teams"],
        route: "/solutions/sales",
        icon: <TicketIcon />,
      },
      {
        id: "opportunity-management",
        name: "Opportunity Management",
        description: "Track opportunities, update pipeline information and coordinate deal workflows.",
        pluginCount: 8,
        integrationIds: ["salesforce", "hubspot", "microsoft", "google"],
        route: "/solutions/sales",
        icon: <PipeIcon />,
      },
      {
        id: "sales-analytics",
        name: "Sales Analytics",
        description: "Turn sales activity and pipeline data into actionable business insights.",
        pluginCount: 6,
        integrationIds: ["salesforce", "hubspot", "google", "microsoft"],
        route: "/solutions/sales",
        icon: <ChartIcon />,
      },
    ],
  },

  // ── Customer Support ────────────────────────────────────────────────────────
  {
    id: "customer-support",
    name: "Customer Support",
    tagline: "Resolve customer requests faster with AI-powered support workflows.",
    description: "Classify, route and resolve customer issues with AI agents and automated workflows.",
    exploreHref: "/solutions/customer-support",
    workflows: [
      {
        id: "ticket-management",
        name: "Ticket Management",
        description: "Automatically create, classify and route support tickets from every channel.",
        pluginCount: 10,
        integrationIds: ["zendesk", "slack", "teams", "salesforce"],
        route: "/solutions/customer-support/support-workflow",
        icon: <TicketIcon />,
      },
      {
        id: "agent-assist",
        name: "Agent Assist",
        description: "Give support agents relevant information and recommended next actions in real time.",
        pluginCount: 9,
        integrationIds: ["zendesk", "confluence", "notion", "slack", "google"],
        route: "/solutions/customer-support",
        icon: <AgentIcon />,
      },
      {
        id: "knowledge-resolution",
        name: "Knowledge & Resolution",
        description: "Find trusted answers and guide customers toward faster issue resolution.",
        pluginCount: 8,
        integrationIds: ["zendesk", "salesforce", "google", "confluence"],
        route: "/solutions/customer-support",
        icon: <KnowledgeIcon />,
      },
      {
        id: "escalation",
        name: "Escalation",
        description: "Escalate unresolved or high-priority issues to the right team before SLAs breach.",
        pluginCount: 7,
        integrationIds: ["zendesk", "slack", "teams", "servicenow"],
        route: "/solutions/customer-support/support-workflow",
        icon: <WrenchIcon />,
      },
      {
        id: "customer-communication",
        name: "Customer Communication",
        description: "Send automated status updates, confirmations and resolution notifications to customers.",
        pluginCount: 6,
        integrationIds: ["zendesk", "gmail", "outlook", "slack"],
        route: "/solutions/customer-support",
        icon: <MailIcon />,
      },
      {
        id: "support-analytics",
        name: "Support Analytics",
        description: "Analyze ticket volumes, resolution times and support performance trends.",
        pluginCount: 7,
        integrationIds: ["zendesk", "salesforce", "google", "teams"],
        route: "/solutions/customer-support",
        icon: <ChartIcon />,
      },
    ],
  },

  // ── IT ──────────────────────────────────────────────────────────────────────
  {
    id: "it",
    name: "IT Solutions",
    tagline: "Streamline employee support and IT service operations.",
    description: "Resolve IT requests, manage services and automate operational workflows with AI agents.",
    exploreHref: "/solutions/it",
    workflows: [
      {
        id: "it-support",
        name: "IT Support",
        description: "Resolve employee IT requests, incidents and technical issues from intake to closure.",
        pluginCount: 10,
        integrationIds: ["servicenow", "jira", "okta", "teams"],
        route: "/solutions/it/it-support",
        icon: <WrenchIcon />,
      },
      {
        id: "service-operations",
        name: "Service Operations",
        description: "Manage IT service requests, approvals, provisioning and operational workflows.",
        pluginCount: 8,
        integrationIds: ["servicenow", "jira", "microsoft", "slack", "teams"],
        route: "/solutions/it/service-operations",
        icon: <CogIcon />,
      },
      {
        id: "email-automation",
        name: "Email Automation",
        description: "Classify incoming operational emails and automatically trigger the appropriate workflows.",
        pluginCount: 7,
        integrationIds: ["gmail", "outlook", "servicenow", "teams"],
        route: "/solutions/it/email-automation",
        icon: <MailIcon />,
      },
    ],
  },
];

// ─── Integration Logo Row ─────────────────────────────────────────────────────

const MAX_VISIBLE = 4;

function IntegrationRow({ integrationIds }: { integrationIds: string[] }) {
  const visible = integrationIds.slice(0, MAX_VISIBLE);
  const overflow = integrationIds.length - MAX_VISIBLE;

  return (
    <div className="flex items-center gap-1.5">
      {visible.map((id) => {
        const integ = INTEGRATIONS[id];
        if (!integ) return null;
        return <Logo key={id} integ={integ} size={26} />;
      })}
      {overflow > 0 && (
        <div
          className="flex items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-[9px] font-semibold text-slate-400 flex-shrink-0"
          style={{ width: 26, height: 26 }}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}

// ─── Workflow Card ────────────────────────────────────────────────────────────

function WorkflowCard({ wf }: { wf: WorkflowDef }) {
  return (
    <Link
      href={wf.route}
      className="group relative flex flex-col rounded-xl border border-white/10 bg-black hover:border-white/20 hover:-translate-y-0.5 transition-all duration-150 p-5 overflow-hidden"
    >
      {/* Icon + name */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/[0.03]">
          {wf.icon}
        </div>
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <h3 className="text-[14px] font-semibold text-white leading-snug truncate">{wf.name}</h3>
        </div>
        <svg
          className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all flex-shrink-0"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

      {/* Description */}
      <p className="text-[12px] leading-relaxed text-slate-500 mb-5 flex-1">
        {wf.description}
      </p>

      {/* Integration logos */}
      <div className="mb-4">
        <IntegrationRow integrationIds={wf.integrationIds} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3.5 border-t border-white/[0.08]">
        <span className="text-[10px] font-medium text-slate-600 uppercase tracking-[0.14em]">
          {wf.pluginCount} plugins
        </span>
        <span
          className="text-[11px] font-semibold transition-colors group-hover:text-[#0066FF]"
          style={{ color: BLUE }}
        >
          View More →
        </span>
      </div>
    </Link>
  );
}

// ─── Solution Section Block ───────────────────────────────────────────────────

function SolutionBlock({ solution }: { solution: SolutionSection }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-3">
        {/* Left: domain header */}
        <div className="rounded-xl border border-white/10 bg-black p-6 flex flex-col justify-between min-h-[200px] lg:min-h-0">
          <div>
            <h2 className="text-[18px] font-semibold text-white leading-snug mb-3">
              {solution.name}
            </h2>
            <p className="text-[12px] leading-relaxed text-slate-500">
              {solution.tagline}
            </p>
          </div>
          <Link
            href={solution.exploreHref}
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-white border border-white/15 hover:border-[#0066FF]/60 hover:text-[#0066FF] rounded-lg px-3.5 py-2 transition-colors w-fit"
          >
            Explore {solution.name.replace(" Solutions", "")} →
          </Link>
        </div>

        {/* Right: workflow cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {solution.workflows.map((wf) => (
            <WorkflowCard key={wf.id} wf={wf} />
          ))}
        </div>      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Solutions | SoloBuildAI",
  description: "AI workflows, plugins and integrations for HR, Sales, Customer Support and IT.",
};

export default function SolutionsPage() {
  return (
    <PageLayout framed wide>
      <div className="space-y-3">

        {/* ── Page Header ──────────────────────────────────────────────── */}
        <section className="rounded-2xl border border-white/10 bg-black px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-500 mb-5">
                Solutions
              </p>
              <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-semibold leading-[0.95] tracking-[-0.04em] mb-5">
                <span className="text-white">Workflows for </span>
                <span style={{ color: BLUE }}>every team.</span>
              </h1>
              <p className="text-[14px] leading-relaxed text-slate-400 max-w-lg">
                End-to-end business workflows powered by AI agents, plugins and your tools.
              </p>
            </div>
            <p className="text-[12px] leading-relaxed text-slate-500 max-w-[240px] lg:text-right">
              From people to customers to IT —<br />
              SoloBuildAI helps every team work faster,<br />
              smarter and together.
            </p>
          </div>
        </section>

        {/* ── Four domain sections ──────────────────────────────────────── */}
        {SOLUTIONS.map((solution) => (
          <section
            key={solution.id}
            className="rounded-2xl border border-white/10 bg-[#07090D] px-4 py-5 sm:px-6 sm:py-6"
          >
            <SolutionBlock solution={solution} />
          </section>
        ))}

        {/* ── Promo / CTA tile ─────────────────────────────────────────── */}
        <section className="rounded-2xl bg-[#0066FF] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[24px] sm:text-[28px] font-semibold text-white leading-snug tracking-[-0.02em]">
              One platform for every team.
            </p>
            <p className="text-[13px] text-white/80 mt-2">
              Automate. Augment. Empower.
            </p>
          </div>
          <Link
            href="/demo"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#0066FF] font-semibold text-[13px] px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
          >
            See all solutions →
          </Link>
        </section>

      </div>
    </PageLayout>
  );
}
