import React from "react";
import { previewStyle } from "./preview-style";

export function FlexSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="flex gap-2">
        <div className="w-10 h-10 bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="w-10 h-10 bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="w-10 h-10 bg-fd-background rounded-md border border-fd-border border-dashed"></div>
      </div>
    </div>
  );
}
