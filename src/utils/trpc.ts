import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "../server/routers/_app";

function getBaseUrl() {
  if (typeof window !== undefined) {
    return "";
  }

  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
