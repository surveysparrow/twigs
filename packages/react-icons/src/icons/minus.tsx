import React from "react";
import { CreateIcon } from '../create-icon';
import { IconProps } from "../types";

export const MinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <CreateIcon
        {...rest}
        ref={ref}
      >
        <path d="M24 16H8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </CreateIcon>
    )
  }
);