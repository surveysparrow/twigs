import React from "react";
import { previewStyle } from "./preview-style";

export function TabsSkeleton() {
  return (
    <div style={previewStyle} className="flex-col gap-2">
      <div className="bg-fd-background rounded-md p-1 flex items-center justify-center">
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
          <div className="w-12 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-10 h-2 bg-fd-secondary rounded-full m-1"></div>
        </div>
      </div>
      <div className="w-40 bg-fd-background rounded-md p-2">
        <div className="w-30 h-2 bg-fd-secondary rounded-full m-1 ml-2"></div>
        <div className="flex gap-2 align-center m-2">
          <div className="w-20 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-40 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex gap-2 align-center m-2 mb-0">
          <div className="w-40 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-60 h-2 bg-fd-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
