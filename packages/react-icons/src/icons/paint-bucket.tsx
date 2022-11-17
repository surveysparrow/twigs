import React from 'react';
import { IconProps } from '../types';

export const PaintBucketIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.67736 21.8907L4.68802 16.9013C3.58536 15.7987 3.58536 14.012 4.68802 12.9093L12.2 5.39734L21.1814 14.3787L13.6694 21.8907C12.5667 22.992 10.7787 22.992 9.67736 21.8907V21.8907Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 18.1416C25.0163 18.1609 25.0329 18.1807 25.0497 18.2008C25.4157 18.6385 25.9023 19.2474 26.3872 19.9346C26.8738 20.6243 27.3485 21.3786 27.6989 22.108C28.0561 22.8516 28.25 23.5005 28.25 23.9983C28.25 25.7854 26.7849 27.25 25 27.25C23.2148 27.25 21.75 25.7852 21.75 24.0002C21.75 23.5018 21.9439 22.8526 22.3011 22.1087C22.6515 21.379 23.1262 20.6246 23.6128 19.9348C24.0978 19.2474 24.5843 18.6385 24.9503 18.2008C24.9672 18.1807 24.9837 18.1609 25 18.1416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2 5.40001L10.7467 3.92001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1867 14.3734H3.90668"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.56 28.5867H16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
