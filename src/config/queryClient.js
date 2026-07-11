import {
  QueryClient,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";

import { logger } from "./logger";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      logger.error("Query Error", error);
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      logger.error("Mutation Error", error);
    },

    onSuccess: () => {
      logger.success("Mutation Successful");
    },
  }),

  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          return false;
        }

        return failureCount < 2;
      },

      retryDelay: (attempt) =>
        Math.min(1000 * 2 ** attempt, 30000),

      staleTime: 5 * 60 * 1000,

      gcTime: 30 * 60 * 1000,

      refetchOnWindowFocus: false,

      refetchOnReconnect: true,

      refetchOnMount: false,

      networkMode: "online",
    },

    mutations: {
      retry: 1,

      networkMode: "online",
    },
  },
});