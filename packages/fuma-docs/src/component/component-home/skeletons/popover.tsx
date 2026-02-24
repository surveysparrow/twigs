import React from "react";
import { ChevronDownFillIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function PopoverSkeleton() {
  return (
    <div style={previewStyle} className="flex-col gap-0">
      <div className="w-15 h-4 bg-fd-background rounded-sm m-1 flex items-center justify-center relative">
        <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        <ChevronDownFillIcon
          size={15}
          className="text-fd-muted-foreground/50 absolute top-2.5"
        />
      </div>
      <div className="w-30 bg-fd-background rounded-lg p-1 ml-14 mt-[1px]">
        <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        <div className="w-20 h-2 bg-fd-secondary rounded-full m-1 mt-2"></div>
        <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
        <div className="w-20 h-2 bg-fd-secondary rounded-full m-1"></div>
      </div>
    </div>
  );
}
