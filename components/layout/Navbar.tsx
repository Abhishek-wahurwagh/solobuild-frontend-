"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Navigation Data ──────────────────────────────────────────────────── */

const NAV_ITEMS = [
  {
    label: "Platform",
    items: [
      { label: "AI Employees", href: "/platform/ai-employees", desc: "Deploy autonomous AI workers for your teams" },
      { label: "AI Agents", href: "/platform/ai-agents", desc: "Task-specific agents that act across tools" },
      { label: "Voice Intelligence", href: "/platform/voice-intelligence", desc: "Natural voice interaction for any workflow" },
      { label: "Workflow Automation", href: "/platform/workflow-automation", desc: "Automate multi-step operational processes" },
      { label: "Integrations", href: "/platform/integrations", desc: "Connect your existing tools and data" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "AI for Hiring", href: "/solutions/hiring", desc: "End-to-end AI-powered recruitment", available: true },
      { label: "AI for Sales", href: "/solutions/sales", desc: "Intelligent sales workflows and outreach" },
      { label: "AI for Customer Support", href: "/solutions/customer-support", desc: "AI-first customer service operations" },
      { label: "AI for Operations", href: "/solutions/operations", desc: "Operational intelligence and automation" },
      { label: "Custom AI Solutions", href: "/solutions/custom", desc: "Tailored AI for your specific workflow", custom: true },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Hiring Intelligence", href: "/products/hiring-intelligence", desc: "Complete hiring platform", available: true },
      { label: "Voice AI", href: "/products/voice-ai", desc: "AI voice for candidate screening" },
      { label: "Campaigns", href: "/products/campaigns", desc: "Manage outreach at scale" },
      { label: "Candidate Intelligence", href: "/products/candidate-intelligence", desc: "Deep candidate analytics" },
      { label: "Analytics", href: "/products/analytics", desc: "Operational insights and reporting" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "/resources/documentation", desc: "Integration guides and API docs" },
      { label: "Case Studies", href: "/resources/case-studies", desc: "Real-world deployment stories" },
      { label: "Blog", href: "/resources/blog", desc: "Insights on practical AI" },
      { label: "AI Resources", href: "/resources/ai-resources", desc: "Guides for AI adoption" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/company/about", desc: "Our mission and team" },
      { label: "Security", href: "/company/security", desc: "How we protect your data" },
      { label: "Contact", href: "/company/contact", desc: "Get in touch" },
      { label: "Careers", href: "/company/careers", desc: "Join SoloBuildAI" },
    ],
  },
];

/* ─── Dropdown ─────────────────────────────────────────────────────────── */

function Dropdown({ items }: { items: typeof NAV_ITEMS[0]["items"] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden z-50">
      <div className="p-1.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start gap-3 rounded-lg px-3.5 py-3 hover:bg-slate-50 transition-colors duration-100"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.label}
                </span>
                {"available" in item && item.available && (
                  <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                    Live
                  </span>
                )}
                {"custom" in item && item.custom && (
                  <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                    Enquire
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── NavItem ──────────────────────────────────────────────────────────── */

function NavItem({
  label,
  items,
  active,
  onOpen,
  onClose,
}: {
  label: string;
  items: typeof NAV_ITEMS[0]["items"];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-150 ${
          active
            ? "text-blue-600 bg-blue-50"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }`}
        aria-haspopup="true"
        aria-expanded={active}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${active ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {active && <Dropdown items={items} />}
    </div>
  );
}

/* ─── Mobile Menu ──────────────────────────────────────────────────────── */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      {/* Panel */}
      <div className="relative mt-[72px] mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto">
        <div className="p-4">
          {NAV_ITEMS.map((section) => (
            <div key={section.label} className="mb-1">
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                onClick={() => setExpanded(expanded === section.label ? null : section.label)}
              >
                {section.label}
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expanded === section.label ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expanded === section.label && (
                <div className="mt-1 ml-3 space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {item.label}
                      {"available" in item && item.available && (
                        <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded-full">Live</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 p-4 flex flex-col gap-2.5">
          <a
            href="/signin"
            className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Sign in
          </a>
          <Link
            href="/signup"
            className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Sign up
          </Link>
          <Link
            href="/demo"
            className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Logo ─────────────────────────────────────────────────────────────── */

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      </div>
      <span className="font-semibold text-slate-900 text-[15px] tracking-tight">
        SoloBuild<span className="text-blue-600">AI</span>
      </span>
    </Link>
  );
}

/* ─── Main Navbar ──────────────────────────────────────────────────────── */

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(label);
  }, []);

  const handleClose = useCallback(() => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <header
        className={`fixed top-3 left-4 right-4 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-lg shadow-slate-900/10"
            : "shadow-md shadow-slate-900/8"
        }`}
        style={{ maxWidth: "calc(100% - 2rem)" }}
      >
        <nav
          className={`w-full rounded-2xl border bg-white/95 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "border-slate-200/80" : "border-slate-200/60"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 gap-4">
            {/* Left: Logo */}
            <Logo />

            {/* Center: Nav Items (desktop) */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  items={item.items}
                  active={activeDropdown === item.label}
                  onOpen={() => handleOpen(item.label)}
                  onClose={handleClose}
                />
              ))}
            </div>

            {/* Right: Actions (desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Search icon */}
              <button
                className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <Link
                href="/signin"
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 rounded-lg transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/demo"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                Request a demo
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer so content doesn't go under navbar */}
      <div className="h-20" />
    </>
  );
}
