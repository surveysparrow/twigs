import React from "react";
import { previewStyle } from "./preview-style";

export function CalendarSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex-col items-center justify-center gap-2 h-fit">
        <div className="flex items-center gap-2">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-muted-foreground/30 rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
          <div className="w-6 h-6 bg-fd-secondary rounded-sm p-2"></div>
        </div>
        <div className="w-8 h-2 bg-fd-muted-foreground/30 rounded-full mt-3"></div>
      </div>
    </div>
  );
}
