import React from "react";
import { previewStyle } from "./preview-style";

export function AlertDialogSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-45 flex-col gap-2 p-2 rounded-lg bg-fd-background">
        <div className="w-40 h-2 bg-fd-secondary rounded-full my-1 mb-2"></div>
        <div className="w-20 h-2 bg-fd-secondary rounded-full my-1"></div>
        <div className="flex flex gap-2 mt-2">
          <div className="w-5 h-2 bg-fd-muted-foreground/50 rounded-full mb-2"></div>
          <div className="w-5 h-2 bg-fd-muted-foreground/30 rounded-full mb-2"></div>
        </div>
      </div>
    </div>
  );
}

