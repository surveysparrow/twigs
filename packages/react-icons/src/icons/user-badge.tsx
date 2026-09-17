import React from 'react';
import { IconProps } from '../types';

export const UserBadgeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_330)">
          <path
            d="M12.6666 5.33268H7.99992C7.29267 5.33268 6.6144 5.61363 6.1143 6.11373C5.6142 6.61383 5.33325 7.2921 5.33325 7.99935V25.3327C5.33325 26.0399 5.6142 26.7182 6.1143 27.2183C6.6144 27.7184 7.29267 27.9993 7.99992 27.9993H23.9999C24.7072 27.9993 25.3854 27.7184 25.8855 27.2183C26.3856 26.7182 26.6666 26.0399 26.6666 25.3327V7.99935C26.6666 7.2921 26.3856 6.61383 25.8855 6.11373C25.3854 5.61363 24.7072 5.33268 23.9999 5.33268H19.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6666 14.666C18.6666 16.1388 17.4727 17.3327 15.9999 17.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6666 14.666C18.6666 13.1933 17.4727 11.9993 15.9999 11.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6666 14.666C18.6666 13.9588 18.3856 13.2805 17.8855 12.7804C17.3854 12.2803 16.7072 11.9993 15.9999 11.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6666 14.666C18.6666 15.3733 18.3856 16.0515 17.8855 16.5516C17.3854 17.0517 16.7072 17.3327 15.9999 17.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9999 17.3327C14.5272 17.3327 13.3333 16.1388 13.3333 14.666C13.3333 13.1933 14.5272 11.9993 15.9999 11.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.6666 23.3327C20.6666 22.6254 20.3856 21.9472 19.8855 21.4471C19.3854 20.947 18.7072 20.666 17.9999 20.666H13.9999C13.2927 20.666 12.6144 20.947 12.1143 21.4471C11.6142 21.9472 11.3333 22.6254 11.3333 23.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.9999 2.66602H17.9999C18.3535 2.66602 18.6927 2.80649 18.9427 3.05654C19.1928 3.30659 19.3333 3.64573 19.3333 3.99935V7.99935H12.6666V3.99935C12.6666 3.64573 12.8071 3.30659 13.0571 3.05654C13.3072 2.80649 13.6463 2.66602 13.9999 2.66602Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_330">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
