import React from "react";
import { previewStyle } from "./preview-style";

export function FormInputSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-sm m-1 p-1">
        <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1 mb-2"></div>
        <div className="w-30 h-5 bg-fd-background !rounded-sm m-1 border"></div>
        <div className="w-20 h-1 bg-fd-secondary rounded-full m-1 mt-2"></div>
      </div>
    </div>
  );
}

