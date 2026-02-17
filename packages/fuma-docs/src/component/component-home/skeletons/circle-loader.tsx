import React from "react";
import { previewStyle } from "./preview-style";

export function CircleLoaderSkeleton() {
  const circumference = 2 * Math.PI * 5;
  const arcLength = circumference / 4;

  return (
    <div style={previewStyle}>
      <div className="bg-fd-background rounded-full p-2 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center relative text-fd-muted-foreground">
          <svg
            width="40"
            height="40"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g>
              <circle
                cx="6"
                cy="6"
                r="5"
                strokeWidth="1.5"
                className="stroke-fd-muted-foreground/10"
                fill="none"
              />
            </g>
            <g>
              <circle
                cx="6"
                cy="6"
                r="5"
                strokeWidth="1.5"
                className="stroke-fd-muted-foreground/30 stroke-rounded-full"
                fill="none"
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeDashoffset={circumference * 0.75}
                transform="rotate(90 6 6)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
