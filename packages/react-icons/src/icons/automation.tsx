import React from 'react';
import { IconProps } from '../types';

export const AutomationIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
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
        <g clipPath="url(#clip0_163_57)">
          <path
            d="M10.8433 19.819L15.7172 16.8476V10.6473"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6019 21.1002H28.6669V19.0392"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.9921 25.562H19.9311V27.6243"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.6669 24.8862C28.4508 25.5435 28.0858 26.1421 27.6004 26.6352C26.5604 27.674 25.0917 28.162 23.6368 27.9522C22.1819 27.7423 20.911 26.8591 20.207 25.5687"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.3923 21.0988C27.6883 19.8084 26.4173 18.9252 24.9625 18.7154C23.5076 18.5055 22.0389 18.9935 20.9989 20.0323C20.5112 20.5251 20.1435 21.1236 19.9244 21.7814"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.3359 27.9963C8.88231 27.9986 3.58304 22.8956 3.34201 16.4465C3.10099 9.9974 8.00457 4.51302 14.4403 4.03364C20.8761 3.55427 26.5381 8.25167 27.2551 14.6653"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_163_57">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
