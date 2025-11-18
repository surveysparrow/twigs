import React from "react";
import { ChevronDownIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function SelectSkeleton() {
  return (
    <div style={previewStyle} className="flex-col gap-2">
      <div className="bg-fd-background rounded-md p-2">
        <div className="w-10 h-1 bg-fd-secondary rounded-full m-1 mb-2"></div>
        <div className="w-30 h-5 bg-fd-background rounded-md p-2 flex items-center justify-between border">
          <div className="w-30 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
          <ChevronDownIcon
            size={16}
            className="text-fd-muted-foreground/50"
          />
        </div>
      </div>
    </div>
  );
}

