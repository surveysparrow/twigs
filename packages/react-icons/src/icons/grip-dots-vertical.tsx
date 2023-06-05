import React from 'react';
import { IconProps } from '../types';

export const GripDotsVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        ref={ref}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <rect x="11.0829" y="8.5" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
        <rect x="17.268" y="8.5" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
        <rect x="11.0829" y="14.6847" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
        <rect x="17.268" y="14.6848" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
        <rect x="11.0829" y="20.8692" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
        <rect x="17.268" y="20.8691" width="3.71077" height="3.71077" rx="1.85538" fill={color}/>
      </svg>
    );
  }
);
