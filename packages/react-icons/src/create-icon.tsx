import React from "react";
import { IconProps } from "./types";

export const CreateIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 32, children, ...rest }, ref) => {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...rest}
        ref={ref}
      >
        {children}
      </svg>
    )
  });