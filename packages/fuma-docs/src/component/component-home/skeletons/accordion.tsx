import React from "react";
import { ChevronDownIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function AccordionSkeleton() {
  return (
    <div style={previewStyle} className="flex-col gap-2">
      <div className="w-40 h-5 bg-fd-background rounded-md p-2 flex items-center justify-between">
        <div className="w-30 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        <ChevronDownIcon
          size={16}
          className="text-fd-muted-foreground/50 rotate-180"
        />
      </div>
      <div className="w-40 bg-fd-background rounded-md p-2">
        <div className="w-30 h-2 bg-fd-secondary rounded-full m-1 ml-2"></div>
        <div className="flex gap-2 align-center m-2">
          <div className="w-20 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-40 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex gap-2 align-center m-2 mb-0">
          <div className="w-40 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-60 h-2 bg-fd-secondary rounded-full"></div>
        </div>
      </div>
      <div className="w-40 h-5 bg-fd-background rounded-md p-2 flex items-center justify-between">
        <div className="w-30 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        <ChevronDownIcon
          size={16}
          className="text-fd-muted-foreground/50 "
        />
      </div>
    </div>
  );
}

