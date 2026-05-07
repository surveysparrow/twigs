import React from 'react';
import { IconProps } from '../types';

export const FilePdfIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1397_552)">
          <path
            d="M25.3307 10.6667H19.9974C19.2614 10.6667 18.6641 10.0693 18.6641 9.33333V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.7852 22.0651H18.2118"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.986 20.8928L16.9727 17.7461"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.0117 20.8928L15.0251 17.7461"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.5494 8.552L20.7787 4.78133C20.2787 4.28133 19.6001 4 18.8934 4H9.33073C7.8574 4 6.66406 5.19333 6.66406 6.66667V25.3333C6.66406 26.8067 7.8574 28 9.33073 28H22.6641C24.1374 28 25.3307 26.8067 25.3307 25.3333V10.4373C25.3307 9.73067 25.0494 9.052 24.5494 8.552Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.4453 17.0026V15.4453C14.4453 15.016 14.7933 14.668 15.2226 14.668H16.78C17.2093 14.668 17.5573 15.016 17.5573 15.4453V17.0026C17.5573 17.432 17.2093 17.78 16.78 17.78H15.2226C14.7933 17.7786 14.4453 17.4306 14.4453 17.0026Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.668 23.2214V21.6641C10.668 21.2347 11.016 20.8867 11.4453 20.8867H13.0026C13.432 20.8867 13.78 21.2347 13.78 21.6641V23.2214C13.78 23.6507 13.432 23.9987 13.0026 23.9987H11.4453C11.016 23.9987 10.668 23.6507 10.668 23.2214Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.2227 23.2214V21.6641C18.2227 21.2347 18.5707 20.8867 19 20.8867H20.5573C20.9867 20.8867 21.3347 21.2347 21.3347 21.6641V23.2214C21.3333 23.6507 20.9853 23.9987 20.556 23.9987H18.9987C18.5707 23.9987 18.2227 23.6507 18.2227 23.2214Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1397_552">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
