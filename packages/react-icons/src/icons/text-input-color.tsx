import React from 'react';
import { IconProps } from '../types';

export const TextInputColorIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M12.8496 4L10.4936 5L8.13763 4"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8496 23.1582L10.4936 22.1582L8.13763 23.1582"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.9755 8.57907C26.5277 8.57907 26.9755 9.02679 26.9755 9.57907L26.9755 17.4449C26.9755 17.9972 26.5277 18.4449 25.9755 18.4449L5 18.4449C4.44772 18.4449 4 17.9972 4 17.4449L4 9.57907C4 9.02679 4.44772 8.57907 5 8.57907L25.9755 8.57907Z"
          fill="#CEE7EA"
          stroke="#4A9CA6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.4937 22.0791L10.4937 5.07907"
          stroke="#4A9CA6"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
