import React from "react";
import { previewStyle } from "./preview-style";

export function CircleLoaderSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-full p-2 flex items-center justify-center">
        <div className="w-10 h-10 bg-fd-muted-foreground/30 rounded-full p-1 flex items-center justify-center">
          <div className="w-8 h-8 bg-fd-background rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

