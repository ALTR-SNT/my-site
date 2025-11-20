// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import type { ComponentType, ReactNode } from "react";
import { client } from './client'

/**
 * Some versions of next-sanity don't export `defineLive`. Try to load it at runtime
 * and fall back to a lightweight implementation that uses the client.fetch API so this
 * file compiles even when the package doesn't provide live utilities.
 */
let defineLive: any;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
  const ns = require("next-sanity");
  defineLive = ns && ns.defineLive;
} catch {
  defineLive = undefined;
}

if (!defineLive) {
  defineLive = ({ client }: { client: any }) => {
    const sanityFetch = async (query: string, params?: any) => {
      return client.fetch(query, params);
    };

    const SanityLive: ComponentType<{ children?: ReactNode }> = ({ children }) => {
      // No-op component for environments without live updates
      return (children ?? null) as any;
    };

    return { sanityFetch, SanityLive };
  };
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX'
  })
});
