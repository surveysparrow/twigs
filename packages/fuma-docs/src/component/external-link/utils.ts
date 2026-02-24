/**
 * Returns the pathname segment that corresponds to the .mdx URL (e.g. "/docs/components/button.mdx").
 * Returns null if the current path is not a docs page.
 */
export function getMarkdownPathFromPathname(pathname: string): string | null {
  if (!pathname.startsWith("/docs") || pathname === "/docs") return null;
  const normalized = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return `${normalized}.mdx`;
}

/**
 * Builds the full public URL for the current page's .mdx (origin + path).
 */
export function getFullMarkdownUrl(pathname: string, origin: string): string | null {
  const path = getMarkdownPathFromPathname(pathname);
  if (!path) return null;
  return `${origin}${path}`;
}

/**
 * Message to paste or prefill in an AI chat so it reads the doc at the given URL.
 * Matches Fumadocs-style prompt used by Cursor and Claude deep links.
 */
export function buildReadDocMessage(fullMdxUrl: string): string {
  return `Read ${fullMdxUrl}, I want to ask questions about it.`;
}
