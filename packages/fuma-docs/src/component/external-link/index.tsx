"use client";

import Image from "next/image";
import { Copy, ChevronDown, ExternalLink } from "lucide-react";
import { TickIcon } from "@sparrowengg/twigs-react-icons";
import githublogo from "@/assets/images/github.svg";
import storybooklogo from "@/assets/images/storybook.svg";
import openaiLogo from "@/assets/images/openai.svg";
import cursorLogo from "@/assets/images/cursor.svg";
import claudeLogo from "@/assets/images/claude.svg";
import { useExternalLinks } from "./use-external-links";
import { AI_APPS, BUTTON_BASE_CLASS, MENU_ITEM_CLASS } from "./constants";

interface ExternalLinksProps {
  source?: string;
  storybook?: string;
}

export function ExternalLinks({ source, storybook }: ExternalLinksProps) {
  const baseURL = process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL;
  const {
    markdownUrl,
    copied,
    copying,
    open,
    setOpen,
    dropdownRef,
    handleCopyMarkdown,
    handleOpenInAI,
  } = useExternalLinks();

  return (
    <div className="flex flex-row gap-2 items-center">
        <button
          type="button"
          onClick={handleCopyMarkdown}
          disabled={copying}
          className={`${BUTTON_BASE_CLASS} min-w-[120px] justify-center disabled:opacity-70 disabled:pointer-events-none`}
          aria-label={copied ? "Copied" : "Copy Markdown"}
        >
          {copied ? (
            <TickIcon size={16} className="shrink-0" aria-hidden />
          ) : (
            <Copy size={16} strokeWidth={2} className="shrink-0" aria-hidden />
          )}
          <span className="shrink-0">Copy Markdown</span>
        </button>

      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`${BUTTON_BASE_CLASS} min-w-[50px]`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Open in external tools"
        >
          <span className="shrink-0">Open</span>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        {open && (
          <div
            className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md border border-neutral-200 backdrop-blur-lg bg-white/80 shadow-lg"
            role="menu"
          >
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className={MENU_ITEM_CLASS}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={githublogo}
                  alt=""
                  width={16}
                  height={16}
                  className="not-prose"
                  aria-hidden
                />
                <span className="flex-1">Open in GitHub</span>
                <ExternalLink
                  size={14}
                  className="shrink-0 text-neutral-400"
                  aria-hidden
                />
              </a>
            )}
            {storybook && baseURL && (
              <a
                href={`${baseURL}/${storybook}--docs`}
                target="_blank"
                rel="noopener noreferrer"
                className={MENU_ITEM_CLASS}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={storybooklogo}
                  alt=""
                  width={16}
                  height={16}
                  className="not-prose"
                  aria-hidden
                />
                <span className="flex-1">Open in Storybook</span>
                <ExternalLink
                  size={14}
                  className="shrink-0 text-neutral-400"
                  aria-hidden
                />
              </a>
            )}
            {markdownUrl &&
              AI_APPS.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  role="menuitem"
                  className={`${MENU_ITEM_CLASS} w-full text-left border-0 bg-transparent cursor-pointer font-inherit`}
                  onClick={() => handleOpenInAI(app.id)}
                >
                  <Image
                    src={app.id === "chatgpt" ? openaiLogo : app.id === "cursor" ? cursorLogo : app.id === "claude" ? claudeLogo : githublogo}
                    alt=""
                    width={16}
                    height={16}
                    className="not-prose"
                    aria-hidden
                  />
                  <span className="flex-1">{app.label}</span>
                  <ExternalLink
                    size={14}
                    className="shrink-0 text-neutral-400"
                    aria-hidden
                  />
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
