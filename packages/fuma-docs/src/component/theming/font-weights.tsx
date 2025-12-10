"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import React from "react";

const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontWeights } = defaultTheme;

type FontWeightKeys = keyof typeof fontWeights;

const handleCopy = async (fontWeight: string) => {
  try {
    await navigator.clipboard.writeText(`$${fontWeight}`);
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

export function AllFontWeights() {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />
      {Object.keys(fontWeights).map((fontWeight) => (
        <div key={`fontWeight${fontWeight}`} className="mb-4 last:mb-0">
          <button
            type="button"
            className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit px-1 hover:bg-fd-primary/20 transition-colors"
            onClick={() => handleCopy(fontWeight)}
          >
            <span className="text-sm">
              ${fontWeight}:{" "}
              {fontWeights[fontWeight as unknown as FontWeightKeys]}
            </span>
          </button>
          <p
            className="mt-2.5 text-lg"
            style={{
              fontWeight: fontWeights[fontWeight as unknown as FontWeightKeys],
            }}
          >
            {defaultText}
          </p>
        </div>
      ))}
    </div>
  );
}
