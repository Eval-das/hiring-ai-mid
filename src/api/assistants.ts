import type {
  AssistantSummary,
  AssistantDetail,
  AssistantsParams,
} from "../types/assistants";
import { mockApi } from "../mocks/mockServer";

export async function fetchAssistants(
  params?: AssistantsParams
): Promise<AssistantSummary[]> {
  try {
    return await mockApi.getAssistants(params);
  } catch (error) {
    console.error("Error fetching assistants:", error);
    throw error;
  }
}

export async function fetchAssistantDetail(
  id: string
): Promise<AssistantDetail> {
  try {
    return await mockApi.getAssistant(id);
  } catch (error) {
    console.error("Error fetching assistant detail:", error);
    throw error;
  }
}
