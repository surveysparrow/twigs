"use client";
import React from "react";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";

const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontSizes } = defaultTheme;

type FontSizeKeys = keyof typeof fontSizes;

const handleCopy = async (fontSize: string) => {
  try {
    await navigator.clipboard.writeText(`$${fontSize}`);
    toast({
      variant: "default",
      title: `Copied to clipboard`,
      css: {
        boxShadow: "none",
      },
    });
  } catch (err) {
    console.error("Failed to copy:", err);
    toast({
      variant: "error",
      title: "Copy failed",
      description: "Could not copy to clipboard",
      css: {
        boxShadow: "none",
      },
    });
  }
};

export function AllFontSizes() {
  return (
    <Box className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(fontSizes).map((fontSize) => {
        const pxVal = remToPix(fontSizes[fontSize as FontSizeKeys]);
        return (
          <Box key={`fontSize-${fontSize}`}>
            <Chip
              color="accent"
              className="cursor-pointer"
              size="sm"
              onClick={() => handleCopy(fontSize)}
            >
              <Text>${fontSize}</Text>:
              <Text>{fontSizes[fontSize as FontSizeKeys]}</Text>(
              <Text>
                {pxVal}
                px
              </Text>
              )
            </Chip>
            <Text
              size="sm"
              css={{
                fontSize: fontSizes[fontSize as FontSizeKeys],
                marginTop: "10px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              {defaultText}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
