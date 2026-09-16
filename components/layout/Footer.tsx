import Link from "next/link";

const FOOTER_LINKS = {
  Platform: [
    { label: "AI Employees", href: "/platform/ai-employees" },
    { label: "AI Agents", href: "/platform/ai-agents" },
    { label: "Voice Intelligence", href: "/platform/voice-intelligence" },
    { label: "Workflow Automation", href: "/platform/workflow-automation" },
    { label: "Integrations", href: "/platform/integrations" },
  ],
  Solutions: [
    { label: "AI for Hiring", href: "/solutions/hiring" },
    { label: "AI for Sales", href: "/solutions/sales" },
    { label: "AI for Customer Support", href: "/solutions/customer-support" },
    { label: "AI for Operations", href: "/solutions/operations" },
    { label: "Custom AI Solutions", href: "/solutions/custom" },
  ],
  Products: [
    { label: "Hiring Intelligence", href: "/products/hiring-intelligence" },
    { label: "Voice AI", href: "/products/voice-ai" },
    { label: "Campaigns", href: "/products/campaigns" },
    { label: "Candidate Intelligence", href: "/products/candidate-intelligence" },
    { label: "Analytics", href: "/products/analytics" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Blog", href: "/resources/blog" },
    { label: "AI Resources", href: "/resources/ai-resources" },
  ],
  Company: [
    { label: "About", href: "/company/about" },
    { label: "Security", href: "/company/security" },
    { label: "Contact", href: "/company/contact" },
    { label: "Careers", href: "/company/careers" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#060b16", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-tight" style={{ color: "#f0f4ff" }}>
                SoloBuild<span style={{ color: "#3b7eff" }}>AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#3b5a7a" }}>
              Practical AI for real work.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#94a3c4" }}>
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "#3b5a7a" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "#3b5a7a" }}>
            © {new Date().getFullYear()} SoloBuildAI. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Cookies", href: "/legal/cookies" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-xs transition-colors" style={{ color: "#3b5a7a" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
