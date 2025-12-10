import React from "react";
import { previewStyle } from "./preview-style";

export function BoxSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="h-20 w-30 bg-fd-background rounded-md p-2 border border-fd-border border-dashed"></div>
    </div>
  );
}
