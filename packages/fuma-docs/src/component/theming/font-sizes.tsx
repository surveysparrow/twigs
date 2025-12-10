"use client";
import React from "react";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";

const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontSizes } = defaultTheme;

type FontSizeKeys = keyof typeof fontSizes;

const handleCopy = async (fontSize: string) => {
  try {
    await navigator.clipboard.writeText(`$${fontSize}`);
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

export function AllFontSizes() {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(fontSizes).map((fontSize) => {
        const pxVal = remToPix(fontSizes[fontSize as FontSizeKeys]);
        return (
          <div key={`fontSize-${fontSize}`} className="mb-4 last:mb-0">
            <button
              type="button"
              className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit px-1 hover:bg-fd-primary/20 transition-colors"
              onClick={() => handleCopy(fontSize)}
            >
              <span className="text-sm">
                ${fontSize}: {fontSizes[fontSize as FontSizeKeys]}({pxVal}px)
              </span>
            </button>
            <p
              className="mt-2.5 font-medium"
              style={{
                fontSize: fontSizes[fontSize as FontSizeKeys],
                lineHeight: "1.3",
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
