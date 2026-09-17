"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImage from "@/app/7526.png";

const BRAND = "#0066FF";

const NAV_ITEMS = [
  {
    label: "Platform",
    items: [
      { label: "AI Employees", href: "/platform/ai-employees" },
      { label: "AI Agents", href: "/platform/ai-agents" },
      { label: "Voice Intelligence", href: "/platform/voice-intelligence" },
      { label: "Workflow Automation", href: "/platform/workflow-automation" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "AI for HR", href: "/solutions/ai-for-hr", tag: "New" },
      { label: "AI for Hiring", href: "/solutions/hiring", tag: "Live" },
      { label: "AI for Sales", href: "/solutions/sales" },
      { label: "AI for Customer Support", href: "/solutions/customer-support" },
      { label: "AI for Operations", href: "/solutions/operations" },
      { label: "Custom AI Solutions", href: "/solutions/custom" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "Hiring Intelligence", href: "/products/hiring-intelligence", tag: "Live" },
      { label: "Voice AI", href: "/products/voice-ai" },
      { label: "Campaigns", href: "/products/campaigns" },
      { label: "Candidate Intelligence", href: "/products/candidate-intelligence" },
      { label: "Analytics", href: "/products/analytics" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Blog", href: "/resources/blog" },
      { label: "AI Resources", href: "/resources/ai-resources" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/company/about" },
      { label: "Security", href: "/company/security" },
      { label: "Contact", href: "/company/contact" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

function Dropdown({ items }: { items: typeof NAV_ITEMS[0]["items"] }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black border border-white/12 rounded-xl overflow-hidden z-50 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-[13px] text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            <span className="flex items-center justify-between gap-2">
              <span>{item.label}</span>
              {"tag" in item && item.tag && (
                <span
                  className="text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded"
                  style={{ color: BRAND, border: `1px solid ${BRAND}4D`, background: `${BRAND}1A` }}
                >
                  {item.tag}
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

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
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className={`flex items-center gap-1 text-[13px] font-medium px-3 py-2 transition-colors ${
          active ? "text-white" : "text-slate-400 hover:text-white"
        }`}
        aria-haspopup="true"
        aria-expanded={active}
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${active ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {active && <Dropdown items={items} />}
    </div>
  );
}

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
    <div className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-sm">
      <div className="overflow-y-auto p-6 pt-20">
        <Link href="/" className="block px-2 py-3 text-sm font-medium text-white">
          Home
        </Link>
        {NAV_ITEMS.map((section) => (
          <div key={section.label} className="mb-2">
            <button
              className="w-full flex items-center justify-between px-2 py-3 text-sm font-medium text-white hover:text-[#0066FF] transition-colors"
              onClick={() => setExpanded(expanded === section.label ? null : section.label)}
            >
              {section.label}
              <svg
                className={`w-4 h-4 transition-transform ${expanded === section.label ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expanded === section.label && (
              <div className="ml-4 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-2 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 p-6 flex flex-col gap-3">
        <Link
          href="/signin"
          className="w-full px-4 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 text-center transition-colors rounded-xl"
        >
          Sign In
        </Link>
        <Link
          href="/demo"
          className="w-full px-4 py-3 text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] text-center transition-colors rounded-xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="relative flex h-9 w-[132px] items-center flex-shrink-0 overflow-hidden">
      <Image src={logoImage} alt="SoloBuild" fill sizes="132px" className="object-cover" priority />
    </Link>
  );
}

export default function Navbar({ framed = false }: { framed?: boolean }) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === "/";

  const handleOpen = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(label);
  }, []);

  const handleClose = useCallback(() => {
    closeTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  const inner = (
    <div className={`flex items-center justify-between h-[58px] ${framed ? "px-5 sm:px-6" : "px-6"}`}>
      <Logo />

      <div className="hidden lg:flex items-center">
        <Link
          href="/"
          className={`relative text-[13px] font-medium px-3 py-2 transition-colors ${
            isHome ? "text-white" : "text-slate-400 hover:text-white"
          }`}
        >
          Home
          {isHome && (
            <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[#0066FF]" />
          )}
        </Link>
        {[
          { label: "Solutions", items: NAV_ITEMS[1].items },
          { label: "Use Cases", items: NAV_ITEMS[0].items },
          { label: "Pricing", items: NAV_ITEMS[2].items },
          { label: "About", items: NAV_ITEMS[4].items },
        ].map((item) => (
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

      <div className="hidden lg:flex items-center gap-3">
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white border border-white/15 hover:border-white/30 rounded-xl transition-colors"
        >
          Get Started
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <button
        className="lg:hidden p-2 text-white relative z-50"
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
  );

  return (
    <>
      <header
        className={
          framed
            ? "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-2 sm:px-3 pt-2 sm:pt-3"
            : "fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10"
        }
      >
        <nav
          className={
            framed
              ? "rounded-2xl border border-white/12 bg-black"
              : "max-w-[1600px] mx-auto"
          }
        >
          {inner}
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {!framed && <div className="h-14" />}
    </>
  );
}
