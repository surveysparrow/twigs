import React from "react";
import { previewStyle } from "./preview-style";

export function LineLoaderSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex items-center justify-center">
        <div className="w-10 h-2 bg-fd-muted-foreground/10 rounded-full">
          <div className="w-4 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

