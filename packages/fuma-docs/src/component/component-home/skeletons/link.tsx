import React from "react";
import { ArrowUpIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function LinkSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-25 h-10 bg-fd-background rounded-sm m-1 flex items-center justify-center">
        <div className="w-15 h-3 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        <ArrowUpIcon
          size={16}
          className="text-fd-muted-foreground/50 rotate-45"
        />
      </div>
    </div>
  );
}
