import Link from "next/link";
import ChatbotShell from "@/components/chatbot/ChatbotShell";

// Integrations shown below the AI assistant — communicates system connectivity
const INTEGRATIONS = [
  { name: "Salesforce",  color: "#00A1E0", path: "M8.5 5a3 3 0 015 .6 2.7 2.7 0 013.4 3 2.8 2.8 0 01-3 5H4a2.7 2.7 0 01-2.2-4.3A2.8 2.8 0 015 5.2 3 3 0 018.5 5z" },
  { name: "Slack",       color: "#E01E5A", isSlack: true },
  { name: "Microsoft",   color: null,      isMsft: true },
  { name: "Google",      color: null,      isGoogle: true },
  { name: "Workday",     color: "#0875E1", path: "M3 7h4l2.2 7L12 7l2.8 7L17 7h4" },
  { name: "Zendesk",     color: "#03363D", isZendesk: true },
  { name: "ServiceNow",  color: "#62D84E", isServiceNow: true },
  { name: "Jira",        color: "#2684FF", isJira: true },
  { name: "HubSpot",     color: "#FF7A59", isHubspot: true },
];

function IntegrationBadge({ name, color, path, isSlack, isMsft, isGoogle, isZendesk, isServiceNow, isJira, isHubspot }: {
  name: string; color: string | null; path?: string;
  isSlack?: boolean; isMsft?: boolean; isGoogle?: boolean;
  isZendesk?: boolean; isServiceNow?: boolean; isJira?: boolean; isHubspot?: boolean;
}) {
  return (
    <div
      title={name}
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
    >
      <svg viewBox="0 0 20 20" className="h-[14px] w-[14px]" aria-label={name} role="img">
        {isSlack && (<>
          <path d="M7 3.5a1.5 1.5 0 100 3h1V3.5A1.5 1.5 0 007 3.5z" fill="#E01E5A"/>
          <path d="M7 8.5H3.5a1.5 1.5 0 100 3H7v-3z" fill="#E01E5A"/>
          <path d="M16.5 10A1.5 1.5 0 1013 10v1.5h1.5a1.5 1.5 0 001.5-1.5z" fill="#ECB22E"/>
          <path d="M11.5 10V3.5a1.5 1.5 0 10-3 0V10h3z" fill="#ECB22E"/>
          <path d="M13 16.5a1.5 1.5 0 100-3h-1.5v1.5a1.5 1.5 0 001.5 1.5z" fill="#2EB67D"/>
          <path d="M13 11.5h3.5a1.5 1.5 0 100-3H13v3z" fill="#2EB67D"/>
          <path d="M3.5 13a1.5 1.5 0 103 0v-1.5H5A1.5 1.5 0 003.5 13z" fill="#36C5F0"/>
          <path d="M8.5 13v3.5a1.5 1.5 0 103 0V13h-3z" fill="#36C5F0"/>
        </>)}
        {isMsft && (<>
          <path fill="#F25022" d="M1 1h8.5v8.5H1z"/>
          <path fill="#7FBA00" d="M10.5 1H19v8.5h-8.5z"/>
          <path fill="#00A4EF" d="M1 10.5h8.5V19H1z"/>
          <path fill="#FFB900" d="M10.5 10.5H19V19h-8.5z"/>
        </>)}
        {isGoogle && (<>
          <path d="M17 10a7 7 0 00-.1-1H10v2h4a3.5 3.5 0 01-1.5 2.3v1.9h2.4A7 7 0 0017 10z" fill="#4285F4"/>
          <path d="M10 17a6.9 6.9 0 004.9-1.8L12.5 13.3A4.3 4.3 0 0110 14c-2.1 0-3.8-1.4-4.4-3.4H3v2A7 7 0 0010 17z" fill="#34A853"/>
          <path d="M5.6 10.6A4.4 4.4 0 015.4 9v-.8a4.3 4.3 0 01.2-.8l-2.5-2A7 7 0 003 10a7 7 0 001.1 3.7l2.5-2z" fill="#FBBC05"/>
          <path d="M10 5.5c1.2 0 2.3.4 3.1 1.2l2.3-2.3A7 7 0 0010 3a7 7 0 00-6.9 5.8l2.5 2c.6-1.9 2.3-3.3 4.4-3.3z" fill="#EA4335"/>
        </>)}
        {isZendesk && (<>
          <rect width="20" height="20" rx="4" fill="#03363D"/>
          <path d="M10 4c-2.2 0-4 1.6-4 3.6v.4h8V7.6C14 5.6 12.2 4 10 4z" fill="#BEFF00"/>
          <path d="M6 9v2.4c0 2 1.8 3.6 4 3.6s4-1.6 4-3.6V9H6z" fill="white" opacity="0.9"/>
        </>)}
        {isServiceNow && (<>
          <rect width="20" height="20" rx="4" fill="#62D84E"/>
          <circle cx="10" cy="10" r="5.5" stroke="white" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="10" r="2.5" stroke="white" strokeWidth="1.2" fill="none"/>
        </>)}
        {isJira && (<>
          <defs><linearGradient id="jg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2684FF"/><stop offset="100%" stopColor="#0052CC"/></linearGradient></defs>
          <path d="M10 2L2 10l3.5 3.5L10 9l4.5 4.5L18 10z" fill="url(#jg2)"/>
          <path d="M10 9L6.5 12.5l3.5 3.5 4.5-4.5z" fill="#2684FF" opacity="0.7"/>
        </>)}
        {isHubspot && (<>
          <circle cx="7" cy="10" r="2.2" fill="#FF7A59"/>
          <circle cx="13.5" cy="6" r="1.8" fill="#FF7A59"/>
          <circle cx="13.5" cy="14" r="1.8" fill="#FF7A59"/>
          <line x1="9.2" y1="10" x2="11.7" y2="7.5" stroke="#FF7A59" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="9.2" y1="10" x2="11.7" y2="12.5" stroke="#FF7A59" strokeWidth="1.3" strokeLinecap="round"/>
        </>)}
        {path && !isSlack && !isMsft && !isGoogle && !isZendesk && !isServiceNow && !isJira && !isHubspot && (
          <path d={path} fill="none" stroke={color ?? "#64748B"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        )}
      </svg>
    </div>
  );
}

export default function AIAssistantShowcase() {
  return (
    <section id="ai-assistant-showcase" className="mt-3 scroll-mt-20 overflow-hidden rounded-2xl border border-white/12 bg-black">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0066FF]">AI Assistant</p>
          <h2 className="max-w-[430px] text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[52px]">AI that gets work done.</h2>
          <p className="mt-6 max-w-[430px] text-[15px] leading-[1.7] text-slate-400">
            Ask SoloBuildAI to automate tasks, answer questions, and act across your business
            systems — through an AI assistant connected to the tools your teams already use.
          </p>

          {/* Flow diagram */}
          <div className="mt-8 flex flex-col gap-1.5 max-w-[280px]">
            {[
              { label: "Your request", sub: "Text or voice" },
              { label: "AI Agent", sub: "Understands intent", accent: true },
              { label: "Plugins + Workflows", sub: "Executes the work" },
              { label: "Business systems", sub: "Salesforce, Slack, Jira…" },
              { label: "Outcome", sub: "Task done, human notified" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex flex-col">
                <div className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${step.accent ? "border-[#0066FF]/40 bg-[#0066FF]/10" : "border-white/8 bg-white/[0.02]"}`}>
                  <span className={`text-[10px] font-semibold ${step.accent ? "text-[#0066FF]" : "text-white/35"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className={`text-[12px] font-medium ${step.accent ? "text-white" : "text-white/70"}`}>{step.label}</p>
                    <p className="text-[10px] text-white/30">{step.sub}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="ml-[22px] h-2 w-px bg-white/10" />
                )}
              </div>
            ))}
          </div>

          {/* Integration logos */}
          <div className="mt-8">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
              Connects to your tools
            </p>
            <div className="flex flex-wrap gap-2">
              {INTEGRATIONS.map((integ) => (
                <IntegrationBadge key={integ.name} {...integ} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/assistant" className="inline-flex items-center gap-2 rounded-xl border border-[#0066FF] bg-[#0066FF] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:border-[#0052cc] hover:bg-[#0052cc]">Explore AI Assistant <span aria-hidden="true">→</span></Link>
            <a href="#ai-assistant-chat" className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5">See it in action <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div id="ai-assistant-chat" className="min-w-0 border-t border-white/12 p-3 sm:p-5 lg:border-l lg:border-t-0 lg:p-6 scroll-mt-20">
          <ChatbotShell compact />
        </div>
      </div>
    </section>
  );
}
