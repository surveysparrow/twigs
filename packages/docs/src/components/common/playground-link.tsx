import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Box } from "@sparrowengg/twigs-react";

export const PlaygroundLink = ({
  name,
  title = "Try in playground ",
  block = false,
}: {
  name: string;
  title?: string;
  block?: boolean;
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const anchorTag = (
    <a
      href={`${customFields.playgroundURL}/snippets/${name}`}
      target="_blank"
    >
      {title}
    </a>
  );

  if (block) {
    return (
      <Box
        css={{
          margin: "$2 0",
        }}
      >
        {anchorTag}
      </Box>
    );
  }

  return anchorTag;
};
