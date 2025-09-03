"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";
import React from "react";
const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontWeights } = defaultTheme;

type FontWeightKeys = keyof typeof fontWeights;

const handleCopy = async (fontSize: string) => {
  try {
    await navigator.clipboard.writeText(`$${fontSize}`);
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

export function AllFontWeights() {
  return (
    <Box className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(fontWeights).map((fontWeight) => (
        <Box
          key={`fontWeight${fontWeight}`}
        >
          <Chip size="sm" color="accent" onClick={() => handleCopy(fontWeight)} className="cursor-pointer">
            <Text>${fontWeight}</Text>/
            <Text>{fontWeights[fontWeight as unknown as FontWeightKeys]}</Text>
          </Chip>
          <Text
            size="lg"
            css={{
              fontWeight: fontWeights[fontWeight as unknown as FontWeightKeys],
              marginTop: "10px",
            }}
          >
            {defaultText}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
