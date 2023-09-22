import React from 'react';
import { IconProps } from '../types';

export const Microphone = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M27.844 9.45601C27.022 5.70479 23.3147 3.33019 19.5635 4.15219C16.589 4.804 14.3846 7.31541 14.124 10.3493C14.1005 10.7325 14.2468 11.1065 14.524 11.372L20.6293 17.4773C20.8943 17.7545 21.268 17.9008 21.6507 17.8773C25.4793 17.5437 28.3126 14.1694 27.9789 10.3408C27.953 10.0433 27.9079 9.74773 27.844 9.45601Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.6453 17.4974L9.15999 26.1814C8.52857 26.6566 7.64375 26.5952 7.08399 26.0374L5.96399 24.9187C5.40519 24.3586 5.34433 23.4725 5.82132 22.8414L14.504 11.356"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.52 25.48L4 28"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
