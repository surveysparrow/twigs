import React from "react";
import { IconProps } from "../types";

export const PlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        <path d="M24 16H8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 8V24" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    )
  }
);