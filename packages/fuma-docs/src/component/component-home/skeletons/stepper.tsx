import React from "react";
import { TickIcon, ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function StepperSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex items-center justify-center">
        <div className="w-6 h-6 bg-fd-muted-foreground/30 rounded-md p-2 flex items-center justify-center">
          <TickIcon />
        </div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <ChevronRightIcon className="text-fd-muted-foreground/50" />
        </div>
        <div className="w-6 h-6 bg-fd-secondary rounded-md p-2 flex items-center justify-center"></div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <ChevronRightIcon className="text-fd-muted-foreground/50" />
        </div>
        <div className="w-6 h-6 bg-fd-secondary rounded-md p-2 flex items-center justify-center"></div>
      </div>
    </div>
  );
}
