/**
 * External link targets and AI app config for the "Open" dropdown.
 */
export const AI_APPS = [
  {
    id: "chatgpt",
    label: "Open in ChatGPT",
    url: "https://chat.openai.com/",
    useQueryParam: true,
    queryParamKey: "q",
  },
  {
    id: "cursor",
    label: "Open in Cursor",
    url: "https://cursor.com/link/prompt",
    useQueryParam: true,
    queryParamKey: "text",
  },
  {
    id: "claude",
    label: "Open in Claude",
    url: "https://claude.ai/new",
    useQueryParam: true,
    queryParamKey: "q",
  },
] as const;

export type AiAppId = (typeof AI_APPS)[number]["id"];

export const MENU_ITEM_CLASS =
  "flex flex-row items-center px-3 py-2 gap-3 text-sm font-normal text-neutral-700 hover:bg-neutral-100 no-underline transition-colors";

export const BUTTON_BASE_CLASS =
  "flex flex-row gap-2 items-center h-9 px-2 rounded-md border border-neutral-200 bg-fd-secondary text-neutral-700 text-sm hover:bg-neutral-200/50 hover:border-neutral-300/50 transition-colors cursor-pointer";
