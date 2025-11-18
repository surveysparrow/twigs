import React from "react";
import { InfoIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function AlertSkeleton() {
  return (
    <div style={previewStyle} className="flex-col gap-2">
      <div className="w-35 h-7 bg-fd-background rounded-md p-2 flex items-center justify-between">
        <InfoIcon size={16} className="text-fd-muted-foreground/50" />
        <div className="w-25 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
      </div>
    </div>
  );
}

