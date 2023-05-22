import React from 'react';
import { IconProps } from '../types';

export const UploadTwoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path d="M28 9.98989V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V9.98989C4 9.55383 4.05348 9.11942 4.15924 8.69637L4.82836 6.01991C4.9726 5.44296 5.30555 4.93078 5.7743 4.56479C6.24305 4.1988 6.82069 4 7.4154 4H24.5846C25.1793 4 25.7569 4.1988 26.2257 4.56479C26.6944 4.93078 27.0274 5.44296 27.1716 6.01991L27.8408 8.69637C27.9465 9.11942 28 9.55383 28 9.98989V9.98989Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.3334 18L16 14.6667L12.6667 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 22.6667V14.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.9581 9.33334H4.04193" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
);
