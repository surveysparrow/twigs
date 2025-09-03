"use client";
import React from "react";
import { defaultTheme as theme, Button } from "@sparrowengg/twigs-react";

export const CustomizedButton = () => {
  return (
    <Button
      css={{
        backgroundColor: "$positive500",
        color: "$white900",
        borderRadius: "$pill",
        width: "200px",
        padding: "$6 $10",
        cursor: "pointer",
        fontSize: "$md",
        "&:hover": {
          backgroundColor: "$positive600",
        },
        "&:active": {
          backgroundColor: "$positive900",
        },
      }}
    >
      Submit
    </Button>
  );
};

export function DefaultThemeContainer() {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <pre className="text-sm text-fd-card-foreground font-mono whitespace-pre-wrap">
        {JSON.stringify(theme, undefined, 2)}
      </pre>
    </div>
  );
}

