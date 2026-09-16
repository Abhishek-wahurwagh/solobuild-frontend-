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
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-white text-lg tracking-tight">
                SoloBuildAI
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-600">
              AI agents for real work.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[10px] font-semibold uppercase tracking-wider mb-4 text-slate-500">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-600 hover:text-white transition-colors"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <p className="text-[10px] text-slate-700">
            © {new Date().getFullYear()} SoloBuildAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Cookies", href: "/legal/cookies" },
            ].map(({ label, href }) => (
              <Link 
                key={href} 
                href={href} 
                className="text-[10px] text-slate-700 hover:text-slate-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
