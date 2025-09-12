import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "./logo";
import { PlayIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Logo />
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Playground",
      url: "https://play.twigs.surveysparrow.com/",
      secondary: true,
      icon: <PlayIcon/>,
    },
  ],
  githubUrl: "https://github.com/surveysparrow/twigs",
  themeSwitch: {
    enabled: true,
    mode: "light-dark",
  },
};
