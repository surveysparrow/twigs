import React from "react";
import { previewStyle } from "./preview-style";

export function TableSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-60  bg-fd-background rounded-md p-2 flex items-center flex-col">
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
          <div className="w-15 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
          <div className="w-25 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-15 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-15 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-15 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
        </div>
      </div>
    </div>
  );
}
