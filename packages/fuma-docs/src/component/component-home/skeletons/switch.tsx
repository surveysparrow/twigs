import React from "react";
import { previewStyle } from "./preview-style";

export function SwitchSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-35 bg-fd-background rounded-sm m-1 flex items-center justify-between p-2">
        <div className="flex items-center w-10 h-5 bg-fd-muted-foreground/30 rounded-full">
          <div className="w-4 h-4 bg-fd-background m-1 ml-[2px] flex items-center justify-center border-1 !border-fd-muted-foreground/50 rounded-full"></div>
        </div>
        <div className="w-19 h-5 bg-fd-secondary rounded-full"></div>
      </div>
    </div>
  );
}

