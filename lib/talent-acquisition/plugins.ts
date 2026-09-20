// ─── Talent Acquisition — Central Plugin Data ────────────────────────────────
// Single source of truth consumed by:
//   • Available Plugins & Integrations section (what a plugin does)
//   • Hiring Workflow section (where a plugin is used)
//   • Plugin workspace detail panel
//
// To swap a logo: update `logoType` and/or provide an `logoImagePath`.
// LogoType is consumed by PluginLogo.tsx — no other changes needed.

export type StageId =
  | "description"
  | "sourcing"
  | "resume-screening"
  | "scoring"
  | "voice"
  | "call-assessment"
  | "interview"
  | "report"
  | "hire";

export type PluginCategory =
  | "Analysis"
  | "Sourcing"
  | "Screening"
  | "Communication"
  | "Scheduling"
  | "Reporting"
  | "Integration";

export type LogoType =
  // SoloBuild native capabilities (rendered as styled initials/icon)
  | "jd-analyzer"
  | "candidate-sourcing"
  | "resume-parser"
  | "resume-screening"
  | "candidate-scoring"
  | "voice-screening"
  | "call-assessment"
  | "interview-scheduling"
  | "candidate-communication"
  | "screening-report"
  // External integrations
  | "google-calendar"
  | "jira"
  | "workable"
  | "bamboohr"
  | "ashby"
  | "slack"
  | "confluence"
  | "hubspot"
  | "microsoft-365"
  | "google-workspace"
  | "linkedin"
  | "salesforce"
  | "docusign"
  | "lattice"
  | "adp"
  | "workday"
  | "servicenow";

export interface TalentPlugin {
  id: string;
  name: string;
  // Precise one-sentence description of what the plugin actually does.
  description: string;
  // Short label for the purpose (shown as subtitle/tag)
  purpose: string;
  category: PluginCategory;
  logoType: LogoType;
  // Optional external image path — will override SVG logo when provided
  logoImagePath?: string;
  tier: string;
  status: string;
  // Which workflow stages this plugin is active in
  workflowStages: StageId[];
  capabilities: string[];
  // Optional technical details
  method?: string;
  authentication?: string;
  access?: string;
  use: string;
  // Which external tools/integrations this plugin connects with
  integrationsWith?: string[];
}

// ─── Native SoloBuildAI Plugins ──────────────────────────────────────────────

