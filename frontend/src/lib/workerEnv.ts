import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Env for API routes on Cloudflare (OpenNext) and locally.
 * Worker bindings are copied to `process.env` on first request, but reading
 * `getCloudflareContext().env` covers cases where that hasn’t run yet or bindings
 * differ from `process.env`.
 */
export function getEnvString(key: string): string | undefined {
  const fromProcess = process.env[key]?.trim();
  if (fromProcess) return fromProcess;
  try {
    const { env } = getCloudflareContext();
    const value = (env as Record<string, unknown>)[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  } catch {
    /* not a Worker request (e.g. `next build`, tests) */
  }
  return undefined;
}
