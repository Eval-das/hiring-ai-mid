import assistantsData from "./assistants.json";
import type { AssistantSummary, AssistantDetail } from "../types/assistants";

const SIMULATED_DELAY = 500;
const ERROR_RATE = 0.1;

function simulateDelay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));
}

function shouldSimulateError(): boolean {
  return Math.random() < ERROR_RATE;
}

export const mockApi = {
  getAssistants: async (params?: {
    q?: string;
    category?: string;
    page?: number;
    pageSize?: number;
  }): Promise<AssistantSummary[]> => {
    await simulateDelay();

    if (shouldSimulateError()) {
      throw new Error("Failed to fetch assistants");
    }

    let results = [...assistantsData.assistants] as AssistantSummary[];

    if (params?.q) {
      const query = params.q.toLowerCase();
      results = results.filter(
        (a) =>
          a.name.toLowerCase().includes(query) ||
          a.shortDescription.toLowerCase().includes(query)
      );
    }

    if (params?.category) {
      results = results.filter((a) => a.category === params.category);
    }

    if (params?.page !== undefined && params?.pageSize !== undefined) {
      const start = params.page * params.pageSize;
      const end = start + params.pageSize;
      results = results.slice(start, end);
    }

    return results;
  },

  getAssistant: async (id: string): Promise<AssistantDetail> => {
    await simulateDelay();

    if (shouldSimulateError()) {
      throw new Error("Failed to fetch assistant details");
    }

    const assistant =
      assistantsData.details[id as keyof typeof assistantsData.details];

    if (!assistant) {
      throw new Error("Assistant not found");
    }

    return assistant as AssistantDetail;
  },
};
