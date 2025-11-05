"use client";
import React from "react";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Text, Flex } from "@sparrowengg/twigs-react";

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
              <Box 
                className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit" 
                size="sm" 
                onClick={() => handleCopyBorderWidth(borderWidth)}
              >
                <Text className="p-1">${borderWidth}: {borderWidths[borderWidth as BorderWidthKeys]}</Text>
              </Box>
              <Box
                css={{
                  border: `${borderWidths[borderWidth as BorderWidthKeys]} solid`,
                  marginTop: "$3",
                  padding: "$3",
                  borderRadius: "$sm",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "$2",
                  height: "70px",
                  width: "90px",
                }}
                className="border !border-fd-border bg-fd-secondary"
              >
              </Box>
            </div>
          ))}
        </Flex>
      </Box>

      {/* Border Radii Section */}
      <Box>
        <Text size="sm" color="primary">
          Border Radius
        </Text>
        <Flex gap="$10" wrap="wrap">
          {Object.keys(radii).map((rad) => {
            const pxVal = remToPix(radii[rad as RadiiKeys]);
            return (
              <div key={`radii-${rad}`}>
                <Box 
                  className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit" 
                  size="sm" 
                  onClick={() => handleCopyRadii(rad)}
                >
                  <Text className="p-1">${rad}: {radii[rad as RadiiKeys]} {radii[rad as RadiiKeys].includes("rem") && `(${pxVal}px)`}</Text>
                </Box>
                <Box
                  css={{
                    border: "2px solid",
                    borderRadius: radii[rad as RadiiKeys],
                    marginTop: "$3",
                    padding: "$3",
                    height: "80px",
                    width: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className="border !border-fd-border bg-fd-secondary"
                >
                </Box>
              </div>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}