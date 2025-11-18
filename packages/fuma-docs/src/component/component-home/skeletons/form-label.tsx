import React from "react";
import { InfoIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function FormLabelSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-sm m-1 p-1">
        <div className="flex items-center gap-1">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
          <InfoIcon
            size={11}
            strokeWidth={1}
            className="text-fd-muted-foreground/50"
          />
        </div>
        <div className="w-30 h-5 bg-fd-background !rounded-sm m-1 border"></div>
      </div>
    </div>
  );
}

