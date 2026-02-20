import React from "react";
import { ChevronDownFillIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function TooltipSkeleton() {
  return (
    <div style={previewStyle} className="flex-col">
      <div className="w-15 h-5 bg-fd-background rounded-sm m-1 mb-0 flex items-center justify-center relative">
        <div className="w-10 h-2 bg-fd-secondary rounded-full m-1"></div>
        <ChevronDownFillIcon
          size={16}
          className="text-fd-muted-foreground/50 absolute top-3.5"
        />
      </div>
      <div className="w-25 h-10 bg-fd-background rounded-lg m-[6px] flex items-center justify-center">
        <div className="w-20 h-3 bg-fd-muted-foreground/30 rounded-full m-1"></div>
      </div>
    </div>
  );
}
