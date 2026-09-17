import React from 'react';
import { IconProps } from '../types';

export const StethoscopeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_274)">
          <path
            d="M13.3334 5.33398H14.6667C15.0203 5.33398 15.3594 5.47446 15.6095 5.72451C15.8595 5.97456 16 6.3137 16 6.66732V12.0007C16 12.8761 15.8276 13.743 15.4926 14.5519C15.1575 15.3607 14.6665 16.0956 14.0474 16.7147C13.4283 17.3338 12.6934 17.8248 11.8846 18.1598C11.0757 18.4949 10.2088 18.6673 9.33335 18.6673"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.33335 18.6673C7.56524 18.6673 5.86955 17.9649 4.61931 16.7147C3.36907 15.4645 2.66669 13.7688 2.66669 12.0007V6.66732C2.66669 6.3137 2.80716 5.97456 3.05721 5.72451C3.30726 5.47446 3.6464 5.33398 4.00002 5.33398H5.33335"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.33335 18.6673V22.6673C9.33335 24.0818 9.89526 25.4384 10.8955 26.4386C11.8956 27.4387 13.2522 28.0007 14.6667 28.0007C16.0812 28.0007 17.4377 27.4387 18.4379 26.4386C19.4381 25.4384 20 24.0818 20 22.6673V14.0007C20 13.1166 20.3512 12.2687 20.9763 11.6436C21.6015 11.0185 22.4493 10.6673 23.3334 10.6673C24.2174 10.6673 25.0653 11.0185 25.6904 11.6436C26.3155 12.2687 26.6667 13.1166 26.6667 14.0007V20.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6667 20.0007C25.1939 20.0007 24 21.1946 24 22.6673C24 24.1401 25.1939 25.334 26.6667 25.334C28.1394 25.334 29.3334 24.1401 29.3334 22.6673C29.3334 21.1946 28.1394 20.0007 26.6667 20.0007Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_274">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
