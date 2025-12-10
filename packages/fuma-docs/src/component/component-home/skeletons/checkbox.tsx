import React from "react";
import { previewStyle } from "./preview-style";

export function CheckboxSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-35 bg-fd-background rounded-sm m-1 flex-col items-center justify-center p-1">
        <div className="w-10 h-2 bg-fd-secondary rounded-full m-1 mb-2"></div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-fd-background m-1 flex items-center justify-center border-1 !border-fd-muted-foreground/50"></div>
          <div className="w-25 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-2 h-2 bg-fd-background m-1 flex items-center justify-center border-1 !border-fd-muted-foreground/50"></div>
          <div className="w-25 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        </div>
      </div>
    </div>
  );
}
