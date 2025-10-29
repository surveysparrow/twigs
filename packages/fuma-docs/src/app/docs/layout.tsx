import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { PageIcon,PencilIcon,CodeBlockIcon,AttachmentIcon,WrenchIcon } from "@sparrowengg/twigs-react-icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      nav={{ ...baseOptions.nav, mode: "top" }}
      tree={source.pageTree}
      tabMode="navbar"
      sidebar={{
        tabs: [
          {
            title: 'Get Started',
            description: 'Quick setup and installation guide',
            url: '/docs/getting-started',
            icon: <PageIcon className="flex items-center justify-center h-full" size={30}/>,
          },
          {
            title: 'Components',
            description: 'Complete UI component library reference',
            url: '/docs/components',
            icon: <CodeBlockIcon className="flex items-center justify-center h-full" size={30}/>,
          },
          {
            title: 'Icons',
            description: 'A collection of reusable icons',
            url: '/docs/icons',
            icon: <AttachmentIcon className="flex items-center justify-center h-full" size={30}/>,
          },
          {
            title: 'Editor',
            description: 'Rich text editor features and configuration',
            url: '/docs/editor',
            icon: <PencilIcon className="flex items-center justify-center h-full" size={30}/>,
          },
          {
            title: 'Tools',
            description: 'Tools and guides for building with Twigs',
            url: '/docs/tools',
            icon: <WrenchIcon className="flex items-center justify-center h-full" size={30}/>,
          },

        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}