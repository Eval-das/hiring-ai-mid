import { useState, useEffect } from 'react';
import type { AssistantSummary, AssistantsParams } from '../types/assistants';
import { fetchAssistants } from '../api/assistants';

export function useAssistants(params?: AssistantsParams) {
  const [data, setData] = useState<AssistantSummary[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAssistants = async () => {
    try {
      setLoading(true);
      setError(null);
      const assistants = await fetchAssistants(params);
      setData(assistants);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch assistants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const assistants = await fetchAssistants(params);
        if (!cancelled) {
          setData(assistants);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch assistants');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [params?.q, params?.category, params?.page, params?.pageSize]);

  return { data, loading, error, refetch: loadAssistants };
}