import React from "react";
import { previewStyle } from "./preview-style";

export function DefaultSkeleton({ title }: { title: string }) {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex items-center justify-center">
        {title}
      </div>
    </div>
  );
}
