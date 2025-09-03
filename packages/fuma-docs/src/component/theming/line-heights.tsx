"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";
import React from "react";
const defaultText =
  "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

const { lineHeights } = defaultTheme;

type LineHeightKeys = keyof typeof lineHeights;

const handleCopy = async (lineHeight: string) => {
  try {
    await navigator.clipboard.writeText(`$${lineHeight}`);
    toast({
      variant: "default",
      title: `Copied to clipboard`,
      css:{
        boxShadow: "none"
      }
    });
  } catch (err) {
    console.error('Failed to copy:', err);
    toast({
      variant: "error",
      title: "Copy failed",
      description: "Could not copy to clipboard",
      css:{
        boxShadow: "none"
      }
    });
  }
};

export function AllLineHeights() {
  return (
    <Box className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(lineHeights).map((_lineHeight) => {
        const lineHeight = _lineHeight as LineHeightKeys;
        const pxVal = remToPix(lineHeights[lineHeight]);
        return (
          <Box key={`lineHeight${lineHeight}`}>
            <Chip size="sm" color="accent" className="cursor-pointer" onClick={() => handleCopy(lineHeight)}>
              <Text>${lineHeight}</Text>/<Text>{lineHeights[lineHeight]}</Text>
              {lineHeights[lineHeight].includes("rem") && (
                <Text>{`(${pxVal}px)`}</Text>
              )}
            </Chip>
            <Text
              size="sm"
              css={{
                lineHeight: lineHeights[lineHeight],
                marginTop: "10px",
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
