import React from "react";
import { SearchIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function InputSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-sm m-1 p-1">
        <div className="w-40 h-6 bg-fd-background !rounded-sm m-1 border flex items-center">
          <SearchIcon
            size={16}
            strokeWidth={0.5}
            className="text-fd-muted-foreground/50 ml-1"
          />
          <div className="w-20 h-1 bg-fd-muted-foreground/30 rounded-full m-1"></div>
        </div>
      </div>
    </div>
  );
}
