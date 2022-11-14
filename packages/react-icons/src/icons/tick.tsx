import React from "react";
import { CreateIcon } from '../create-icon';
import { IconProps } from "../types";

export const TickIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <CreateIcon
        {...rest}
        ref={ref}
      >
        <path d="M26.6667 8.66667L12 23.3333L5.33334 16.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </CreateIcon>
    )
  }
);