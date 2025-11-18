import React from "react";
import { HomeIcon, LightBulbIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function IconButtonSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center mr-2">
        <HomeIcon className="text-fd-muted-foreground/50" />
      </div>
      <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center mr-2">
        <LightBulbIcon className="text-fd-muted-foreground/50" />
      </div>
      <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
        <div className="w-8 h-2 bg-fd-muted-foreground/30 rounded-full"></div>
      </div>
    </div>
  );
}

