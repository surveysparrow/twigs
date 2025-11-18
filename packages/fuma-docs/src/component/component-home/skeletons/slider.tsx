import React from "react";
import { previewStyle } from "./preview-style";

export function SliderSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-35 bg-fd-background rounded-sm m-1 flex-col items-center justify-between p-2">
        <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
        <div className="w-30 h-2 bg-fd-muted-foreground/10 rounded-full mt-2 flex items-center relative">
          <div className="w-15 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
          <div className="w-3 h-3 bg-fd-muted-foreground rounded-full absolute left-13"></div>
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <div className="w-5 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-5 h-2 bg-fd-secondary rounded-full mr-1"></div>
        </div>
      </div>
    </div>
  );
}

