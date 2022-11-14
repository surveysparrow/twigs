import React from "react";
import { IconProps } from "../types";

export const WarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        <path d="M17.3333 10.6667L13.3333 14.6667L18.6666 17.3333L14.6666 21.3333" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.06667 26.4L5.46667 22.8C4.53333 21.8667 4 20.5333 4 19.0667V12.9333C4 11.4667 4.53333 10.1333 5.6 9.2L9.2 5.6C10.1333 4.53333 11.4667 4 12.9333 4H19.2C20.6667 4 22 4.53333 22.9333 5.6L26.5333 9.2C27.4667 10.1333 28 11.4667 28 12.9333V19.2C28 20.6667 27.4667 22 26.4 22.9333L22.8 26.5333C21.7333 27.6 20.4 28.1333 19.0667 28.1333H12.9333C11.4667 28 10.1333 27.4667 9.06667 26.4Z" stroke={color} stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
);