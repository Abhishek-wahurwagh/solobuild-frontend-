export type SolutionId = "hr" | "sales" | "support" | "it" | "operations";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  summary?: string[];
  showActivity?: boolean;
};

export type SolutionContext = {
  id: SolutionId;
  name: string;
  shortName: string;
  icon: "people" | "chart" | "headset" | "terminal" | "workflow";
  topics: string[];
  tools: string[];
  actions: string[];
  starter: string;
  response: string;
  summary: string[];
};

export type RecentChat = {
  id: string;
  title: string;
  solutionId: SolutionId;
  time: string;
  message: string;
};

export type ConnectedTool = {
  name: string;
  status: "Connected" | "Demo mode";
};
