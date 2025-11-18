import React from "react";
import { ImageIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function ImageSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-40 h-20 bg-fd-background rounded-md p-2 flex items-center justify-center">
        <ImageIcon
          size={34}
          strokeWidth={1.5}
          className="text-fd-muted-foreground/50"
        />
      </div>
    </div>
  );
}

