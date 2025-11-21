"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import React from "react";

const defaultText =
  "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

const { lineHeights } = defaultTheme;

type LineHeightKeys = keyof typeof lineHeights;

const handleCopy = async (lineHeight: string) => {
  try {
    await navigator.clipboard.writeText(`$${lineHeight}`);
    toast({
      variant: "success",
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

export function AllLineHeights() {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(lineHeights).map((_lineHeight) => {
        const lineHeight = _lineHeight as LineHeightKeys;
        const pxVal = remToPix(lineHeights[lineHeight]);
        return (
          <div key={`lineHeight${lineHeight}`} className="mb-4 last:mb-0">
            <button
              type="button"
              className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit px-1 hover:bg-fd-primary/20 transition-colors"
              onClick={() => handleCopy(lineHeight)}
            >
              <span className="text-sm">
                ${lineHeight}: {lineHeights[lineHeight]}{" "}
                {lineHeights[lineHeight].includes("rem") && `(${pxVal}px)`}
              </span>
            </button>
            <p
              className="mt-2.5 text-sm"
              style={{
                lineHeight: lineHeights[lineHeight],
              }}
            >
              {defaultText}
            </p>
          </div>
        );
      })}
    </div>
  );
}
