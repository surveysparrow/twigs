import React from 'react';
import { IconProps } from '../types';

export const QuestionSetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.2667 13.3333H22.6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.48001 12.6733L10.6933 13.7666L13.16 11.54"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 28H10.6667L10.6533 27.9987C6.96001 27.9853 3.98668 25.012 3.98668 21.3187V21.3173V10.6507C3.97334 6.95732 6.96001 3.97066 10.64 3.97066H21.3067H21.2933C24.9733 3.95732 27.96 6.94399 27.96 10.624V14.624"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.48001 19.34L10.6933 20.4333L13.16 18.2067"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="1.2" />
        <path
          d="M24 18V24.5M24 24.5L26 29.5M24 24.5H30"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
