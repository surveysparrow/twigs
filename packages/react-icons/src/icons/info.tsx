import React from "react";
import { CreateIcon } from '../create-icon';
import { IconProps } from "../types";

export const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...rest }, ref) => {
    return (
      <CreateIcon
        {...rest}
        ref={ref}
      >
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.6667 20.6667H17.7458" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.212 20.6667V15H14.6786" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15.65" cy="11.25" r="1.25" fill={color} />
      </CreateIcon>
    )
  }
);