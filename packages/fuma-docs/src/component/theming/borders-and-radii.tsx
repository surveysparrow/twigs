"use client";
import React from "react";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text, Flex } from "@sparrowengg/twigs-react";

const { borderWidths, radii } = defaultTheme;

type BorderWidthKeys = keyof typeof borderWidths;
type RadiiKeys = keyof typeof radii;

const handleCopyBorderWidth = async (borderWidth: string) => {
  try {
    await navigator.clipboard.writeText(`$${borderWidth}`);
    toast({
      variant: "default",
      title: `Copied to clipboard`,
      css: {
        boxShadow: "none"
      }
    });
  } catch (err) {
    console.error('Failed to copy:', err);
    toast({
      variant: "error",
      title: "Copy failed",
      description: "Could not copy to clipboard",
      css: {
        boxShadow: "none"
      }
    });
  }
};

const handleCopyRadii = async (radius: string) => {
  try {
    await navigator.clipboard.writeText(`$${radius}`);
    toast({
      variant: "default",
      title: `Copied to clipboard`,
      css: {
        boxShadow: "none"
      }
    });
  } catch (err) {
    console.error('Failed to copy:', err);
    toast({
      variant: "error",
      title: "Copy failed",
      description: "Could not copy to clipboard",
      css: {
        boxShadow: "none"
      }
    });
  }
};

export function AllBordersAndRadii() {
  return (
    <Box className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      
      {/* Border Widths Section */}
      <Box className="mb-4 border-b border-fd-border pb-4">
        <Text size="sm" color="primary">
          Border Widths
        </Text>
        <Flex gap="$8" wrap="wrap">
          {Object.keys(borderWidths).map((borderWidth) => (
            <div key={`borderWidth-${borderWidth}`}>
              {/* <Chip 
                className="cursor-pointer" 
                color="accent" 
                size="sm" 
                onClick={() => handleCopyBorderWidth(borderWidth)}
              >
                <Text>${borderWidth}</Text>
                <Text>{borderWidths[borderWidth as BorderWidthKeys]}</Text>
              </Chip> */}
              <Box
                css={{
                  border: `${borderWidths[borderWidth as BorderWidthKeys]} solid #ADADF7`,
                  marginTop: "$3",
                  padding: "$3",
                  backgroundColor: "$secondary50",
                  borderRadius: "$sm",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70px",
                  width: "90px",
                }}
              >
                <Text weight="bold" css={{color: "$secondary700"}}>${borderWidth}</Text>
                <Text size="xs" css={{ color: "$secondary700" }}>
                  { "  " + borderWidths[borderWidth as BorderWidthKeys]}
                </Text>
              </Box>
            </div>
          ))}
        </Flex>
      </Box>

      {/* Border Radii Section */}
      <Box>
        <Text size="sm" color="primary">
          Border Radii
        </Text>
        <Flex gap="$10" wrap="wrap">
          {Object.keys(radii).map((rad) => {
            const pxVal = remToPix(radii[rad as RadiiKeys]);
            return (
              <div key={`radii-${rad}`}>
                <Chip 
                  className="cursor-pointer" 
                  color="accent" 
                  size="sm" 
                  onClick={() => handleCopyRadii(rad)}
                >
                  <Text>${rad}</Text>:
                  <Text>{radii[rad as RadiiKeys]}</Text>
                  {radii[rad as RadiiKeys].includes("rem") && (
                    <Text>({pxVal}px)</Text>
                  )}
                </Chip>
                <Box
                  css={{
                    border: "2px solid",
                    borderRadius: radii[rad as RadiiKeys],
                    marginTop: "$3",
                    padding: "$3",
                    backgroundColor: "$secondary50",
                    height: "80px",
                    width: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="border border-fd-border"
                >
                  <Text size="xs" css={{ color: "$secondary700", textAlign: "center" }}>
                    {radii[rad as RadiiKeys]}
                  </Text>
                </Box>
              </div>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}