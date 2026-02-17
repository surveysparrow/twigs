import React from "react";
import { previewStyle } from "./preview-style";

export function GridSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="grid grid-cols-3 gap-2 w-30 h-30">
        <div className="col-span-2 bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="row-span-2 bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="bg-fd-background rounded-md border border-fd-border border-dashed"></div>
        <div className="bg-fd-background rounded-md border border-fd-border border-dashed"></div>
      </div>
    </div>
  );
}
