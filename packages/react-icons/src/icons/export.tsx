import React from 'react';
import { IconProps } from '../types';

export const ExportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.2745 16.3137H9.72548C6.9534 16.3137 4.70587 18.5613 4.70587 21.3333C4.70587 24.1054 6.9534 26.3529 9.72548 26.3529H22.2745C25.0466 26.3529 27.2941 24.1054 27.2941 21.3333C27.2941 18.5613 25.0466 16.3137 22.2745 16.3137Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7451 21.3333H22.2745"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.76939 21.2894C9.79449 21.3145 9.79449 21.3534 9.76939 21.3785C9.74429 21.4036 9.70539 21.4036 9.68029 21.3785C9.65519 21.3534 9.65519 21.3145 9.68029 21.2894C9.70539 21.2643 9.74555 21.2643 9.76939 21.2894Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2353 7.52942L16 3.76471L19.7647 7.52942"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12.549V3.76471"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
