import { MergedRouter } from "@server/src/routers";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

const trpc = createTRPCProxyClient<MergedRouter>({
  links: [httpBatchLink({ url: "http://localhost:8080/trpc" })],
});

export { type MergedRouter, trpc };
