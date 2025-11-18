import React from "react";
import { TickCircleIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function ToastSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-40 bg-fd-background rounded-md p-2 mb-25 flex gap-2">
        <TickCircleIcon size={16} className="text-fd-muted-foreground/50" />
        <div className="flex-col !gap-2">
          <div className="w-15 h-2 bg-fd-muted-foreground/30 rounded-full mb-1"></div>
          <div className="w-30 h-2 bg-fd-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

