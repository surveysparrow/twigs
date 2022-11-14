import React from "react";
import { CreateIcon } from '../create-icon';
import { IconProps } from "../types";

export const PlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <CreateIcon
        {...rest}
        ref={ref}
      >
        <path d="M24 16H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8V24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </CreateIcon>
    )
  }
);