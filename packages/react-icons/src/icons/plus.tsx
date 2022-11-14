import React from "react";
import { IconProps } from "../types";

export const PlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M24 16H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8V24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
);