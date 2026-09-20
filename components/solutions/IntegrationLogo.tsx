import PluginLogo from "@/components/talent-acquisition/PluginLogo";
import type { LogoType } from "@/lib/talent-acquisition/plugins";
import SolutionPluginLogo from "./SolutionPluginLogo";
import type { SolutionLogoType } from "@/lib/solutions/types";

type IntegrationLogoProps = {
  name: string;
};

const SOLUTION_LOGOS: Record<string, SolutionLogoType> = {
  Salesforce: "salesforce",
  "HubSpot CRM": "hubspot-crm",
  Zendesk: "zendesk",
  ServiceNow: "servicenow",
  Jira: "jira",
  Confluence: "confluence",
  Slack: "slack",
  "Google Calendar": "google-calendar",
  Gmail: "gmail",
  Outlook: "outlook",
  "Microsoft Teams": "microsoft-teams",
};

const TALENT_LOGOS: Record<string, LogoType> = {
  "Google Calendar": "google-calendar",
  Jira: "jira",
  Workable: "workable",
  BambooHR: "bamboohr",
  Ashby: "ashby",
  Slack: "slack",
  Confluence: "confluence",
  HubSpot: "hubspot",
};

export default function IntegrationLogo({ name }: IntegrationLogoProps) {
  const talentLogo = TALENT_LOGOS[name];
  if (talentLogo) return <PluginLogo logoType={talentLogo} size="sm" />;

  const solutionLogo = SOLUTION_LOGOS[name];
  if (solutionLogo) return <SolutionPluginLogo logoType={solutionLogo} size="sm" />;

  return null;
}