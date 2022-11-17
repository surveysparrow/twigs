import React from 'react';
import { IconProps } from '../types';

export const DollarIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 6V3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24.7266V27.7266"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7953 22.1182C11.1732 22.7674 11.7136 23.3071 12.3634 23.6843C13.0133 24.0616 13.7502 24.2633 14.5017 24.2697H17.7897C18.8175 24.2689 19.8096 23.8928 20.5792 23.212C21.3488 22.5313 21.8429 21.593 21.9684 20.5737C22.094 19.5544 21.8424 18.5244 21.261 17.6775C20.6795 16.8307 19.8084 16.2253 18.8115 15.9755L13.1885 14.564C12.1916 14.3142 11.3205 13.7088 10.739 12.862C10.1576 12.0151 9.90601 10.9851 10.0316 9.96575C10.1571 8.94645 10.6512 8.00815 11.4208 7.32744C12.1904 6.64674 13.1825 6.27057 14.2103 6.26974H17.4983C18.2484 6.27494 18.9842 6.47509 19.6334 6.85051C20.2827 7.22593 20.823 7.76369 21.2012 8.41095"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
