import React from 'react';
import { IconProps } from '../types';

export const BellIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6843 24.2141L12.8429 24.6741C13.3923 26.2701 15.1309 27.1181 16.7269 26.5687C18.3229 26.0194 19.1709 24.2807 18.6216 22.6847L18.4629 22.2247"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5723 5.80606L14.1736 4.64873C13.7336 3.37273 12.3429 2.69406 11.0656 3.13406C9.78959 3.57406 9.11093 4.96473 9.5496 6.24073L9.94826 7.39806"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33093 14.5554C6.24426 11.4007 7.9216 7.96208 11.0763 6.87541L13.3616 6.08874C16.5163 5.00208 19.9549 6.67941 21.0416 9.83408L22.2549 13.3594C22.4856 14.0287 22.9723 14.5781 23.6069 14.8874L24.6936 15.4167C25.3296 15.7274 25.8163 16.2767 26.0456 16.9447C26.4989 18.2607 25.7989 19.6954 24.4829 20.1487L10.9696 24.8021C9.6536 25.2554 8.21893 24.5554 7.7656 23.2394C7.53493 22.5701 7.58026 21.8381 7.8896 21.2021L8.41893 20.1154C8.7296 19.4794 8.7736 18.7474 8.54293 18.0781L7.33093 14.5554V14.5554Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
