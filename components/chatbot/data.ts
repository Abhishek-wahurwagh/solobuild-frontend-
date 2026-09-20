import { ChatMessage, ConnectedTool, RecentChat, SolutionContext, SolutionId } from "./types";

export const SOLUTIONS: SolutionContext[] = [
  {
    id: "hr",
    name: "HR Solutions",
    shortName: "HR",
    icon: "people",
    topics: ["Leave requests", "Employee onboarding", "Payroll", "Attendance", "Hiring", "Employee documents"],
    tools: ["HR System", "Document Management", "Email & Calendar", "Identity Management", "People Analytics"],
    actions: ["View pending leave requests", "Check joining formalities", "Verify documents", "Update employee profile", "Generate HR report"],
    starter: "Help me with my pending HR tasks",
    response: "I found several pending HR tasks. I can help you review, prioritize, and take action on them. Here’s a summary of what I found:",
    summary: ["3 pending leave requests", "2 pending joining formalities", "1 pending document verification", "1 pending profile update"],
  },
  {
    id: "sales",
    name: "Sales",
    shortName: "Sales",
    icon: "chart",
    topics: ["Leads", "Sales pipeline", "Follow-ups", "Customer information", "Sales reports"],
    tools: ["CRM", "Email & Calendar", "Sales Analytics", "Customer Database"],
    actions: ["Summarize open opportunities", "Find overdue follow-ups", "Review top leads", "Draft a sales report"],
    starter: "Give me a summary of sales performance",
    response: "I reviewed the current sales workspace and found a few useful signals for your team:",
    summary: ["12 active opportunities", "4 follow-ups due today", "3 high-intent leads", "1 stalled deal needing attention"],
  },
  {
    id: "support",
    name: "Customer Support",
    shortName: "Support",
    icon: "headset",
    topics: ["Customer tickets", "Issue resolution", "Support requests", "Customer information", "Escalations"],
    tools: ["Support Desk", "Customer Database", "Knowledge Base", "Email & Calendar"],
    actions: ["Review urgent tickets", "Find unresolved escalations", "Summarize customer issues", "Prepare a support report"],
    starter: "Show me the latest customer support update",
    response: "I checked the support workspace and organized the issues that need the most attention:",
    summary: ["5 tickets awaiting response", "2 priority escalations", "8 issues resolved today", "1 knowledge gap identified"],
  },
  {
    id: "it",
    name: "IT Solutions",
    shortName: "IT",
    icon: "terminal",
    topics: ["System access", "IT tickets", "Password/access requests", "Device issues", "Technical support"],
    tools: ["IT Service Desk", "Identity Management", "Device Management", "Knowledge Base"],
    actions: ["Review access requests", "Find unresolved IT tickets", "Check device issues", "Generate an IT report"],
    starter: "Help me review system access requests",
    response: "I checked the IT workspace and found these requests ready for review:",
    summary: ["4 access requests pending", "2 tickets awaiting approval", "3 device issues in progress", "1 password reset escalation"],
  },
  {
    id: "operations",
    name: "Operations",
    shortName: "Operations",
    icon: "workflow",
    topics: ["Tasks", "Approvals", "Reports", "Business operations", "Workflow status"],
    tools: ["Workflow Hub", "Operations Database", "Email & Calendar", "Business Analytics"],
    actions: ["Review pending approvals", "Check workflow status", "Summarize operations", "Generate an operations report"],
    starter: "What needs my attention in operations?",
    response: "I reviewed the operations workspace and grouped the work that needs attention:",
    summary: ["7 tasks in progress", "3 approvals waiting", "2 workflows delayed", "1 report ready to review"],
  },
];

export const RECENT_CHATS: RecentChat[] = [
  { id: "hr-tasks", title: "Pending HR tasks help", solutionId: "hr", time: "2m ago", message: "Help me with my pending HR tasks" },
  { id: "sales-summary", title: "Sales performance summary", solutionId: "sales", time: "1h ago", message: "Give me a summary of sales performance" },
  { id: "support-update", title: "Customer support update", solutionId: "support", time: "3h ago", message: "Show me the latest customer support update" },
  { id: "access-request", title: "System access request", solutionId: "it", time: "5h ago", message: "Help me review system access requests" },
  { id: "team-report", title: "Team performance report", solutionId: "operations", time: "1d ago", message: "What needs my attention in operations?" },
];

export function getSolution(solutionId: SolutionId) {
  return SOLUTIONS.find((solution) => solution.id === solutionId) ?? SOLUTIONS[0];
}

export function getConnectedTools(solution: SolutionContext): ConnectedTool[] {
  return solution.tools.map((name) => ({ name, status: "Demo mode" }));
}

export function createConversation(solution: SolutionContext): ChatMessage[] {
  return [
    { id: `${solution.id}-user`, role: "user", content: solution.starter },
    {
      id: `${solution.id}-assistant`,
      role: "assistant",
      content: solution.response,
      summary: solution.summary,
      showActivity: true,
    },
  ];
}
