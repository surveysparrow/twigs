import React from "react";
import { previewStyle } from "./preview-style";

export function SeparatorSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex">
        <div className="w-10 h-10 bg-fd-secondary rounded-sm m-1 mb-2"></div>
        <div className="w-1 h-10 bg-fd-muted-foreground/30 rounded-sm m-1 mb-2"></div>
        <div className="w-10 h-10 bg-fd-secondary rounded-sm m-1 mb-2"></div>
        <div className="w-1 h-10 bg-fd-muted-foreground/30 rounded-sm m-1 mb-2"></div>
        <div className="w-10 h-10 bg-fd-secondary rounded-sm m-1 mb-2"></div>
      </div>
    </div>
  );
}
