import React from "react";
import { ImageIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function AvatarSkeleton() {
  return (
    <div style={previewStyle} className="gap-2">
      <div className="w-12 h-12 bg-fd-background rounded-full flex items-center justify-center">
        <ImageIcon size={24} className="text-fd-muted-foreground/50" />
      </div>
      <div className="w-12 h-12 bg-fd-background rounded-full relative flex items-center justify-center">
        JD
        <div className="w-4 h-4 bg-fd-border rounded-full absolute left-8 bottom-9"></div>
      </div>
    </div>
  );
}
