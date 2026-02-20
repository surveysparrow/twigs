"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import React from "react";

const { sizes } = defaultTheme;

type SizesKeys = keyof typeof sizes;

export function AllSizes() {
  const handleCopy = async (sp: string) => {
    try {
      await navigator.clipboard.writeText(`$${sp}`);
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

  return (
    <div>
      <Toastr duration={3000} />
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="text-left"
              style={{ width: "200px", border: "none" }}
            >
              Key
            </th>
            <th
              className="text-left"
              style={{ width: "200px", border: "none" }}
            >
              Value
            </th>
            <th
              className="text-left"
              style={{ width: "200px", border: "none" }}
            >
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(sizes).map((sp) => (
            <tr
              key={`size-${sp}`}
              className="cursor-pointer hover:bg-fd-muted/50 transition-colors"
              onClick={() => handleCopy(sp)}
              style={{ border: "none" }}
            >
              <td
                className="!text-fd-muted-foreground"
                style={{ border: "none" }}
              >
                {sp}
              </td>
              <td
                className="!text-fd-muted-foreground"
                style={{ border: "none" }}
              >
                {sizes[sp as unknown as SizesKeys]}
              </td>
              <td style={{ border: "none" }}>
                <div
                  className="bg-fd-primary h-[20px]"
                  style={{
                    width: sizes[sp as unknown as SizesKeys],
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
