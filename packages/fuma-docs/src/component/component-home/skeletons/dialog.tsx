import React from "react";
import { previewStyle } from "./preview-style";

export function DialogSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-50 flex-col gap-2 p-2 rounded-lg bg-fd-background">
        <div className="!m-0 pb-2 border-b border-fd-border">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full my-1"></div>
        </div>
        <div className="flex gap-2 align-center mt-1">
          <div className="w-10 h-2 bg-fd-secondary rounded-full my-1"></div>
          <div className="w-40 h-2 bg-fd-secondary rounded-full my-1"></div>
        </div>
        <div className="flex gap-2 align-center mt-1">
          <div className="w-30 h-2 bg-fd-secondary rounded-full my-1"></div>
          <div className="w-40 h-2 bg-fd-secondary rounded-full my-1"></div>
        </div>
        <div className="flex gap-2 align-center mt-1">
          <div className="w-20 h-2 bg-fd-secondary rounded-full my-1"></div>
          <div className="w-40 h-2 bg-fd-secondary rounded-full my-1"></div>
        </div>
        <div className="flex flex gap-2 mt-2">
          <div className="w-5 h-2 bg-fd-muted-foreground/50 rounded-full mb-2"></div>
          <div className="w-5 h-2 bg-fd-muted-foreground/30 rounded-full mb-2"></div>
        </div>
      </div>
    </div>
  );
}
