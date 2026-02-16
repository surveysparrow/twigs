"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  AI_APPS,
  type AiAppId,
} from "./constants";
import {
  getMarkdownPathFromPathname,
  getFullMarkdownUrl,
  buildReadDocMessage,
} from "./utils";

const COPY_RESET_MS = 2000;

export function useExternalLinks() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  const pathname =
    mounted && typeof window !== "undefined" ? window.location.pathname : "";
  const origin = mounted && typeof window !== "undefined" ? window.location.origin : "";
  const markdownPath = getMarkdownPathFromPathname(pathname);
  const markdownUrl = markdownPath ? `${origin}${markdownPath}` : null;

  const handleCopyMarkdown = useCallback(async () => {
    if (!markdownPath || !origin) return;
    setCopying(true);
    try {
      const res = await fetch(origin + markdownPath);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_RESET_MS);
    } catch {
      setCopied(false);
    } finally {
      setCopying(false);
    }
  }, [markdownPath, origin]);

  const handleOpenInAI = useCallback(
    (appId: AiAppId) => {
      const fullUrl = getFullMarkdownUrl(pathname, origin);
      if (!fullUrl) return;

      const app = AI_APPS.find((a) => a.id === appId);
      if (!app) return;

      const message = buildReadDocMessage(fullUrl);

      if (app.useQueryParam && app.queryParamKey) {
        const openUrl = `${app.url}?${app.queryParamKey}=${encodeURIComponent(message)}`;
        window.open(openUrl, "_blank", "noopener,noreferrer");
      } else {
        navigator.clipboard
          .writeText(message)
          .then(() => {
            window.open(app.url, "_blank", "noopener,noreferrer");
          })
          .catch(() => {});
      }
      setOpen(false);
    },
    [pathname, origin]
  );

  return {
    markdownPath,
    markdownUrl,
    copied,
    copying,
    open,
    setOpen,
    dropdownRef,
    handleCopyMarkdown,
    handleOpenInAI,
  };
}
