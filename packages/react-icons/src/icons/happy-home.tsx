import React from 'react';
import { IconProps } from '../types';

export const HappyHomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.288 27.812C26.4973 27.812 28.288 26.0213 28.288 23.812V14.0347C28.288 12.8 27.7187 11.6347 26.744 10.8773L18.744 4.65467C17.3 3.53067 15.2773 3.53067 13.832 4.65467L5.83199 10.8773C4.85733 11.6347 4.28799 12.8 4.28799 14.0347V23.812C4.28799 26.0213 6.07866 27.812 8.28799 27.812"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.288 27.812H8.28799"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.6213 14.4787V15.812"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9547 14.4787V15.812"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9547 20.7293C20.9547 20.7293 19.2053 22.4787 16.288 22.4787C13.3707 22.4787 11.6213 20.7293 11.6213 20.7293"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