export const TALENT_PLUGINS: TalentPlugin[] = [
  {
    id: "jd-analyzer",
    name: "Job Description Analyzer",
    description:
      "Analyzes job descriptions and extracts role requirements, required skills, experience levels, and screening criteria to guide the rest of the hiring workflow.",
    purpose: "Role Requirements Analysis",
    category: "Analysis",
    logoType: "jd-analyzer",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["description"],
    capabilities: [
      "Requirement extraction",
      "Skill identification",
      "Criteria structuring",
      "Seniority detection",
    ],
    use: "Structuring role criteria before sourcing and screening begins.",
    integrationsWith: ["confluence", "jira"],
  },
  {
    id: "candidate-sourcing",
    name: "Candidate Sourcing",
    description:
      "Finds and imports candidate profiles from connected recruiting sources into the active hiring workflow, ranked by relevance to the extracted role criteria.",
    purpose: "Candidate Discovery",
    category: "Sourcing",
    logoType: "candidate-sourcing",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["sourcing"],
    capabilities: [
      "Profile discovery",
      "Source connection",
      "Relevance ranking",
      "Pipeline import",
    ],
    use: "Populating the candidate pipeline from connected sources.",
    integrationsWith: ["workable", "ashby", "hubspot"],
  },
  {
    id: "resume-parser",
    name: "Resume Parser",
    description:
      "Extracts structured candidate information — including skills, work history, education, certifications, and contact details — from unstructured resume documents.",
    purpose: "Resume Data Extraction",
    category: "Analysis",
    logoType: "resume-parser",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["resume-screening"],
    capabilities: [
      "Skills extraction",
      "Experience parsing",
      "Education recognition",
      "Contact structuring",
    ],
    use: "Converting raw resumes into structured candidate profiles.",
    integrationsWith: ["workable", "ashby"],
  },
  {
    id: "resume-screening",
    name: "Resume Screening",
    description:
      "Compares each candidate's structured resume data against the role requirements and qualification criteria, identifying relevant qualifications and flagging gaps.",
    purpose: "Resume Qualification Matching",
    category: "Screening",
    logoType: "resume-screening",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["resume-screening"],
    capabilities: [
      "Requirement matching",
      "Gap identification",
      "Qualification flagging",
      "Criteria scoring",
    ],
    use: "Filtering candidates to only those meeting minimum role requirements.",
    integrationsWith: ["workable", "ashby", "jira"],
  },
  {
    id: "candidate-scoring",
    name: "Candidate Scoring",
    description:
      "Scores candidates against role-specific criteria to produce a ranked shortlist, helping recruiters prioritize the most relevant profiles before voice screening.",
    purpose: "Candidate Prioritization",
    category: "Screening",
    logoType: "candidate-scoring",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["resume-screening", "scoring"],
    capabilities: [
      "Multi-criteria scoring",
      "Weighted ranking",
      "Threshold filtering",
      "Shortlist generation",
    ],
    use: "Producing a ranked candidate shortlist before AI voice screening.",
    integrationsWith: ["workable", "ashby"],
  },
  {
    id: "voice-screening",
    name: "AI Voice Screening",
    description:
      "Conducts automated conversational voice calls with candidates, asking role-specific questions and evaluating responses against pre-defined screening criteria.",
    purpose: "Automated Voice Conversations",
    category: "Screening",
    logoType: "voice-screening",
    tier: "Native · Core Capability",
    status: "Active",
    workflowStages: ["voice"],
    capabilities: [
      "Outbound voice calls",
      "Role-specific questioning",
      "Response capture",
      "Conversation transcription",
    ],
    use: "Engaging shortlisted candidates at scale through AI-conducted phone conversations.",
    integrationsWith: ["slack", "workable"],
  },
  {
    id: "call-assessment",
    name: "Call Assessment",
    description:
      "Analyzes recorded screening conversations and generates a structured candidate assessment from responses, covering communication quality, role fit, and red flags.",
    purpose: "Conversation Analysis",
    category: "Analysis",
    logoType: "call-assessment",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["call-assessment"],
    capabilities: [
      "Response analysis",
      "Communication scoring",
      "Red flag detection",
      "Assessment generation",
    ],
    use: "Turning voice screening transcripts into structured recruiter-ready assessments.",
    integrationsWith: ["workable", "ashby"],
  },
  {
    id: "interview-scheduling",
    name: "Interview Scheduling",
    description:
      "Coordinates candidate and interviewer availability across connected calendar systems and creates confirmed interview schedules without manual back-and-forth.",
    purpose: "Availability Coordination",
    category: "Scheduling",
    logoType: "interview-scheduling",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["interview"],
    capabilities: [
      "Availability matching",
      "Calendar sync",
      "Invite dispatch",
      "Reminder scheduling",
    ],
    use: "Automating the interview coordination process after candidate qualification.",
    integrationsWith: ["google-calendar", "ashby", "workable"],
  },
  {
    id: "candidate-communication",
    name: "Candidate Communication",
    description:
      "Sends automated, contextually appropriate updates to candidates throughout the hiring process — including invitations, status updates, reminders, and follow-ups.",
    purpose: "Candidate Messaging",
    category: "Communication",
    logoType: "candidate-communication",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["sourcing", "voice", "interview"],
    capabilities: [
      "Status notifications",
      "Invitation dispatch",
      "Follow-up messages",
      "Reminder automation",
    ],
    use: "Keeping candidates informed and engaged throughout the hiring workflow.",
    integrationsWith: ["slack", "workable"],
  },
  {
    id: "screening-report",
    name: "Screening Report",
    description:
      "Combines resume screening results and voice screening assessments into a single structured candidate report for recruiter review, including scores, highlights, and recommended actions.",
    purpose: "Candidate Summary Report",
    category: "Reporting",
    logoType: "screening-report",
    tier: "Native · AI Capability",
    status: "Active",
    workflowStages: ["report"],
    capabilities: [
      "Resume summary",
      "Voice assessment inclusion",
      "Score aggregation",
      "Action recommendations",
    ],
    use: "Giving recruiters a single complete view of each candidate before making hiring decisions.",
    integrationsWith: ["workable", "ashby", "jira"],
  },
];

