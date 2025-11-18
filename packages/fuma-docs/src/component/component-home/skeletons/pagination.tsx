import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function PaginationSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex items-center justify-center">
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <ChevronLeftIcon className="text-fd-muted-foreground/50" />
        </div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <div className="w-5 h-5 bg-fd-muted-foreground/30 rounded-md"></div>
        </div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <div className="w-5 h-5 bg-fd-secondary rounded-md"></div>
        </div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <div className="w-5 h-5 bg-fd-secondary rounded-md"></div>
        </div>
        <div className="w-10 h-10 bg-fd-background rounded-md p-2 flex items-center justify-center">
          <ChevronRightIcon className="text-fd-muted-foreground/50" />
        </div>
      </div>
    </div>
  );
}

