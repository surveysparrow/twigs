"use client";
import React from "react";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";

const { borderWidths, radii, space } = defaultTheme;

type BorderWidthKeys = keyof typeof borderWidths;
type RadiiKeys = keyof typeof radii;

const handleCopyBorderWidth = async (borderWidth: string) => {
  try {
    await navigator.clipboard.writeText(`$${borderWidth}`);
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

const handleCopyRadii = async (radius: string) => {
  try {
    await navigator.clipboard.writeText(`$${radius}`);
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

export function AllBordersAndRadii() {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Toastr duration={3000} />

      {/* Border Widths Section */}
      <div className="mb-8 border-b border-fd-border pb-8">
        <p className="text-sm mb-6">Border Widths</p>
        <div className="flex flex-wrap" style={{ gap: space[8] }}>
          {Object.keys(borderWidths).map((borderWidth) => (
            <div key={`borderWidth-${borderWidth}`}>
              <button
                type="button"
                className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit px-1 hover:bg-fd-primary/20 transition-colors"
                onClick={() => handleCopyBorderWidth(borderWidth)}
              >
                <span className="text-sm">
                  ${borderWidth}: {borderWidths[borderWidth as BorderWidthKeys]}
                </span>
              </button>
              <div
                className="border !border-fd-border bg-fd-secondary flex items-center justify-center mt-3"
                style={{
                  borderWidth: borderWidths[borderWidth as BorderWidthKeys],
                  padding: space[3],
                  borderRadius: radii.sm,
                  height: "70px",
                  width: "90px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radii Section */}
      <div>
        <p className="text-sm mb-6">Border Radius</p>
        <div className="flex flex-wrap" style={{ gap: space[10] }}>
          {Object.keys(radii).map((rad) => {
            const pxVal = remToPix(radii[rad as RadiiKeys]);
            return (
              <div key={`radii-${rad}`}>
                <button
                  type="button"
                  className="cursor-pointer text-fd-primary bg-fd-primary/10 rounded-md w-fit px-1 hover:bg-fd-primary/20 transition-colors"
                  onClick={() => handleCopyRadii(rad)}
                >
                  <span className="text-sm">
                    ${rad}: {radii[rad as RadiiKeys]}{" "}
                    {radii[rad as RadiiKeys].includes("rem") && `(${pxVal}px)`}
                  </span>
                </button>
                <div
                  className="border !border-fd-border bg-fd-secondary flex items-center justify-center mt-3"
                  style={{
                    borderWidth: "2px",
                    borderRadius: radii[rad as RadiiKeys],
                    padding: space[3],
                    height: "80px",
                    width: "80px",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
