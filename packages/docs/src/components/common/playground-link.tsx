import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Box } from "@sparrowengg/twigs-react";

export const PlaygroundLink = ({
  name,
  title = "Open in playground ",
  inline = false,
}: {
  name: string;
  title?: string;
  inline?: boolean;
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const anchorTag = (
    <a href={`${customFields.playgroundURL}/snippets/${name}`} target="_blank">
      {title}
    </a>
  );

  if (inline) return anchorTag;

  return (
    <Box
      css={{
        margin: "$2 0",
        textAlign: 'right',

        '& a': {
          letterSpacing: '0.08rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '12px',
        }
      }}
    >
      {anchorTag}
    </Box>
  );
};
