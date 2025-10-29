"use client";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { PlayIcon } from "lucide-react";
import { Image } from "@sparrowengg/twigs-react";
import logo from "@/assets/images/logo-w-text-lightmode.svg";

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
        <Image
          className="h-7 w-auto ml-0 pl-0"
          src={logo.src}
          alt="Twigs Charts"
        />
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Playground",
      url: "https://play.twigs.surveysparrow.com/",
      secondary: true,
      icon: <PlayIcon />,
    },
  ],
  githubUrl: "https://github.com/surveysparrow/twigs",
  themeSwitch: {
    enabled: false,
  },
};
