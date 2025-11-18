import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import logo from "@/assets/images/logo-w-text-lightmode.svg";
import { ArrowUpIcon } from "@sparrowengg/twigs-react-icons"

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
          src={logo}
          alt="Twigs Charts"
        />
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      type: 'custom',
      children:
       <a href="https://play.twigs.surveysparrow.com/" target="_blank" className="text-sm text-fd-muted-foreground font-medium flex items-center gap-1 cursor-pointer mr-1 hover:bg-fd-muted rounded-lg py-1.5 px-2"> 
         Playground
        <ArrowUpIcon size={16} className="text-fd-muted-foreground rotate-45" />
       </a>,
      secondary: true,
    },
  ],
  githubUrl: "https://github.com/surveysparrow/twigs",
  themeSwitch: {
    enabled: false,
  },
};
