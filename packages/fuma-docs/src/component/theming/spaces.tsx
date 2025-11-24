"use client";
import { defaultTheme, toast, Toastr } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import React from "react";

const { space } = defaultTheme;

type SpaceKeys = keyof typeof space;

export function AllSpaces() {
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
            <th className="text-left" style={{ width: "200px", border: "none" }}>Key</th>
            <th className="text-left" style={{ width: "200px", border: "none" }}>Value</th>
            <th className="text-left" style={{ width: "200px", border: "none" }}>px Value</th>
            <th className="text-left" style={{ width: "200px", border: "none" }}>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(space).map((sp) => (
            <tr
              key={`space-${sp}`}
              className="cursor-pointer hover:bg-fd-muted/50 transition-colors"
              onClick={() => handleCopy(sp)}
              style={{ border: "none" }}
            >
              <td className="!text-fd-muted-foreground" style={{ border: "none" }}>{sp}</td>
              <td className="!text-fd-muted-foreground" style={{ border: "none" }}>
                {space[sp as unknown as SpaceKeys]}
              </td>
              <td className="!text-fd-muted-foreground" style={{ border: "none" }}>
                {remToPix(space[sp as unknown as SpaceKeys])}px
              </td>
              <td style={{ border: "none" }}>
                <div
                  className="bg-fd-primary h-[20px]"
                  style={{
                    width: space[sp as unknown as SpaceKeys],
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