// ─── External Integration Plugins ────────────────────────────────────────────

export const INTEGRATION_PLUGINS: TalentPlugin[] = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    description:
      "Connects to Google Calendar to look up interviewer availability and create confirmed interview events with all participants.",
    purpose: "Calendar & Scheduling",
    category: "Scheduling",
    logoType: "google-calendar",
    tier: "Integration · Tier 1",
    status: "Quick-start",
    workflowStages: ["interview"],
    capabilities: ["Availability lookup", "Event creation", "Invite dispatch"],
    method: "Google Calendar API v3",
    authentication: "OAuth 2.0",
    access: "Testing quickstart available",
    use: "Interview scheduling and calendar coordination.",
    integrationsWith: ["interview-scheduling"],
  },
  {
    id: "jira",
    name: "Jira",
    description:
      "Creates and tracks hiring tasks, workflow handoffs, and recruiter actions inside Jira so the entire team has visibility into pipeline progress.",
    purpose: "Task & Workflow Tracking",
    category: "Integration",
    logoType: "jira",
    tier: "Integration · Tier 1",
    status: "Quick-start",
    workflowStages: ["description", "sourcing", "resume-screening", "interview", "hire"],
    capabilities: ["Task creation", "Workflow tracking", "Team handoffs"],
    method: "Jira Cloud REST API",
    authentication: "OAuth 2.0",
    use: "Recruiting task and workflow management.",
  },
  {
    id: "workable",
    name: "Workable",
    description:
      "Syncs candidate records, pipeline stages, and hiring activity between SoloBuildAI and the Workable recruiting platform.",
    purpose: "Candidate Management",
    category: "Integration",
    logoType: "workable",
    tier: "Integration · Tier 1",
    status: "Quick-start",
    workflowStages: ["sourcing", "resume-screening", "interview", "hire"],
    capabilities: ["Candidate sync", "Stage management", "Pipeline context"],
    method: "Workable REST API",
    authentication: "OAuth 2.0",
    access: "No API-key management required",
    use: "Candidate sourcing, screening and recruitment management.",
  },
  {
    id: "ashby",
    name: "Ashby",
    description:
      "Provides access to Ashby's recruiting operations and interview management workflows, keeping hiring data consistent across both systems.",
    purpose: "Recruiting & Interviews",
    category: "Integration",
    logoType: "ashby",
    tier: "Integration · Tier 2",
    status: "Account access required",
    workflowStages: ["sourcing", "resume-screening", "interview"],
    capabilities: ["Recruiting operations", "Interview management", "Data sync"],
    method: "Ashby MCP server",
    access: "Open Beta — available across all Ashby plans",
    use: "Recruiting and interview management.",
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "Sends real-time hiring notifications, recruiter alerts, and workflow updates to the appropriate Slack channels and team members.",
    purpose: "Team Notifications",
    category: "Communication",
    logoType: "slack",
    tier: "Integration · Tier 2",
    status: "Category expansion",
    workflowStages: ["sourcing", "resume-screening", "voice", "interview", "hire"],
    capabilities: ["Channel notifications", "Workflow alerts", "Team updates"],
    method: "Slack API",
    authentication: "OAuth 2.0",
    use: "Recruiting communication and notifications.",
  },
  {
    id: "bamboohr",
    name: "BambooHR",
    description:
      "Connects hiring outcomes to employee records in BambooHR, passing new hire information directly into HR systems after a hiring decision.",
    purpose: "Employee Records",
    category: "Integration",
    logoType: "bamboohr",
    tier: "Integration · Tier 2",
    status: "Account access required",
    workflowStages: ["hire"],
    capabilities: ["Employee record creation", "Post-hire handoff", "Time-off sync"],
    method: "BambooHR MCP + REST API",
    use: "Employee records and post-hire HR handoff.",
  },
  {
    id: "confluence",
    name: "Confluence",
    description:
      "Makes hiring playbooks, job description templates, and HR documentation available to AI agents during job description creation and onboarding.",
    purpose: "Knowledge & Documentation",
    category: "Integration",
    logoType: "confluence",
    tier: "Integration · Tier 2",
    status: "Category expansion",
    workflowStages: ["description", "hire"],
    capabilities: ["Knowledge retrieval", "Document access", "Playbook reference"],
    method: "Confluence Cloud REST API",
    authentication: "OAuth 2.0",
    use: "HR knowledge access during job description creation.",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description:
      "Extends candidate sourcing with relationship context from HubSpot CRM, surfacing warm contacts and existing relationships relevant to open roles.",
    purpose: "CRM & Relationship Context",
    category: "Integration",
    logoType: "hubspot",
    tier: "Integration · Tier 3",
    status: "Category expansion",
    workflowStages: ["sourcing", "hire"],
    capabilities: ["Contact lookup", "Relationship context", "Pipeline records"],
    method: "HubSpot APIs",
    access: "Developer and test accounts available",
    use: "CRM-sourced candidate discovery.",
  },
];

