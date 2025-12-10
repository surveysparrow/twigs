import React from "react";
import { CloseCircleIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function DrawerSkeleton() {
  return (
    <div style={previewStyle} className="!justify-end">
      <div className="w-30 h-40 bg-fd-background rounded-tr-lg p-2">
        <div className="flex flex justify-between gap-2 mb-2 align-center">
          <div className="w-10 h-2 bg-fd-muted-foreground/30 rounded-full mt-1"></div>
          <CloseCircleIcon
            size={16}
            style={{ color: "var(--twigs-colors-neutral300)" }}
            strokeWidth={0.8}
          />
        </div>
        <div className="flex flex gap-2 mb-2 align-center mb-2">
          <div className="w-30 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-60 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex flex gap-2 mb-2 align-center mb-2">
          <div className="w-20 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-60 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex flex gap-2 mb-2 align-center mb-2">
          <div className="w-40 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-60 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex flex gap-2 mb-2 align-center mb-2">
          <div className="w-20 h-2 bg-fd-secondary rounded-full"></div>
          <div className="w-70 h-2 bg-fd-secondary rounded-full"></div>
        </div>
        <div className="flex flex gap-2 mt-13 ml-15">
          <div className="w-5 h-2 bg-fd-muted-foreground/50 rounded-full mb-2"></div>
          <div className="w-5 h-2 bg-fd-muted-foreground/30 rounded-full mb-2"></div>
        </div>
      </div>
    </div>
  );
}
