/**
 * nav-data.ts — Single source of truth for solution subprocess routes.
 *
 * Used by:
 *  - Navbar mega-menu (hover sub-items)
 *  - Solution overview page cards
 *  - Any component that needs solution→subprocess routing
 *
 * Keep this file as the canonical route registry.
 * Never hardcode these routes in multiple places.
 */

export interface SubProcess {
  id: string;
  label: string;
  href: string;
  description: string;
  pluginCount?: number;
}

export interface SolutionNav {
  id: string;
  label: string;
  href: string;
  description: string;
  subprocesses: SubProcess[];
}

export const SOLUTION_NAV: SolutionNav[] = [
  {
    id: "hr",
    label: "HR Solutions",
    href: "/solutions/hr",
    description: "Automate the employee lifecycle — from hiring to offboarding.",
    subprocesses: [
      {
        id: "talent-acquisition",
        label: "Talent Acquisition",
        href: "/solutions/hr/talent-acquisition",
        description: "Find, screen and hire candidates through an AI-powered workflow.",
        pluginCount: 10,
      },
      {
        id: "employee-onboarding",
        label: "Employee Onboarding",
        href: "/solutions/hr/employee-onboarding",
        description: "Turn new hires into productive employees with automated onboarding.",
        pluginCount: 9,
      },
      {
        id: "learning-development",
        label: "Learning & Development",
        href: "/solutions/hr/learning-development",
        description: "Personalize learning and skill development across the organization.",
        pluginCount: 8,
      },
      {
        id: "performance-reviews",
        label: "Performance & Reviews",
        href: "/solutions/hr/performance-reviews",
        description: "Automate feedback, review cycles and performance workflows.",
        pluginCount: 7,
      },
      {
        id: "payroll-benefits",
        label: "Payroll & Benefits",
        href: "/solutions/hr/payroll-benefits",
        description: "Streamline payroll, benefits and compensation workflows.",
        pluginCount: 10,
      },
      {
        id: "employee-support",
        label: "Employee Support",
        href: "/solutions/hr/employee-support",
        description: "Help employees get answers and complete HR requests faster.",
        pluginCount: 11,
      },
      {
        id: "offboarding",
        label: "Offboarding",
        href: "/solutions/hr/offboarding",
        description: "Coordinate exits, access revocation and team handovers.",
        pluginCount: 6,
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    href: "/solutions/sales",
    description: "Turn prospects into revenue with intelligent sales workflows.",
    subprocesses: [
      {
        id: "lead-management",
        label: "Lead Management",
        href: "/solutions/sales/lead-management",
        description: "Capture, enrich and qualify leads across the sales pipeline.",
        pluginCount: 11,
      },
      {
        id: "lead-qualification",
        label: "Lead Qualification",
        href: "/solutions/sales/lead-qualification",
        description: "Evaluate leads against sales criteria and surface the best prospects.",
        pluginCount: 8,
      },
      {
        id: "sales-outreach",
        label: "Sales Outreach",
        href: "/solutions/sales/sales-outreach",
        description: "Automate personalized outreach and follow-up sequences.",
        pluginCount: 9,
      },
      {
        id: "meeting-scheduling",
        label: "Meeting & Scheduling",
        href: "/solutions/sales/meeting-scheduling",
        description: "Coordinate calendars and schedule meetings with prospects.",
        pluginCount: 6,
      },
      {
        id: "opportunity-management",
        label: "Opportunity Management",
        href: "/solutions/sales/opportunity-management",
        description: "Track deals, update pipeline information and coordinate workflows.",
        pluginCount: 8,
      },
      {
        id: "sales-analytics",
        label: "Sales Analytics",
        href: "/solutions/sales/sales-analytics",
        description: "Turn sales activity and pipeline data into actionable insights.",
        pluginCount: 6,
      },
    ],
  },
  {
    id: "customer-support",
    label: "Customer Support",
    href: "/solutions/customer-support",
    description: "Resolve customer issues faster with AI-powered support workflows.",
    subprocesses: [
      {
        id: "ticket-management",
        label: "Ticket Management",
        href: "/solutions/customer-support/support-workflow",
        description: "Create, classify and route support tickets automatically.",
        pluginCount: 10,
      },
      {
        id: "agent-assist",
        label: "Agent Assist",
        href: "/solutions/customer-support/agent-assist",
        description: "Give agents real-time information and recommended next actions.",
        pluginCount: 9,
      },
      {
        id: "knowledge-resolution",
        label: "Knowledge & Resolution",
        href: "/solutions/customer-support/knowledge-resolution",
        description: "Find trusted answers and guide customers to faster resolution.",
        pluginCount: 8,
      },
      {
        id: "escalation",
        label: "Escalation",
        href: "/solutions/customer-support/escalation",
        description: "Escalate unresolved issues before SLAs breach.",
        pluginCount: 7,
      },
      {
        id: "customer-communication",
        label: "Customer Communication",
        href: "/solutions/customer-support/customer-communication",
        description: "Send automated updates, confirmations and resolution notifications.",
        pluginCount: 6,
      },
      {
        id: "support-analytics",
        label: "Support Analytics",
        href: "/solutions/customer-support/support-analytics",
        description: "Analyze ticket volumes, resolution times and service performance.",
        pluginCount: 7,
      },
    ],
  },
  {
    id: "it",
    label: "IT Solutions",
    href: "/solutions/it",
    description: "Streamline IT operations, service requests and employee support.",
    subprocesses: [
      {
        id: "it-support",
        label: "IT Support",
        href: "/solutions/it/it-support",
        description: "Resolve employee IT requests from intake to closure.",
        pluginCount: 10,
      },
      {
        id: "service-operations",
        label: "Service Operations",
        href: "/solutions/it/service-operations",
        description: "Manage IT services, approvals, provisioning and change control.",
        pluginCount: 8,
      },
      {
        id: "email-automation",
        label: "Email Automation",
        href: "/solutions/it/email-automation",
        description: "Classify incoming operational emails and trigger the right workflows.",
        pluginCount: 7,
      },
    ],
  },
];

/** Look up a solution by id */
export function getSolutionNav(id: string): SolutionNav | undefined {
  return SOLUTION_NAV.find((s) => s.id === id);
}
