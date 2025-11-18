import React from "react";
import { ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function DropdownSkeleton() {
  return (
    <div style={{ ...previewStyle }} className="flex-col">
      <div className="w-15 h-5 bg-fd-background rounded-sm m-1 flex items-center justify-center">
        <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full m-1"></div>
      </div>
      <div className="flex gap-2">
        <div className="w-30 h-15 bg-fd-background rounded-lg ml-7">
          <div className="w-20 h-2 bg-fd-secondary rounded-full m-1 mt-2"></div>
          <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-20 h-2 bg-fd-secondary rounded-full m-1 mb-0"></div>
          <div className="flex items-center justify-center">
            <div className="w-25 h-2 bg-fd-secondary rounded-full m-1"></div>
            <ChevronRightIcon
              size={16}
              style={{ color: "var(--twigs-colors-neutral300)" }}
            />
          </div>
        </div>
        <div className="w-20 h-5 bg-fd-background rounded-sm mt-10">
          <div className="w-15 h-1 bg-fd-secondary rounded-full m-1"></div>
          <div className="w-15 h-1 bg-fd-secondary rounded-full m-1"></div>
        </div>
      </div>
    </div>
  );
}

