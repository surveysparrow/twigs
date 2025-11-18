import React from "react";
import { previewStyle } from "./preview-style";

export function ButtonSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-25 h-10 bg-fd-background rounded-lg m-1 flex items-center justify-center">
        <div className="w-20 h-3 bg-fd-muted-foreground/30 rounded-full m-1"></div>
      </div>
    </div>
  );
}

