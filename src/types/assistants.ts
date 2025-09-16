export type AssistantCategory = 
  | "general" 
  | "coding" 
  | "design" 
  | "research" 
  | "productivity";

export interface AssistantSummary {
  id: string;
  name: string;
  category: AssistantCategory;
  shortDescription: string;
}

export interface AssistantDetail extends AssistantSummary {
  capabilities: string[];
  longDescription: string;
  website?: string;
}

export interface AssistantsParams {
  q?: string;
  category?: AssistantCategory;
  page?: number;
  pageSize?: number;
}

export interface AssistantsState {
  data: AssistantSummary[] | null;
  loading: boolean;
  error: string | null;
}