// All plugins combined — used by the Available Plugins grid
export const ALL_TALENT_PLUGINS: TalentPlugin[] = [
  ...TALENT_PLUGINS,
  ...INTEGRATION_PLUGINS,
];

// ─── Workflow Stage Definitions ───────────────────────────────────────────────

export interface WorkflowStage {
  id: StageId;
  number: string;
  title: string;
  description: string;
  // IDs of plugins active at this stage (from ALL_TALENT_PLUGINS)
  pluginIds: string[];
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: "description",
    number: "01",
    title: "Job Description",
    description: "Understand the role and extract hiring criteria.",
    pluginIds: ["jd-analyzer", "confluence", "jira"],
  },
  {
    id: "sourcing",
    number: "02",
    title: "Candidate Sourcing",
    description: "Find and engage relevant candidates.",
    pluginIds: ["candidate-sourcing", "workable", "ashby", "hubspot", "candidate-communication"],
  },
  {
    id: "resume-screening",
    number: "03",
    title: "Resume Screening",
    description: "Parse and rank candidates against the role.",
    pluginIds: ["resume-parser", "resume-screening", "candidate-scoring", "workable", "ashby"],
  },
  {
    id: "voice",
    number: "04",
    title: "AI Voice Screening",
    description: "Conduct structured AI voice conversations.",
    pluginIds: ["voice-screening", "candidate-communication", "slack"],
  },
  {
    id: "call-assessment",
    number: "05",
    title: "Call Assessment",
    description: "Analyze conversations and generate assessments.",
    pluginIds: ["call-assessment", "screening-report"],
  },
  {
    id: "interview",
    number: "06",
    title: "Interview",
    description: "Coordinate schedules and conduct interviews.",
    pluginIds: ["interview-scheduling", "google-calendar", "ashby", "candidate-communication"],
  },
  {
    id: "report",
    number: "07",
    title: "Recruiter Review",
    description: "Give recruiters a complete candidate view.",
    pluginIds: ["screening-report", "jira", "workable"],
  },
  {
    id: "hire",
    number: "08",
    title: "Shortlist & Hire",
    description: "Move the right candidate forward.",
    pluginIds: ["bamboohr", "slack", "jira", "confluence", "hubspot"],
  },
];
