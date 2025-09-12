"use client";

// packages/fuma-docs/src/components/ExternalLinks.tsx
import { Box, Text, Link } from "@sparrowengg/twigs-react";
import { OpenNewIcon,DocumentClipIcon } from "@sparrowengg/twigs-react-icons";

interface ExternalLinksProps {
  source?: string;
  storybook?: string;   
}

export function ExternalLinks({ source, storybook }: ExternalLinksProps) {
  const baseURL = process.env.NEXT_STORYBOOK_BASE_URL;
  return (
    <Box className="flex flex-row gap-5 !m-0 !p-0">  
        <Box>
            <Link className="flex flex-row gap-2 items-center !text-decoration-none" href={source} target="_blank" rel="noopener noreferrer">
                <Text size="sm" className="!m-0 !p-0 !h-fit">Source</Text>
                <OpenNewIcon size={17} />
            </Link>
        </Box>
        <Box>
            <Link className="flex flex-row gap-2 items-center" href={`${baseURL}/${storybook}--docs`} target="_blank" rel="noopener noreferrer">
                <Text size="sm" className="!m-0 !p-0 !h-fit">Storybook</Text>
                <DocumentClipIcon size={17} />
            </Link>
        </Box>
    </Box>
  );
}