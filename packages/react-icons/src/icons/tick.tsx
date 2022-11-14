import React from "react";
import { IconProps } from "../types";

export const TickIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 32, ...rest }, ref) => {
    return (
      <svg
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        <path d="M26.6667 8.66667L12 23.3333L5.33334 16.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
);