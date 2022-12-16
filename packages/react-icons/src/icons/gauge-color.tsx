import React from 'react';
import { IconProps } from '../types';

export const GaugeColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          fill="#CEE7EA"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7801 11.9551L13.4435 16.7493C13.6262 17.0783 13.8829 17.3603 14.1931 17.5732C14.5034 17.7861 14.8588 17.9241 15.2315 17.9763C15.6041 18.0285 15.9838 17.9934 16.3406 17.874C16.6974 17.7545 17.0216 17.5538 17.2877 17.2877C17.5538 17.0217 17.7544 16.6975 17.8739 16.3406C17.9934 15.9838 18.0284 15.6042 17.9762 15.2315C17.924 14.8589 17.7861 14.5034 17.5731 14.1932C17.3602 13.8829 17.0782 13.6263 16.7493 13.4436L11.9551 10.7801C11.7909 10.6889 11.6015 10.6536 11.4156 10.6797C11.2296 10.7057 11.0572 10.7916 10.9244 10.9244C10.7916 11.0572 10.7057 11.2296 10.6797 11.4156C10.6536 11.6015 10.6889 11.7909 10.7801 11.9551V11.9551Z"
          fill="white"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
