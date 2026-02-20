import React from "react";
import { AlarmClockIcon } from "@sparrowengg/twigs-react-icons";
import { previewStyle } from "./preview-style";

export function TimePickerSkeleton() {
  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-md p-2 flex items-center justify-center gap-2">
        <div className="w-5 h-5 bg-fd-secondary rounded-sm"></div>
        <div className="w-0.5 h-5 bg-fd-muted-foreground/30 rounded-sm rotate-20"></div>
        <div className="w-5 h-5 bg-fd-secondary rounded-sm"></div>
        <div className="w-0.5 h-5 bg-fd-muted-foreground/30 rounded-sm rotate-20"></div>
        <div className="w-5 h-5 bg-fd-secondary rounded-sm"></div>
        <AlarmClockIcon size={20} className="text-fd-muted-foreground/50" />
      </div>
    </div>
  );
}
